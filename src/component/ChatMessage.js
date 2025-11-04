import React from "react";
import './DisplayInfo.scss';

function ChatMessage({ message }) {
    return (
        <>
            <div>
                <p className={message == "toan" ? "blue" : "red"} >{message}</p>
            </div>
        </>
    );
}

export default ChatMessage