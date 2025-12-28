import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import _ from 'lodash';
const ModalUpdateQuiz = (props) => {
    const { show, setShow, dataModal, resetUpdateDataModal } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const handleClose = () => {
        setName('');
        setDescription('');
        setQuizType('');
        setShow(false);
        props.resetUpdateDataModal();
    }

    useEffect(() => {
        if (show && !_.isEmpty(dataModal)) {
            setName(dataModal.name || '');
            setDescription(dataModal.description || '');
            setQuizType(dataModal.difficulty || '');
        }
    }, [show, dataModal]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputName4" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName4" value={name} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Type</label>
                            <select id="inputState" className="form-select" value={quizType}>
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Description</label>
                            <input type="text" className="form-control" id="inputAddress" value={description} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateQuiz;