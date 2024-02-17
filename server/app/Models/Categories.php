<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'category_id',
        'category_name',
        'category_color',
        'category_image',
        'store_id',
        'user_id',
        'users_name',
        'date_created',
        'time_created',
        'description',
    ];
}