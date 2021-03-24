import {React} from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import InitialContainer from './components/InitialContainer'
import './styles/App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = '/feed'>
            <div className = "feed-container">
              <Header/>
              <Sidebar/>
              <div>
                <p>Contenido mi buen</p>
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
