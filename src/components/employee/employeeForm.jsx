import React from "react";
import useEmployeeForm from "../../hooks/useEmployeeForm";

export default function EmployeeForm({
    initialData,
    onSubmit: onSubmitSuccess,
    onCancel,
    isEditing,
    roleOptions,
}) {
    const { formData, errors, handleChange, handleSubmit } = useEmployeeForm({
        initialData,
        isEditing,
        onSubmitSuccess,
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-md-6">
                    <label
                        htmlFor="nama_lengkap"
                        className="form-label form-label-sm"
                    >
                        Nama Lengkap <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.nama_lengkap ? "is-invalid" : ""
                        }`}
                        name="nama_lengkap"
                        id="nama_lengkap"
                        value={formData.nama_lengkap}
                        onChange={handleChange}
                    />
                    {errors.nama_lengkap && (
                        <div className="invalid-feedback">
                            {errors.nama_lengkap}
                        </div>
                    )}
                </div>

                {/* NIK */}
                <div className="col-md-6">
                    <label htmlFor="nik" className="form-label form-label-sm">
                        NIK <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.nik ? "is-invalid" : ""
                        }`}
                        name="nik"
                        id="nik"
                        value={formData.nik}
                        onChange={handleChange}
                    />
                    {errors.nik && (
                        <div className="invalid-feedback">{errors.nik}</div>
                    )}
                </div>

                {/* Jenis Kelamin */}
                <div className="col-md-6">
                    <label
                        htmlFor="jenis_kelamin"
                        className="form-label form-label-sm"
                    >
                        Jenis Kelamin <span className="text-danger">*</span>
                    </label>
                    <select
                        className={`form-select form-select-sm ${
                            errors.jenis_kelamin ? "is-invalid" : ""
                        }`}
                        name="jenis_kelamin"
                        id="jenis_kelamin"
                        value={formData.jenis_kelamin}
                        onChange={handleChange}
                    >
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    {errors.jenis_kelamin && (
                        <div className="invalid-feedback">
                            {errors.jenis_kelamin}
                        </div>
                    )}
                </div>

                {/* Tempat Lahir */}
                <div className="col-md-6">
                    <label
                        htmlFor="tempat_lahir"
                        className="form-label form-label-sm"
                    >
                        Tempat Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.tempat_lahir ? "is-invalid" : ""
                        }`}
                        name="tempat_lahir"
                        id="tempat_lahir"
                        value={formData.tempat_lahir}
                        onChange={handleChange}
                    />
                    {errors.tempat_lahir && (
                        <div className="invalid-feedback">
                            {errors.tempat_lahir}
                        </div>
                    )}
                </div>

                {/* Tanggal Lahir */}
                <div className="col-md-6">
                    <label
                        htmlFor="tanggal_lahir"
                        className="form-label form-label-sm"
                    >
                        Tanggal Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                        type="date"
                        className={`form-control form-control-sm ${
                            errors.tanggal_lahir ? "is-invalid" : ""
                        }`}
                        name="tanggal_lahir"
                        id="tanggal_lahir"
                        value={formData.tanggal_lahir}
                        onChange={handleChange}
                    />
                    {errors.tanggal_lahir && (
                        <div className="invalid-feedback">
                            {errors.tanggal_lahir}
                        </div>
                    )}
                </div>

                {/* No. Telepon */}
                <div className="col-md-6">
                    <label
                        htmlFor="no_telepon"
                        className="form-label form-label-sm"
                    >
                        No. Telepon <span className="text-danger">*</span>
                    </label>
                    <input
                        type="tel"
                        className={`form-control form-control-sm ${
                            errors.no_telepon ? "is-invalid" : ""
                        }`}
                        name="no_telepon"
                        id="no_telepon"
                        value={formData.no_telepon}
                        onChange={handleChange}
                    />
                    {errors.no_telepon && (
                        <div className="invalid-feedback">
                            {errors.no_telepon}
                        </div>
                    )}
                </div>

                {/* Provinsi */}
                <div className="col-md-6">
                    <label
                        htmlFor="provinsi"
                        className="form-label form-label-sm"
                    >
                        Provinsi <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.provinsi ? "is-invalid" : ""
                        }`}
                        name="provinsi"
                        id="provinsi"
                        value={formData.provinsi}
                        onChange={handleChange}
                    />
                    {errors.provinsi && (
                        <div className="invalid-feedback">
                            {errors.provinsi}
                        </div>
                    )}
                </div>

                {/* Kota/Kabupaten */}
                <div className="col-md-6">
                    <label
                        htmlFor="kota_kabupaten"
                        className="form-label form-label-sm"
                    >
                        Kota/Kabupaten <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.kota_kabupaten ? "is-invalid" : ""
                        }`}
                        name="kota_kabupaten"
                        id="kota_kabupaten"
                        value={formData.kota_kabupaten || ""}
                        onChange={handleChange}
                    />
                    {errors.kota_kabupaten && (
                        <div className="invalid-feedback">
                            {errors.kota_kabupaten}
                        </div>
                    )}
                </div>

                {/* Kecamatan */}
                <div className="col-md-6">
                    <label
                        htmlFor="kecamatan"
                        className="form-label form-label-sm"
                    >
                        Kecamatan <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.kecamatan ? "is-invalid" : ""
                        }`}
                        name="kecamatan"
                        id="kecamatan"
                        value={formData.kecamatan}
                        onChange={handleChange}
                    />
                    {errors.kecamatan && (
                        <div className="invalid-feedback">
                            {errors.kecamatan}
                        </div>
                    )}
                </div>

                {/* Kelurahan */}
                <div className="col-md-6">
                    <label
                        htmlFor="kelurahan"
                        className="form-label form-label-sm"
                    >
                        Kelurahan <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.kelurahan ? "is-invalid" : ""
                        }`}
                        name="kelurahan"
                        id="kelurahan"
                        value={formData.kelurahan}
                        onChange={handleChange}
                    />
                    {errors.kelurahan && (
                        <div className="invalid-feedback">
                            {errors.kelurahan}
                        </div>
                    )}
                </div>

                {/* Detail Alamat */}
                <div className="col-12">
                    <label
                        htmlFor="detail_alamat"
                        className="form-label form-label-sm"
                    >
                        Detail Alamat <span className="text-danger">*</span>
                    </label>
                    <textarea
                        className={`form-control form-control-sm ${
                            errors.detail_alamat ? "is-invalid" : ""
                        }`}
                        name="detail_alamat"
                        id="detail_alamat"
                        value={formData.detail_alamat}
                        onChange={handleChange}
                        rows="2"
                    ></textarea>
                    {errors.detail_alamat && (
                        <div className="invalid-feedback">
                            {errors.detail_alamat}
                        </div>
                    )}
                </div>

                <hr className="my-3" />

                {/* Username */}
                <div className="col-md-6">
                    <label
                        htmlFor="username"
                        className="form-label form-label-sm"
                    >
                        Username <span className="text-danger">*</span>
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.username ? "is-invalid" : ""
                        }`}
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <div className="invalid-feedback">
                            {errors.username}
                        </div>
                    )}
                </div>

                {/* Email */}
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label form-label-sm">
                        Email <span className="text-danger">*</span>
                    </label>
                    <input
                        type="email"
                        className={`form-control form-control-sm ${
                            errors.email ? "is-invalid" : ""
                        }`}
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div className="col-md-6">
                    <label
                        htmlFor="password"
                        className="form-label form-label-sm"
                    >
                        Password{" "}
                        {!isEditing && <span className="text-danger">*</span>}
                        {isEditing && (
                            <small className="text-muted">
                                (Kosongkan jika tidak ingin diubah)
                            </small>
                        )}
                    </label>
                    <input
                        type="password"
                        className={`form-control form-control-sm ${
                            errors.password ? "is-invalid" : ""
                        }`}
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    {errors.password && (
                        <div className="invalid-feedback">
                            {errors.password}
                        </div>
                    )}
                </div>

                {/* Tipe/Role */}
                <div className="col-md-6">
                    <label htmlFor="tipe" className="form-label form-label-sm">
                        Tipe/Role <span className="text-danger">*</span>
                    </label>
                    <select
                        className={`form-select form-select-sm ${
                            errors.tipe ? "is-invalid" : ""
                        }`}
                        name="tipe"
                        id="tipe"
                        value={formData.tipe}
                        onChange={handleChange}
                    >
                        {roleOptions &&
                            roleOptions.map((role) => (
                                <option key={role.value} value={role.value}>
                                    {typeof role.label === "string"
                                        ? role.label.charAt(0).toUpperCase() +
                                          role.label.slice(1)
                                        : role.label}
                                </option>
                            ))}
                    </select>
                    {errors.tipe && (
                        <div className="invalid-feedback">{errors.tipe}</div>
                    )}
                </div>

                {/* Tanggal Mulai Kontrak */}
                <div className="col-md-6">
                    <label
                        htmlFor="tanggal_mulai_kontrak"
                        className="form-label form-label-sm"
                    >
                        Tgl Mulai Kontrak <span className="text-danger">*</span>
                    </label>
                    <input
                        type="date"
                        className={`form-control form-control-sm ${
                            errors.tanggal_mulai_kontrak ? "is-invalid" : ""
                        }`}
                        name="tanggal_mulai_kontrak"
                        id="tanggal_mulai_kontrak"
                        value={formData.tanggal_mulai_kontrak}
                        onChange={handleChange}
                    />
                    {errors.tanggal_mulai_kontrak && (
                        <div className="invalid-feedback">
                            {errors.tanggal_mulai_kontrak}
                        </div>
                    )}
                </div>

                {/* Tanggal Selesai Kontrak */}
                <div className="col-md-6">
                    <label
                        htmlFor="tanggal_selesai_kontrak"
                        className="form-label form-label-sm"
                    >
                        Tgl Selesai Kontrak{" "}
                        <span className="text-danger">*</span>
                    </label>
                    <input
                        type="date"
                        className={`form-control form-control-sm ${
                            errors.tanggal_selesai_kontrak ? "is-invalid" : ""
                        }`}
                        name="tanggal_selesai_kontrak"
                        id="tanggal_selesai_kontrak"
                        value={formData.tanggal_selesai_kontrak}
                        onChange={handleChange}
                    />
                    {errors.tanggal_selesai_kontrak && (
                        <div className="invalid-feedback">
                            {errors.tanggal_selesai_kontrak}
                        </div>
                    )}
                </div>

                {/* Status Menikah */}
                <div className="col-md-6">
                    <label
                        htmlFor="status_menikah"
                        className="form-label form-label-sm"
                    >
                        Status Menikah <span className="text-danger">*</span>
                    </label>
                    <select
                        className={`form-select form-select-sm ${
                            errors.status_menikah ? "is-invalid" : ""
                        }`}
                        name="status_menikah"
                        id="status_menikah"
                        value={formData.status_menikah}
                        onChange={handleChange}
                    >
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Menikah">Menikah</option>
                        <option value="Cerai Hidup">Cerai Hidup</option>
                        <option value="Cerai Mati">Cerai Mati</option>
                    </select>
                    {errors.status_menikah && (
                        <div className="invalid-feedback">
                            {errors.status_menikah}
                        </div>
                    )}
                </div>

                {/* Kode Dokter BPJS */}
                <div className="col-md-6">
                    <label
                        htmlFor="kode_dokter_bpjs"
                        className="form-label form-label-sm"
                    >
                        Kode Dokter BPJS
                    </label>
                    <input
                        type="text"
                        className={`form-control form-control-sm ${
                            errors.kode_dokter_bpjs ? "is-invalid" : ""
                        }`}
                        name="kode_dokter_bpjs"
                        id="kode_dokter_bpjs"
                        value={formData.kode_dokter_bpjs || ""}
                        onChange={handleChange}
                    />
                    {errors.kode_dokter_bpjs && (
                        <div className="invalid-feedback">
                            {errors.kode_dokter_bpjs}
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 d-flex justify-content-end">
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn btn-outline-secondary btn-sm me-2"
                >
                    Batal
                </button>
                <button
                    type="submit"
                    className={`btn btn-sm ${
                        isEditing ? "btn-warning" : "btn-success"
                    }`}
                >
                    {isEditing ? "Update Data" : "Simpan Data Baru"}
                </button>
            </div>
        </form>
    );
}
