import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import About from './About.js';
import './App.css';

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

  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  // scrollToBottom() {
  //   scroll.scrollToBottom();
  // }
  // scrollTo() {
  //   scroll.scrollTo(100);
  // }
  // scrollMore() {
  //   scroll.scrollMore(100);
  // }
  // handleSetActive(to) {
  //   console.log(to);

  // }

  clickHandler(e){
    //e.preventDefault();
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  burgerItems(){
    if (this.state.isMenuOpen) {
      return (
        <div className="openBurger">
          <Link className='burgerLink' activeClass='activeRoute' to="about" spy={true} smooth={true} duration={500} onClick={this.clickHandler}>About Me<br/></Link>
          <Link className='burgerLink' activeClass='activeRoute' spy={true} duration={500} smooth={true} offset={-50} to="applications" onClick={this.clickHandler} >Applications</Link>
          <Link className='burgerLink' activeClass='activeRoute' spy={true} smooth={true} duration={500} offset={-50} onClick={this.clickHandler} to='resume'>Resume<br/></Link>
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
      <Link className='routeLink' activeClass='activeRoute' spy={true} duration={500} smooth={true} offset={-50} to="about">About Me</Link>
      <Link className='routeLink' activeClass='activeRoute' spy={true} duration={500} smooth={true} offset={-50} to="applications">Applications</Link>
      <Link className='routeLink' activeClass='activeRoute' spy={true} duration={500} smooth={true} offset={-50} to="resume" >Resume</Link>
    </div>
          )

  render(){
    return(
      <div className="App">
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
            {/* <div id='about'><About /></div>
            <div id='applications'><div className='topSpacer'/><Applications /> </div>
            <div id='resume'><div className='topSpacer'/><Resume /></div> */}
            <Element name ='about'> <About/> </Element>
            <Element id="applications"> <Applications/> </Element>
            <Element id='resume'> <Resume/> </Element>
      </div>
    </div>
    )
  }
}

export default App;
