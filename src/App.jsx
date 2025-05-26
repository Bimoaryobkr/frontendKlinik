import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import EmployeePage from "./pages/employeePage";
import LoginPage from "./pages/loginPage";
import MainLayout from "./layout/mainLayout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Navigate to="/employees" />} />
                    <Route path="/employees" element={<EmployeePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
