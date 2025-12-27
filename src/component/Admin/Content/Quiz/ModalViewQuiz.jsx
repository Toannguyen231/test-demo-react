import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

const ModalViewQuiz = (props) => {
    const { show, setShow, dataModal, resetViewDataModal } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');

    const handleClose = () => {
        setName('');
        setDescription('');
        setQuizType('');
        setShow(false);
        props.resetViewDataModal();
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
                    <Modal.Title>View Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputName4" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName4" value={name} disabled />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Type</label>
                            <select id="inputState" className="form-select" value={quizType} disabled>
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Description</label>
                            <input type="text" className="form-control" id="inputAddress" value={description} disabled />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewQuiz;