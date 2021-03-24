import {React, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

function SignUpForm() {
    return (
        <Fragment> 
        <form className = "loginForm">
            <h1>Registro Sis Edu</h1>
            <input type="text"
            placeholder = 'Ingresar Correo Electronico'
            />
            <input type="password"
            placeholder = 'Contraseña'
            />
            <input type = "password"
            placeholder = 'Confirmar Contraseña'
            />
            <Link to = "/feed">
                <button>Registrarse</button>
            </Link>
        </form>
</Fragment>
    )
}

export default SignUpForm
