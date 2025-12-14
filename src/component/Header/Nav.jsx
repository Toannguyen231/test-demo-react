import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postLogin } from '../sevices/apiService';
const Header = () => {
    const dispatch = useDispatch();
    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/signup');
    }
    const handleClickLogin = () => {
        navigate('/login');
    }

    const handleClickLogOut = async () => {
        dispatch({
            type: 'FETCH_USER_LOGOUT_FAIL',
            payload: {}
        })
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Ngoc Toan</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/user" className='nav-link'>User</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ?
                            <>
                                <button
                                    className="btn btn-outline-dark me-2 btn-login"
                                    style={{ padding: "10px 20px" }}
                                    onClick={handleClickLogin}
                                >
                                    Log in
                                </button>

                                <button
                                    className="btn btn-dark btn-signup"
                                    onClick={handleClickSignUp}
                                >
                                    Sign up
                                </button>

                            </>
                            :
                            <NavDropdown title="Setting" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2" onClick={() => handleClickLogOut()}>
                                    Log out
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
}

export default Header;