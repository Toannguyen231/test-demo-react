import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './component/Admin/Admin.jsx'
import User from './component/User/User.jsx';
import Home from './component/Home/Home.jsx';
import ManagerUser from './component/Admin/Content/ManagerUser.jsx';
import DashBoard from './component/Admin/Content/DashBoard.jsx'
import Login from './component/Admin/Auth/Login.jsx'
import SignUp from './component/Admin/Auth/SignUp.jsx';
import 'nprogress/nprogress.css'
import ListQuiz from './component/User/ListQuiz';
import Detail from './component/User/DetailQuiz';
import ManageQuiz from './component/Admin/Content/Quiz/ManageQuiz.jsx';
import Questions from './component/Admin/Content/Question/Questions.jsx';


const NotFound = () => {
    return (
        <div className="container mt-3 alert alert-danger">
            404. NotFound
        </div>
    );
}

const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="user" element={<ListQuiz />} />
            </Route>
            <Route path="/quiz/:id" element={<Detail />} />
            <Route path="admin" element={<Admin />} >
                <Route index element={<DashBoard />} />
                <Route path='manageruser' element={<ManagerUser />} />
                <Route path='manageQuiz' element={< ManageQuiz />} />
                <Route path='manageQuestions' element={< Questions />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default Layout;
