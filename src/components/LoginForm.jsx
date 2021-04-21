import {React, Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

function LoginForm() {

    return (
        <Fragment> 
                <form className = "loginForm">
                    
                    <h1>Bienvenido a Sis Edu</h1>
                    <p>Correo Electronico</p>
                    <input type="text"
                    placeholder = 'ejemplo@gmail.com'
                    />
                    <p>Contraseña</p>
                    <input type="password"
                    placeholder = '*******'
                    />
                    <Link to = "/feed">
                        <button>Iniciar Sesion</button>
                    </Link>

                </form>
        </Fragment>
    )
}

export default LoginForm
