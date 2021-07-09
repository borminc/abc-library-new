<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Jobs\SendEmail;

class VerificationController extends Controller
{
    public function verify($user_id, Request $request) {
        if (!$request->hasValidSignature()) {
            return response()->json(["message" => "Invalid/Expired url provided."], 401);
        }

        $user = User::findOrFail($user_id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();

            if (!str_contains($user->email, '@abc.com')) {
                // send welcome email
                $details = [
                    'email' => $user->email,
                    'subject' => 'Welcome to ABC Library',
                    'title' => 'You have successfully verified your account!',
                    'body' => 'ABC Library would like to welcome you to our platform. Have fun exploring the wide variety of books that we carry. Start reading!',
                ];
                SendEmail::dispatch($details);
            }
        }

        return redirect()->to('/verify-email-success');
    }

    public function resend() {
        if (auth()->user()->hasVerifiedEmail()) {
            return response()->json(["message" => "Email is already verified."], 400);
        }

        auth()->user()->sendEmailVerificationNotification();

        return response()->json(["message" => "Email verification link has been sent on your email address."]);
    }
}
