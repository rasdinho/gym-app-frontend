import React from 'react';
import './Profile.css'





class Profile extends React.Component{



    render(){
        console.log(this.props.user)
        return(
<>
{this.props.user &&  //if this exict it will show under (the obj of the user is going throu the profile)

<div id="pro">
   <div className="container" id="profile-c">
  <div clasclassNames="avatar-flip">
    <img src={this.props.user.img} height="150" width="150" alt="."/>
   
  </div>
  <h2 id="h2pro">{this.props.user.name}</h2>
  <h4 id="h4pro">{this.props.user.email}</h4>

<p>{this.props.user.sessions.map((s, index) =>  <div key={index}> {s.title} {s.date}</div>)}</p>
  
</div>
 </div>


    }
</>
        )
    }
}
export default Profile