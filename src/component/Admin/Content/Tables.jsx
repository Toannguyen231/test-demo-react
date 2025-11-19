
const Tables = (props) => {

    const { ListUsers, handleClinkBtnUpdate } = props;

    return (
        <table className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
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
                            <tr key={`table-user-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-secondary">View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => handleClinkBtnUpdate(item)}>Update</button>
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