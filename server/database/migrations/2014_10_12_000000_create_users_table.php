<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('user_id');
            $table->string('username');
            $table->string('mobile');
            $table->string('profile_pic')->nulllable();
            $table->date('date_created');
            $table->time('time_created');
            $table->string('status')->default('inactive');
            $table->string('uniid', 32);
            $table->dateTime('activation_date');
            $table->string('address');
            $table->string('description')->nullable();
            $table->string('country', 85);
            $table->string('city', 100);
            $table->integer('postal_code');
            $table->string('position', 50);
            $table->string('role_id')->nullable();
            $table->string('role')->nullable();
            $table->string('store_id')->default('{}');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
