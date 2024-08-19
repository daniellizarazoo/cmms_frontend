import { useRef } from 'react';
import './LoginForm.css';
import { logIn } from '../services/loginService';
import { useSelector, useDispatch } from 'react-redux';

const saveTokenToLocalStorage = ()=>{

};

const LoginForm = () => {
    
    const saveTokenReducer = useSelector(state=> state.saveTokenReducer);
    const notificacionReducer = useSelector(state=>state.notificacionReducer);

    const dispatch = useDispatch();
    // Create refs for the input fields
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const rememberMeRef = useRef(null);
    
    // Handle form submission
    const handleSubmit =async (event) => {
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
            dispatch({type:'SET_NOTIFICATION',payload:dataReturned.error});
            
            setTimeout(() => {
                dispatch({type:'SET_NOTIFICATION',payload:''});
            }, 5000);
        } else{
            console.log(dataReturned);
        }
        rememberMeRef.current.checked=false;
    };

    return (
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
    );
};

export default LoginForm;
