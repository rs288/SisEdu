import {React} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import InitialContainer from './components/InitialContainer'
import './styles/App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MailCard from './components/MailCard';
import MailInformation from './components/MailInformation';
import MailContent from './components/MailContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/feed'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
                <div className = "general-view">
                  <MailCard/>
                  <MailCard/>
                  <MailCard/>
                  <MailCard/>
                  <MailCard/>
                  <MailCard/>
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
                <h2> Todos los grupos</h2>
              </div>
              <div className = "specific-view">
                <h2>Info de los grupos</h2>
              </div>
            </div>
          </Route>
          <Route path = '/tareas'>
            <div className = "feed-container">
            <Header/>
            <Sidebar/>
              <div className = "general-view">
                <h2>Todas las tareas</h2>
              </div>
              <div className = "specific-view">
                <h2>Asignacion de tareas</h2>
              </div>
            </div>
          </Route>
          <Route path = '/calendario'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
              <div className = "general-view">
                <h2>Aqui va el calendario</h2>
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
