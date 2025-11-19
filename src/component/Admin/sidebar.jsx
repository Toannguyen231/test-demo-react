import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import sidebarBg from '../../accets/bg2.jpg';
import {
    FaTachometerAlt,
    FaRegLaughWink,
    FaGithub,
} from 'react-icons/fa';
import { GiAllSeeingEye } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';


const SideBar = ({ image = true, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={image ? sidebarBg : false}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <div>
                            <GiAllSeeingEye size="3rem" style={{ marginRight: '3px' }} />
                            <span>Ngoc Toan</span>
                        </div>

                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            DashBoard
                            <Link to="/admin" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            icon={<FaRegLaughWink />}
                            title='Features'
                        >
                            <MenuItem>
                                Quản lý User
                                <Link to="/admin/manageruser" />
                            </MenuItem>
                            <MenuItem>Quản lý bài Quiz</MenuItem>
                            <MenuItem>Quản lý câu hỏi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/Toannguyen231"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                ToanNguyen231
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
}

export default SideBar