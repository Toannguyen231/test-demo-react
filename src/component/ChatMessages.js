import React from "react";
import ChatMessage from "./ChatMessage";
function ChatMessages({ chatMessages, setChatMessages }) {
    return (
        <>
            {
                chatMessages.map((chatMessage, index) => {
                    console.log(chatMessage)
                    return (
                        <ChatMessage
                            message={chatMessage.message}
                            key={index}
                        />
                    );
                })
            }
        </>
    );
}

export default ChatMessages 