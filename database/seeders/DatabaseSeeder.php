<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@abc.com',
            'phone' => '011223344',
            'password' => Hash::make('thecooladminatABC'),
            'is_admin' => '1'
        ]);

        DB::table('library_rule_sets')->insert([
            'name' => 'default',
            'num_of_books_per_user' => '3',
            'duration_per_borrow' => '7',
            'cost_per_day_late_return' => '0.5'
        ]);
    }
}
