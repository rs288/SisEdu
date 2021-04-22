import React from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'

function MailCard(props) {

    
    return (
        <div className = "card">
            <BiIcons.BiUserCircle className = "card-icon"/>
            <div className = "card-information">
                <h3>{props.mail.tarea}</h3>
                <h3>{props.mail.name}</h3>               
                <h3>{props.mail.materia}</h3>
                <h3>Grupo {props.mail.grupo}</h3>
            </div>
        </div>
    )
}

export default MailCard
