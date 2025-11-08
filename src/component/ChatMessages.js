import React from "react";
import ChatMessage from "./ChatMessage";
import Delete from './Delete'

function ChatMessages({ chatMessages, setChatMessages }) {
    return (
        <>
            <div>
                <span>Show</span>
            </div>
            <div>
                {
                    chatMessages.map((chatMessage, index) => {
                        console.log(chatMessage)
                        return (
                            <React.Fragment key={chatMessage.id}>
                                <ChatMessage
                                    message={chatMessage.message}
                                    key={index}
                                />
                                <Delete
                                    setChatMessages={setChatMessages}
                                    messageId={chatMessage.id}
                                />
                            </React.Fragment>
                        );
                    })
                }
            </div>

        </>
    );
}

export default ChatMessages 