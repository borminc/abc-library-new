<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookUserController;
use App\Http\Controllers\LibraryRuleSetController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\VerificationController;

use App\Models\User;
use App\Models\Book;
use App\Mail\UserMail;

use App\Jobs\SendVerificationEmail;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// ---------------------------------------------------- Auth routes
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::post('register', [AuthController::class, 'register'])->name('register');

    // requires user login
    Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user'])->middleware('verified');
        Route::get('username', [AuthController::class, 'username']);
    });
});

// ---------------------------------------------------- Routes that require user account
Route::group([
        'middleware' => ['auth:api', 'verified']
    ], function() {
        Route::post('borrow', [BookUserController::class, 'borrow']);
        Route::get('user/books', [BookUserController::class, 'getUserBooks']);

        Route::get('user/logs', [LogController::class, 'getUserLogs']);

        Route::post('user/change-info', [AuthController::class, 'changeUserInfo']);
        Route::post('user/change-email', [AuthController::class, 'changeEmail']);
        Route::post('user/change-password', [AuthController::class, 'changePassword']);
        Route::post('user/delete-account', [AuthController::class, 'deleteAccount']);
    }
);

// ---------------------------------------------------- Routes that require admin account
Route::group([
    'middleware' => ['auth:api', 'is_admin']
], function() {
    Route::get('user/search', [AuthController::class, 'search']);
    Route::get('users-names', [AdminController::class, 'getJustUserNames']);
    Route::get('books-titles', [BookController::class, 'getJustBookTitles']);

    Route::get('all-users-books', [BookUserController::class, 'getAllUsersBooks']);
    Route::get('all-borrowers', [BookUserController::class, 'getAllBorrowersBooks']);
    
    Route::resource('categories', CategoryController::class)->except([
        'index', 'show'
    ]);
    Route::resource('books', BookController::class)->except([
        'index', 'show'
    ]);

    Route::post('books/return', [BookUserController::class, 'returnBook']);
    Route::post('books/lost', [BookUserController::class, 'returnLostBook']);

    Route::get('borrowed-books', [BookUserController::class, 'getAllBooksUsers']);
    Route::get('low-stock-books', [BookController::class, 'getBooksLowStock']);
    Route::post('add-stock-book', [BookController::class, 'addStockToBook']);
    Route::get('late-users', [BookUserController::class, 'getLateUsers']);
    Route::get('books-due-today', [BookUserController::class, 'getBooksDueToday']);
    Route::get('total-info', [AdminController::class, 'getTotalInfo']);
    
    Route::resource('publishers', PublisherController::class);

    Route::resource('library-rules', LibraryRuleSetController::class);
    Route::put('library-rules', [LibraryRuleSetController::class, 'updateAll']);

    Route::resource('logs', LogController::class);
    Route::post('delete-user', [AuthController::class, 'deleteUser']);
});

// ---------------------------------------------------- Public routes

Route::get('books/search', [BookController::class, 'search'])->name('books.search');
Route::get('books/latest', [BookController::class, 'getLatestBooks'])->name('books.latest');
Route::get('books/popular', [BookController::class, 'getMostPopularBooks'])->name('books.popular');

Route::resource('categories', CategoryController::class)->only([
    'index', 'show'
]);

Route::resource('books', BookController::class)->only([
    'index', 'show'
]);

Route::get('library-default-rule', [LibraryRuleSetController::class, 'showDefault']);

Route::get('hello', function() { return 'Hello from ABC Library!'; });

Route::get('email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
Route::get('email/resend', [VerificationController::class, 'resend'])
    ->middleware('auth:api')
    ->name('verification.resend');

Route::get('/verify-notice', function() {
    return 'verify';
})->name('verification.notice');


Route::get('send-email', function() {
    // test
    // $details = [
    //     'email' => 'abclibrary.info@gmail.com',
    //     'title' => 'Title',
    //     'body' => 'This is a test for sending emails.'
    // ];
    $user = User::findOrFail(15);
    SendVerificationEmail::dispatch(['user' => $user]);
    // Mail::to('abclibrary.info@gmail.com')->send(new UserMail($details));
    return 'Email queued';
});