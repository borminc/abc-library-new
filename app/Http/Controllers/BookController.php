<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index() {
        return Book::all();
    }

    public function add(Request $req) {
        $req->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
            'publisher' => 'required|string',
            'year' => 'required',
            'image' => '',
            'category_id' => 'required'
        ]);

        $book = new Book([
            'title' => $req->title,
            'author' => $req->author,
            'description' => $req->description,
            'publisher' => $req->publisher,
            'year' => $req->year,
            'image' => $req->image,
            'category_id' => $req->category_id
        ]);
        $book->save();

        return response()->json([
            'message' => 'Successfully added ' . $req->title . '!'
        ], 201);
    }
}
