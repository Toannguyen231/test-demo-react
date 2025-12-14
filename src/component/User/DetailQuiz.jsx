import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuizDatailById } from '../sevices/apiService';
import _ from "lodash";
import './DetailQuiz.scss';
const Detail = () => {
    const params = useParams();
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

                </div>
                <div className="quiz-body">

                </div>
                <div className="quiz-content">
                    quiz content
                </div>
            </div>

            <div className="right-content">
                count down
            </div>
        </div>
    );
}

export default Detail;