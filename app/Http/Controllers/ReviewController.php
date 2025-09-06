<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeReviewRequest;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    


    public function store(storeReviewRequest $request){
            
        $validated =  $request->validated() ;

        dd($validated);

        
    }
}
