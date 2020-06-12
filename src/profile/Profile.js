import React from 'react';
import swal from 'sweetalert';
import './Profile.css'





class Profile extends React.Component{
  state={
      user: this.props.user
  }

    handleDelete = (id) =>{
//=============================  this will ask u if u wanna delete u click cancel and it will cancel thats why ur fetch call is under if statement
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch("http://localhost:3000/deleteRegistrations", {
                    method: 'POST',
                    headers: {"Content-Type":"application/json",
                    'Accept': 'application/json'
                  },
                   body: JSON.stringify({user_id: this.props.user.id, session_id: id})
                }).then( resp => resp.json()
                     ).then(data => 
                        this.setState({user: data})
                        )
                        //swal("This session was deleted.") //3 step add ur alert(swal no need import swal from 'sweetalert';)
                        
              swal("Poof! Your file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        //=====================
    // fetch("http://localhost:3000/deleteRegistrations", {
    //     method: 'POST',
    //     headers: {"Content-Type":"application/json",
    //     'Accept': 'application/json'
    //   },
    //    body: JSON.stringify({user_id: this.props.user.id, session_id: id})
    // }).then( resp => resp.json()
    //      ).then(data => 
    //         //console.log(data)
    //         this.setState({user: data})
    //         )
    //         //swal("This session was deleted.") //3 step add ur alert(swal no need import swal from 'sweetalert';)
            
    }


    

    render(){
        //console.log(this.props.user)
        //console.log(this.props.editProfile)
        return(
<>
{this.state.user &&  //if this exict it will show under (the obj of the user is going throu the profile)

<div id="pro">
   <div className="container" id="profile-c">
  <div className="avatar-flip">
    <img src={this.state.user.img} height="150" width="150" alt="."/>
   
  </div>
  <h2 id="h2pro">{this.state.user.name}</h2>
  <h4 id="h4pro">{this.state.user.email}</h4>

  <button onClick={() => this.props.editProfile(this.state.user)}>Edit Profile</button>

  <hr />
  <h4>My Sessions</h4>

<p>{this.state.user.sessions.map((s, index) =>  <div key={index}> {s.title}, {Date(s.date_time).substring(0,21)}<button type="button" className="close" aria-label="Close" onClick={() => this.handleDelete(s.id)}>
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

//we want to click on the button 
//render and edit form and take the users input
//abtility to write on the form event.target.value
//submit the edit 
//============================================================
//make the fetch call to the data base
// the fetch call will return an updated object
//so now we need to change the DOM, u need to go back to the show
//last step is setting the state of the currentUser to the updated object(new user) 