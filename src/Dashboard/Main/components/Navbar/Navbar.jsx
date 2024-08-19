import './Navbar.css';
import campanaIcon from './icons/campana.png';
import logOutIcon from './icons/logout.png';

const Navbar = ({name}) => {
    
    const ClickedIn = () => {
        console.log('clicked')
    }
    
    return (
        <div className="Navbar">
            <h2>TECNODM <span className='highlight'>CMMS</span> SOFTWARE</h2>
            <div className="right-section">
                <img src={campanaIcon} alt="Notifications" className="bellIcon" onClick={ClickedIn}/>
                <h1>{name}</h1>
                <img src={logOutIcon} alt="Log Out" className="logoutIcon" onClick={ClickedIn}/>
            </div>
        </div>
    );
};

export default Navbar;
