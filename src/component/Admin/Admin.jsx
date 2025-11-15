import SideBar from "./sidebar";
import './Admin.scss'
import { FaBars } from 'react-icons/fa';
import React from 'react';
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <div>
            <div className='admin-container'>
                <div className="admin-sidebar">
                    <SideBar collapsed={collapsed} />
                </div>
                <div className='admin-content'>
                    <div className="admin-header">
                        <FaBars className="admin-toggle-icon" onClick={() => !setCollapsed(!collapsed)} />
                    </div>
                    <div className="admin-main">
                        <Outlet />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Admin