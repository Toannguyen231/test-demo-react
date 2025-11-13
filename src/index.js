import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './component/Admin/Admin.jsx'
import User from './component/User/User.jsx';
import Home from './component/Home/Home.jsx';
import ManagerUser from './component/Admin/Content/ManagerUser.jsx';
import DashBoard from './component/Admin/Content/DashBoard.jsx'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />

        </Route>
        <Route path="admin" element={<Admin />} >
          <Route index element={<DashBoard />} />
          <Route path='manageruser' element={<ManagerUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
