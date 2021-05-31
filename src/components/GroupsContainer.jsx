import React, { useState } from 'react';
import '../styles/App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import {v4 as uuidv4} from 'uuid';
import GroupCard from './GroupCard';
import AddGroupForm from './AddGroupForm';
import axios from 'axios'; 

function GroupsContainer() { 
   const groupData= []

    const [groups, setGroups] = useState(groupData)
        //AGREGAR TAREAS NUEVAS
        const agregarGrupo = (grupo) => {
	    const payload = {
	    "Grupo": grupo.grupo,
	    "Materia": grupo.materia,
    	    "Hora":grupo.hora };
	    axios.post('http://127.0.0.1:8000/grupo', payload);
    	    console.log(grupo);    
	    grupo.id = uuidv4();
	    setGroups([
                ...groups,
                grupo
            ])
        }


    const displayInformation = (e) => {
        e.preventDefault();
        console.log('hiciste clic en una carta');
    }

    let myfuncion = ()=>{
	axios.get('http://127.0.0.1:8000/grupo').then(resp => {	
	for (const[n] in resp.data){ 
		groupData.push({
                      id:uuidv4(), grupo:resp.data[n]["Grupo"],
	              materia:resp.data[n]["Materia"],
		      hora:resp.data[n]["Hora"]	});
		setGroups([...groups])}
	});
	console.log(groupData);
    }

    let get = async ()=> {
	console.log('calling');
	const result = await myfuncion();
	console.log(result);
     // expected output: "resolved"
    }
    return (
	<div className = "feed-container" onLoad = {get}>
            <Header/>
            <Sidebar/>
            <div className = "general-view">
                {
                    groups.map(group => (
                        <GroupCard key = {group.id} group = {group} onClick = {displayInformation}/>
                    ))
                }
            </div>
            <div className = "specificView">
               <AddGroupForm agregarGrupo = {agregarGrupo}/>
            </div>    
        </div>
    )
}

export default GroupsContainer
