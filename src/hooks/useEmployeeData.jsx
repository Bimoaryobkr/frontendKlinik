import { useState, useEffect, useCallback } from "react";
import employeeService from "../utils/employeeService";

const useEmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await employeeService.fetchEmployees();
      setEmployees(data);
    } catch (e) {
      console.error("Failed to fetch employees:", e);
      setError(e.message || "Gagal memuat data karyawan. Silakan coba lagi.");
      setEmployees([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return { employees, isLoading, error, fetchEmployees };
};

export default useEmployeeData;