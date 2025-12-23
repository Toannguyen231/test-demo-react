import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult, setDataModalResult } = props;
    const handleClose = () => setShow(false);
    // const handleConfirm = async () => {
    //     if (!dataDelete || !dataDelete.id) {
    //         toast.error('No user selected');
    //         return;
    //     }
    //     try {
    //         setLoading(true);
    //         const res = await deleteUser(dataDelete.id);
    //         if (res && res.data && res.data.EC === 0) {
    //             toast.success(res.data.EM);
    //             handleClose();
    //             if (featchListUser) await featchListUser();
    //             if (resetUpdateUser) resetUpdateUser();
    //         } else {
    //             toast.error(res?.data?.EM || 'Delete failed');
    //         }
    //     } catch (err) {
    //         console.error('Delete user error', err);
    //         toast.error('Error deleting user');
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    return (
        <>
            <Modal
                show={!!show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Your result: </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Question: <b>{dataModalResult.countTotal}</b></div>
                    <div>Total Correct: <b>{dataModalResult.countCorrect}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Show answers
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalResult;