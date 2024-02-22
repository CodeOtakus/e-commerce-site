<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use App\Models\Store;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';
    public $incrementing = false;

    protected $primaryKey = 'userID';

    protected $fillable = [
        'user_id',
        'username',
        'name',
        'mobile',
        'email',
        'password',
        'profile_pic',
        'date_created',
        'time_created',
        'status',
        'uniid',
        'activation_date',
        'address',
        'description',
        'country',
        'city',
        'postal_code',
        'position',
        'role_id',
        'role',
        'store_id',

    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Automatically generate UUIDs for user_id and uniid fields
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            // Generate UUID for user_id if it's not set
            if (empty($model->userID)) {
                $model->userID = Str::uuid();
            }

            // Generate UUID for uniid if it's not set
            if (empty($model->uniid)) {
                $model->uniid = str_replace('-', '', Str::uuid());
            }
        });
    }

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

}


