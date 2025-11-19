import SideBar from "./sidebar";
import './Admin.scss'
import { FaBars } from 'react-icons/fa';
import React from 'react';
import { Outlet } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                        <FaBars className="admin-toggle-icon" onClick={() => setCollapsed(!collapsed)} />
                    </div>
                    <div className="admin-main">
                        <Outlet />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}

export default Admin