import { useState } from "react";
import NamaInput from "@/components/nama";

export default function MahasiswaCreate() {
    const [Nama, setNama] = useState("");

    return (
        <div>
            <NamaInput
                value={Nama}
                onChange={setNama}
            />

            <p>Isi Nama: {Nama}</p>
        </div>
    );
}