import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
/** PANTALLAS */
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import RickAndMorty from './pages/RickandMorty/RickAndMorty';
import Notfound from './pages/NotFound/Notfound';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Login" render={props => <Login {...props} />} />
        <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props} />} />
        <Route exact path="/api" name="Api" render={props => <RickAndMorty {...props} />} />
        <Route component={Notfound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
