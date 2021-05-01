import React from 'react'
import { BiWindowOpen } from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'

function MailContent() {
    return (
        <div className = "mail-content">
            <h1> Comentarios</h1>
            <p>Buena tarde profe, mando la actividad fundamental numero dos de ciencias naturales
                buena tarde 
            </p>
            <button className = "download-button"> <BsIcons.BsDownload/> Act2C.N.V1S2.pdf</button>
            <button className = "revision-button">Revisar Actividad </button>
            

            
        </div>
    )
}

export default MailContent
