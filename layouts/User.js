import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function User({ children }) {
    return (
        <div className=''>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                <div className="px-4 md:px-10 mx-auto w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
