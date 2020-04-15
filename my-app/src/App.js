import React from 'react';
import About from './About.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Resume from './resume.js';
import Applications from './applications.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.burgerItems = this.burgerItems.bind(this);
  }

  clickHandler(e){
    //e.preventDefault();
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  burgerItems(){
    if (this.state.isMenuOpen) {
      return (
        <div className="openBurger">
          <NavLink className='burgerLink' smooth to="#about" activeClassName="activeRoute" onClick={this.clickHandler} exact>About Me<br/></NavLink>
          <NavLink className='burgerLink' smooth to="#applications" activeClassName="activeRoute" onClick={this.clickHandler}>Applications</NavLink>
          <NavLink className='burgerLink' smooth to="#resume" activeClassName="activeRoute" onClick={this.clickHandler}>Resume<br/></NavLink>
        </div>
      )
    } else {
      return (
        <div className="closedBurger"></div>
      )
    }
  }

  routerItems = (
    <div>
      <NavLink className='routeLink' smooth to="#about" activeClassName="activeRoute" exact>About Me</NavLink>
      <NavLink className='routeLink' smooth to="#applications" activeClassName="activeRoute" >Applications</NavLink>
      <NavLink className='routeLink' smooth to="#resume" activeClassName="activeRoute">Resume</NavLink>
    </div>
          )

  render(){
    return(
      <div className="App">
        <Router>
          <div className='headerRouter' id="myTopnav">
            <span className="logoHeader">
              <img className="logo" alt="dm" src="dmLogo.gif"  height="50"/>
              : Portfolio
            </span>
            {this.routerItems}
            <span className="icon" onClick={this.clickHandler}>
              {"\u2630"}
            </span>
          </div>
            {this.burgerItems()}
          <div className='route'>
            <div id='about' className='topSpacer'><div className='topSpacer'/><About /></div>
            <div id='applications'><div className='topSpacer'/><Applications /> </div>
            <div id='resume'><div className='topSpacer'/><Resume /></div>
            {/* <Route exact={true} path="/" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/applications" component={Applications} /> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
