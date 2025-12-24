import '../Quiz/ManageQuiz.scss'
import Select from 'react-select';
import { useState } from 'react';
const ManageQuiz = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);

    const options = [
        { value: 'EASY', label: 'Chocolate' },
        { value: 'MEDIUM', label: 'Strawberry' },
        { value: 'HARD', label: 'Vanilla' },
    ];

    const hanleChangeFile = (event) => {

    }
    return (
        <div className="q-container">
            <div className="tittle">
                Manage Quiz
            </div>
            <hr />
            <div className="add-new">
                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px-3">Add new quiz</legend>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Your quiz name"
                            value={name}
                            onChange={(event) => { setName(event.target.value) }}
                        />
                        <label>Name</label>
                    </div>
                    <div class="form-floating">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Description"
                            value={name}
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

                    </div>
                </fieldset>
            </div>
            <div className='list-details'>
                table
            </div>
        </div>
    );
}

export default ManageQuiz;