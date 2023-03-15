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
    return view('main');
});
// Route::get('/next', [BodyController::class,'next']);

Route::get('/next', [BodyController::class,'read']);

Route::get('/same', [BodyController::class,'reading']);

Route::get('/create', [BodyController::class,'create']);

Route::post('/store', [BodyController::class,'store']);
