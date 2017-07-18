<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        $user = User::create([
            'username' => request('username'),
            'email' => request('email'),
            'password' => request('password'),
            'timezone' => request('timezone')
        ]);
        // $user->save();
        info($user);
    }
}
