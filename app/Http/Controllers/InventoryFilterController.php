<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Cover;
use Illuminate\Http\Request;

class InventoryFilterController extends Controller
{
    public function filter(Request $request){
        
        $variant = [] ;
        // select sizes and vaariants awhere color id is color_id
        $product   = Product::find($request->product_id);

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        // sizes 
        $variant['sizes'] = $product->sizes()->whereIn('sizes.id' , function($q) use($request){
            $q->select('size_id')->from('inventories')
                ->where('color_id' , $request->color_id)
                ->where('product_id' , $request->product_id);
        })->get();


         $variant['materials'] = $product->materials()->whereIn('materials.id' , function($q) use($request){
            $q->select('material_id')->from('inventories')
                ->where('color_id' , $request->color_id)
                ->where('product_id' , $request->product_id);
        })->get();


        $variant['fits'] = $product->fits()->whereIn('fits.id' , function($q) use($request){
            $q->select('fit_id')->from('inventories')
                ->where('color_id' , $request->color_id)
                ->where('product_id' , $request->product_id);
        })->get();

        // select cover if fron covers where id in select cover_id from cover_inventory where inventiry_id in select id from inventories where color_id = color_id and product_id = product_id 
        $variant['cover'] =  Cover::whereIn('id' , function($q){
                 $q->select("cover_id")
                     ->from("cover_inventory")
                     ->whereIn("inventory_id" , function($q2){
                         $q2->select("id")
                             ->from("inventories")
                             ->where("color_id" , request()->color_id)
                             ->where("product_id" , request()->product_id);
                     });
        })->pluck('path')->first();


    

      

        return response()->json($variant ?? [], 200);

    } 
}
