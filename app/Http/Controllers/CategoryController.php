<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Book;


class CategoryController extends Controller
{
    public function index() {
        return Category::all();
        // return 'hello';
    }

    public function add(Request $req) {
        Category::create($req->all());
        return response()->json(['message' => 'success']);
    }

    public function getBooksByCategory($id) {
        $books = Category::find($id)->books;
        return $books;
    }
}
