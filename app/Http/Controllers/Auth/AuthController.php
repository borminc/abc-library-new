<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserMail;
use App\Jobs\SendVerificationEmail;
use App\Jobs\SendEmail;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function register(Request $request)
    {
        if (User::where('email', $request->email)->first()) {
            return response()->json([
                'error' => 'This email is already associated with an account. Log in instead.'
            ], 406);
        }

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'phone' => 'required',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password)
        ]);
        $user->save();
        
        if (!str_contains($user->email, '@abc.com')) {
            SendVerificationEmail::dispatch(['user' => $user]);
        }

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }
  
    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if(!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Invalid username or password.'
            ], 401);
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        $res = [
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'user' => auth()->user(),
            'verified' => !(auth()->user()->email_verified_at == null)
        ];
        
        if (auth()->user()->is_admin == 1) {
            $res['is_admin'] = true;
        }
        
        return response()->json($res);
    }
  
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
  
    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    public function username(Request $request)
    {
        return response()->json($request->user()->name);
    }

    public function deleteUser(Request $request) {
        // for admin to delete user
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        if (auth()->user()->id == $request->user_id) {
            return response()->json([
                'error' => 'Cannot delete your own account.'
            ], 406);
        }

        $user = User::findOrFail($request->user_id);

        if ($user->is_admin) {
            return response()->json([
                'error' => 'Cannot delete an admin account. Demote the account to a regular user first.'
            ], 406);
        }

        if (count($user->books) > 0) {
            return response()->json([
                'error' => 'Return all books before deleting account.'
            ], 406);
        }

        $details = [
            'email' => $user->email,
            'subject' => 'Account Deleted',
            'title' => "Your account has been deleted by the admin at ABC.",
            'body' => "It's sad to see you go. Keep reading!",
        ];

        foreach($user->tokens as $token) $token->revoke();
        $user->delete();

        if (!str_contains($details['email'], '@abc.com')) {
            SendEmail::dispatch($details);
        }

        return response()->json([
            'message' => 'Successfully deleted account: ' . $user->name . '.'
            ]);
    }

    public function deleteAccount(Request $request) {
        // for user to delete their own account
        $validator = Validator::make($request->all(), [
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        $user = auth()->user();

        if (!Hash::check($request->password, $user->password)) {
            $details = [
                'email' => $user->email,
                'subject' => 'Account deletion attempted',
                'title' => "Did you attempt to delete your account?",
                'body' => "This is a security notice. You (or someone) may have attempted to delete your account, but the credentials were incorrect. If you did this, you don't have to do anything. If you didn't, your account is at risk. We advice changing your password immediately. Contact ABC Library for further help.",
            ];

            if (!str_contains($details['email'], '@abc.com')) {
                SendEmail::dispatch($details);
            }

            return response()->json([
                'error' => 'Incorrect credentials.'
            ], 401);
        }

        if ($user->is_admin && User::where('is_admin', 1)->count() <= 1) {
            return response()->json([
                'error' => 'Cannot delete the only admin account.'
            ], 406);
        }

        if (count($user->books) > 0) {
            return response()->json([
                'error' => 'Return all books before deleting account.'
            ], 406);
        }

        foreach($user->tokens as $token) $token->revoke();
        
        $details = [
            'email' => $user->email,
            'subject' => 'Account Deleted',
            'title' => "Your account has been deleted.",
            'body' => "It's sad to see you go. Keep reading!",
        ];

        $user->delete();

        if (!str_contains($details['email'], '@abc.com')) {
            SendEmail::dispatch($details);
        }

        return response()->json([
            'message' => 'Successfully deleted account: ' . $user->name . '.'
            ]);
    }

    public function changePassword(Request $request) {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'new_password' => 'required',
            'confirm_password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        if ($request->new_password != $request->confirm_password) {
            return response()->json([
                'error' => 'Password does not match.'
            ], 400);
        }

        $user = auth()->user();

        if (!Hash::check($request->old_password, $user->password)) {
            $details = [
                'email' => $user->email,
                'subject' => 'Password change attempted',
                'title' => "Did you attempt to change your password?",
                'body' => "This is a security notice. You (or someone) may have attempted to change the password of your account, but the credentials were incorrect. If you did this, you don't have to do anything. If you didn't, your account is at risk. We advice changing your password immediately. Contact ABC Library for further help.",
            ];

            if (!str_contains($details['email'], '@abc.com')) {
                SendEmail::dispatch($details);
            }

            return response()->json([
                'error' => 'Incorrect credentials.'
            ], 401);
        }

        if (Hash::check($request->new_password, $user->password)) {
            return response()->json([
                'error' => 'New password cannot be the same as current password.'
            ], 406);
        }

        $user->password = bcrypt($request->new_password);
        $user->save();

        $details = [
            'email' => $user->email,
            'subject' => 'Password changed',
            'title' => "Your account password has been changed.",
            'body' => "If you have recently changed your password, you don't have to do anything. If you haven't, your account is at risk. Contact ABC Library as soon as possible.",
        ];

        if (!str_contains($details['email'], '@abc.com')) {
            SendEmail::dispatch($details);
        }

        return response()->json([
            'message' => 'Successfully changed password.'
            ]);
    }

    public function changeEmail(Request $request) {
        $user = auth()->user();
        
        if ($user->email == $request->email) {
            return response()->json([
                'error' => 'New email cannot be the same as the current email.'
            ], 401);
        }

        if (User::where('email', $request->email)->first()) {
            return response()->json([
                'error' => 'This email is already associated with an account.'
            ], 406);
        }

        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required|string|email|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        if (!Hash::check($request->password, $user->password)) {
            $details = [
                'email' => $user->email,
                'subject' => 'Email change attempted',
                'title' => "Did you attempt to change your email?",
                'body' => "This is a security notice. You (or someone) may have attempted to change the email of your account, but the credentials were incorrect. If you did this, you don't have to do anything. If you didn't, your account is at risk. We advice changing your password immediately. Contact ABC Library for further help.",
            ];

            if (!str_contains($details['email'], '@abc.com')) {
                SendEmail::dispatch($details);
            }

            return response()->json([
                'error' => 'Incorrect credentials.'
            ], 401);
        }

        $old_email = $user->email;
        $user->email = $request->email;
        $user->email_verified_at = null;
        $user->save();

        if (!str_contains($user->email, '@abc.com')) {
            SendVerificationEmail::dispatch(['user' => $user]);
        }

        $details = [
            'email' => $old_email,
            'subject' => 'Email changed',
            'title' => "Your account email has been changed.",
            'body' => "This email will no longer be associated with ABC Library. The email for your account has been changed to " . $user->email . ". If you have recently changed your email, you don't have to do anything. If you haven't, your account is at risk. Contact ABC Library as soon as possible.",
        ];

        if (!str_contains($details['email'], '@abc.com')) {
            SendEmail::dispatch($details);
        }

        return response()->json([
            'message' => 'Successfully changed email.'
            ]);
    }

    public function search(Request $request) {
        $params = ['name', 'email', 'phone'];

        $by = $request->query('by');
        $value = $request->query('value');

        if (!($by && $value) || !in_array($by, $params)) {
            // invalid params
            return response()->json([
                'error' => 'Bad request'
            ], 400); 
        }
        return User::where($by, 'LIKE', '%'.$value.'%')->get(); 
    }
}
