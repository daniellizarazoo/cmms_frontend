import { useEffect, useRef,useState } from 'react';
import './LoginForm.css';
import { logIn } from '../services/loginService';
import { useUserStore } from '../../store/loginStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Notification from './Notificacion';
// import { useSelector, useDispatch } from 'react-redux';

// const saveTokenToLocalStorage = ()=>{

// };

const LoginForm = () => {
    // const saveTokenReducer = useSelector(state=> state.saveTokenReducer);
    // const notificacionReducer = useSelector(state=>state.notificacionReducer);
    // const dispatch = useDispatch();
    // Create refs for the input fields
    // const data = useUserStore(useShallow((state)=>({username:state.username,isactive:state.isactive,amount:state.amount})));
    const [isErrorMessage,setIsErrorMessage] = useState(false);
    const [notificationMessage,setNotificationMessage] = useState('');
    const navigate = useNavigate();
    const {setUserData} = useUserStore();

    const [searchParams] = useSearchParams();
    const notLogged = searchParams.get('notLogged'); // Get the notLogged parameter

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);

    useEffect(()=>{
        if(notLogged==='true'){
            setIsErrorMessage(false);
            setNotificationMessage('No puedes ingresar al dashboard, hasta que no te loguees');
            setTimeout(()=>{
                setNotificationMessage('');
            },5000)
        }
    },[notLogged]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Access values directly from refs
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const rememberMe = rememberMeRef.current.checked;
        const logInData = {
            username: username,
            password: password
        };
        
        usernameRef.current.value='';
        passwordRef.current.value='';
        
        const dataReturned = await logIn(logInData);

        if(dataReturned.error){
            // console.log(dataReturned)
            // dispatch({type:'SET_NOTIFICATION',payload:dataReturned.error});
            setNotificationMessage(dataReturned.error);
            setIsErrorMessage(true);
            setTimeout(() => {
                setNotificationMessage('');
            }, 5000);
        } else{
            setUserData(dataReturned);
            rememberMe ? localStorage.setItem('userData',JSON.stringify(dataReturned))
            : sessionStorage.setItem('userData',JSON.stringify(dataReturned));
            navigate('/dashboard/reportes');
        };
        rememberMeRef.current.checked=false;
    };

    return (
        <>
        <div className="loginFormContainer">
            <h2>Iniciar sesión</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Correo o usuario</label>
                <input 
                    type='text' 
                    placeholder='ingrese usuario'
                    ref={usernameRef} // Attach ref to the input field
                    required
                />
                <label>Contraseña</label>
                <input
                    type='password'
                    placeholder='ingrese su contraseña'
                    ref={passwordRef} // Attach ref to the input field
                    required
                />
                <div className="checkBox">
                    <label>Recordar?</label>
                    <input type='checkbox' ref={rememberMeRef}/>
                </div>
                <button type="submit" className="submitButton">Iniciar sesión</button>
            </form>
        </div>
        <Notification
        isError={isErrorMessage}
        message={notificationMessage}
        />
        </>
    );
};

export default LoginForm;
