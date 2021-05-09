import React from 'react'
import '../styles/Feed.css';
import * as FiIcons from 'react-icons/fi'
import * as RiIcons from 'react-icons/ri'
import {Link} from 'react-router-dom';
function Sidebar() {
    return (
        <div className = "sidebar-menu">
            <nav>
                <FiIcons.FiUser className = "user-icon"/>
                <ul>
                   <Link to = '/feed' className = "menuButton"> <FiIcons.FiMail/> Bandeja Principal </Link> 
                   <Link to = '/grupos' className = "menuButton"> <RiIcons.RiGroupLine/>Grupos </Link> 
                   <Link to = '/tareas'className = "menuButton"><RiIcons.RiTaskLine/>Tareas </Link> 
                  <li><FiIcons.FiSettings/>Configuracion</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
