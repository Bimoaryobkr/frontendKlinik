import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(
        window.innerWidth >= 992
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (location.pathname === "/login") {
        return <Outlet />;
    }

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (
        <div
            className={`main-layout-container ${
                isSidebarOpen ? "sidebar-open" : "sidebar-closed"
            }`}
        >
            <Navbar
                onToggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
            />
            <div className="main-layout-content-wrapper">
                <Sidebar />{" "}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
