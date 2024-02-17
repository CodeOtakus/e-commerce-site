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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_id');
            $table->string('product_name');
            $table->decimal('selling_price', 19, 2);
            $table->decimal('cost_price', 19, 2);
            $table->string('user_id');
            $table->string('users_name');
            $table->string('store_id');
            $table->date('date_added');
            $table->string('time_added', 100);
            $table->string('barcode');
            $table->string('description');
            $table->string('image');
            $table->integer('cat_id')->nullable();
            $table->string('cat_name')->nullable();
            $table->decimal('quantity', 50, 2)->default(0.00);
            $table->decimal('refill', 50, 2)->default(0.00);
            $table->string('status')->default('active');
            $table->string('on_site')->default('false');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
