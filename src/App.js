import React from 'react';
import './App.css';
import HomeContainer from './HomeContainer'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'; //make sure u install npm install react-router-dom

import LogIn from './register/LogIn'
import CoachesContainer from './coaches/CoachesContainer'




class App extends React.Component{
  constructor(){
    super()
    this.state = {
        currentUser: {},
    }
  }
 
  componentDidMount(){
    if(localStorage.getItem("token") && localStorage.getItem("token") !== "null"){
      fetch("http://localhost:3000/decode_token", {
        headers: {
          "Authenticate": localStorage.token
        }
      })
      .then(res => res.json())
      .then(user => {
        this.updateCurrentUser(user)
        //if error, don't update the state
      })
    }else{
      console.log("No one is logged in")
    }
  }
  updateCurrentUser = (user) => {
    this.setState({currentUser: user})

  }


  render(){
  return (
    <Router>
      <div className="App">
        {/* ================================================================== */}
        
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/home"><img src="https://i.pinimg.com/originals/3e/c6/f3/3ec6f3910ccd0d507bb8bb7d6b2c2da3.png" className="logo" alt="."/></a>
            <button type="button" className="navbar-toggler"  data-toggle="collapse" data-target="#navbarResponsive"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              {/* ========= */}
              <div id="user-name">
                <p>Hi, {this.state.currentUser ? this.state.currentUser.name : "null"}</p>
              </div>
                
                {/* ========== */}
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item active"><a className="nav-link" href="/home">Home</a></li>

                    <li className="nav-item"><a className="nav-link" href="/coaches">Coaches</a></li>

                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>

                    <li className="nav-item"><a className="nav-link" href="/sessions">Sessions</a></li>

                    <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>

                    <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>

                    <li className="nav-item"><a className="nav-link" href="/Sign Up">Sign Up</a></li>

                    <li className="nav-item"><a className="nav-link" href="/LogIn">LogIn</a></li>
                 
                    {/* ======= */}
                
                    {/* === */}

                </ul>

            </div>
           
            
             

          </div>
        </nav>





{/* =============================================================================== */}


        
{/* =========================================== */}

          <Switch>

            <Route exact path="/coaches" render={() => <CoachesContainer/>}/>
            <Route exact path="/contact"/>
            <Route exact path="/sessions"/>
            <Route exact path="/profile"/>
            <Route exact path="/faq"/>
            <Route exact path="/Sign Up"/>
            <Route exact path="/LogIn" render={() => <LogIn />}/>

            <Route exact path="/home" component={HomeContainer}/>

          </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
