import { useState } from "react";
import FakultasInput from "@/components/ProdiInput";

export default function MahasiswaCreate() {
    const [prodi, setProdi] = useState("");

    return (
        <div>
            <FakultasInput
                value={prodi}
                onChange={setProdi}
            />

            <p>Isi prodi: {prodi}</p>
        </div>
    );
}