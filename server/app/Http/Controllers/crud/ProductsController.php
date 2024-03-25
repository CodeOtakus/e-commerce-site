<?php

namespace App\Http\Controllers\crud;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;


class ProductsController extends Controller
{
    
    public function getAllProducts($id)
    {
        $products = Product::where('category_id', $id)->get();

        if(!$products){
            return response()->json(['message' => 'Products not found'], 404);
        }

        return response()->json(['products' => $products]);
        
    }

    
    public function createProduct(Request $request)
    {

        if($request['barcode'] == null){
            $number = mt_rand(1000000000000, 9999999999999);
            $request['barcode'] = $number;
        }

        $product = Product::create($request ->all());
        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product
        ], 201);
    }

   
    public function getProduct(string $id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json(['product' => $product]);
    }

    
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->fill($request->all());
        if(!$product->isDirty()){
            return response()->json(['message' => 'At least one value must change'], 422);
        }
        $product->save();

        return response()->json(['product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);
        if(!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product -> delete();
        return response()->json(['message' => 'Product deleted successfully']);
    }
}
