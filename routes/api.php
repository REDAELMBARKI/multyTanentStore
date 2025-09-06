<?php
//file name routes/ajax 

use App\Http\Controllers\InventoryFilterController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TagsController;

Route::get('/tags/suggest', [TagsController::class, 'suggest'])->name('tags.suggest');




Route::get('/variant', [InventoryFilterController::class, 'filter'])->name('inventory.filter');
