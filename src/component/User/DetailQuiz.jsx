import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuizDatailById } from '../sevices/apiService';
const Detail = () => {
    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        fetchQuizDetails(quizId);
    }, [quizId]);

    const fetchQuizDetails = async () => {
        let res = await getQuizDatailById(quizId);
        console.log("Quiz Details:", res);
    }

    console.log('>>> Check params id: ', params.id);
    return (
        <div className="detail-quiz-container">
            Detail Quiz Component
        </div>
    );
}

export default Detail;