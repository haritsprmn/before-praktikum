type NimInputProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function NimInput({
    value,
    onChange,
}: NimInputProps) {
    return (
        <div>
            <label
                htmlFor="nim"
                className="NIM"
            >
                Nomor Induk Mahasiswa
            </label>

            <input
                id="nim"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Masukkan NIM anda"
                className="NIM"
            />
        </div>
    );
}