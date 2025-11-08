import React from "react";
import './DisplayInfo.scss';


function ChatMessage({ message, id }) {
    return (
        <>
            <div className="container">
                <p className={message == "toan" ? "blue" : "red"} >{message}</p>
            </div>
        </>
    );
}

export default ChatMessage