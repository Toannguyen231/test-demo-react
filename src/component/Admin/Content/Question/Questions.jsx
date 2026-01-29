import Select from 'react-select';
import { useState } from 'react';
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { LuImagePlus } from "react-icons/lu";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import './Questions.scss';
import { set } from 'nprogress';

const Questions = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState({});

    const [questions, setQuestions] = useState([
        {
            id: uuidv4(),
            description: '',
            imageFile: '',
            imageName: '',
            answer: [
                {
                    id: uuidv4(),
                    description: '',
                    iscorrect: false,
                },
            ],
        },
    ]);

    const [fileUploaded, setFileUploaded] = useState({});

    const handleAddRemoveQuestion = (type, id) => {
        if (type == "ADD") {
            const newQuestions = {
                id: uuidv4(),
                description: '',
                imageFile: '',
                imageName: '',
                answer: [
                    {
                        id: uuidv4(),
                        description: '',
                        iscorrect: false,
                    },
                ],
            };
            setQuestions([...questions, newQuestions]);
        }
        else if (type === "REMOVE") {
            const newQuestions = _.cloneDeep(questions);
            const filteredQuestions = newQuestions.filter(question => question.id !== id);
            setQuestions(filteredQuestions);
        }

        console.log("==> check hanle add questions", type, id);
    };

    const handleAddRemoveAnswer = (type, qid, aid) => {
        const newQuestions = _.cloneDeep(questions);
        if (type == "ADD") {
            const newAnswer = {
                id: uuidv4(),
                description: '',
                iscorrect: false,
            };

            let index = newQuestions.findIndex(item => item.id === qid);

            newQuestions[index].answer.push(
                newAnswer
            )
            setQuestions(newQuestions);

        }
        else if (type == "REMOVE") {
            let indexQuestions = newQuestions.findIndex(item => item.id === qid);
            newQuestions[indexQuestions].answer = newQuestions[indexQuestions].answer.filter(item => item.id !== aid);
            setQuestions(newQuestions);
        }
    };

    const handleOnChange = (type, questionID, value) => {
        if (type === "QUESTION") {
            let questionClone = _.cloneDeep(questions);
            let index = questionClone.findIndex(item => item.id === questionID);
            if (index > -1) {
                questionClone[index].description = value;
            }

            setQuestions(questionClone);
        }
    }

    const handleOnChangeFileQuestion = (questionID, event) => {
        let questionClone = _.cloneDeep(questions);
        let index = questionClone.findIndex(item => item.id === questionID);
        if (index > -1 && event.target && event.target.files && event.target.files[0]) {
            questionClone[index].imageFile = event.target.files[0];
            questionClone[index].imageName = event.target.files[0].name;
            setQuestions(questionClone);
            setFileUploaded({
                ...fileUploaded,
                [questionID]: event.target.files[0].name
            });
        }
    }


    const handleAnswerQuestions = (type, questionID, answerID, value) => {
        let questionClone = _.cloneDeep(questions);
        let index = questionClone.findIndex(item => item.id === questionID);
        if (index > -1) {
            questionClone[index].answer = questionClone[index].answer.map(answer => {
                if (answer.id === answerID) {
                    if (type === "CHECKBOX") {
                        answer.iscorrect = value;
                    }
                    if (type === "INPUT") {
                        answer.description = value;
                    }
                }
                return answer;
            });
            setQuestions(questionClone);
        }
    }

    const handleSubmitQuestionsForQuiz = () => {
        console.log("question: ", questions);
    }
    return (
        <div className="questions-container">
            <div className="title">
                Manage Questions
            </div>
            <hr />
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
                    {questions && questions.length > 0 &&
                        questions.map((question, index) => {
                            return (
                                <div key={question.id} className='q-main mt-5'>
                                    <div className='questions-content'>
                                        <div className="form-floating description">
                                            <input
                                                className="form-control"
                                                id={`question-${question.id}`}
                                                placeholder="Question description"
                                                value={question.description}
                                                onChange={(e) => handleOnChange("QUESTION", question.id, e.target.value)}
                                            />
                                            <label htmlFor={`question-${question.id}`}>Question {index + 1}'s description</label>
                                        </div>
                                        <div className="group-upload">
                                            <label className="label-up" htmlFor={`file-${question.id}`}>
                                                <LuImagePlus />
                                            </label>
                                            <input type={`file`}
                                                id={`file-${question.id}`}
                                                onChange={(event) => handleOnChangeFileQuestion(question.id, event)}
                                                hidden />
                                            <span>{fileUploaded[question.id] ? `${fileUploaded[question.id]}` : '0 file is uploaded'}</span>
                                        </div>
                                        <div className="btn-add">
                                            <span>
                                                <AiFillPlusSquare className="icon-add" onClick={() => handleAddRemoveQuestion("ADD", question.id)} />
                                            </span>
                                            {questions.length > 1 &&
                                                <span>
                                                    <AiFillMinusSquare className="icon-remove" onClick={() => handleAddRemoveQuestion("REMOVE", question.id)} />
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    {
                                        question.answer && question.answer.length > 0
                                        && question.answer.map((ans, ansIndex) => {
                                            return (

                                                <div key={ans.id} className="answer-content">
                                                    <input
                                                        className="form-check-input iscorrect"
                                                        type="checkbox"
                                                        checked={ans.iscorrect}
                                                        onChange={(e) => handleAnswerQuestions("CHECKBOX", question.id, ans.id, e.target.checked)}
                                                    />
                                                    <div className="form-floating answer-name">
                                                        <input
                                                            className="form-control"
                                                            id={`answer-${ans.id}`}
                                                            placeholder="Answer description"
                                                            value={ans.description}
                                                            onChange={(e) => handleAnswerQuestions("INPUT", question.id, ans.id, e.target.value)}
                                                        />
                                                        <label htmlFor={`answer-${ans.id}`}>Answer {ansIndex + 1}</label>
                                                    </div>
                                                    <div className="btn-group">
                                                        <span>
                                                            <CiCirclePlus className="icon-add" onClick={() => handleAddRemoveAnswer("ADD", question.id, ans.id)} />
                                                        </span>
                                                        <span>
                                                            <CiCircleMinus className="icon-remove" onClick={() => handleAddRemoveAnswer("REMOVE", question.id, ans.id)} />
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }

                                    {
                                        question.answer && question.answer.length > 0 &&
                                        <div>
                                            <button
                                                className="btn btn-warning save-question"
                                                onClick={() => handleSubmitQuestionsForQuiz()}
                                            >
                                                Save questions
                                            </button>
                                        </div>
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;