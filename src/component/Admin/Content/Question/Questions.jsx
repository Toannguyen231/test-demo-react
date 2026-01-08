import Select from 'react-select';
import { useState } from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { LuSquareMinus } from "react-icons/lu";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import './Questions.scss';
const Questions = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState({});
    return (
        <div className="questions-container">
            <div className="title">
                Manage Questions
            </div>
            <div className="add-new-question">
                <div className='col-6 from-group'>
                    <label>Select Quiz: </label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>
                <div className='mt-3'>Add quesitons:</div>
                <div>
                    <div className='questions-content'>
                        <div className="form-floating description">
                            <input class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Descriptions</label>
                        </div>
                        <div className="group-upload">
                            <label className="label-up">Upload File</label>
                            <input type={"file"} hidden />
                            <span>0 file is uploaded</span>
                        </div>
                        <div className="btn-add">
                            <span>
                                <FaRegPlusSquare className="icon-add" />
                            </span>
                            <span>
                                <LuSquareMinus className="icon-remove" />
                            </span>
                        </div>

                        {/* <div className='answer'>
                        <input type="text" />
                    </div> */}
                    </div>

                    <div className="answer-content">
                        <input className="form-check-input iscorrect" type="checkbox" />
                        <div className="form-floating answer-name">
                            <input class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Answer 1</label>
                        </div>
                        <div className="btn-group">
                            <span>
                                <CiCirclePlus className="icon-add" />
                            </span>
                            <span>
                                <CiCircleMinus className="icon-remove" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;