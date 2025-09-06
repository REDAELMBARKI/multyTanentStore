<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeReviewRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    


    public function store(storeReviewRequest $request , Product $product){
            
        $validated =  collect($request->validated()) ;
        $authenticatedUserId = auth()->id ?? '1' ;
        $product->reviews()->create([
               'user_id' => $authenticatedUserId,
               'comment' => $validated->only('comment'),
               'rate' => $validated->only('rate')
        ]);
        
    }
}
