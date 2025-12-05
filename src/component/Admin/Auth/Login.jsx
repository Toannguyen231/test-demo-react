import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import { postLogin } from '../../sevices/apiService';
import { TbBrandGoogle, TbBrandWindows } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { ImSpinner6 } from "react-icons/im";
import { delay } from 'lodash';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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
            // Call API
            setIsLoading(true);
            let res = await postLogin(email, password);
            console.log("API response: ", res.data);

            if (res && res.data && res.data.EC === 0) {
                console.log("Dispatching user data: ", res.data.DT);
                dispatch({
                    type: 'FETCH_USER_LOGIN_SUCCESS',
                    payload: res.data.DT
                })
                setIsLoading(false);
                toast.success("login successful");
                navigate('/');
            } else {
                // Trường hợp API trả 2xx nhưng EC != 0
                toast.error(res?.data?.EM || "login failed");
            }

            console.log("check res Login: ", res);
        } catch (err) {
            console.log("Login error: ", err);
            setIsLoading(false);
            // Axios error → đọc message từ server nếu có
            const msg =
                err?.response?.data?.EM ||           // nếu backend trả EM
                err?.response?.data?.message ||      // hoặc message
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
            {/* CHỖ QUAN TRỌNG: ToastContainer PHẢI TỒN TẠI Ở ĐÂY */}
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
            {/* Left Panel - Form Section */}
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
                                {(isLoading == true) ? <ImSpinner6 className="loaderIcon" /> : null}
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

            {/* Right Panel - Decorative Section */}
            <div className="login-right">
                <div className="decorative-content">
                    <div className="gradient-blob"></div>
                    <div className="preview-card">
                        <div className="preview-header">
                            <span className="preview-text">Logo area</span>
                        </div>
                        <div className="preview-body">
                            <div className="preview-placeholder"></div>
                        </div>
                    </div>
                    <div className="cta-card">
                        <h3 className="cta-title">Ready for<br />your next big<br />adventure?</h3>
                        <button className="cta-button">Book now</button>
                    </div>
                    <button className="optimize-button">
                        <span className="optimize-icon">✨</span>
                        <span>Optimize</span>
                    </button>
                    <div className="color-palette">
                        <div className="color-dot color-orange"></div>
                        <div className="color-dot color-blue"></div>
                        <div className="color-dot color-teal"></div>
                        <div className="color-dot color-dark"></div>
                    </div>
                    <div className="font-selector">
                        <span>Select a font</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;