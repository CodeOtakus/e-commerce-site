<?php

namespace App\Http\Controllers\crud;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\User;
use App\Models\Category;
use App\Models\Product;

class StoreController extends Controller
{
    
    public function getAllStores($id)
    {
        $store = Store::where('user_id', $id)->get();

        if(!$store){
            return response()->json(['message' => 'Store not found'], 404);
        }
        return response()->json(['store' => $store]);

    }/// End Method
    

    
    public function CreateStore(Request $request)
    {

        $store = User::find($request->user_id);
        if(!$store){
            return response()->json(['message' => 'User not found'], 404);
        }

        // Create a new store record
        $store = Store::create($request ->all());
        

        return response()->json([
            'message' => 'Store created successfully',
            'store' => $store
        ], 201);
    }/// End Method

    
    public function getStore($store_id)
    {
        $store = Store::find($store_id);
        if(!$store){
            return response()->json(['message' => 'Store not found'], 404);
        }

        return response()->json(['store' => $store]);
    }/// End Method

    
    public function update(Request $request, string $id)
    {
        $store = Store::find($id);

        if (!$store) {
            return response()->json(['message' => 'Store not found'], 404);
        }

        $store->fill($request->all());
        if(!$store->isDirty()){
            return response()->json(['message' => 'At least one value must change'], 422);
        }
        $store->save();

        return response()->json(['store' => $store]);



    }/// End Method

    
    public function delete(string $id)
    {
        $store = Store::find($id);
        if (!$store) {
            return response()->json(['message' => 'Store not found'], 404);
        }
        $category = Category::where('store_id', $id)->get();
        $product = Product::where('store_id', $id)->get();

        $product->each->delete();
        $category->each->delete();
        $store -> delete();
        return response()->json(['message' => 'Store deleted successfully']);

    }/// End Method
}
