
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.scss"
import loginImg from '../../../accets/pexels-tuan-phan-2156993475-34600814.jpg';
import { TbBrandGoogle, TbBrandWindows } from "react-icons/tb";

function Login() {
    const navigate = useNavigate();

    const handleGoogleSignup = () => {
        toast.info('Google signup coming soon!');
    };

    const handleMicrosoftSignup = () => {
        toast.info('Microsoft signup coming soon!');
    };

    const handleEmailSignup = () => {
        toast.info('Email signup coming soon!');
    };

    const handleLogin = () => {
        navigate('/admin');
    };

    return (
        <div className="login-container">
            {/* Left Panel */}
            <div className="login-left">
                <div className="login-left-content">
                    <h1 className="login-title">Sign up<br />and come on in</h1>
                    <div className="login-illustration">
                        <img src={loginImg} alt="Login illustration" className="illustration-img" />
                    </div>
                </div>
                <div className="login-footer">
                    <p>© Typeform</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="login-right">
                <div className="login-right-header">
                    <div className="language-selector">
                        <span className="language-icon">🌐</span>
                        <span className="language-text">English</span>
                    </div>
                    <div className="login-link">
                        <span>Already have an account?</span>
                        <button className="link-button" onClick={handleLogin}>Log in</button>
                    </div>
                </div>

                <div className="login-right-content">
                    <div className="login-brand">
                        <div className="brand-icon">
                            <span className="brand-square"></span>
                            <span className="brand-circle"></span>
                        </div>
                        <h2 className="brand-name">Typeform</h2>
                    </div>

                    <div className='login-right-inputs'>
                        <input type="text" placeholder="Email address" className='input-email' size="30" />
                        <input type="text" placeholder="Password" className='input-password' />
                    </div>

                    <div className="login-buttons">
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

                        <button className="btn-email" onClick={handleEmailSignup}>
                            Sign up with email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;