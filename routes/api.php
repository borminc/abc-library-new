<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\BookUserController;
use App\Http\Controllers\LibraryRuleSetController;

use App\Models\User;
use App\Models\Book;


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
        Route::get('user', [AuthController::class, 'user']);
    });
});

// ---------------------------------------------------- Routes that require user account
Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::post('borrow', [BookUserController::class, 'borrow']);
        Route::get('user/books', [BookUserController::class, 'getUserBooks']);
    }
);

// ---------------------------------------------------- Routes that require admin account
Route::group([
    'middleware' => ['auth:api', 'is_admin']
], function() {
    Route::get('user/search', [AuthController::class, 'search']);
    Route::get('all-users-books', [BookUserController::class, 'getAllUsersBooks']);
    Route::get('all-borrowers', [BookUserController::class, 'getAllBorrowersBooks']);
    
    Route::resource('categories', CategoryController::class)->except([
        'index', 'show'
    ]);
    Route::resource('books', BookController::class)->except([
        'index', 'show'
    ]);


    Route::post('books/return', [BookUserController::class, 'returnBook']);
    Route::get('borrowed-books', [BookUserController::class, 'getAllBooksUsers']);
    Route::get('low-stock-books', [BookController::class, 'getBooksLowStock']);
    Route::post('add-stock-book', [BookController::class, 'addStockToBook']);
    Route::get('late-users', [BookUserController::class, 'getLateUsers']);
    Route::get('books-due-today', [BookUserController::class, 'getBooksDueToday']);
    Route::get('total-info', [AdminController::class, 'getTotalInfo']);
    
    Route::resource('publishers', PublisherController::class);

    Route::resource('library-rules', LibraryRuleSetController::class);
    Route::put('library-rules', [LibraryRuleSetController::class, 'updateAll']);
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


// ---------------- test

