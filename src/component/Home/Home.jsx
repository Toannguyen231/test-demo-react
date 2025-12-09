import videoHomepage from '../../accets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const isAnthenticated = useSelector(state => state.user.isAnthenticated);
    const navigate = useNavigate();
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='content-homepage'>
                <h1 className='tittle'>There's a better way to ask</h1>
                <p className='pharagrap'>You don't want to make a boring from. And your audience wont't answer one. Create a typeform instead - and make everyone happy</p>

                {isAnthenticated === false ?
                    <button className='btn-getstarted' onClick={() => { navigate('/login') }}>Get started - it's free</button>
                    :
                    <button className='btn-getstarted' onClick={() => { navigate('/user') }}>Doing quiz now !</button>
                }

            </div>
        </div >

    );
}

export default Home;

