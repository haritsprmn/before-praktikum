type FakultasInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FakultasInput({
  value,
  onChange,
}: FakultasInputProps) {
  return (
    <div>
      <label
        htmlFor="fakultas"
        className="mb-2 block text-sm font-medium"
      >
        Fakultas
      </label>
      <input
        id="fakultas"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Masukkan fakultas"
        className="w-full rounded-md border px-3 py-2"
      />
    </div>
  );
}