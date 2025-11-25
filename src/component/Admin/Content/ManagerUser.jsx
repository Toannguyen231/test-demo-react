
import ModalCreateUser from "./ModalCreateUser.jsx";
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc"
import { useState, useEffect } from "react";
import Tables from "./Tables.jsx";
import ModalUpdateUser from "./ModalUpdateUser.jsx";
import { getAllUsers } from '../../sevices/apiService'
import ViewUser from '../Content/ViewUser.jsx'
import DeleteUser from "./DeleteUser.jsx";
const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showViewUser, setShowViewUser] = useState(false);
    const [showDeleteUser, setShowDeleteUser] = useState(false);
    const [ListUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    useEffect(() => {
        featchListUser();
    }, []);

    const featchListUser = async () => {
        let res = await getAllUsers();
        console.log("check list: ", res);
        if (res.data.EC === 0) {
            setListUsers(res.data.DT);
        }
    }

    const handleClinkBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user);
    }

    const handleViewBtnUpdate = (user) => {
        setShowViewUser(true);
        setDataUpdate(user);
    }

    const handleDeleteBtnUpdate = (user) => {
        setShowDeleteUser(true);
        console.log("check user delete: ", user);
        setDataDelete(user);
    }

    const resetUpdateUser = () => {
        setDataUpdate({});
    };

    return (

        <div className="manager-user-container">
            <div className="manager-user-header">
                <h2>Manager User</h2>
            </div>

            <div className="manager-user-main">
                <div className="manager-add-user">
                    <button className="add-user btn btn-primary" onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus />
                        Add new user
                    </button>
                </div>

                <div className="table-user-container">
                    <Tables
                        ListUsers={ListUsers}
                        handleClinkBtnUpdate={handleClinkBtnUpdate}
                        handleViewBtnUpdate={handleViewBtnUpdate}
                        handleDeleteBtnUpdate={handleDeleteBtnUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    featchListUser={featchListUser}
                />

                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    featchListUser={featchListUser}
                    resetUpdateUser={resetUpdateUser}
                />

                <ViewUser
                    show={showViewUser}
                    setShow={setShowViewUser}
                    dataUpdate={dataUpdate}
                    resetUpdateUser={resetUpdateUser}
                    featchListUser={featchListUser}
                />

                <DeleteUser
                    show={showDeleteUser}
                    setShow={setShowDeleteUser}
                    dataDelete={dataDelete}
                    resetUpdateUser={resetUpdateUser}
                    featchListUser={featchListUser}
                />
            </div>
        </div>
    );
}

export default ManagerUser;