import SideBar from "./sidebar";
import './Admin.scss'
import { FaBars } from 'react-icons/fa';
import React from 'react';
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setCollapsed] = React.useState(false);
    return (
        <div>
            <div className='admin-container'>
                <div className="admin-sidebar">
                    <SideBar collapsed={collapsed} />
                </div>
                <div className='admin-content'>
                    <FaBars className="admin-toggle-icon" onClick={() => !setCollapsed(!collapsed)} />
                    zkdjakd
                </div>
            </div>

        </div>
    );
}

export default Admin