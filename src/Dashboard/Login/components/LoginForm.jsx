import React, { useRef } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    // Create refs for the input fields
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Access values directly from refs
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // Use the username and password here
        console.log('Username:', username);
        console.log('Password:', password);
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
                <button type="submit" className="submitButton">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;
