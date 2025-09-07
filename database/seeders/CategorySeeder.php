<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::factory()->count(10)->make()->each(function($cat){
            DB::table('categories')->insertOrIgnore([array_merge($cat->toArray() ,['created_at' => now() , 'updated_at' => now()])]) ;
        });
    }
}
