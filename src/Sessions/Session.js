import React from 'react';
import './Sessions.css'



class Session extends React.Component{


    render(){
      
        return(
<>
{/* ====================================================== */}


<li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" id="style-prop">
            <figure><img src={this.props.session.img} className="img-responsive" alt="."/></figure>
            <h3>{this.props.session.title}</h3>
            <p>{this.props.session.date_time}</p>
            <p>{this.props.session.duration}</p>
            <p>{this.props.session.coach_id}</p>
            <button className="button3">Join</button>
          </div>
      </li>  
{/* ========================================================== */}
</>
        )
    }
}

export default Session