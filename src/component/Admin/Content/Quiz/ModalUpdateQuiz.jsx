import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import _ from 'lodash';
import './ModalViewQuiz.scss'
import { FcPlus } from "react-icons/fc"
import { putUpdateQuiz } from '../../../sevices/apiService'
import { toast } from "react-toastify";
import '../Quiz/ModalUpdateQuiz.scss'

const ModalUpdateQuiz = (props) => {
    const { show, setShow, dataModal, resetUpdateDataModal, fetchListQuiz } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quizType, setQuizType] = useState('');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const handleClose = () => {
        setName('');
        setDescription('');
        setQuizType('');
        setImage(null);
        setPreviewImage('');
        setShow(false);
        props.resetUpdateDataModal();
    }

    const HandleUploadImage = (event) => {
        const file = event.target && event.target.files && event.target.files[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]); // blob url
        } else {
            setImage(null);
            setPreviewImage('');
        }
    };

    const handleSaveUpdateQuiz = async () => {
        //call api update quiz  
        let res = await putUpdateQuiz(
            dataModal.id,
            description,
            name,
            quizType,
            image
        );
        if (res && res.data.EC === 0) {
            toast.success("Update quiz succeed!");
            handleClose();
            props.fetchListQuiz();
        }
        else {
            toast.error("Update quiz failed!");
            handleClose();
        }
    }


    useEffect(() => {
        if (show && !_.isEmpty(dataModal)) {
            setName(dataModal.name || '');
            setDescription(dataModal.description || '');
            setQuizType(dataModal.difficulty || '');
            if (dataModal.image) {
                setPreviewImage(`data:image/png;base64,${dataModal.image}`);
            } else {
                setPreviewImage('');
            }

            setImage(null); // chưa chọn ảnh mới
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
                    <Modal.Title>Update Quiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputName4" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName4"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Type</label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={quizType}
                                onChange={(e) => setQuizType(e.target.value)}
                            >
                                <option value="EASY">Easy</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HARD">Hard</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='col-md-16'>
                            <label className="label-upload" htmlFor='upload-photo'>
                                <FcPlus />
                                Upload file image
                            </label>
                            <input type="file" id='upload-photo' hidden
                                onChange={(event) => HandleUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 d-flex justify-content-center'>
                            {
                                previewImage ?
                                    <img src={previewImage}
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
                    <Button variant="primary" onClick={handleSaveUpdateQuiz}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateQuiz;