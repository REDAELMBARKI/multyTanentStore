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
               'comment' => $validated['comment'],
               'rate' => $validated['rate']
        ]);


        // update the product rating average 
        // increase the acount of ratings (rating count column )
        $product->reviews()->count();
        $product->rating_average =  round($product->reviews()->sum('rate') / $product->reviews()->count() , 1) ;


        $product->save();


     
        
    }
}
