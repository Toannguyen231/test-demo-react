import _ from "lodash";
import "./Question.scss";

const Question = (props) => {
    const { data, index, handleCheckBox } = props;
    if (_.isEmpty(data)) return null;

    const answers = data.answers || [];
    const handleHanleCheckBox = (event, aId, qId) => {
        // console.log("id: ", data, aId, qId);
        console.log("event: ", aId, qId);
        handleCheckBox(aId, qId);
    };
    return (
        <>
            <div className="question">
                {data.image ? (
                    <div className="q-Image">
                        <img
                            src={`data:image/jpeg;base64,${data.image}`}
                            alt=""
                            className="question-img"
                        />
                    </div>
                ) : (
                    <div className="q-Image"></div>
                )}
                Question {index + 1}: {data.questionDescription}
            </div>

            <div className="answer">
                {answers.map((a, idx) => (
                    <div key={a.id || idx} className="answer-child">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={a.isSelected} onChange={(event) => handleHanleCheckBox(event, a.id, data.questionId)} id={`flexCheckChecked-${idx}`} />
                            <label className="form-check-label" htmlFor={`flexCheckChecked-${idx}`}>
                                {String.fromCharCode(65 + idx)}. {a.description}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Question;
