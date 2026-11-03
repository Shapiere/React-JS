<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Seed data author.
     */
    public function run(): void
    {
        $authors = [
            ['name' => 'Pramoedya Ananta Toer', 'photo' => 'pramoedya-ananta-toer.jpg', 'bio' => 'Sastrawan Indonesia yang dikenal lewat tetralogi Buru dan karya realisme sosial.'],
            ['name' => 'Andrea Hirata', 'photo' => 'andrea-hirata.jpg', 'bio' => 'Penulis novel Laskar Pelangi yang mengangkat kisah pendidikan di Belitung.'],
            ['name' => 'Dewi Lestari', 'photo' => 'dewi-lestari.jpg', 'bio' => 'Penulis dan musisi yang dikenal lewat seri novel Supernova.'],
            ['name' => 'Eka Kurniawan', 'photo' => 'eka-kurniawan.jpg', 'bio' => 'Penulis novel Cantik Itu Luka yang karyanya diterjemahkan ke banyak bahasa.'],
            ['name' => 'Tere Liye', 'photo' => 'tere-liye.jpg', 'bio' => 'Penulis produktif dengan karya populer seperti serial Bumi dan Pulang.'],
        ];

        foreach ($authors as $author) {
            Author::create($author);
        }
    }
}
