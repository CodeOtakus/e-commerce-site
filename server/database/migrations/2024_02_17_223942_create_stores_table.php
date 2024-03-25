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
        Schema::create('stores', function (Blueprint $table) {
            $table->string('store_id');
            $table->string('user_id');
            $table->string('store_name')->unique();
            $table->string('address');
            $table->string('status')->default('inactive');
            $table->string('mobile');
            $table->string('fax');
            $table->string('store_type')->default('super_market');
            $table->integer('no_of_employees')->default(0);
            $table->string('logo') ->nullable();
            $table->float('vat')->default(0);
            $table->string('vat_status')->default('');
            $table->string('barcode')->default('active');
            $table->string('receipt_prefix');
            $table->string('email');
            $table->string('discount')->nullable();
            $table->string('salesCount')->nullable();
            $table->string('logoDisplay')->default('on');
            $table->string('noteDisplay')->nullable();
            $table->string('otherTaxes')->nullable();
            $table->json('taxes')->default('[]');
            $table->string('productImage')->default('on');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stores');
    }
};
