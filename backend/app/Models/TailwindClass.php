<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TailwindClass extends Model
{
    use HasFactory;

    protected $fillable = ['class_name' , 'prefix' , 'type'];
}
