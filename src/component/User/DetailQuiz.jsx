import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionsByQuizId } from '../sevices/apiService';
import _ from "lodash";
import './DetailQuiz.scss';
import Question from "./Question";

const Detail = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});

    useEffect(() => {
        fetchQuizDetails(quizId);
    }, [quizId]);

    const fetchQuizDetails = async () => {
        let res = await getQuestionsByQuizId(quizId);
        console.log("Quiz Details:", res);

        if (res && res.data && res.data.DT) {
            let raw = res.data.DT;
            console.log("Check raw:", raw)
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription = "";
                    let image = null;
                    value.forEach((item, idx) => {
                        if (idx === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                    })
                    return { questionId: key, answers, questionDescription, image };
                })
                .value();
            // Cập nhật dữ liệu đã xử lý vào state
            setDataQuiz(data);
        }
    };

    const handlePrev = () => {
        if (index <= 0) return;
        setIndex(index - 1);
    };

    // const handleCheckBox = (aId, qId) => {
    //     setSelectedAnswers(prev => {
    //         const questionAnswers = prev[qId] || [];
    //         if (questionAnswers.includes(aId)) {
    //             return { ...prev, [qId]: questionAnswers.filter(id => id !== aId) };
    //         } else {
    //             return { ...prev, [qId]: [...questionAnswers, aId] };
    //         }
    //     });
    // };

    const handleNext = () => {
        if (index >= dataQuiz.length - 1) return;
        setIndex(index + 1);
    }

    const handleCheckBox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId);
        if (question && question.answers) {
            let b = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            // console.log('>>> check b: ', b);
            question.answers = b;
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId);
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }
    console.log('>>> Check params id: ', params.id);
    console.log("check dataQuiz", dataQuiz);
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="tittle">
                    Quiz {quizId}: {location?.state?.quizTittle}
                </div>
                <hr />
                <div className="quiz-content">
                    <Question
                        index={index}
                        handleCheckBox={handleCheckBox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : {}}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handlePrev()} disabled={index <= 0}>Prev</button>
                    <button className="btn btn-primary" onClick={() => handleNext()} disabled={index >= dataQuiz.length - 1}>Next</button>
                    <button className="btn btn-warning">Finish</button>
                </div>
            </div>

            <div className="right-content">
                {/* Thêm đếm ngược hoặc các chi tiết khác ở đây */}
            </div>
        </div>
    );
}

export default Detail;
