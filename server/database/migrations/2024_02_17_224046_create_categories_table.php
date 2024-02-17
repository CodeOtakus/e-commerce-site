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
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id')->unsigned();
            $table->string('category_name');
            $table->string('category_color')->nullable();
            $table->string('category_image')->nullable();
            $table->string('store_id');
            $table->string('user_id');
            $table->string('users_name');
            $table->date('date_created');
            $table->time('time_created');
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
