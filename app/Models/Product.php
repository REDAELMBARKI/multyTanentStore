<?php

namespace App\Models;

use Carbon\Cli\Invoker;
use Faker\Core\File;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
     protected $fillable = ['name' , 'brand' , 'price' , 'slug' , 'thumbnail' ,'free_shipping' , 'description'];
     protected $hidden = ['created_at','updated_at'];   

    public static function getColumsToselect(){
        return array_merge(
            ['id'],
            (new Static)->getFillable()
        );
    }
    public function categories(){
          return $this->belongsToMany(Category::class);
    }

    public function tags(){
          return $this->belongsToMany(Tag::class);
    }


    public function orders(){
          return $this->belongsToMany(Order::class);
    }
  


  
    public function reviews(){
        return $this->hasMany(Review::class);
    }
 
    public function inventories(){
         return $this->hasMany(Inventory::class);
    }


    public function covers()
    {
         $covers = [];
         foreach($this->inventories as $inventory){
                foreach($inventory->covers->toArray() as $cover){
                     $covers[$cover['id']] = $cover;
                }
         };
         return $covers;
    } 
   
    public function promotion()
    {
        return $this->belongsTo(Promotion::class);
    }


    public function colors()
    {
        return $this->hasManyThrough(Color::class, Inventory::class ,'product_id' , 'id' , 'id' , 'color_id' )
                    ->select(['colors.id as cId'  , 'hex'])->distinct('cId');
  
    }


    public function sizes()
    {
        return $this->hasManyThrough(Size::class , Inventory::class , 'product_id' , 'id' , 'id' , 'size_id')
                    ->select(['sizes.id as sId'  , 'abbr'])->distinct('sId');
    }

    public function materials()
    {
        return $this->hasManyThrough(Material::class, Inventory::class, 'product_id', 'id', 'id', 'material_id')
        ->select('materials.id as mId' , 'name')->distinct('mId');
    }

    public function fits()
    {
        return $this->hasManyThrough(Fit::class, Inventory::class, 'product_id', 'id', 'id', 'fit_id')
                    ->select(['fits.id as fId'  , 'name'])->distinct('fId');
    
    }


    // protected function casts(){
        
    // }
}
