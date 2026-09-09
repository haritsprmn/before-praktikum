import { useForm } from '@inertiajs/react';

import InputNama from '@/components/nama';
import InputNim from '@/components/nim';
import InputProdi from '@/components/ProdiInput';
import InputFakultas from '@/components/InputFakultas';

export default function welcome() {
    const { data, setData, post, processing, errors } = useForm({
        nama: '',
        nim: '',
        prodi: '',
        fakultas: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/mahasiswa');
    };

    return (
        <div className="mx-auto max-w-xl p-6">
            <h1 className="mb-6 text-2xl font-bold">
                Tambah Mahasiswa
            </h1>

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputNama
                        value={data.nama}
                        onChange={(value) => setData('nama', value)}
                    />

                    {errors.nama && (
                        <p className="text-sm text-red-500">
                            {errors.nama}
                        </p>
                    )}
                </div>

                <div>
                    <InputNim
                        value={data.nim}
                        onChange={(value) => setData('nim', value)}
                    />

                    {errors.nim && (
                        <p className="text-sm text-red-500">
                            {errors.nim}
                        </p>
                    )}
                </div>

                <div>
                    <InputProdi
                        value={data.prodi}
                        onChange={(value) => setData('prodi', value)}
                    />

                    {errors.prodi && (
                        <p className="text-sm text-red-500">
                            {errors.prodi}
                        </p>
                    )}
                </div>

                <div>
                    <InputFakultas
                        value={data.fakultas}
                        onChange={(value) => setData('fakultas', value)}
                    />

                    {errors.fakultas && (
                        <p className="text-sm text-red-500">
                            {errors.fakultas}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                >
                    {processing ? 'Menyimpan...' : 'Simpan'}
                </button>
            </form>
        </div>
    );
}