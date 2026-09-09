import { useState } from "react";

type FakultasKey = "fsm" | "ft" | "fisip" | "feb" | "fh";

export default function Welcome() {
    const [selectedFakultas, setSelectedFakultas] = useState<FakultasKey | "">("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const fakultas = formData.get("fakultas");
        const jurusan = formData.get("jurusan");
        console.log("Submitted name:", name);
        console.log("Submitted fakultas:", fakultas);
        console.log("Submitted jurusan:", jurusan);
    }
    const fakultas: Record<FakultasKey, string> = {
        fsm: "Fakultas Sains dan Matematika",
        ft: "Fakultas Teknik",
        fisip: "Fakultas Ilmu Sosial dan Ilmu Politik",
        feb: "Fakultas Ekonomi dan Bisnis",
        fh: "Fakultas Hukum",
    };

    const jurusan: Record<FakultasKey, Record<string, string>> = {
        fsm: {
            matematika: "Matematika",
            fisika: "Fisika",
            kimia: "Kimia",
            biologi: "Biologi",
        },
        ft: {
            teknikSipil: "Teknik Sipil",
            teknikMesin: "Teknik Mesin",
            teknikElektro: "Teknik Elektro",
            teknikIndustri: "Teknik Industri",
        },
        fisip: {
            ilmuKomunikasi: "Ilmu Komunikasi",
            sosiologi: "Sosiologi",
            antropologi: "Antropologi",
            ilmuPolitik: "Ilmu Politik",
        },
        feb: {
            manajemen: "Manajemen",
            akuntansi: "Akuntansi",
            ekonomiPembangunan: "Ekonomi Pembangunan",
            ekonomiSyariah: "Ekonomi Syariah",
        },
        fh: {
            hukumPidana: "Hukum Pidana",
            hukumPerdata: "Hukum Perdata",
            hukumInternasional: "Hukum Internasional",
            hukumAdministrasiNegara: "Hukum Administrasi Negara",
        },
    };
    return (
        <>
            <Head title="Welcome" />
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                />
                <select
                    id="fakultas"
                    name="fakultas"
                    onChange={(e) => setSelectedFakultas(e.target.value as FakultasKey | "")}
                >
                    <option value="">Select Faculty</option>

                    {Object.entries(fakultas).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
                <select id="jurusan" name="jurusan">
                    <option value="">Select Major</option>

                    {selectedFakultas &&
                        Object.entries(jurusan[selectedFakultas]).map(
                            ([key, value]) => (
                                <option key={key} value={key}>
                                    {value}
                                </option>
                            ),
                        )}
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}