import {React, useState} from 'react'
import "../styles/Login.css"
import imagenCorreo from '../assets/logoCorreo.png'
import FormsContainer from './FormsContainer'

function InitialContainer() {
 

    return (
        <div className = "container">
        <img src = {imagenCorreo} alt = "Correo" className = "mailImage"></img>
            <FormsContainer/>
            
        </div>
    )
}

export default InitialContainer
