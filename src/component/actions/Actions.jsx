export const INCREMENT = 'INCREMENT';
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS';
export const DECREMENT = 'DECREMENT';
export const FETCH_USER_LOGIN_FAIL = 'FETCH_USER_LOGOUT_FAIL';

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

export const fetchUserLoginFail = () => {
    return {
        type: FETCH_USER_LOGIN_FAIL,
    };
}
