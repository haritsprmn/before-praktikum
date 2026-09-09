<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|string|max:255|unique:mahasiswa,nim',
            'prodi' => 'required|string|max:255',
            'fakultas' => 'required|string|max:255',
        ]);

        Mahasiswa::create($validated);

        return back()->with('success', 'Data mahasiswa berhasil disimpan.');
    }
}