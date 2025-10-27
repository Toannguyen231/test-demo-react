import logo from './logo.svg';
import './App.css';
import MyComponent from './component/MyComponent';
import React from 'react';

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

function Infor(props) {
  return (
    <div>
      My name is {props.name} and I'm from {props.address}, I have {props.age} year old
    </div>
  );
}

function App() {
  return (
    <div>
      Hello world with React.js (Hoi Dan IT)
      <MyComponent></MyComponent>
      <Infor name='Toan' address='Ca Mau' age='18' />
    </div>
  );
}


// function App() {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world with React.js (Hoi Dan IT)
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
