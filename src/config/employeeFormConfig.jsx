import * as yup from "yup";

export const defaultFormData = {
    nama_lengkap: "",
    nik: "",
    jenis_kelamin: "Laki-laki",
    tempat_lahir: "",
    tanggal_lahir: "",
    no_telepon: "",
    provinsi: "",
    kota_kabupaten: "",
    kecamatan: "",
    kelurahan: "",
    detail_alamat: "",
    username: "",
    email: "",
    password: "",
    tipe: "lainnya",
    tanggal_mulai_kontrak: "",
    tanggal_selesai_kontrak: "",
    status_menikah: "Belum Menikah",
    kode_dokter_bpjs: "",
};

export const createEmployeeSchema = yup.object().shape({
    nama_lengkap: yup.string().required("Nama lengkap harus diisi"),
    nik: yup.string().required("NIK harus diisi"),
    jenis_kelamin: yup
        .string()
        .oneOf(["Laki-laki", "Perempuan"])
        .required("Jenis kelamin harus diisi"),
    tempat_lahir: yup.string().required("Tempat lahir harus diisi"),
    tanggal_lahir: yup
        .date()
        .required("Tanggal lahir harus diisi")
        .typeError("Format tanggal lahir tidak valid"),
    no_telepon: yup.string().required("No telepon harus diisi"),
    provinsi: yup.string().required("Provinsi harus diisi"),
    kota_kabupaten: yup.string().required("Kota/kabupaten harus diisi"),
    kecamatan: yup.string().required("Kecamatan harus diisi"),
    kelurahan: yup.string().required("Kelurahan harus diisi"),
    detail_alamat: yup.string().required("Detail alamat harus diisi"),
    username: yup.string().required("Username harus diisi"),
    email: yup
        .string()
        .email("Format email tidak valid")
        .required("Email harus diisi"),
    password: yup
        .string()
        .min(8, "Password minimal 8 karakter")
        .required("Password harus diisi"),
    tipe: yup.string().required("Tipe (role) harus diisi"),
    tanggal_mulai_kontrak: yup
        .date()
        .required("Tanggal mulai kontrak harus diisi")
        .typeError("Format tanggal mulai kontrak tidak valid"),
    tanggal_selesai_kontrak: yup
        .date()
        .required("Tanggal selesai kontrak harus diisi")
        .typeError("Format tanggal selesai kontrak tidak valid"),
    status_menikah: yup.string().required("Status menikah harus diisi"),
    kode_dokter_bpjs: yup.string().nullable(),
});

export const updateEmployeeSchema = yup.object().shape({
    nama_lengkap: yup.string().optional(),
    nik: yup.string().optional(),
    jenis_kelamin: yup.string().oneOf(["Laki-laki", "Perempuan"]).optional(),
    tempat_lahir: yup.string().optional(),
    tanggal_lahir: yup
        .date()
        .optional()
        .typeError("Format tanggal lahir tidak valid"),
    no_telepon: yup.string().optional(),
    provinsi: yup.string().optional(),
    kota_kabupaten: yup.string().optional(),
    kecamatan: yup.string().optional(),
    kelurahan: yup.string().optional(),
    detail_alamat: yup.string().optional(),
    username: yup.string().optional(),
    email: yup.string().email("Format email tidak valid").optional(),
    password: yup
        .string()
        .min(8, "Password minimal 8 karakter")
        .transform((value) => (value === "" ? undefined : value))
        .optional()
        .nullable(),
    tipe: yup.string().optional(),
    tanggal_mulai_kontrak: yup
        .date()
        .optional()
        .typeError("Format tanggal mulai kontrak tidak valid"),
    tanggal_selesai_kontrak: yup
        .date()
        .optional()
        .typeError("Format tanggal selesai kontrak tidak valid"),
    status_menikah: yup.string().optional(),
    kode_dokter_bpjs: yup.string().optional().nullable(),
});
