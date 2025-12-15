import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuizDatailById } from '../sevices/apiService';
import _ from "lodash";
import './DetailQuiz.scss';
const Detail = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

    useEffect(() => {
        fetchQuizDetails(quizId);
    }, [quizId]);

    const fetchQuizDetails = async () => {
        let res = await getQuizDatailById(quizId);
        console.log("Quiz Details:", res);
        if (res && res.data && res.data.DT) {
            let raw = res.data.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("color")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => ({ color: key, users: value }))
                .value()
        }
    }

    console.log('>>> Check params id: ', params.id);
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="tittle">
                    Quiz {quizId}: {location?.state?.quizTittle}
                </div>
                <hr />
                <div className="quiz-body">
                    <img src="" alt="" />
                </div>
                <div className="quiz-content">
                    <div className="question">
                        What your name?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. ADsadasdsad</div>
                        <div className="b-child">B. ADsadasdsad</div>
                        <div className="c-child">C. ADsadasdsad</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>

            <div className="right-content">
                count down
            </div>
        </div>
    );
}

export default Detail;