import React, { useEffect, useState } from "react";
import { getAllUsers } from '../../sevices/apiService'

const Tables = () => {

    const [ListUsers, setListUsers] = useState([]);

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

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">User name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {ListUsers && ListUsers.length > 0 &&
                    ListUsers.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-warning mx-3">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
                {ListUsers.length === 0 && ListUsers &&
                    <tr>
                        <td colSpan={4} style={{ textAlign: 'center' }}>No data</td>
                    </tr>
                }
            </tbody>
        </table>
    );
}

export default Tables;