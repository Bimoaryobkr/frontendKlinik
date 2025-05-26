import EmployeeForm from "./employeeForm";

export default function EmployeeFormCard({
    formMode,
    currentEmployeeData,
    onSubmitForm,
    onCloseForm,
    roleOptions,
    scrollableAreaHeight,
}) {
    if (!formMode) {
        return (
            <div className="form_card card shadow-sm w-100">
                <div
                    className="card-body text-center text-muted"
                    style={{
                        minHeight: "200px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <p className="mb-0">
                        Klik "Tambah Data" atau "Edit" pada salah satu employee
                        untuk menampilkan form.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-light">
                <h5 className="mb-0">
                    {formMode === "edit"
                        ? "Edit Karyawan"
                        : "Tambah Karyawan Baru"}
                </h5>
            </div>
            <div
                className="card-body"
                style={{ overflowY: "auto", maxHeight: scrollableAreaHeight }}
            >
                <EmployeeForm
                    key={
                        formMode === "edit" && currentEmployeeData
                            ? currentEmployeeData.id
                            : "add-new"
                    }
                    initialData={currentEmployeeData}
                    onSubmit={onSubmitForm}
                    onCancel={onCloseForm}
                    isEditing={formMode === "edit"}
                    roleOptions={roleOptions}
                />
            </div>
        </div>
    );
}
