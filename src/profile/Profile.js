import React from 'react';
import './Profile.css'





class Profile extends React.Component{
  state={
      user: this.props.user
  }

    handleDelete = (id) =>{
    fetch("http://localhost:3000/deleteRegistrations", {
        method: 'POST',
        headers: {"Content-Type":"application/json",
        'Accept': 'application/json'
      },
       body: JSON.stringify({user_id: this.props.user.id, session_id: id})
    }).then( resp => resp.json()
         ).then(data => 
            //console.log(data)
            this.setState({user: data})
            )
    }


    render(){
        //console.log(this.props.user)
        return(
<>
{this.state.user &&  //if this exict it will show under (the obj of the user is going throu the profile)

<div id="pro">
   <div className="container" id="profile-c">
  <div clasclassNames="avatar-flip">
    <img src={this.state.user.img} height="150" width="150" alt="."/>
   
  </div>
  <h2 id="h2pro">{this.state.user.name}</h2>
  <h4 id="h4pro">{this.state.user.email}</h4>

<p>{this.state.user.sessions.map((s, index) =>  <div key={index}> {s.title} <button type="button" className="close" aria-label="Close" onClick={() => this.handleDelete(s.id)}>
  <span aria-hidden="true">&times;</span>
</button></div>)} </p>
  
</div>
 </div>


    }
</>
        )
    }
}
export default Profile