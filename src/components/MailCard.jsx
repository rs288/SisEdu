import React from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'

function MailCard() {
    return (
        <div className = "card">
            <BiIcons.BiUserCircle className = "card-icon"/>
            <div className = "card-information">
                <h2>Juan Ramos</h2>
                <h3>Actividad 2 Ciencias Naturales</h3>
            </div>
        </div>
    )
}

export default MailCard
