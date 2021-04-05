import {React} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import InitialContainer from './components/InitialContainer'
import './styles/App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MailCard from './components/MailCard';
import MailInformation from './components/MailInformation';
import MailContent from './components/MailContent';
import TareaCard from './components/TareaCard';
import TareaForm from './components/TareaForm';
import GroupCard from './components/GroupCard';
import Calendar from 'react-calendar';

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
            <div className = "feed-container">
            <Header/>
            <Sidebar/>
              <div className = "general-view">
                <TareaCard/>
                <TareaCard/>
                <TareaCard/>
                <TareaCard/>
                </div>
              <div className = "specific-view">
                <TareaForm/>
              </div>
            </div>
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
