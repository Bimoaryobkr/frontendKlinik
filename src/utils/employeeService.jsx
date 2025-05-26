/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

const employeeService = {
    async fetchEmployees() {
        const response = await fetch(`${API_BASE_URL}/employees`);
        if (!response.ok) {
            let errorMsg = `HTTP error! status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMsg = errorData.message || errorData.error || errorMsg;
            } catch (e) {}
            throw new Error(errorMsg);
        }
        return response.json();
    },

    async addEmployee(employeeData) {
        const response = await fetch(`${API_BASE_URL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) {
            let errorMsg = `Gagal menambahkan data. Status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMsg = errorData.message || errorData.error || errorMsg;
            } catch (e) {}
            throw new Error(errorMsg);
        }
        return response.json();
    },

    async updateEmployee(employeeId, employeeData) {
        const response = await fetch(
            `${API_BASE_URL}/employees/${employeeId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeeData),
            }
        );
        if (!response.ok) {
            let errorMsg = `Gagal memperbarui data. Status: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMsg = errorData.message || errorData.error || errorMsg;
            } catch (e) {}
            throw new Error(errorMsg);
        }
        return response.json();
    },
};

export default employeeService;
