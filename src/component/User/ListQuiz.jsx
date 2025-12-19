import { useEffect, useState } from "react";
import { getQuzizeByPage } from '../sevices/apiService';
import { toast } from "react-toastify";
import './ListQuiz.scss';
import { useNavigate } from "react-router-dom";
import DetailQuiz from "./DetailQuiz";
const ListQuiz = () => {
    const [arrayQuiz, setArrayQuiz] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getQuizData();
    }, []);


    const getQuizData = async () => {
        let res = await getQuzizeByPage();
        console.log("check Respronse:", res)
        if (res && res.data && res.data.DT) {
            setArrayQuiz(res.data.DT);
        }
        else {
            toast.error('Không có dữ liệu hoặc mã EC không phải 0');
        }
    }
    return (
        <div className='list-quiz-container container'>
            {arrayQuiz && arrayQuiz.length > 0 &&
                arrayQuiz.map((quiz, index) => (
                    <div className="card" style={{ width: "18rem" }} key={`${index}-quiz`}>
                        <div className="container-img">
                            <img src={`data:image/png;base64,${quiz.image}`} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Quiz {index + 1}</h5>
                            <p className="card-text">{quiz.description}</p>
                            <a href="" className="btn btn-primary" onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTittle: quiz.description } })}>
                                Start Now
                            </a>
                        </div>
                    </div>
                ))
            }

            {arrayQuiz && arrayQuiz.length === 0 &&
                <div>Không có quiz nào để hiển thị</div>
            }
        </div>
    );
}

export default ListQuiz;