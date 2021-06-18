<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


use App\Models\User;
use App\Models\Book;
use App\Models\LibraryRuleSet;

class BookUserController extends Controller
{

    public function __construct() {
        date_default_timezone_set('Asia/Bangkok');
    }

    public function getAllUsersBooks() {
        $users = User::all();
        $time_now = time();
        foreach ($users as $user) {
            $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;
            
            foreach ($user->books as $book) {
                // $book->pivot->return_time = time() - 2*24*3600; // for testing expired
                $days_late = ceil(($time_now - $book->pivot->return_time) / (24*3600));
                if ($days_late > 0) {
                    $book->expired = true;
                    $book->days_past_expired = $days_late;
                    $book->cost = $cost_per_day * $book->days_past_expired;
                } else {
                    $book->expired = false;
                    $book->cost = 0;
                }
                $book->borrow_date = date('d.m.y', $book->pivot->borrow_time);
                $book->return_date = date('d.m.y', $book->pivot->return_time);
            }
        }
        return $users;
    }

    public function getUserBooks() {
        $books = Auth::user()->books;
        $books->load('category');
        $time_now = time();
        $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;
        
        foreach ($books as $book) {
            // $book->pivot->return_time = time() - 2*24*3600; // for testing expired
            $days_late = ceil(($time_now - $book->pivot->return_time) / (24*3600));
            if ($days_late > 0) {
                $book->expired = true;
                $book->days_past_expired = $days_late;
                $book->cost = $cost_per_day * $book->days_past_expired;
            } else {
                 $book->expired = false;
                 $book->cost = 0;
            }
            $book->borrow_date = date('d.m.y', $book->pivot->borrow_time);
            $book->return_date = date('d.m.y', $book->pivot->return_time);
        }
        return $books;
    }

    public function borrow(Request $request) {
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        $duration = LibraryRuleSet::where('name', 'default')->first()->duration_per_borrow;
        $borrow_time = time();
        $return_time = $borrow_time + ($duration*24*3600);

        $book = Book::findOrFail($request->book_id);
        $user = Auth::user();

        if ($user->books->contains($book->id)) {
            // already borrowed
            return response()->json([
                    'error' => 'User has already borrowed this book.'
                ], 406);
        }

        $borrow_limit = LibraryRuleSet::where('name', 'default')->first()->num_of_books_per_user;
        if ($user->books()->get()->count() >= $borrow_limit) {
            // exceed borrowed books at a time
            return response()->json([
                    'error' => 'User has exceeded number of borrowed books.'
                ], 406);
        }

        if ($book->stock <= 0) {
            return response()->json([
                    'error' => 'This book is out of stock.'
                ], 400);
        }

        $user->books()->attach($request->book_id, [
            'borrow_time' => $borrow_time,
            'return_time' => $return_time
        ]);

        $book->stock = $book->stock - 1;
        $book->save();

        return response()->json([
            'message' => 'Successfully borrowed ' . $book->title . '!'
            ]); 
    }

    public function returnBook(Request $request) {
        $validator = Validator::make($request->all(), [
            'book_id' => 'required|integer',
            'user_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => 'Input is valid'
            ], 400);
        }

        $user = User::findOrFail($request->user_id);
        $book = Book::findOrFail($request->book_id);

        $found = false; // find if user has actually borrowed  this book

        foreach($user->books as $user_book) {
            if ($user_book->id == $book->id)
                $found = true;
        }

        if (!$found) {
            return response()->json([
                'error' => 'User did not borrow this book.'
            ], 400);
        }

        $user->books()->detach($book);
        $book->stock = $book->stock + 1;
        $book->save();
        
        return response()->json([
            'message' => 'Successfully returned ' . $book->title . '!'
            ]); 
    }

    public function getAllBooksUsers() {
        $books = Book::has('users')->get();
        $books->load('users');
        $time_now = time();

        foreach ($books as $book) {
            foreach($book->users as $user) {
                $user->borrow_date = date('d.m.y', $user->pivot->borrow_time);
                $user->return_date = date('d.m.y', $user->pivot->return_time);

                $days_late = ceil(($time_now - $user->pivot->return_time) / (24*3600));
                $user->expired = $days_late > 0;
                if ($user->expired){
                    $user->days_past_expired = $days_late;
                }
                    
            }
        }
        return $books;
    }

    public function getBooksLowStock() {
        $books = DB::table('books')->where('stock', '<', 3)->get();
        return $books;
    }
}
