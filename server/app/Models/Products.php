<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'product_id',
        'product_name',
        'selling_price',
        'cost_price',
        'user_id',
        'users_name',
        'store_id',
        'date_added',
        'time_added',
        'barcode',
        'description',
        'image',
        'cat_id',
        'cat_name',
        'quantity',
        'refill',
        'status',
        'on_site',
    ];
}
