import axios from "axios";
import instance from "../util/axiosCutomes";

const postCreateUser = (email, password, username, role, image) => {

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return instance.post('http://localhost:8081/api/v1/participant', data);
}

const postCreateSignUp = (userName, email, password) => {

    const data = new FormData();
    data.append('userName', userName);
    data.append('email', email);
    data.append('password', password);
    return instance.post("http://localhost:8081/api/v1/register", data);
}

const postLogin = (email, password, delay) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('delay', delay = 5000);
    return instance.post("http://localhost:8081/api/v1/login", data);
}

const getAllUsers = () => {
    return instance.get('http://localhost:8081/api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {

    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return instance.put('http://localhost:8081/api/v1/participant', data);
}

const deleteUser = (userID) => {
    return instance.delete(`http://localhost:8081/api/v1/participant`, { data: { id: userID } });
}

const getPageUserWithPage = (page, limit) => {
    return instance.get(`http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`);
}

const getQuzizeByPage = () => {
    return instance.get('http://localhost:8081/api/v1/quiz-by-participant');
}

export { postCreateUser, getAllUsers, putUpdateUser, deleteUser, getPageUserWithPage, postCreateSignUp, postLogin, getQuzizeByPage };