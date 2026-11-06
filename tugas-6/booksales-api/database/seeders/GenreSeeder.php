<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Seed data genre.
     */
    public function run(): void
    {
        $genres = [
            ['name' => 'Novel', 'description' => 'Karya fiksi panjang yang menceritakan rangkaian peristiwa kehidupan tokoh secara utuh.'],
            ['name' => 'Fantasi', 'description' => 'Cerita fiksi yang mengandung unsur magis, dunia rekaan, dan makhluk imajinatif.'],
            ['name' => 'Sains Fiksi', 'description' => 'Fiksi yang dibangun dari spekulasi ilmu pengetahuan dan teknologi masa depan.'],
            ['name' => 'Sejarah', 'description' => 'Buku yang membahas peristiwa, tokoh, dan latar masa lampau berdasarkan sumber.'],
            ['name' => 'Biografi', 'description' => 'Kisah perjalanan hidup seseorang yang ditulis berdasarkan fakta.'],
        ];

        foreach ($genres as $genre) {
            Genre::create($genre);
        }
    }
}
