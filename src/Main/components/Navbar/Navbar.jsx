import './Navbar.css';
import campanaIcon from './icons/campana.png';
import logOutIcon from './icons/logout.png';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/loginStore';
import { useCallback } from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({name}) => {
    
    const {clearUserData} = useUserStore();
    const navigate = useNavigate();

    const ClickedIn = (fromLogOut=false) => {
        if(fromLogOut){
            clearUserData(navigate);
        };
    };

    const handleClickTitle = useCallback(()=>{
        navigate('/dashboard')
    },[])

    return (
        <div className='Navbar'>
            <h2 onClick={handleClickTitle} className='navbar-h2'>TECNODM <span className='navbar-highlight'>CMMS</span> SOFTWARE</h2>
            <div className='navbar-right-section'>
                <img src={campanaIcon} alt='Notifications' className='bellIcon' onClick={()=>ClickedIn}/>
                <h1>{name}</h1>
                <img src={logOutIcon} alt='Log Out' className='logoutIcon' onClick={()=>ClickedIn(true)}/>
            </div>
        </div>
    );
};

export default Navbar;
