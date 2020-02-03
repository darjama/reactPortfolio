import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Resume from './resume.js';
import Applications from './applications.js';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div className='headerRouter'>
      <Link className='routeLink' to="/">Home</Link>
      <Link className='routeLink' to="/resume">Resume</Link>
      <Link className='routeLink' to="/applications">Applications</Link>
    </div>
    <div className='route'>
      <Route exact={true} path="/" component={App} />
      <Route path="/resume" component={Resume} />
      <Route path="/applications" component={Applications} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
