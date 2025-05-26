import React from "react";

export default function Navbar({ onToggleSidebar, isSidebarOpen }) {
    return (
        <nav className="app-navbar navbar navbar-expand-lg fixed-top shadow-sm">
            <div className="container-fluid">
                <button
                    className="navbar-toggler d-lg-none me-2"
                    type="button"
                    onClick={onToggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    <i
                        className={`bi ${
                            isSidebarOpen ? "bi-x-lg" : "bi-list"
                        }`}
                    ></i>
                </button>

                <span className="navbar-brand text-dark mb-0 h1 d-none d-lg-inline-block">
                    <i className="bi bi-hospital me-2"></i>
                    KlinikTraining
                </span>

                <div className="d-lg-none flex-grow-1"></div>
                <div className="d-flex align-items-center ms-auto">
                    <span className="navbar-text text-dark fw-semibold">
                        Hi, User!
                    </span>
                </div>
            </div>
        </nav>
    );
}
