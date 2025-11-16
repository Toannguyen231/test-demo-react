import React from "react";
import ModalCreateUser from "./ModalCreateUser.jsx";
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc"
import { useState } from "react";
import Tables from "./Tables.jsx";
const ManagerUser = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (

        <div className="manager-user-container">
            <div className="manager-user-header">
                <h2>Manager User</h2>
            </div>

            <div className="manager-user-main">
                <div className="manager-add-user">
                    <button className="add-user btn btn-primary" onClick={() => setShowModal(true)}>
                        <FcPlus />
                        Add new user
                    </button>
                </div>

                <div className="table-user-container">
                    <Tables />
                </div>
                <ModalCreateUser
                    show={showModal}
                    setShow={setShowModal}
                />
            </div>

        </div>
    );
}

export default ManagerUser;