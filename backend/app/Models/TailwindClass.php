<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TailwindClass extends Model
{
    protected $fillable = [
        "classname",
        "prefix",
        "type",
    ];

}
