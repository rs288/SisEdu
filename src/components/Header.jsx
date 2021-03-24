import React from 'react'
import headerIcon from '../assets/sisedu2.png'
import '../styles/Feed.css'

function Header() {
    return (
        
            <header className = "header">

                <img className= "headerIcon" src= {headerIcon} alt="icono"/>
                <h1>Sis Edu</h1>
    
            </header>
        
    )
}

export default Header;
