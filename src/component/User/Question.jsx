import _ from "lodash";
import "./Question.scss";

const Question = ({ data, index }) => {
    if (_.isEmpty(data) || _.isEmpty(data.data)) return null;

    const q = data.data[0]; // question (đang bị trùng row nên lấy 0)

    // Gom answers từ tất cả row rồi loại trùng
    const answers = _.chain(data.data)
        .map("answers")     // lấy answers ở mỗi row
        .compact()          // bỏ null/undefined
        .uniqBy("id")       // bỏ trùng theo id
        .value();

    return (
        <>
            <div className="question">
                {q.image && (
                    <img
                        src={`data:image/jpeg;base64,${q.image}`}
                        alt=""
                        className="question-img"
                    />
                )}
                Question {index + 1}: {q.description}
            </div>

            <div className="answer">
                {answers.map((a, idx) => (
                    <div key={a.id || idx} className="answer-child">
                        {String.fromCharCode(65 + idx)}. {a.description}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Question;
