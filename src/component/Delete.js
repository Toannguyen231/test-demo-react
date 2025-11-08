import React from "react";

function Delete({ setChatMessages, messageId }) {
    function DeleteClick() {
        // Sử dụng functional update để đảm bảo luôn có state mới nhất
        setChatMessages(prev => prev.filter((item) => item.id !== messageId));
    }

    return (
        <>
            <button onClick={DeleteClick}>Delete</button>
        </>
    );
}

export default Delete