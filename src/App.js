import React from 'react';
import './App.css';
import HomeContainer from './HomeContainer'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'; //make sure u install npm install react-router-dom

// import {
//   BrowserRouter as Router,
//   Switch, //importing the Link Switch and the Route form the library
//   Route
// } from "react-router-dom";



class App extends React.Component{


  render(){
  return (
    <Router>
      <div className="App">
          <nav>
              
              <ul className="topnav">
                <li className="bottomnav">
                  <a className="active" href="/home">Home</a>
                </li>

                <li className="bottomnav">
                  <a href="/coaches">Coaches</a>
                </li>

                <li className="bottomnav">
                  <a href="/contact">Contact</a>
                </li>

                <li className="bottomnav">
                  <a href="/sessions">Sessions</a>
                </li>

                <li className="bottomnav">
                  <a href="/profile">Profile</a>
                </li>

                <li className="bottomnav">
                  <a href="/faq">FAQ</a>
                </li>

                <li className="bottomnav">
                  <a href="/register">Register</a>
                </li>
              </ul>
          </nav>

          <Switch>

            <Route exact path="/coaches"/>
            <Route exact path="/contact"/>
            <Route exact path="/sessions"/>
            <Route exact path="/profile"/>
            <Route exact path="/faq"/>
            <Route exact path="/register"/>

            <Route exact path="/home" component={HomeContainer}/>

          </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
