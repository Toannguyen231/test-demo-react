export const INCREMENT = 'INCREMENT';
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_Ngoc_Toan';
export const DECREMENT = 'DECREMENT';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchUserLoginSuccess = (userData) => {
    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: userData,
    };
}
