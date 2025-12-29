import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import './ModalViewQuiz.scss'
import { FcPlus } from "react-icons/fc"
const ModalViewQuiz = (props) => {
    const { show, setShow, dataModal, resetViewDataModal } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const [image, setImage] = useState(null);

    const handleClose = () => {
        setName('');
        setDescription('');
        setQuizType('');
        setImage(null);
        setShow(false);
        props.resetViewDataModal();
    }

    useEffect(() => {
        if (show && !_.isEmpty(dataModal)) {
            setName(dataModal.name || '');
            setDescription(dataModal.description || '');
            setQuizType(dataModal.difficulty || '');
            setImage(dataModal.image || null);
        }
    }, [show, dataModal]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
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
                            <label htmlFor="inputDescription" className="form-label">Description</label>
                            <input type="text" className="form-control" id="inputDescription" value={description} disabled />
                        </div>
                        <div className='col-md-16'>
                            <label className="label-upload" htmlFor='upload-photo'>
                                <FcPlus />
                                Upload file image
                            </label>
                            <input type="file" id='upload-photo' hidden
                                disabled
                            />
                        </div>
                        <div className='col-md-12 d-flex justify-content-center '>
                            {
                                image ?
                                    <img src={`data:image/png;base64,${image}`}
                                        alt="Image Quiz"
                                        style={{ maxWidth: '600px', height: 'auto' }}
                                        className="img-preview"
                                    />
                                    :
                                    <span>Image Quiz</span>
                            }
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