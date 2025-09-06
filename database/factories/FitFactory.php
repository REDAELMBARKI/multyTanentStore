<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fit>
 */
class FitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    { 
        $fits = ['Slim Fit', 'Regular Fit', 'Relaxed Fit', 'Athletic Fit', 'Tailored Fit', 'Classic Fit'];
        return [
            'name' => $this->faker->randomElement($fits),
        ];
    }
}
