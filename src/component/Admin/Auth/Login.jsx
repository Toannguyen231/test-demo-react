import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { postLogin } from '../../sevices/apiService';
import { TbBrandWindows } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner6 } from "react-icons/im";
// import { delay } from 'lodash'; // không dùng thì bỏ
import { FETCH_USER_LOGIN_SUCCESS } from '../../actions/Actions';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // 🔍 DEBUG: xem token trong Redux
    const accessToken = useSelector(state => state.user.account.access_token);
    useEffect(() => {
        console.log("Redux access_token = ", accessToken);
    }, [accessToken]);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitLogin = async () => {
        // Validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email address');
            return;
        }

        if (!password) {
            toast.error('Password cannot be empty');
            return;
        }

        try {
            setIsLoading(true);

            let res = await postLogin(email, password);
            console.log("API response: ", res.data);

            if (res && res.data && res.data.EC === 0) {

                // 👉 payload = res.data.DT (bên trong có access_token, refresh_token,...)
                dispatch({
                    type: FETCH_USER_LOGIN_SUCCESS,
                    payload: res.data
                });

                toast.success("Login successful");
                navigate('/');
            } else {
                toast.error(res?.data?.EM || "Login failed");
            }

            setIsLoading(false);
        } catch (err) {
            console.log("Login error: ", err);
            setIsLoading(false);

            const msg =
                err?.response?.data?.EM ||
                err?.response?.data?.message ||
                "Login failed. Please check your email or password.";

            toast.error(msg);
        }
    };

    const handleGoogleLogin = () => {
        toast.info('Google login coming soon!');
    };

    const handleMicrosoftLogin = () => {
        toast.info('Microsoft login coming soon!');
    };

    const handleNavigateSignUp = () => {
        navigate('/signup');
    };

    const handleSSOLogin = () => {
        toast.info('SSO login coming soon!');
    };

    return (
        <div className="login-container">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="login-left">
                <div className="login-content">
                    <div className="login-header">
                        <div className="brand-logo">
                            <div className="brand-icon">
                                <span className="brand-square"></span>
                                <span className="brand-circle"></span>
                            </div>
                            <h2 className="brand-name">Typeform</h2>
                        </div>
                    </div>

                    <div className="login-form">
                        <h1 className="login-title">Log in or Sign up</h1>
                        <p className="login-subtitle">
                            Get better data with conversational forms, surveys,<br />
                            quizzes & more.
                        </p>

                        <div className="login-buttons">
                            <button className="btn-social btn-google" onClick={handleGoogleLogin}>
                                <FcGoogle size={20} />
                                <span>Continue with Google</span>
                            </button>

                            <button className="btn-social btn-microsoft" onClick={handleMicrosoftLogin}>
                                <TbBrandWindows size={20} />
                                <span>Continue with Microsoft</span>
                            </button>

                            <div className="login-input-group">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="input-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button className="btn-email" onClick={handleSubmitLogin} disabled={isLoading}>
                                {isLoading ? <ImSpinner6 className="loaderIcon" /> : null}
                                <span>Continue with emails</span>
                            </button>

                            <button className="btn-sso" onClick={handleSSOLogin}>
                                Log in with SSO
                            </button>
                        </div>
                    </div>
                </div>

                <div className="login-footer">
                    <p>Don't have an account? <button className="link-button" onClick={handleNavigateSignUp}>Sign up</button></p>
                </div>
            </div>

            <div className="login-right">
                {/* phần trang trí giữ nguyên như của bạn */}
            </div>
        </div>
    );
}

export default Login;
