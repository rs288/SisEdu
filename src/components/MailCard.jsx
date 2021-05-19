import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import '../styles/Feed.css'
import {Modal,TextField, Button, Snackbar } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {ToastContainer, toast} from 'react-toastify'
import * as AiIcons from 'react-icons/ai'



function MailCard(props) {
    const information = {
        alumno: props.mail.name,
        materia: props.mail.materia,
        tarea: props.mail.tarea
    }
    const [modalIsOpen, setModalOpen] = useState(false);
    const [snackbarIsOpen, setSnackbar] = useState(false);
    const [calificacion, setCalifacion] = useState('');
    const [retroAlimentacion, setRetroAlimentacion] = useState('');

    //FUNCION PARA MANEJAR CALIFICACION
    const handleChange = (valor) => {
        setCalifacion(valor.target.value);
        console.log(calificacion)
    }
    
    //FUNCION PARA MANEJAR RETROALIMENTACION
    const handleRetro = (valor) => {
        setRetroAlimentacion(valor.target.value)
    }
    const openCloseModal = () => {
        if (modalIsOpen === true && calificacion !='' && retroAlimentacion!= ''){
            openCloseSnackbar();
        }
        setModalOpen(!modalIsOpen);
    }

    function openCloseSnackbar(){
        setSnackbar(!snackbarIsOpen);
    }
    
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
/*VENTANA DE REVISION*/ 
const revision =(
    <div className = {styles.modal}>
        <div className = "form-header">
            <h2>Revision</h2> 
            <AiIcons.AiOutlineCloseSquare className= "close-button" onClick= {openCloseModal}/>
        </div>
        <label>Alumno: {props.mail.name}</label>
        <br/>
        <br/>
        <label>Tarea: {props.mail.tarea}</label>
        <br/>
        <br/>
        <label>Materia: {props.mail.materia}</label>
        <br/>
        <br/>
        <label>Grupo: {props.mail.grupo}</label>
        <br/>
        <br/>
        <label>Calificacion</label>
        <br/>
        <TextField label = "0/100" onChange = {handleChange}/>
            <br/>
            <br/>
        <label >Retroalimentacion de tarea</label>
        <br/>
        <TextField label = "retroalimentacion" onChange = {handleRetro}/>
            <br/>
        <div align = "center">   
        <button className = "form-button"><AiIcons.AiOutlineDownload/> Descargar Archivo</button>   
        <button onClick = {openCloseModal} className = "form-button">Revisar tarea</button>
        </div>   
    </div>
)

/*ALERTA DE TAREA COMPLETADA*/
const revisado =( 
    <div>
        <h1>Revisado mi buen</h1>
    </div>
)
    return (
    <div>
        <div className = "mail-card" onClick = {openCloseModal}>
            <BiIcons.BiUserCircle className = "card-icon"/>
            <div className = "card-information">
                <h3>{props.mail.tarea}</h3>
                <h3>{props.mail.name}</h3>               
                <h3>{props.mail.materia}</h3>
                <h3>Grupo {props.mail.grupo}</h3>
            </div>
            </div>
            <Modal
            open = {modalIsOpen}
            onClose = {setModalOpen}
            >
                {revision}
            </Modal>
            <Snackbar className="notification" open = {snackbarIsOpen} onClose = {setSnackbar}
            message = "Tarea Revisada con Éxito"
            autoHideDuration = {1500}
            ></Snackbar>
        </div>
      
    )
}

export default MailCard


