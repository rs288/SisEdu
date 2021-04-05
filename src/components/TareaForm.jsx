import React from 'react'
import * as GrIcons from 'react-icons/gr'

function TareaForm() {
    return (
        <div className = "tareas-form">
            <form>
                <h1> Asignacion de Tareas</h1>
                <label>Nombre de Actividad:</label>
                <input type = "text"/>
                <label>Codigo de Actividad: </label>
                <input type="text"/>
                <label>Grupo:</label>
                <input type = "text"/>
                <label>Descripcion de la Actividad</label>
                <input type="text"/>
                <label> Fecha de entrega:</label>
                <input type="text"/>
                <label>Agregar Recursos</label>
                <button><GrIcons.GrDocumentUpload/></button>
            </form>
        </div>
    )
}

export default TareaForm
