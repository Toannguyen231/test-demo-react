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

const getAllUsers = () => {
    return axios.get('http://localhost:8081/api/v1/participant/all');
}

export { postCreateUser, getAllUsers };