<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    $users = User::query()->limit(3)->get();
    return Inertia::render('Home', ['test' => 'working', 'users' => $users]);
});

Route::get('/about-us', function () {
    return Inertia::render('About', ['about_us' => 'working']);
});
