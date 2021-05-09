import React, {useState} from 'react'
import * as GrIcons from 'react-icons/gr'
import '../styles/Feed.css';


function TareaForm(props) {

    const [tareaData, setData] = useState({
        nombreAct : "",
        materia: "",
        grupo : "",
        descripcion: "",
        fechaEntrega : "",
    })

    const handleChange = (event) => {
        setData({
            ...tareaData,
            [event.target.name] : event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        props.agregarTarea(tareaData);
        event.preventDefault();

        //LIMPIAR CAMPOS
        
    }

    return (
            <form onSubmit = {handleSubmit} className = "tareas-form" >
                <h1> Asignacion de Tareas</h1>
                <label>Nombre de Actividad:</label>
                <input type = "text" value = {tareaData.nombreAct} name= "nombreAct" onChange = {handleChange}/>
                <label>Materia: </label>
                <input type="text" value = {tareaData.materia} name = "materia" onChange = {handleChange}/>
                <label>Grupo:</label>
                <input type = "text" value = {tareaData.grupo} name = "grupo" onChange = {handleChange}/>
                <label>Descripcion de la Actividad</label>
                <input type="text" value = {tareaData.descripcion} name = "descripcion" onChange = {handleChange}/>
                <label> Fecha de entrega:</label>
                <input type="text" value = {tareaData.fechaEntrega} name = "fechaEntrega" onChange = {handleChange}/>
                <label>Agregar Recursos</label>
                <button className = "form-button"><GrIcons.GrDocumentUpload/>Añadir Archivo</button>
                <button className = "form-button" type = "submit" value = "Submit">Crear Tarea</button>
            </form>
    )
}

export default TareaForm
