type nimInput = {
    value: string;
    onChange: (value: string) => void;
};

export default function nimInput({
    value,
    onChange,
}: nimInput) {
    return (
        <div>
            <label
                htmlFor="NIM"
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