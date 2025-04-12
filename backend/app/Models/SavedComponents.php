<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedComponents extends Model
{
    protected $fillable = [
        "id" , "user_id" , "title" , "component_data"
    ];
}
