<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::orderBy('created_at', 'desc')->paginate(5);
        return $categories;
    }
    public function store(Request $request){
        $request->validate([
            'name' => 'required|min:3',
            'image' => 'required|min:3|mimes:jpg,jpeg,png'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $path = $request->file('image')->store('category_image');
        $category->image = $path;

        if($category->save()){
            return response()->json($category, 200);
        }else{
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }
    }
    public function destroy(Category $category){
        if($category->delete()){
            Storage::delete($category->image);
            return response()->json([
                'message' => 'delete successfully',
                'status' => 200
            ], 200);
        }else{
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }
    }
    public function update(Request $request, Category $category){
        $request->validate([
            'name' => 'required|min:3',
        ]);
        $category->name = $request->name;
        $oldPath = $category->image;
        if($request->hasFile('image')){
            $request->validate([
                'image' => 'image|mimes:jpeg, jpg,png'
            ]);

            $path = $request->file('image')->store('category_image');
            $category->image = $path;

            Storage::delete($oldPath);
        }
        if($category->save()){
            return response()->json($category, 200);
        }else{
            Storage::delete($path);
            return response()->json([
                'message' => 'Internal Server Error',
                'status' => 500
            ], 500);
        }

        // dd($request->all(), $category);
    }
    public function search(){
        if($search = \Request::get('q')){
           $category = Category::where(function($query) use ($search){
                $query->where('name', 'LIKE', "%$search%")
                ->orderBy('created_at', 'desc');
            })->paginate(5);
        }else{
           $category = Category::orderBy('created_at', 'desc')->paginate(5);
        }
        return$category;
    }
}
