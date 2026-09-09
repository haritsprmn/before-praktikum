type ProdiInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function ProdiInput({
    value,
    onChange,
}: ProdiInputProps) {
    return (
        <div>
            <label
                htmlFor="prodi"
                className="mb-2 block text-sm font-medium"
            >
                Prodi
            </label>

            <input
                id="prodi"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Masukkan prodi"
                className="w-full rounded-md border px-3 py-2"
            />
        </div>
    );
}