import React from 'react';
function Infor(props) {
    return (
        <div>
            My name is {props.name} and I'm from {props.address}, I have {props.age} year old
        </div>
    );
}
export default Infor;