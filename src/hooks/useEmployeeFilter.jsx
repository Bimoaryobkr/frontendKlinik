import { useState, useEffect } from "react";

const useEmployeeFiltering = (employees) => {
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [status, setStatus] = useState("semua");

  useEffect(() => {
    let result = employees;
    if (status !== "semua") {
      result = result.filter((emp) => emp.status === status);
    }
    if (searchValue) {
      result = result.filter(
        (emp) =>
          emp.nama_lengkap.toLowerCase().includes(searchValue.toLowerCase()) ||
          (emp.tipe &&
            emp.tipe.toLowerCase().includes(searchValue.toLowerCase()))
      );
    }
    setFilteredEmployees(result);
  }, [employees, searchValue, status]);

  return { filteredEmployees, searchValue, setSearchValue, status, setStatus };
};

export default useEmployeeFiltering;