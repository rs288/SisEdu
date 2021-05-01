import React, {useState} from 'react'

function AddGroupForm(props) {
    const [groupData, setData] = useState({
        materia: "",
        grupo : "",
        alumnosActivos: 0
    })

    const handleChange = (event) => {
        setData({
            ...groupData,
            [event.target.name] : event.target.value
        })
        
    }

    const handleSubmit = (event) => {
        props.agregarGrupo(groupData);
        event.preventDefault();

        //LIMPIAR CAMPOS
        
    }

    return (
            <form onSubmit = {handleSubmit} className = "tareas-form" >
                <h1> Añdir un grupo</h1>
                <label>Grupo:</label>
                <input type = "text" value = {groupData.grupo} name= "grupo" onChange = {handleChange}/>
                <label>Materia: </label>
                <input type="text" value = {groupData.materia} name = "materia" onChange = {handleChange}/>
                <button type = "submit" value = "Submit">Crear Grupo</button>
            </form>
    )
}

export default AddGroupForm
