<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClassesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colors = ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","slate","gray","zinc","neutral","stone"];
        $shades = [50,100,200,300,400,500,600,700,800,900,950];
        $colortype = ["bg","text","outline","border","ring","placeholder","shadow","shadow-inner","shadow-outline"];
    }
}
