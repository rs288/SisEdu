import {React, Fragment, useState} from 'react';
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

function LoginForm() {

    return (
        <Fragment> 
                <form className = "loginForm">
                    <h1>Bienvenido a Sis Edu</h1>
                    <input type="text"
                    placeholder = 'Usuario'
                    />
                    <input type="password"
                    placeholder = 'Contraseña'
                    />
                    <Link to = "/feed">
                        <button>Iniciar Sesion</button>
                    </Link>

                </form>
        </Fragment>
    )
}

export default LoginForm
