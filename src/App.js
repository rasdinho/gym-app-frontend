import React from 'react';
import './App.css';
import HomeContainer from './HomeContainer';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'; //make sure u install npm install react-router-dom

import LogIn from './register/LogIn';
import SingUp from './register/SignUp';
import CoachesContainer from './coaches/CoachesContainer';
import SessionsContainer from '../src/Sessions/SessionsContainer';
// import Profile from '../src/profile/Profile'
import ProfileContainer from './profile/ProfileContainer';
import CoachReview from './coaches/CoachReview'




class App extends React.Component{
  constructor(){
    super()
    this.state = {
        currentUser: null,
       
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
// ========================================= sign out ==================================
clearStorage = () => {
  localStorage.clear()
  this.setState({
    currentUser:null
  })
}
// =========================================== edit user============================================
  updateUser = (updatedUser) => {
    this.setState({currentUser: updatedUser})
  }
  
// =======================================================================================

  render(){
    //console.log("updatedUser",this.state.currentUser)
    
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
              {/* <div id="user-name">
                
                <p>Hi, {this.state.currentUser ? this.state.currentUser.name : "null"} <a href="/home"><i className='fas fa-sign-out-alt' id="sign-out-icon" onClick={() => localStorage.clear()}></i></a></p>
                
              </div> */}
             {/* ==============================after log in== my way======== */}

              {this.state.currentUser ? 

                <div id="user-name">
                <p>Hi, {this.state.currentUser.name} <button id="sign-out-btn" onClick= {this.clearStorage}><i className='fas fa-sign-out-alt' id="sign-out-icon"></i></button></p>
                </div>
              : 
              ""
              } 

                {/* ========== */}
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item active"><a className="nav-link" href="/home">Home</a></li>

                    <li className="nav-item"><a className="nav-link" href="/coaches">Coaches</a></li>

                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>

                    <li className="nav-item"><a className="nav-link" href="/sessions">Sessions</a></li>

                    <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>

                    <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>

{/* ===================================== */}
                  {!this.state.currentUser ?
                    <li className="nav-item"><a className="nav-link" href="/Sign Up">Sign Up</a></li>
                    :
                    null
                    }

                  {!this.state.currentUser ?
                    <li className="nav-item"><a className="nav-link" href="/LogIn">LogIn</a></li>
                    :
                    null
                    }
                    {/* ======= */}
                
                    {/* === */}

                </ul>

            </div>
           
            
             

          </div>
        </nav>





{/* =============================================================================== */}


        
{/* =========================================== */}

          <Switch>

            <Route exact path="/coaches" render={() => <CoachesContainer user = {this.state.currentUser}/>}/>

            <Route exact path="/contact"/>

            <Route exact path="/sessions" render={() => <SessionsContainer user = {this.state.currentUser}/>}/>

            {/* <Route exact path="/profile"> {this.state.currentUser ? <Profile user={this.state.currentUser} editProfile={this.editProfile}/> : <Redirect to="/LogIn"/> }</Route> */}

            <Route exact path="/profile"> {this.state.currentUser ? <ProfileContainer user={this.state.currentUser} updateUser={this.updateUser}/> : <Redirect to="/LogIn"/> }</Route>
            


            <Route exact path="/faq"/>
              
            <Route exact path="/Sign Up" render={() => (this.state.currentUser ? <Redirect to = "/profile"/> : <SingUp updateCurrentUser={this.updateCurrentUser} />)  }/>

            <Route exact path="/LogIn"> {this.state.currentUser ? <Redirect to = "/profile"/> : <LogIn updateCurrentUser={this.updateCurrentUser}/>}</Route>

            <Route exact path="/home" component={HomeContainer}/>

            <Route exact path="/coaches/:id" render={(props) => {return <CoachReview {...props} userReview={this.state.currentUser}/>}} />
            
          </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
