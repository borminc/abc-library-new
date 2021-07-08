<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class VerifyEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:verify';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Verify user email';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $email = $this->ask('email');
        $user = User::where('email', $email)->first();

        if (!$user) {
            $this->error('Invalid email.');
        } else if (isset($user->email_verified_at)) {
            $this->error('User email is already verified.');
        } else {
            $user->markEmailAsVerified();
            $this->info($user->email . ' is marked as verified.');
        }
        return 0;
    }
}
