import React from 'react'
import { BiDirections } from 'react-icons/bi'
import * as GrIcons from 'react-icons/gr'
import '../styles/Feed.css'

function GroupCard() {
    return (
        <div className = "card">
        <GrIcons.GrGroup className = "card-icon"/>
        <div class= "card-information">
            <h2>Grupo: 002</h2>
            <h3>Materia: Ciencias Naturales</h3>
            <h3>42 Estudiantes Activos</h3>
         </div>
        </div>
    )
}

export default GroupCard
