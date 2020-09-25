<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['prefix' => 'auth'], function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('users/{id}', 'AuthController@logout');
        Route::get('user/profile', 'AuthController@profle');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::group(['middleware' => 'scope:user'], function () {
        Route::get('get-categories', 'ProductController@categories');
        Route::get('findProduct', 'ProductController@search');
        Route::get('findCategory', 'CategoryController@search');
        Route::post('findByCategory/{id}', 'ProductController@findByCategory');
        Route::resource('products', 'ProductController');
    });

    Route::group(['middleware' => 'scope:administrator'], function () {
        Route::get('/admin-scope', function(){
            return response()->json([
                'message' => 'Administrator can access this',
                'status' => 200
            ], 200);
        });  
    });
});

Route::resource('categories', 'CategoryController');
