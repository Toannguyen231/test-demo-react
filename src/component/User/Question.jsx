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
                {answers.map((a, index) => (
                    <div key={a.id || index} className="answer-child">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id={`flexCheckChecked-${index}`} />
                            <label className="form-check-label" htmlFor={`flexCheckChecked-${index}`}>
                                {String.fromCharCode(65 + index)}. {a.description}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Question;
