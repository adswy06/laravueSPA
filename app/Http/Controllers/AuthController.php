<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use\App\User;
use Auth;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if($user->save()){
            return response()->json([
                'message' => 'User created successfully',
                'status' => 201
            ], 201);
        }else{
            return response()->json([
                'message' => 'Internal server error, Please try again',
                'status' => 500
            ], 500);
        }
    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = $request->only(['email', 'password']);
        // dd($credentials);
        if(!Auth::attempt($credentials)){
            return response()->json([
                'message' => 'Invalid username and password',
                'status' => 401
            ], 401);
        }

        $user = $request->user();

        if($user->role == 'administrator'){
            $tokenData = $user->createToken('Personal Access Token', ['administrator']);
        }else{
            $tokenData = $user->createToken('Personal Access Token', ['user']);
        }

        $token = $tokenData->token;

        if($request->remember_me){
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if($token->save()){
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'token_scope' => $tokenData->token->scopes[0],
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'status' => 200
            ], 200);
        }else{
            return response()->json([
                'message' => 'unauthorized internal server error',
                'status' => 500
            ], 500);
        }

    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout Successfully',
            'status' => 200
        ], 200);
    }

    public function profile(){
        if($request->user()){
            return response()->json($request->user(), 200);
        }
        return response()->json([
            'message' => 'Not loggedin',
            'status' => 500
        ], 500);
    }
}
