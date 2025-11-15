import videoHomepage from '../../accets/video-homepage.mp4';

const Home = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='content-homepage'>
                <h1 className='tittle'>There's a better way to ask</h1>
                <p className='pharagrap'>You don't want to make a boring from. And your audience wont't answer one. Create a typeform instead - and make everyone happy</p>
                <button className='btn-getstarted'>Get started - it's free</button>
            </div>
        </div>

    );
}

export default Home;

