import '../Quiz/ManageQuiz.scss'
import Select from 'react-select';
import { useState, useEffect } from 'react';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
import ModalViewQuiz from './ModalViewQuiz';
import { getAllQuizForAdmin } from '../../../sevices/apiService';
const ManageQuiz = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);
    const [showModalViewQuiz, setShowModalViewQuiz] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const [listQuiz, setListQuiz] = useState([]);
    const options = [
        { value: 'EASY', label: 'Chocolate' },
        { value: 'MEDIUM', label: 'Strawberry' },
        { value: 'HARD', label: 'Vanilla' },
    ];

    const hanleChangeFile = (event) => {

    }

    useEffect(() => {
        fetchListQuiz();
    }, []);

    const fetchListQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.data.EC === 0) {
            setListQuiz(res.data.DT);
        }
    }

    const handleShowViewQuiz = (quiz) => {
        setShowModalViewQuiz(true);
        setDataModal(quiz);
    }

    const resetDataModal = () => {
        setDataModal({});
    }

    return (
        <div className="q-container">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Manage Quiz</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">
                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add new quiz</legend>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your quiz name"
                                        value={name}
                                        onChange={(event) => { setName(event.target.value) }}
                                    />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={description}
                                        onChange={(event) => { setDescription(event.target.value) }}
                                    />
                                    <label >Description</label>
                                </div>
                                <div className="more-actions">
                                    <div className="my-3">
                                        <Select
                                            defaultValue={type}
                                            // onChange={setSelectedOption}
                                            options={options}
                                            placeholder="Quiz type..."
                                        />
                                    </div>
                                    <label className="mb-1">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(event) => { hanleChangeFile(event) }}
                                    />
                                    <div className="quiz-save">
                                        <button className="btn btn-warning mb-1 mt-3">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div clssName='list-details'>
                <TableQuiz
                    listQuiz={listQuiz}
                    setListQuiz={setListQuiz}
                    handleShowViewQuiz={handleShowViewQuiz}
                />
                <div>
                    <ModalViewQuiz
                        show={showModalViewQuiz}
                        setShow={setShowModalViewQuiz}
                        dataModal={dataModal}
                        resetViewDataModal={resetDataModal}
                    />
                </div>
            </div>


        </div>
    );
}

export default ManageQuiz;