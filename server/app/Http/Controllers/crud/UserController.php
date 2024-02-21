<?php

namespace App\Http\Controllers\crud;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Store;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller
{
   
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users',
            'username' => 'required|string',
            'name' => 'required|string',
            'mobile' => 'required|string',
            'password' => 'required|string|min:8',
            'profile_pic' => 'nullable|string',
            'status' => 'nullable|string',
            'address' => 'required|string',
            'description' => 'nullable|string',
            'country' => 'required|string|max:85',
            'city' => 'required|string|max:100',
            'postal_code' => 'required|string',
            'position' => 'nullable|string|max:50',
            'role_id' => 'nullable|integer',
            'role' => 'nullable|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 400);
        }
        
        $user = User::create($request ->all());
        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
            'rememberToken' => $user->rememberToken
        ], 201);

        
    }/// End Method

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $user->save();
            return response()->json(['user' => $user]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
      
    }/// End Method

    
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->update($request->all());
        
        if(!$user->isDirty()){
            return response()->json(['message' => 'At least one value must change'], 422);
        }
       return response()->json(['message' => 'User updated successfully', 'user' => $user]);
    }/// End Method

    
    public function delete(string $id)
    {
        $user = User::find($id);
        if(!$user){
            return response()->json(['message' => 'User not found'], 404);
        }
        $stores = Store::where('user_id', $id)->get();
        $category = Category::where('user_id', $id)->get();
        $product = Product::where('user_id', $id)->get();

        $category->each->delete();
        $product->each->delete();
        $stores->each->delete();
        $user->delete();
        return response()->json([ 'message'=> 'User deleted']);
    }/// End Method
}
