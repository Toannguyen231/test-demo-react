import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';
import React from 'react';
import Infor from './component/Info';
import ChatInput from './component/ChatInput';
import ChatMessages from './component/ChatMessages';
import ChatMessage from './component/ChatMessage';
// class App extends React.Component {
//   state = {
//     name: 'chim',
//     address: "Ha noi",
//     age: 20
//   }
//   render() {
//     return (
//       <div>
//         Hello world with React.js (Hoi Dan IT)
//         <MyComponent></MyComponent>
//         My name is {this.state.name} and I'm from {this.state.address}, I have {this.state.age} year old
//       </div>
//     );
//   }
// }

function App() {
  const [chatMessages, setChatMessages] = React.useState([]);
  const userName = 'Ngoc Toan';
  function handleClick(event) {
    console.log(event);
    console.log("My name is", userName)
  }
  function handleonMouseMove(event) {
    console.log(event.target);
  }

  return (
    <div>
      Hello world with React.js (Hoi Dan IT)
      <MyComponent></MyComponent>
      <Infor name={userName} address='Ca Mau' age='18' />
      <button onMouseOver={handleonMouseMove}>Hover me</button>
      <button onClick={handleClick}>Click me</button>

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

      <ChatMessages
        chatMessages={chatMessages}
        seChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
