<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\crud\UserController;
use App\Http\Controllers\crud\StoreController;
use App\Http\Controllers\crud\CategoriesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/register', [UserController::class, 'register']);
Route::post('/user/login', [UserController::class, 'login']);
Route::patch('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'delete']);



Route::post('/store/add', [StoreController::class, 'CreateStore']);
Route::get('/store/{user_id}/all', [StoreController::class, 'getAllStores']);
Route::get('/store/{store_id}', [StoreController::class, 'getStore']);
Route::patch('/store/{store_id}', [StoreController::class, 'update']);
Route::delete('/store/{store_id}', [StoreController::class, 'delete']);


Route::post('/category/add', [CategoriesController::class, 'CreateCategory']);
Route::get('/category/{store_id}/all', [CategoriesController::class, 'getAllCategories']);
Route::get('/category/{category_id}', [CategoriesController::class, 'getCategory']);
Route::patch('/category/{category_id}', [CategoriesController::class, 'update']);
Route::delete('/category/{category_id}', [CategoriesController::class, 'delete']);



Route::post('/product/add', [ProductController::class, 'CreateProduct']);
Route::get('/product/{cat_id}/all', [ProductController::class,'getAllProducts']);
Route::get('/product/{product_id}', [ProductController::class, 'getProduct']);
Route::patch('/product/{product_id}', [ProductController::class, 'update']);
Route::delete('/product/{product_id}', [ProductController::class, 'delete']);
