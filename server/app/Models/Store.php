<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\User;

class Store extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $table = 'stores';
    protected $primaryKey = 'store_id';

    protected $fillable = [
        'store_id',
        'store_name',
        'address',
        'status',
        'mobile',
        'fax',
        'store_type',
        'no_of_employees',
        'logo',
        'vat',
        'vat_status',
        'barcode',
        'receipt_prefix',
        'email',
        'discount',
        'salesCount',
        'logoDisplay',
        'noteDisplay',
        'otherTaxes',
        'taxes',
        'productImage',
        'user_id',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Generate UUID for user_id if it's not set
            if (empty($model->store_id)) {
                $model->store_id = Str::uuid();
            }
        });
    }

    
}
