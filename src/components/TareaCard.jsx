import React from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'

function TareaCard() {
    return (
        <div className = "card">
        <BiIcons.BiTask className = "card-icon"/>
        <div class = "card-information">
            <h2>Tarea 5</h2>
            <h3>Ciencias Naturales</h3>
            <h3>Grupo: 002</h3>
            <h3>Fecha de entrega: 25/03/2021</h3>
        </div>
        </div>
    )
}

export default TareaCard
