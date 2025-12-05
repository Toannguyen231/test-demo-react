import { FETCH_USER_LOGIN_SUCCESS } from '../Actions';  // Đảm bảo action type đúng
import { FETCH_USER_LOGIN_FAIL } from '../Actions';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        email: '',
        roles: ''
    },
    isAuthenticated: false, // Đảm bảo mặc định là false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:  // Kiểm tra action.type có chính xác không
            return {
                ...state,
                account: {
                    access_token: action.payload?.DT?.access_token || '',
                    refresh_token: action.payload?.DT?.refresh_token || '',
                    username: action.payload?.DT?.username || '',
                    email: action.payload?.DT?.email || '',
                    roles: action.payload?.DT?.roles || '',
                },
                isAuthenticated: true,  // Đảm bảo cập nhật isAuthenticated thành true
            };
        case FETCH_USER_LOGIN_FAIL:
            return {
                ...state,
                account: {
                    access_token: '',
                    refresh_token: '',
                    username: '',
                    email: '',
                    roles: '',
                },
                isAuthenticated: false,
            };
        default:
            return state;  // Trả lại state nếu không có action phù hợp
    }
};

export default userReducer;
