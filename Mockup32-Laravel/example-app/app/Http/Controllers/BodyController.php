<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

class BodyController extends Controller
{
    public function next()
    {
        return view('operation');
    }
    public function create()
    {
        return view('create');
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $category = new User;
        $category->name = $request->name;
        $category->email = $request->email;
        $category->password = $request->password;

        $category->save();
        return redirect('/same');
    }
    public function read()
    {
      $category = User::get();
        return view('operation', ['category' => $category]);
    
    }
    public function reading()
    {
        $category = User::get();
        return view('reading', ['category' => $category]);
    }
}
