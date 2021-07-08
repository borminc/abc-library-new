<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
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
        
        SendVerificationEmail::dispatch(['user' => $user]);

        // $user->sendEmailVerificationNotification();
        // if (!str_contains($user->email, '@abc.com')) {
        //     // send email
        //     $details = [
        //         'subject' => 'Welcome to ABC Library',
        //         'title' => 'Welcome to ABC Library',
        //         'body' => 'Our entire library is now online! Browse through the wide variety of books on our website. Something looks interesting? Borrow it online, and come pick it up at the library! Easy as that!',
        //     ];
        //     Mail::to($user->email)->send(new UserMail($details));
        // }

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
            'title' => "Your account has been deleted.",
            'body' => "It's sad to see you go. Keep reading!",
        ];

        $user->delete();

        if (!str_contains($details['email'], '@abc.com')) {
            // send email
            SendEmail::dispatch($details);
        }

        return response()->json([
            'message' => 'Successfully deleted account: ' . $user->name . '.'
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
