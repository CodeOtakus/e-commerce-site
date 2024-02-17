<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $table = 'stores';

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
    ];

    public function Categories(){
        return $this->hasMany(Category::class, "store_id",'store_id');
    }
}

