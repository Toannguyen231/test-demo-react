import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../sevices/apiService';
import { toast } from 'react-toastify';

const DeleteUser = (props) => {
    const { show, setShow, dataUpdate, featchListUserWithPage, resetUpdateUser, dataDelete, currentPage, setCurrentPage } = props;
    const [loading, setLoading] = useState(false);
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

    const hanleClickConfirm = async () => {

        let res = await deleteUser(dataDelete.id);

        if (res && res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
            //clear form
            if (setCurrentPage) setCurrentPage(1);
            await props.featchListUserWithPage(1);
        } else {
            toast.error(res.data.EM);
        }
    }

    return (
        <>
            <Modal
                show={!!show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure want to delete this user. email: <b>{dataDelete && dataDelete.email ? dataDelete.email : ''}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} disabled={loading}>
                        Cancel
                    </Button>
                    <Button variant="danger" disabled={loading} onClick={hanleClickConfirm}>
                        {loading ? 'Deleting...' : 'Confirm'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteUser;