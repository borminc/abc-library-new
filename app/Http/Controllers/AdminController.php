<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Category;
use App\Models\Book;
use App\Models\Publisher;

class AdminController extends Controller
{
    public function admin(Request $request)
    {
        return response()->json($request->user());
    }

    public function getTotalInfo() {
        $res = [
            'total_books' => Book::all()->count(),
            'total_categories' => Category::all()->count(),
            'total_publishers' => Publisher::all()->count(),
            'total_users' => User::all()->count(),
            'total_borrowers' => User::has('books')->count()
        ];
        return response()->json($res);
    }

    public function getJustUserNames() {
        $users = User::select('id', 'name')->get();
        return $users;
    }
}
