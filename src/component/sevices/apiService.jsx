import axios from "axios";

const postCreateUser = (email, password, username, role, image) => {

    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('http://localhost:8081/api/v1/participant', data);
}

const postCreateSignUp = (userName, email, password) => {

    const data = new FormData();
    data.append('userName', userName);
    data.append('email', email);
    data.append('password', password);
    return axios.post("http://localhost:8081/api/v1/register", data);
}

const postLogin = (email, password) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    return axios.post("http://localhost:8081/api/v1/login", data);
}

const getAllUsers = () => {
    return axios.get('http://localhost:8081/api/v1/participant/all');
}

const putUpdateUser = (id, username, role, image) => {

    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('http://localhost:8081/api/v1/participant', data);
}

const deleteUser = (userID) => {
    return axios.delete(`http://localhost:8081/api/v1/participant`, { data: { id: userID } });
}

const getPageUserWithPage = (page, limit) => {
    return axios.get(`http://localhost:8081/api/v1/participant?page=${page}&limit=${limit}`);
}

export { postCreateUser, getAllUsers, putUpdateUser, deleteUser, getPageUserWithPage, postCreateSignUp, postLogin };