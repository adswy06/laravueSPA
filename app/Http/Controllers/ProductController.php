<?php

namespace App\Http\Controllers;
use\App\Products;
use\App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function categories(){
        $categories = Category::all();
        return response()->json($categories, 200);
    }

    public function index(){
        $products = Products::orderBy('created_at', 'desc')->paginate(5);
        return $products;
    }
    public function store(Request $request){
        $request->validate([
            'category_id' => 'required',
            'name' => 'required|min:3',
            'description' => 'required|min:3|max:200',
            'image' => 'required|min:3|mimes:jpg,jpeg,png',
        ]);

        $product = new Products();
        $product->category_id = $request->category_id;
        $product->name = $request->name;
        $product->description = $request->description;
        $path = $request->file('image')->store('products_image');
        $product->image = $path;

        if($product->save()){
            return response()->json($product, 200);
        }else{
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }
    }
    public function destroy(Products $product){
        if($product->delete()){
            Storage::delete($product->image);
            return response()->json($product, 200);
        }else{
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }
    }
    public function update(Request $request, Products $product){
        $request->validate([
            'name' => 'required|min:3',
        ]);
        $product->name = $request->name;
        $oldPath = $product->image;
        if($request->hasFile('image')){
            $request->validate([
                'image' => 'image|mimes:jpeg, jpg,png'
            ]);

            $path = $request->file('image')->store('category_image');
            $product->image = $path;

            Storage::delete($oldPath);
        }
        if($product->save()){
            return response()->json($product, 200);
        }else{
            Storage::delete($path);
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }

        // dd($request->all(), $product);
    }
    public function search(){
        if($search = \Request::get('q')){
            $product = Products::where(function($query) use ($search){
                $query->where('name', 'LIKE', "%$search%")
                ->orWhere('description', 'LIKE', "%$search%")
                ->orderBy('created_at', 'desc');
            })->paginate(5);
        }else{
            $product = Products::orderBy('created_at', 'desc')->paginate(5);
        }
        return $product;
    }
    public function findByCategory(Products $product){
        dd($product);
    }
}
