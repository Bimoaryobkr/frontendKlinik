import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, iconClass, text }) => (
    <li className="nav-item">
        <NavLink
            to={to}
            className={({ isActive }) =>
                `nav-link app-sidebar-link text-secondary ${
                    isActive ? "active" : ""
                }`
            }
        >
            <div className="app-sidebar-icon-wrapper">
                <i className={`bi ${iconClass}`}></i>
            </div>
            <span className="app-sidebar-text">{text}</span>
        </NavLink>
    </li>
);

export default function Sidebar() {
    const menuItems = [
        { to: "/dashboard", iconClass: "bi-grid-1x2-fill", text: "Dashboard" },
        { to: "/employees", iconClass: "bi-people-fill", text: "Karyawan" },
        {
            to: "/purchasing",
            iconClass: "bi-cart-check-fill",
            text: "Purchasing",
        },
        { to: "/cashier", iconClass: "bi-cash-coin", text: "Kasir" },
        {
            to: "/visits",
            iconClass: "bi-calendar2-check-fill",
            text: "Kunjungan",
        },
        {
            to: "/services",
            iconClass: "bi-file-earmark-medical-fill",
            text: "Pelayanan",
        },
    ];

    return (
        <aside className="app-sidebar">
            <ul className="nav flex-column">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.to}
                        to={item.to}
                        iconClass={item.iconClass}
                        text={item.text}
                    />
                ))}
            </ul>
        </aside>
    );
}
