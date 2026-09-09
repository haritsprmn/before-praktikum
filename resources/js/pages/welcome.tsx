import { useState } from "react";
// Ubah "inputFakultas" menjadi "InputFakultas"
import FakultasInput from "@/components/InputFakultas";

export default function MahasiswaCreate() {
  const [fakultas, setFakultas] = useState("");

  return (
    <div>
      <FakultasInput
        value={fakultas}
        onChange={setFakultas}
      />

      <p>Isi fakultas: {fakultas}</p>
    </div>
  );
}