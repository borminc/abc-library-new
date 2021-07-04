<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@abc.com',
            'phone' => '0966520212',
            'is_admin' => 1,
            'password' => '$2y$10$O5oT7Qfg7Pplbsg52N7DKOxXgUXKqSrDjglzfvmFdUc83V.8o7Wwa',

        ]);
    }
}
