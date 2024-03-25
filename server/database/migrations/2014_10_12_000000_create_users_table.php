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
            $table->string('email')->unique();
            $table->string('userID');
            $table->string('username');
            $table->string('name');
            $table->string('mobile');
            $table->string('password');
            $table->string('profile_pic')->nullable();
            $table->string('date_created')->nullable();
            $table->string('time_created')->nullable();
            $table->string('status')->default('inactive');
            $table->string('uniid', 32);
            $table->string('activation_date')->nullable();
            $table->string('address');
            $table->string('description')->nullable();
            $table->string('country', 85);
            $table->string('city', 100);
            $table->string('postal_code');
            $table->string('position', 50)->default("Employee");
            $table->integer('role_id')->nullable();
            $table->string('role')->nullable();
            $table->timestamp('email_verified_at')->nullable();
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
