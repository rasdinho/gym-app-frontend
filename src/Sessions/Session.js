import React from 'react';
import './Sessions.css'



class Session extends React.Component{


    render(){
        console.log("s", this.props.session)
        return(
<>
{/* ====================================================== */}


<li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" id="style-prop">
            <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt=""/></figure>
            <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
            <p>Freelance Web Developer</p>
            <button className="button3">Join</button>
          </div>
      </li>  


{/* ========================================================== */}
</>
        )
    }
}

export default Session