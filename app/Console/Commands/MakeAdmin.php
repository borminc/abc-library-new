<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class MakeAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:promote';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make user an admin';

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
        } else if (Auth::user()->is_admin === 1) {
             $this->error('This user is already an admin!');
        } else {
            $user = Auth::user();
            $user->is_admin = 1;
            $user->save();
            $this->info($user->name . ' is now admin.');
        }
        return 0;
    }
}
