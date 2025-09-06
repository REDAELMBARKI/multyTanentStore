<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CoverInventory extends Pivot
{
    protected $table  = 'cover_inventory';
}
