import React from "react";

export default function EmployeeList({ employees, onEdit }) {
    if (!employees || employees.length === 0) {
        return (
            <div className="alert alert-info text-center mt-3" role="alert">
                Tidak ada data karyawan yang cocok dengan pencarian Anda.
            </div>
        );
    }

    return (
        <div className="list-group">
            {employees.map((emp) => (
                <div
                    key={emp.id}
                    className="list-group-item list-group-item-action py-3 px-3 px-md-4 mb-2 border rounded shadow-sm" // Added shadow and more padding
                >
                    <div className="row align-items-center">
                        <div className="col-12 col-md-8 col-lg-9 mb-2 mb-md-0">
                            <h5 className="mb-1 text-dark">
                                {emp.nama_lengkap}
                            </h5>
                            <p className="mb-1 text-muted">
                                <i className="bi bi-briefcase-fill me-2"></i>
                                Tipe: {emp.tipe || "-"}
                            </p>
                            <p className="mb-0">
                                <i
                                    className={`bi bi-circle-fill me-2 text-${
                                        emp.status === "aktif"
                                            ? "success"
                                            : "danger"
                                    }`}
                                    style={{ fontSize: "0.8em" }}
                                ></i>
                                Status:{" "}
                                <span
                                    className={`fw-bold text-capitalize text-${
                                        emp.status === "aktif"
                                            ? "success"
                                            : "danger"
                                    }`}
                                >
                                    {emp.status || "Tidak Diketahui"}
                                </span>
                            </p>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3 text-md-end">
                            <button
                                onClick={() => onEdit(emp)}
                                className="btn btn-outline-primary btn-sm w-100 w-md-auto"
                                aria-label={`Edit ${emp.nama_lengkap}`}
                            >
                                <i className="bi bi-pencil-square me-1"></i>{" "}
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
