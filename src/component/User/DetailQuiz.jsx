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
                    console.log("value: ", value, "key: ", key)
                    return { QuestionId: key, data: value }
                })
                .value()
            // Cập nhật dữ liệu đã xử lý vào state
            setDataQuiz(data);
        }
    };

    console.log('>>> Check params id: ', params.id);
    console.log("check dataQuiz", dataQuiz);
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="tittle">
                    Quiz {quizId}: {location?.state?.quizTittle}
                </div>
                <hr />
                <div className="quiz-body">
                    {/* Hiển thị hình ảnh từ dữ liệu */}
                    {dataQuiz[0]?.image && <img src={dataQuiz[0]?.image} alt="Quiz Image" />}
                </div>
                <div className="quiz-content">
                    <Question
                        index={index}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : {}}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-fsecondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>

            <div className="right-content">
                {/* Thêm đếm ngược hoặc các chi tiết khác ở đây */}
            </div>
        </div>
    );
}

export default Detail;
