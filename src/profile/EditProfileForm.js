import React from 'react';
import swal from 'sweetalert';





class EditProfileForm extends React.Component{
    constructor(props){
        super(props)
    this.state={
        name: this.props.currentUser.name,
        email: this.props.currentUser.email,
        img: this.props.currentUser.img,
        // password: this.props.password_digest
    }
}

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const id = this.props.currentUser.id //getting the id of the user I am willing to change form the props

        const updateUser = {
            name: this.state.name, 
            email: this.state.email,
            img: this.state.img
            // password: this.state.password
        }
       
       fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json", 
                    'Accept': 'application/json'
        },
            body: JSON.stringify(updateUser)
       }).then(resp => resp.json())
         .then(updatedUser => { console.log("update", updatedUser)
             this.props.updateUser(updatedUser)})
        //  swal("Successfully Updated!", "success");
        swal({
            title: "Successfully Updated!",
            // text: "You clicked the button!",
            icon: "success",
            button: "Ok!",
          });
        //   this.props.showDetail()
    }


    render(){
        //console.log("sarah",this.props.currentUser)
        return(
<>

<form onSubmit ={this.handleSubmit}>
<div className="form-group">
    <label htmlFor="exampleInputPassword1">Full Name</label>
    <input type="text" className="form-control" id="exampleInputtext" name="name" value={this.state.name} onChange={this.handleChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Image</label>
    <input type="text" className="form-control" id="exampleInputText" name="img"  value={this.state.img} onChange={this.handleChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.handleChange}/>
  </div>
  {/* <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"  value={this.state.password} onChange={this.handleChange}/>
  </div> */}
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</>
        )
    }
}

export default EditProfileForm
//* on clivk of edit btn 
//* render and edit form with the current user s informations
//abtility to write by using onChange event listner
//and take the users input 
//submit the edit 
//============================================================
//make the fetch call to the data base
// the fetch call will return an updated object
//so now we need to change the DOM, u need to go back to the show
//last step is setting the state of the currentUser to the updated object(new user) 