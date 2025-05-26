"use client";

import SearchBar from "./searchBar";
import FilterStatus from "./statusFilter";
import EmployeeList from "./employeeList";

export default function EmployeeListCard({
    employees,
    searchValue,
    onSearchChange,
    status,
    onStatusChange,
    onAddAction,
    onEditAction,
    scrollableAreaHeight,
}) {
    return (
        <div className="employee_card card shadow-sm h-100">
            <div className="card-header bg-light">
                <h5 className="mb-0">Daftar Karyawan</h5>
            </div>
            <div className="card-body d-flex flex-column">
                <SearchBar
                    searchTerm={searchValue}
                    onSearchChange={onSearchChange}
                />
                <div className="d-flex justify-content-between align-items-center my-3">
                    <button
                        onClick={onAddAction}
                        className="btn btn-secondary btn-sm"
                    >
                        <i className="bi bi-plus-circle me-1"></i> Tambah Data
                    </button>
                    <FilterStatus
                        status={status}
                        onStatusChange={onStatusChange}
                    />
                </div>
                <div
                    className="flex-grow-1"
                    style={{
                        overflowY: "auto",
                        minHeight: "200px",
                        maxHeight: scrollableAreaHeight,
                    }}
                >
                    <EmployeeList employees={employees} onEdit={onEditAction} />
                </div>
            </div>
        </div>
    );
}
