
import { FETCH_USER_LOGIN_SUCCESS, DECREMENT } from '../Actions';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        email: '',
        roles: ''
    },
    isAnthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token || '',
                    username: action?.payload?.DT?.username || '',
                    email: action?.payload?.DT?.email || '',
                    roles: action?.payload?.DT?.roles || '',
                },
                isAnthenticated: true,
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;