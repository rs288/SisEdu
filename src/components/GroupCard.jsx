import React from 'react'
import { BiDirections } from 'react-icons/bi'
import * as GrIcons from 'react-icons/gr'
import '../styles/Feed.css'

function GroupCard(props) {
    return (
        <div className = "card">
        <GrIcons.GrGroup className = "card-icon"/>
        <div class= "card-information">
            <h3>Grupo : {props.group.grupo}</h3>
            <h3>Materia: {props.group.materia}</h3>
            <h3>hora: {props.group.hora}</h3>
         </div>
        </div>
    )
}

export default GroupCard
