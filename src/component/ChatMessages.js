import React from "react";
import ChatMessage from "./ChatMessage";
function ChatMessages({ chatMessages, setChatMessages }) {
    return (
        <>
            {
                chatMessages.map((chatMessage) => {
                    return (
                        <ChatMessage
                            message={chatMessage.message}
                        />
                    );
                })
            }
        </>
    );
}

export default ChatMessages 