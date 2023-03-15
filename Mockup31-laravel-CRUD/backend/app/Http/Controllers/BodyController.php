<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\UserModel;
use Illuminate\Http\Request;

class BodyController extends Controller
{
    public function index()
    {
        $categories = Category::get();
        return view('pages.body',['categories'=>$categories]);
    }
    public function create()
    {
        // $categories = Category::get();
        return view('pages.create');
    }
    public function edit($id)
    {
        // dd($id);
        $category = Category::where('id', $id)->first();
        return view('pages.edit',['category' => $category]);
    }
    public function store(Request $request)
    {
        // dd($request->all());
        // $request->validate([
        //     'title' => 'required|string|min:3',
        // ]);
             $category = new Category;
             $category->title = $request->title;
             $category->save();
             return redirect('/pages/body');
        // return view('pages.store');
    }

    public function update(Request $request,$id)
    {
        // dd($request->all());
        // $request->validate([
        //     'title' => 'required|string|min:3',
        // ]);
            //  $category = new Category;
        $category = Category::where('id', $id)->first();
             $category->title = $request->title;
             $category->save();
             return redirect('/pages/body');
        // return view('pages.store');
    }

    public function destroy($id)
    {
        $category = Category::whereId($id)->first();
        $category->delete();
        return redirect('/pages/body');
    }
}
