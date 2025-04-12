<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TailwindClass;

class ClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $colortypes = ["bg", "text", "outline", "border", "ring", "placeholder", "shadow", "shadow-inner", "shadow-outline"];
        $colors = ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone"];
        $shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

        foreach ($colortypes as $colortype) {
            foreach ($colors as $color) {
                foreach ($shades as $shade) {
                    $classname = "{$colortype} {$color} {$shade}" ;
                    $prefix = "{$colortype}-{$color}-{$shade}";
                    $type = "{$colortype} color";

                    TailwindClass::Create([
                        'classname' => $classname,
                        'prefix' => $prefix,
                        'type' => $type,
                    ]);
                }
            }
        }
    }
}
