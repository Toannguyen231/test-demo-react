import React from "react";
import ModalCreateUser from "./ModalCreateUser.jsx";
const ManagerUser = (props) => {

    return (
        <div className="manager-user-container">
            <div className="manager-user-header">
                <h2>Manager User</h2>
            </div>

            <div className="manager-user-main">
                <div>
                    <button className="add-user">Add User</button>
                </div>

                <div>
                    table users
                    <ModalCreateUser />
                </div>
            </div>

        </div>
    );
}

export default ManagerUser;