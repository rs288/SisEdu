import {React, useState } from 'react'
import axios from 'axios'; 
import {v4 as uuidv4} from 'uuid';
import TareaCard from './TareaCard';
import TareaForm from './TareaForm';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {fechaEntregaTarea} from './TareaForm'

function TareasContainer(props) {
    
    const tareasData = []
    const [tareas,setTareas] = useState(tareasData);

    //AGREGAR TAREAS NUEVAS
    const agregarTarea = (tarea) => {
	const payload = { 
	"Nombre":tarea.nombreAct,
	"Materia":tarea.materia,
	"Grupo":tarea.grupo,
	"Descrip":tarea.descripcion,
	"Fecha":tarea.fecha,
	"Archivo":"vacio"
	};
	axios.post('http://127.0.0.1:8000/tarea', payload);
	console.log(tarea);
        tarea.id = uuidv4();
        setTareas([
            ...tareas,
            tarea
        ])

    }

    let myfuncion = ()=>{
	axios.get('http://127.0.0.1:8000/tarea').then(resp => {	
	for (const[n] in resp.data){ 
		tareasData.push({
                      id:uuidv4(),nombre:resp.data[n]["Nombre"],
		      materia:resp.data[n]["Materia"],
		      grupo:resp.data[n]["Grupo"],
	              descrip:resp.data[n]["Descrip"],
		      fecha:resp.data[n]["Fecha"]});
		setTareas([...tareas])
	}
	});
	console.log(tareasData);
    }

    let get = async ()=> {
	console.log('calling');
	const result = await myfuncion();
	console.log(result);
     // expected output: "resolved"
    }

    return (
        <div className = "feed-container" onLoad= {get}>
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
