<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\User;
use App\Models\Publisher;
use App\Models\Log;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 
        'author', 
        'description', 
        'publisher_id', 
        'year', 
        'image', 
        'category_id',
        'stock',
        'borrow_times'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function publisher() {
        return $this->belongsTo(Publisher::class);
    }

    public function users() {
        return $this->belongsToMany(User::class)->withPivot('borrow_time', 'return_time');
    }

    public function logs() {
        return $this->hasMany(Log::class);
    }
}
