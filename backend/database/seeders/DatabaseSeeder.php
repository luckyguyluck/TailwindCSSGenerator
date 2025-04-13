<?php

namespace Database\Seeders;

use App\Models\TailwindClass;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        function colors(){
            $colorgroups = [
                'slate', 'gray', 'zinc', 'neutral', 'stone','red', 'orange', 'amber', 'yellow', 'lime','green', 'emerald', 'teal', 'cyan','sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
            ];
            $shades = [50,100,200,300,400,500,600,700,800,900,950];
            $types = ['bg','text','border','outline','ring','shadow'];

            foreach ($types as $type){
                foreach($colorgroups as $colorgroup){
                    foreach($shades as $shade){
                        $db_classname = "{$type} {$colorgroup} {$shade}";
                        $db_prefix = "{$type}-{$colorgroup}-{$shade}";
                        $db_type = "{$type} color";

                        TailwindClass::create([
                            'class_name' => $db_classname,
                            'prefix' => $db_prefix,
                            'type' => $db_type,
                        ]);

                    }
                };
            };
        }

        function sizes (){
            $sizes = [];
            for ($i = 0; $i <= 16; $i+= 2) {
                $sizes[] = $i;
            }

            foreach($sizes as $size){
                $db_classname = "layout control";
                $db_prefix = $size;
                $db_type = "sizes";

                TailwindClass::create([
                    'class_name' => $db_classname,
                    'prefix' => $db_prefix,
                    'type' => $db_type,
                ]);
            }

        }

        colors();
        sizes();





    }
}
