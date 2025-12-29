import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteQuiz } from '../../../sevices/apiService';
import { toast } from 'react-toastify';
const ModalDelete = (props) => {
    const { show, setShow, dataModal, resetDeleteDataModal, fetchListQuiz, dataDelete, setDataDelete } = props;

    const handleClose = () => {
        setShow(false);
        resetDeleteDataModal();
    }

    const hanleClickConfirm = async () => {

        let res = await deleteQuiz(dataDelete.id)
        console.log(">>> check res delete quiz: ", res);
        if (res && res.data && res.data.EC === 0) {
            toast.success("delete quiz succeed");
            handleClose();
            //clear form
            await props.fetchListQuiz();
        } else {
            toast.error("delete quiz failed");
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete this quiz. name: {dataDelete.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={hanleClickConfirm} className='btn-error'>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete;