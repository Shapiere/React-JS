<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\GenreController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);

Route::get('/genres', [GenreController::class, 'index']);
Route::post('/genres', [GenreController::class, 'store']);
Route::put('/genres/{id}', [GenreController::class, 'update']);
Route::delete('/genres/{id}', [GenreController::class, 'destroy']);

Route::get('/authors', [AuthorController::class, 'index']);
Route::post('/authors', [AuthorController::class, 'store']);
Route::put('/authors/{id}', [AuthorController::class, 'update']);
Route::delete('/authors/{id}', [AuthorController::class, 'destroy']);
