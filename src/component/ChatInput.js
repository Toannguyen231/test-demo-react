import React from "react";

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = React.useState("")

    function saveInput(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const text = inputText.trim();
        if (!text) return;
        setChatMessages(prev => [...prev, { id: Date.now(), message: text }])
    }

    return (
        <>
            <input
                size="30"
                placeholder="Text"
                onChange={saveInput}
                value={inputText}
            >
            </input>

            <button onClick={sendMessage}>send</button>
        </>
    );
}

export default ChatInput