import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postCreateUser } from '../../sevices/apiService'
import _ from "lodash";
function ModalUpdateUser(props) {
    const { show, setShow, dataUpdate } = props;

    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage(null);
        setPreviewImage('');
    };
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("check updata: ", dataUpdate);
        if (!_.isEmpty(dataUpdate)) {
            //update state
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            setImage(null);
            if (dataUpdate.image)
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);

        }
    }, [dataUpdate])

    function HandleUploadImage(event) {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
        else {
            setPreviewImage('');
            setImage(null);
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const handleSubmitCreateUser = async () => {
        //validate 
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email address');
            return;
        }

        if (!password) {
            toast.error('Password cannot be empty');
            return;
        }

        //api create user

        // let data = {
        //     email: email,
        //     password: password,
        //     username: username,
        //     role: role,
        //     userImage: image
        // }

        let res = await postCreateUser(email, password, username, role, image);
        console.log('Response from create user:', res);

        if (res && res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            handleClose();
            //clear form
        } else {
            toast.error(res.data.EM);
        }
    }

    useEffect(() => {
        console.log('Preview image updated:', previewImage);
    }, [previewImage]);


    return (
        <>
            {/* <Button variant="primary" onClick={handleShow} id="add-user-button">
                Launch demo modal
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a use</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input
                                type="email"
                                id="inputEmail4"
                                className="form-control"
                                value={email}
                                disabled
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="password" id="inputPassword4" className="form-control" value={password} disabled onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <input type="text" id="inputUsername" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="label-upload" htmlFor='upload-photo'>
                                <FcPlus />
                                Upload file image
                            </label>
                            <input type="file" id='upload-photo' hidden
                                onChange={HandleUploadImage}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                previewImage ?
                                    <img src={previewImage} alt="Preview" />
                                    :
                                    <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitCreateUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;