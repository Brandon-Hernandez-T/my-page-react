import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
/** PANTALLAS */
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Login" render={props => <Login {...props} />} />
        <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props} />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
