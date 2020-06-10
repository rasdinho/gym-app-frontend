import React from 'react';
import './SignUp.css'


class SingUp extends React.Component{
    state={
        name:'',
        email: '',
        img: '',
        password: ''

    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
          method:"POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            "user": {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            img: this.state.img
            }
          })
        }).then(res => res.json())
        .then(userData => {
          console.log("response from the server", userData)
          if(userData.error_message){
            alert("There are errors in the form, fix them")
          }else{
            localStorage.setItem("token", userData.token)
            localStorage.setItem("userId", userData.user_data.id)   //added this to store current user 
            this.props.updateCurrentUser(userData.user_data.user)   
          }
        })
        console.log("attempting to log in")
      };


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }


render(){
        return(
<>
<section id="bbb">
  <div className="container" id="ccc">
    <div className="wrap" id="wrapp">
    <h1 className="text-center" id="logoo">SIGN UP</h1>

    <form id="loginn" className="text-center">

      <input type="name" placeholder="FULL NAME" id="emailll" name="name" value={this.state.name} onChange={this.handleChange} />

      <input type="img" placeholder="IMAGE" id="emailll" name="img" value={this.state.img} onChange={this.handleChange} />

      <input type="email" placeholder="EMAIL" id="emailll" name="email" value={this.state.email} onChange={this.handleChange} />

      <input type="password" placeholder="PASSWORD" id="passworddd" name="password" value={this.state.password} onChange={this.handleChange} />

    </form>
    <a href="/home" onClick={this.handleLoginSubmit} class="registerrr">Register</a>
    <a href="/login" className="login-linkkk">Already a memeber? Log in</a>
  </div>
  </div>
</section>



</>
        )
    }
}
export default SingUp