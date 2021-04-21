import {React, useState} from 'react';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import '../styles/Login.css'

function FormsContainer() {
    const [show, setShow] = useState(true)

    return (
        <div className = "loginForm">
            {show ? <LoginForm/> : <SignUpForm/>}
            <Link className = 'link'
                    onClick = {()=> setShow(!show)}>
                {show ? '¿No tienes una cuenta? Registrate Aqui' : 'Ya tengo una cuenta'} 
            </Link>

        </div>
    )
}

export default FormsContainer
