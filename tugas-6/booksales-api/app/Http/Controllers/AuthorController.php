<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function index()
    {
        return response()->json([
            'success' => true,
            'message' => 'Get All Resource',
            'data' => Author::all(),
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'photo' => 'required|string|max:255',
            'bio' => 'required|string',
        ]);

        $author = Author::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Resource created successfully',
            'data' => $author,
        ], 201);
    }

    public function update(Request $request, string $id)
    {
        $author = Author::find($id);

        if (! $author) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found',
            ], 404);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'photo' => 'required|string|max:255',
            'bio' => 'required|string',
        ]);

        $author->update($validated);

        return response()->json([
            'success' => true,
            'message' => 'Resource updated successfully',
            'data' => $author,
        ], 200);
    }

    public function destroy(string $id)
    {
        $author = Author::find($id);

        if (! $author) {
            return response()->json([
                'success' => false,
                'message' => 'Resource not found',
            ], 404);
        }

        $author->delete();

        return response()->json([
            'success' => true,
            'message' => 'Resource deleted successfully',
        ], 200);
    }
}
