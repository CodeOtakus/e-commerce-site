<?php

namespace App\Http\Controllers\crud;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class CategoriesController extends Controller
{
   
    public function getAllCategories($id)
    {

        $categories = Category::where('store_id', $id)->get();

        if(!$categories){
            return response()->json(['message' => 'Categories not found'], 404);
        }

        return response()->json(['categories' => $categories]);
    }/// End Method


    

    public function CreateCategory(Request $request)
    {
        $category = Category::create($request ->all());
        return response()->json([
            'message' => 'Category created successfully',
            'category' => $category
        ], 201);
    }

    
    public function getCategory(string $id)
    {
        $category = Category::find($id);
        if(!$category){
            return response()->json(['message' => 'Category not found'], 404);
        }
        return response()->json(['category' => $category]);
    }

    

    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        if(!$category){
            return response()->json(['message' => 'Category not found'], 404);
        }
        $category->fill($request->all());

        if(!$category->isDirty()){
            return response()->json(['message' => 'At least one value must change'], 422);
        }

        $category->save();

        return response()->json(['category' => $category]);
    }

    

    public function delete(string $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }
        $product = Product::where('category_id', $id)->get();
        $product->each->delete();
        $category -> delete();

        return response()->json(['message' => 'Category deleted']);
    }
}
