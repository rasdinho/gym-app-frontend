import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Sessions.css'


//npm install --save react-toastify install this in the console first then(import in the file u gonna use it at { toast } from 'react-toastify'; import 'react-toastify/dist/ReactToastify.css';)

toast.configure() // second step add this
class Session extends React.Component{

    // notify = () =>{
    //     toast("This call is added to your profile")
    // }

    handleJoin = () => {
        fetch("http://localhost:3000/registrations", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({session_id: this.props.session.id, user_id: this.props.user.id})
        }).then(resp => resp.json())
        .then(data => console.log(data.title))

        toast("Session is added to your profile") // 3 this is just to add an alert when u join a session
    }

    render(){
        return(
<>
{/* ====================================================== */}


<li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" id="style-prop">
            <figure><img src={this.props.session.img} className="img-responsive" alt="."/></figure>
            <h3>{this.props.session.title}</h3>
            <p>{Date(this.props.session.date_time).substring(0,21)}</p>
            <p>{this.props.session.duration}</p>
            <p>{this.props.session.coach.name}</p>

            {/* {this.props.user &&
            <button className="button3" onClick={this.handleJoin}>Join</button>
            } */}

            {this.props.user ? <button className="button3" onClick={this.handleJoin}>Join</button> : null}
            
          </div>
      </li>  
{/* ========================================================== */}
</>
        )
    }
}

export default Session