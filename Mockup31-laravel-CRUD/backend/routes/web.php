<?php

use App\Http\Controllers\BodyController;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test', function () {
    return view('test');
});
Route::get('/create-category', [BodyController::class,'create'] );

Route::post('/category-store', [BodyController::class,'store'] );

Route::get('/category-edit/{id}', [BodyController::class,'edit'] );

Route::put('/category-update/{id}', [BodyController::class,'update'] );

Route::delete('/category-delete/{id}', [BodyController::class,'destroy'] );

Route::get('/pages/main', function () {
    return view('pages.main');
});
Route::get('/pages/body',[BodyController::class,'index'] );
