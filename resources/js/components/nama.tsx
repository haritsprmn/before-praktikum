type NamaInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function NamaInput({
    value,
    onChange,
}: NamaInputProps) {
    return (
        <div>
            <label
                htmlFor="nama"
                className="mb-2 block text-sm font-medium"
            >
                Nama
            </label>

            <input
                id="nama"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Masukkan nama"
                className="w-full rounded-md border px-3 py-2"
            />
        </div>
    );
}