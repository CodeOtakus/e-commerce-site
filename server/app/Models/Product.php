<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $table = 'products';
    protected $primaryKey = 'product_id';

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
        'category_id',
        'category_name',
        'quantity',
        'refill',
        'status',
        'on_site',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->product_id)) {
                $model->product_id = Str::uuid();
            }

        });
    }
}
