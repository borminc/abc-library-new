<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryRuleSet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'num_of_books_per_user',
        'duration_per_borrow',
        'cost_per_day_late_return',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
