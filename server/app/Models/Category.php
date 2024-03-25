<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';
    public $incrementing = false;
    protected $primaryKey = 'category_id';

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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Generate UUID for user_id if it's not set
            if (empty($model->category_id)) {
                $model->category_id = Str::uuid();
            }

            static::creating(function ($model) {
                $model->date_created = date('Y-m-d'); // 
            });

            static::creating(function ($model) {
                $model->time_created = date('H:i:s'); 
            });
        });
    }
}