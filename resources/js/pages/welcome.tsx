import { useState } from "react";
import NimInput from "@/components/nim";

export default function MahasiswaCreate() {
    const [nim, setNim] = useState("");

    return (
        <div>
            <NimInput
                value={nim}
                onChange={setNim}
            />

            <p>Isi NIM: {nim}</p>
        </div>
    );
}