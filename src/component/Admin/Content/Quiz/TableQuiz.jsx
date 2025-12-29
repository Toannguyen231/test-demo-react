import { useState, useEffect } from 'react';


const TableQuiz = (props) => {

    const { handleShowViewQuiz, listQuiz, setListQuiz, handleShowUpdateQuiz, hanldeShowDeleteQuiz } = props;

    return (
        <>
            <table className="table table-hover table-bordered mt-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td>
                                        <button className="btn btn-secondary" onClick={() => handleShowViewQuiz(item)}>View</button>
                                        <button className="btn btn-warning mx-3" onClick={() => handleShowUpdateQuiz(item)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => hanldeShowDeleteQuiz(item)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    {listQuiz.length === 0 &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>No data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableQuiz;