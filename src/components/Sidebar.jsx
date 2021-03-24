import React from 'react'
import '../styles/Feed.css';
import * as FiIcons from 'react-icons/fi'
import * as RiIcons from 'react-icons/ri'
function Sidebar() {
    return (
        <div className = "sidebar-menu">
            <nav>
                <FiIcons.FiUser className = "user-icon"/>
                <ul>
                    <li><FiIcons.FiMail/> Bandeja Principal </li>
                    <li><RiIcons.RiGroupLine/>Grupos</li>
                    <li><RiIcons.RiTaskLine/>Tareas</li>
                    <li><FiIcons.FiSettings/>Configuracion</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
