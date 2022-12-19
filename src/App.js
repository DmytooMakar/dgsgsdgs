import React from 'react';
import Docs from './components/Docs';
import Freatures from './components/Freatures';
import Tools from './components/Tools';
import Pricing from './components/Pricing';
import Jobs from './components/Jobs';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Nav, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (<> 
    <Router>
        <Nav className='navigation nav'>
          <span className='navigation__logo'><Link to="/Home">HelloUI</Link></span>
          <div className='navigation__link'>
            <Link to="/docs">Docs</Link>                       
            <Link to="/tools">Tools</Link>                        
            <Link to="/freatures">Freatures</Link>                        
            <Link to="/pricing">Pricing</Link>           
            <Link to="/jobs">Jobs</Link>           
          </div>
          <div>
            <Button className='navigation-button__signIn  badge-pill badge-light'>Sign In</Button>
            <Button className='navigation-button__tryForFree  badge-pill badge-primary'>Try for Free</Button>
          </div>
        </Nav>

      <Switch>
        <Route exact path="/docs">
          <Docs />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
        <Route path="/freatures">
          <Freatures />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
