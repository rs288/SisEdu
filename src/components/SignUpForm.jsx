import {React, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

function SignUpForm() {
    return (
        <Fragment> 
        <form className = "loginForm">
            <h1>Registro Sis Edu</h1>
            <p>Correo Electronico</p>
            <input type="text"
            placeholder = 'ejemplo@gmail.com'
            />
            <p>Nombre</p>
            <input type="text"
            placeholder = 'Mra. Juana Ramirez'
            />
            <p>Contraseña</p>
            <input type="password"
            placeholder = '********'
            />
            <p>Confirme su Contraseña</p>
            <input type = "password"
            placeholder = '********'
            />
            <Link to = "/feed">
                <button>Registrarse</button>
            </Link>
        </form>
</Fragment>
    )
}

export default SignUpForm
