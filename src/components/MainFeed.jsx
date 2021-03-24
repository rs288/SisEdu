import {React, Fragment} from 'react'
import '../styles/Feed.css'
import headerIcon from '../assets/sisedu2.png'

function MainFeed() {
    return (
        
            <Fragment className= "main-feed-container">
                <header className = "header">
                    <img className= "headerIcon" src= {headerIcon} alt="icono"/>
                    <h1>Sis Edu</h1>
                </header>
             
            
            </Fragment>

           
    )
}

export default MainFeed
