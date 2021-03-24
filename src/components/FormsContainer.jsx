import {React, useState} from 'react';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';
import SignUpForm from './SignUpForm';


function FormsContainer() {
    const [show, setShow] = useState(true)

    return (
        <div className = "loginForm">
            {show ? <LoginForm/> : <SignUpForm/>}
            <Link
                    onClick = {()=> setShow(!show)}>
                ¿No tienes una cuenta? Registrate Aqui 
            </Link>

        </div>
    )
}

export default FormsContainer
