import { useState, useEffect } from "react";
import EmployeeListCard from "../components/employee/employeeListCard";
import EmployeeFormCard from "../components/employee/employeeFormCard";
import useEmployeeData from "../hooks/useEmployeeData";
import useEmployeeFiltering from "../hooks/useEmployeeFilter";
import employeeService from "../utils/employeeService";

const fetchRoleOptions = async () => {
    return [
        { value: "manager", label: "Manager" },
        { value: "admin", label: "Admin" },
        { value: "resepsionis", label: "Resepsionis" },
        { value: "manajemen", label: "Manajemen" },
        { value: "finance", label: "Finance" },
        { value: "kasir", label: "Kasir" },
        { value: "purchasing", label: "Purchasing" },
        { value: "perawat", label: "Perawat" },
        { value: "bidan", label: "Bidan" },
        { value: "dokter", label: "Dokter" },
        { value: "lainnya", label: "Lainnya" },
    ];
};

export default function EmployeePage() {
    const [formMode, setFormMode] = useState(null);
    const [currentEmployeeData, setCurrentEmployeeData] = useState(null);
    const [roleOptions, setRoleOptions] = useState([]);
    const scrollableAreaHeight = "calc(100vh - 200px)";

    const { employees, isLoading, error, fetchEmployees } = useEmployeeData();
    const {
        filteredEmployees,
        searchValue,
        setSearchValue,
        status,
        setStatus,
    } = useEmployeeFiltering(employees);

    useEffect(() => {
        const getRoles = async () => {
            const roles = await fetchRoleOptions();
            setRoleOptions(roles);
        };

        getRoles();
    }, []);

    const handleAddClick = () => {
        setFormMode("add");
        setCurrentEmployeeData(null);
    };

    const handleEditClick = (employee) => {
        setFormMode("edit");
        setCurrentEmployeeData(employee);
    };

    const handleCloseForm = () => {
        setFormMode(null);
        setCurrentEmployeeData(null);
    };

    const handleSubmitForm = async (employeeData) => {
        try {
            if (formMode === "add") {
                await employeeService.addEmployee(employeeData);
            } else if (formMode === "edit" && currentEmployeeData?.id) {
                await employeeService.updateEmployee(
                    currentEmployeeData.id,
                    employeeData
                );
            }
            fetchEmployees();
            handleCloseForm();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    if (isLoading) {
        return <div>Loading employees...</div>;
    }
    if (error) {
        return <div>Error loading employees: {error}</div>;
    }
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-5">
                    <EmployeeListCard
                        employees={filteredEmployees}
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                        status={status}
                        onStatusChange={setStatus}
                        onAddAction={handleAddClick}
                        onEditAction={handleEditClick}
                        scrollableAreaHeight={scrollableAreaHeight}
                    />
                </div>
                <div className="col-md-7">
                    <EmployeeFormCard
                        formMode={formMode}
                        currentEmployeeData={currentEmployeeData}
                        onSubmitForm={handleSubmitForm}
                        onCloseForm={handleCloseForm}
                        roleOptions={roleOptions}
                        scrollableAreaHeight={scrollableAreaHeight}
                    />
                </div>
            </div>
        </div>
    );
}
