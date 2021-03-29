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
                  <li> <Link to = '/feed'> <FiIcons.FiMail/> Bandeja Principal </Link> </li> 
                  <li> <Link to = '/grupos'> <RiIcons.RiGroupLine/>Grupos </Link> </li>
                  <li> <Link to = '/tareas'><RiIcons.RiTaskLine/>Tareas </Link> </li>
                  <li> <Link to = '/calendario'> <RiIcons.RiCalendar2Fill/> Calendario </Link></li>
                  <li><FiIcons.FiSettings/>Configuracion</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
