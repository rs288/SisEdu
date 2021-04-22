import {React, useState} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import InitialContainer from './components/InitialContainer'
import './styles/App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MailInformation from './components/MailInformation';
import MailContent from './components/MailContent';
import TareaCard from './components/TareaCard';
import TareaForm from './components/TareaForm';
import GroupCard from './components/GroupCard';
import Calendar from 'react-calendar';
import EmailContainer from './components/EmailContainer';
import {v4 as uuidv4} from 'uuid';
import TareasContainer from './components/TareasContainer';

function App() {

  const mailData = [ 
    {id: uuidv4() , name: 'Juan Herrera', tarea: 'Actividad #2', materia: 'Ciencias Naturales', grupo: 52},
    {id: uuidv4() , name: 'Valeria Zamora', tarea: 'Ejercicios Suma y Resta', materia: 'Matematicas', grupo: 24},
    {id: uuidv4() , name: 'Ernesto Fonseca', tarea: 'Resumen Etapa 2', materia: 'Historia ', grupo: 61},
  ]

  const [mails, setMail] = useState(mailData);
  


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/feed'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
                <div className = "general-view">
                  <EmailContainer mails = {mails}/>
                </div>
                <div className = "specific-view">
                  <MailInformation/>
                  <MailContent/>
                </div>
            </div>
          </Route>
          <Route path = '/grupos'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
              <div className = "general-view">
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
                <GroupCard/>
              </div>
              <div className = "specific-view">
                <h2>Info de los grupos</h2>
              </div>
            </div>
          </Route>
          <Route path = '/tareas'>
               <TareasContainer/>
          </Route>
          <Route path = '/calendario'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
              <div className = "general-view">
                <Calendar/>
              </div>
              <div className = "specific-view">
                <h2>Manejo del calendario</h2>
              </div>
            </div>
          </Route>
          <Route path = '/' exact>
              <InitialContainer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
