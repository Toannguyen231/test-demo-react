
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUp.scss"
import SignUpImg from '../../../accets/pexels-tuan-phan-2156993475-34600814.jpg';
import { TbBrandGoogle, TbBrandWindows } from "react-icons/tb";
import { postCreateSignUp } from '../../sevices/apiService';
function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitSignUp = async () => {
        //validate 
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email address');
            return;
        }

        if (!password) {
            toast.error('Password cannot be empty');
            return;
        }
        let res = await postCreateSignUp(userName, email, password);

        if (res && res.data && res.data.EC === 0) {
            toast.success(res.data.EM);
            navigate('/');
        } else {
            toast.error(res?.data?.EM || 'SignUp failed');
        }
        console.log("check res SignUp: ", res);
    };

    const handleGoogleSignup = () => {
        toast.info('Google signup coming soon!');
    };

    const handleMicrosoftSignup = () => {
        toast.info('Microsoft signup coming soon!');
    };

    const handleEmailSignup = () => {
        toast.info('Email signup coming soon!');
    };

    const handleClickLogin = () => {
        navigate('/login');
    };

    return (
        <div className="SignUp-container">
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
            {/* Left Panel */}
            <div className="SignUp-left">
                <div className="SignUp-left-content">
                    <h1 className="SignUp-title">Sign up<br />and come on in</h1>
                    <div className="SignUp-illustration">
                        <img src={SignUpImg} alt="SignUp illustration" className="illustration-img" />
                    </div>
                </div>
                <div className="SignUp-footer">
                    <p>© Typeform</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="SignUp-right">
                <div className="SignUp-right-header">
                    <div className="language-selector">
                        <span className="language-icon">🌐</span>
                        <span className="language-text">English</span>
                    </div>
                    <div className="SignUp-link">
                        <span>Already have an account?</span>
                        <button className="link-button" onClick={handleClickLogin}>Log in</button>
                    </div>
                </div>

                <div className="SignUp-right-content">
                    <div className="SignUp-brand">
                        <div className="brand-icon">
                            <span className="brand-square"></span>
                            <span className="brand-circle"></span>
                        </div>
                        <h2 className="brand-name">Typeform</h2>
                    </div>

                    <div className='SignUp-right-inputs'>
                        <input
                            type="text"
                            placeholder='User Name'
                            className='input-userName'
                            size="30"
                            value={userName} onChange={(e) => setUserName(e.target.value)} />
                        <input
                            type="text"
                            placeholder="Email address"
                            className='input-email'
                            size="30" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type="password"
                            placeholder="Password"
                            className='input-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="SignUp-buttons">
                        <button className="btn-social btn-google" onClick={handleGoogleSignup}>
                            <TbBrandGoogle size={20} />
                            <span>Sign up with Google</span>
                        </button>

                        <button className="btn-social btn-microsoft" onClick={handleMicrosoftSignup}>
                            <TbBrandWindows size={20} />
                            <span>Sign up with Microsoft</span>
                        </button>

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <button className="btn-email" onClick={handleSubmitSignUp}>
                            Sign up with email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;