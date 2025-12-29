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

    return instance.put('/api/v1/participant', data);
}

const deleteUser = (userID) => {
    return instance.delete(`/api/v1/participant`, { data: { id: userID } });
}

const getPageUserWithPage = (page, limit) => {
    return instance.get(`/api/v1/participant?page=${page}&limit=${limit}`);
}

const getQuzizeByPage = () => {
    return instance.get('/api/v1/quiz-by-participant');
}

const getQuestionsByQuizId = (id) => {
    return instance.get(`/api/v1/questions-by-quiz?quizId=${id}`);
}

const postSubmitQuiz = (data) => {
    return instance.post(`/api/v1/quiz-submit`, { ...data });
}

const getAllQuizForAdmin = () => {
    return instance.get(`/api/v1/quiz/all`);
}

const postCreateQuiz = (description, name, difficulty, image) => {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('name', name);
    formData.append('difficulty', difficulty);
    formData.append('quizImage', image);

    return instance.post('/api/v1/quiz', formData);
}

const putUpdateQuiz = (id, description, name, difficulty, image) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('difficulty', difficulty);
    formData.append('quizImage', image);

    return instance.put('/api/v1/quiz', formData);
}

const deleteQuiz = (quizID) => {
    return instance.delete(`/api/v1/quiz/${quizID}`);
}


export {
    postCreateUser, getAllUsers,
    putUpdateUser, deleteUser, getPageUserWithPage,
    postCreateSignUp, postLogin, getQuzizeByPage,
    getQuestionsByQuizId, postSubmitQuiz,
    getAllQuizForAdmin, postCreateQuiz, putUpdateQuiz, deleteQuiz
};