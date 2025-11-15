import './App.scss';
import Nav from "./component/Header/Nav"
import SideBar from "./component/Admin/sidebar"
import { Outlet } from 'react-router-dom';

function App() {

  // const [chatMessages, setChatMessages] = React.useState([{
  //   message: "Toan",
  //   id: crypto.randomUUID()
  // },
  // {
  //   message: "Binh",
  //   id: crypto.randomUUID()
  // }
  // ]);

  // const [showList, setShowList] = React.useState(true);
  // const userName = 'Ngoc Toan';
  // function handleClick(event) {
  //   console.log(event);
  //   console.log("My name is", userName)
  // }
  // function handleonMouseMove(event) {
  //   console.log(event.target);
  // }
  // function handleShowHide() {
  //   setShowList(v => !v);            // dùng functional update
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     document.title = "Toandeptrai123"
  //   }, 3000)
  //   console.log("skibidi")
  // })
  // return (
  //   <div>
  //     Hello world with React.js (Hoi Dan IT)
  //     <MyComponent></MyComponent>
  //     <Infor name={userName} address='Ca Mau' age='18' />
  //     <button onMouseOver={handleonMouseMove}>Hover me</button>
  //     <button onClick={handleClick}>Click me</button>

  //     <ChatInput
  //       chatMessages={chatMessages}
  //       setChatMessages={setChatMessages}
  //     />
  //     <div style={{ marginTop: 12 }}>
  //       <button onClick={handleShowHide}>
  //         {showList ? 'Hide messages' : 'Show messages'}
  //       </button>

  //       {showList && (
  //         <ChatMessages
  //           chatMessages={chatMessages}
  //           setChatMessages={setChatMessages}
  //         />
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div className="app-container">
      <div className="header-container">
        <Nav />
      </div>

      <div className="main-container">
        <div className="sidenav-container">
        </div>

        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;