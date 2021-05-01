import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'
import {Modal,TextField, Button } from '@material-ui/core'
import MailInformation from './MailInformation';
import {makeStyles} from '@material-ui/core/styles'


function MailCard(props) {
    const information = {
        alumno: props.mail.name,
        materia: props.mail.materia,
        tarea: props.mail.tarea
    }

    const openCloseModal = () => {
        setModalOpen(!modalIsOpen);
    }
    const [modalIsOpen, setModalOpen] = useState(false);
    
const useStyles = makeStyles((theme)=>({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textfield:{
        width: '100%'
    }
}))
const styles = useStyles();
const revision =(
    <div className = {styles.modal}>
        <div align = 'center'>
            <h2>Revision</h2> 
        </div>
        <label>Alumno: {props.mail.name}</label>
        <br/>
        <label>Tarea: {props.mail.tarea}</label>
        <br/>
        <label>Materia: {props.mail.materia}</label>
        <br/>
        <label>Grupo: {props.mail.grupo}</label>
        <br/>
        <br/>
        <label>Calificacion</label>
        <br/>
        
        <TextField label = "0/100"/>
            <br/>
            <br/>
        <label >Retroalimentacion de tarea</label>
        <br/>
        <TextField label = "retroalimentacion"/>
            <br/>
        <div align = "center">      
        <button onClick = {openCloseModal}>Revisar tarea</button>
        </div>   
    </div>
)
    return (
        
        <div className = "mail-card" onClick = {openCloseModal}>
            <BiIcons.BiUserCircle className = "card-icon"/>
            <div className = "card-information">
                <h3>{props.mail.tarea}</h3>
                <h3>{props.mail.name}</h3>               
                <h3>{props.mail.materia}</h3>
                <h3>Grupo {props.mail.grupo}</h3>
            </div>
            <Modal
            open = {modalIsOpen}
            onClose = {setModalOpen}
            >
                {revision}
            </Modal>
        </div>
    )
}

export default MailCard


