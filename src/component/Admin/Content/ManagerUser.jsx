
import ModalCreateUser from "./ModalCreateUser.jsx";
import '../Content/ManageUser.scss'
import { FcPlus } from "react-icons/fc"
import { useState, useEffect } from "react";
import Tables from "./Tables.jsx";
import ModalUpdateUser from "./ModalUpdateUser.jsx";
import { getAllUsers } from '../../sevices/apiService'

const ManagerUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [ListUsers, setListUsers] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});

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
        console.log("check user: ", user);
    }

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
                />
            </div>

        </div>
    );
}

export default ManagerUser;