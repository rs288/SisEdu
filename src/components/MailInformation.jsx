import React from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'

function MailInformation() {
    return (
        <div className = "info-card">
        <BiIcons.BiUserCircle className = "card-icon"/>
            <div className = "student-info">
                <p>Alumno : Sergio Ramos</p>
                <p>Curso: Ciencias Naturales V1</p>
                <p>Tarea : Actividad Fundamental #2</p>
                <p>Recibido: 10/03/2021 10:30:33 p.m</p>
            </div>
        </div>
    )
}
 
export default MailInformation
