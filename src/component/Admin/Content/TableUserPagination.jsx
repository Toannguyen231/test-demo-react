import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


const TableUserPagination = (props) => {
    const { ListUsers, handleClinkBtnUpdate, handleViewBtnUpdate,
        handleDeleteBtnUpdate, featchListUserWithPage, totalPages } = props;

    const handlePageClick = (event) => {
        const page = event.selected + 1; // API của bạn bắt đầu từ 1
        featchListUserWithPage(page);
    };
    return (
        <div>
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
                                        <button className="btn btn-secondary" onClick={() => handleViewBtnUpdate(item)}>View</button>
                                        <button className="btn btn-warning mx-3" onClick={() => handleClinkBtnUpdate(item)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteBtnUpdate(item)}>Delete</button>
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
            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageClick}
                breakLabel="..."
                nextLabel="next >"
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                disabledClassName="disabled"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    );
};

export default TableUserPagination;