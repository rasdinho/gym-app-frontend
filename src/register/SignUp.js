import React from 'react';
import './SignUp.css'


class SingUp extends React.Component{

    render(){
        return(
<>
<section id="bbb">
  <div class="container" id="ccc">
    <div class="wrap" id="wrapp">
    <h1 class="text-center" id="logoo">SIGN UP</h1>
    <form id="loginn" class="text-center">
      <input type="name" placeholder="FULL NAME" id="emailll"/>
      <input type="img" placeholder="IMAGE" id="emailll"/>
      <input type="email" placeholder="EMAIL" id="emailll"/>
      <input type="password" placeholder="PASSWORD" id="passworddd"/>
    </form>
    <a href="." class="registerrr">Register</a>
    <a href="." class="login-linkkk">Already a memeber? Log in</a>
  </div>
  </div>
</section>



</>
        )
    }
}
export default SingUp