<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use App\Jobs\SendEmail;

use App\Models\Log;
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
                $days_late = floor(($time_now - $book->pivot->return_time) / (24*3600));
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

    public function getAllBorrowersBooks() {
        $users = User::has('books')->get();
        $time_now = time();
        foreach ($users as $user) {
            $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;
            
            foreach ($user->books as $book) {
                $days_late = floor(($time_now - $book->pivot->return_time) / (24*3600));
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
        $books->load('publisher');
        $time_now = time();
        $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;
        
        foreach ($books as $book) {
            $days_late = floor(($time_now - $book->pivot->return_time) / (24*3600));
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

        foreach($user->books as $b) {
            // check if user is late to return any books
            $days_late = floor(($borrow_time - $b->pivot->return_time) / (24*3600));
            if ($days_late > 0) {
                return response()->json([
                    'error' => 'User must pay for late books before borrowing new books.'
                ], 406);
            }
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

        // can borrow
        $user->books()->attach($request->book_id, [
            'borrow_time' => $borrow_time,
            'return_time' => $return_time
        ]);

        $book->stock = $book->stock - 1;
        $book->borrow_times = $book->borrow_times + 1;
        $book->save();

        // create log
        $log = new Log();
        $log->title = 'Borrow';
        $log->description = $user->name . ' borrowed ' . $book->title . '.';
        $log->date_time = date('d.m.y h:m A', $borrow_time);
        $log->user_id = $user->id;
        $log->book_id = $book->id;
        $log->save();

        if (!str_contains($user->email, '@abc.com')) {
            // send email
            $details = [
                'email' => $user->email,
                'subject' => 'Book Borrowed',
                'title' => 'You have successfully borrowed a book!',
                'body' => 'Please pick it up on time. If the return date is past, whether you have picked it up or not, overdue charges will apply. Enjoy reading!',
                'book' => $book,
                'return_date' => date('d.m.y', $return_time),
                'ref' => $log->id
            ];
            // Mail::to($user->email)->send(new UserMail($details));
            SendEmail::dispatch($details);
        }

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
            if ($user_book->id == $book->id) {
                $found = true;
                $u_book = $user_book;
            }
        }

        if (!$found) {
            return response()->json([
                'error' => 'User did not borrow this book.'
            ], 400);
        }

        // calculate cost if any
        $time_now = time();
        $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;
        $days_late = floor(($time_now - $u_book->pivot->return_time) / (24*3600));
        if ($days_late > 0) $cost = $days_late * $cost_per_day;
        else $cost = null;
        $cost_description = ($cost == null ? '' : 'Late fee paid: $' . $cost . '. ');

        $user->books()->detach($book);
        $book->stock = $book->stock + 1;
        $book->save();

        // create log
        $log = new Log();
        $log->title = 'Return';
        $log->description = $user->name . ' returned ' . $book->title . '. ' . $cost_description;
        $log->date_time = date('d.m.y h:m A', time());
        $log->user_id = $user->id;
        $log->book_id = $book->id;
        $log->save();

        if (!str_contains($user->email, '@abc.com')) {
            // send email
            $details = [
                'email' => $user->email,
                'subject' => 'Book Returned',
                'title' => 'You have returned a book!',
                'body' => $cost_description . 'Hope you enjoyed reading!',
                'book' => $book,
                'ref' => $log->id
            ];
            SendEmail::dispatch($details);
            // Mail::to($user->email)->send(new UserMail($details));
        }
        
        return response()->json([
            'message' => 'Successfully returned ' . $book->title . '!'
            ]); 
    }

    public function returnLostBook(Request $request) {
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

        // create log
        $log = new Log();
        $log->title = 'Lost';
        $log->description = $user->name . ' lost ' . $book->title . '.';
        $log->date_time = date('d.m.y h:m A', time());
        $log->user_id = $user->id;
        $log->book_id = $book->id;
        $log->save();

        
        if (!str_contains($user->email, '@abc.com')) {
            // send email
            $details = [
                'email' => $user->email,
                'subject' => 'Book Reported Lost',
                'title' => 'You have lost a book!',
                'body' => 'You received this email to confirm that you have paid the necessary fee!',
                'book' => $book,
                'ref' => $log->id
            ];
            SendEmail::dispatch($details);
            // Mail::to($user->email)->send(new UserMail($details));
            
        }
        
        return response()->json([
            'message' => 'Successfully marked ' . $book->title . ' as lost!'
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

                $days_late = floor(($time_now - $user->pivot->return_time) / (24*3600));
                $user->expired = $days_late > 0;
                if ($user->expired){
                    $user->days_past_expired = $days_late;
                }
                    
            }
        }
        return $books;
    }

    public function getLateUsers() {
        $time_now = time();
        $late_users = [];
        $cost_per_day = LibraryRuleSet::where('name', 'default')->first()->cost_per_day_late_return;

        $users = User::whereHas('books', function (Builder $query) use ($time_now) {
            $query->where('return_time', '<', $time_now);
        })->get();

        foreach($users as $user) {
            $late_books = [];
            $user->books->makeHidden(['pivot', 'author', 'year', 'image', 'description', 'publisher_id', 'category_id', 'stock']);
            foreach($user->books as $book) {
                $days_late = floor(($time_now - $book->pivot->return_time) / (24*3600));
                if ($days_late > 0){
                    $book->days_late = $days_late;
                    $book->borrow_date = date('d.m.y', $book->pivot->borrow_time);
                    $book->return_date = date('d.m.y', $book->pivot->return_time);
                    $book->cost = $days_late * $cost_per_day;
                    array_push($late_books, $book);
                }
            }

            if (count($late_books) > 0) {
                $user->late_books = $late_books;
                array_push($late_users, $user);
            }
        }

        $users->makeHidden(['books', 'is_admin', 'email', 'phone']);
        
        return $late_users;
    }

    public function getBooksDueToday() {
        $res = [];
        $books = Book::has('users')->get();
        $books->load('users');
        $today = date('d.m.y', time());

        foreach($books as $book) {
            $users_today = [];
            foreach($book->users as $user) {
                if (date('d.m.y', $user->pivot->return_time) == $today) {
                    $user->borrow_date = date('d.m.y', $user->pivot->borrow_time);
                    $user->makeHidden(['pivot','is_admin', 'email', 'phone']);
                    array_push($users_today, $user);
                }
            }

            if (count($users_today) > 0) {
                $book->users = $users_today;
                $book->return_date = $today;
                $book->makeHidden(['year', 'image', 'description', 'publisher_id', 'category_id', 'stock']);
                // $book->makeHidden(['users']);
                array_push($res, $book);
            }
            
        }
        return $res;
    }
}
