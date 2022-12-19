import './App.css';
import React from 'react';
import Docs from './components/Docs';
import Freatures from './components/Freatures';
import Tools from './components/Tools';
import Pricing from './components/Pricing';
import Jobs from './components/Jobs';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Nav, Navbar, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (<> 
    <Router>
        <Navbar className='navigation nav'>
          <span className='navigation__logo'><h3>HelloUI</h3></span>
          <Nav className='navigation__link'>
            <Nav.Link>
              <Link to="/docs">Docs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tools">Tools</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/freatures">Freatures</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pricing">Pricing</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/jobs">Jobs</Link>
            </Nav.Link>
          </Nav>
          <Button className="navigation-button__signIn btn badge-pill badge-light">Sign In</Button>
          <Button className="navigation-button__tryForFree btn badge-pill badge-primary">Try for Free</Button>
        </Navbar>
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
      </Switch>
    </Router>
  </>
  );
}

export default App;
