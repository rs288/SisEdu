import React, {useState} from 'react'
import * as GrIcons from 'react-icons/gr'
import '../styles/Feed.css';
import {TextField} from '@material-ui/core'

function TareaForm(props) {
 
    
    const [tareaData, setData] = useState({
        nombre : "",
        materia: "",
        grupo : "",
        descrip: "",
        fecha: "",
	file:""
    })

    const handleChange = (event) => {
            setData({
                ...tareaData,
                [event.target.name] : event.target.value
            })

    }
    const handleSubmit = (event) => {
        props.agregarTarea(tareaData);
        console.log(tareaData);
       	event.preventDefault();
        //LIMPIAR CAMPOS    
    }
    
    return (
            <form className = "tareas-form" >
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
                <input type="date" value={tareaData.fecha} name = "fecha" onChange= {handleChange}/>
	    	<label>Agregar Recursos</label>
	    	<input type="file" name="adjunto" accept=".pdf,.jpg,.png" multiple onChange={handleChange} /> 
	    	<button className = "form-button" onClick={handleSubmit}>Crear Tarea</button>
            </form>
    )
}

export default  TareaForm

    

