import { useState, useEffect } from "react";
import {
    defaultFormData,
    createEmployeeSchema,
    updateEmployeeSchema,
} from "../config/employeeFormConfig";

export default function useEmployeeForm({
    initialData,
    isEditing,
    onSubmitSuccess,
}) {
    const [formData, setFormData] = useState(defaultFormData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEditing && initialData) {
            const dataToEdit = { ...initialData };
            delete dataToEdit.password;
            setFormData({ ...defaultFormData, ...dataToEdit, password: "" });
        } else if (!isEditing) {
            setFormData(defaultFormData);
        }
        setErrors({});
    }, [initialData, isEditing]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
        }
    };

    const validateForm = async () => {
        const schemaToValidate = isEditing
            ? updateEmployeeSchema
            : createEmployeeSchema;
        try {
            const validatedData = await schemaToValidate.validate(formData, {
                abortEarly: false,
            });
            setErrors({});
            return validatedData;
        } catch (validationError) {
            const newErrors = {};
            validationError.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });
            setErrors(newErrors);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validatedData = await validateForm();

        if (validatedData) {
            if (isEditing && validatedData.password === "") {
                delete validatedData.password;
            }
            onSubmitSuccess(validatedData);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        setFormData,
        setErrors,
    };
}
