<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Book;

class Log extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'date_time'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'user_id',
        'book_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function book() {
        return $this->belongsTo(Book::class);
    }
}
