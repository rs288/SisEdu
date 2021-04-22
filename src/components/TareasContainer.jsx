import {React, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import TareaCard from './TareaCard';
import TareaForm from './TareaForm';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function TareasContainer() {
    
    const tareasData = [
        {id: uuidv4(), nombreAct: "Resumen Etapa 2", materia: "Historia", grupo: 45, fechaEntrega: "20/03/2021"}
    ]
    const [tareas,setTareas] = useState(tareasData);

    //AGREGAR TAREAS NUEVAS
    const agregarTarea = (tarea) => {
        tarea.id = uuidv4();
        setTareas([
            ...tareas,
            tarea
        ])

    }

    return (
        <div className = "feed-container">
            <Header/>
            <Sidebar/>
            <div className = "general-view">
            {
                tareas.map(tarea =>(
                    <TareaCard key = {tarea.id} tarea = {tarea}/>
                ))
            }
            </div>
            <div className = "specific-view">
                <TareaForm agregarTarea = {agregarTarea}/>
            </div>
        </div>
    )
}

export default TareasContainer
