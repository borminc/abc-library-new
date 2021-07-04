<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class MakeUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:demote';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make admin a user';

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
        $password = $this->secret('password');

        $credentials = [
            'email' => $email,
            'password' => $password
        ];

        if(!Auth::attempt($credentials)) {
            $this->error('Invalid credentials!');
        } else if (!Auth::user()->is_admin) {
             $this->error('This user is already a regular user (not admin)!');
        } else {
            $user = Auth::user();
            $user->is_admin = null;
            $user->save();
            $this->info($user->name . ' is now a regular user.');
        }
        return 0;
    }
}
