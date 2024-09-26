// import { Fragment } from 'react';
import './LoginDashboard.css';
import Advice from './components/advice';
import LoginForm from './components/LoginForm';
import Notification from './components/Notificacion';
// import { useSelector } from 'react-redux';

const LoginDashboard = () => {
    // const notificationMessage = useSelector(state => state.notificacionReducer.value);
    
    return (
        <div className='cajaFondo'>
            <h1 className='tituloPagina'>TECNODM</h1>
            <div className='loginDashboardMainBox'>
                    <Advice/>
                    <LoginForm/>
                    <Notification error={''}/>
            </div>
        </div>
    );
};

export default LoginDashboard;
