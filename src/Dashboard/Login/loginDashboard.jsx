import { Fragment } from 'react';
import './loginDashboard.css'
import Advice from './components/advice';
import LoginForm from './components/LoginForm';

const LoginDashboard = () => {
    return (
        <div className='cajaFondo'>
            <h1 className='tituloPagina'>TECNODM</h1>
            <div className='loginDashboardMainBox'>
                <Advice/>
                <LoginForm/>
            </div>
        </div>
        
    );
};

export default LoginDashboard;
