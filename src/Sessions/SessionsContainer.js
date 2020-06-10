import React from 'react';
import Session from './Session';
import './Sessions.css'



class SessionsContainer extends React.Component{
    state={
        sessions: []
    }

componentDidMount(){
    fetch("http://localhost:3000/sessions")
    .then(resp => resp.json())
    .then(sessions => {
      this.setState({
        sessions: sessions
      })
    })
}
   
    render(){
        return(
<>
{/* ====================================================== */}
<section className="our-webcoderskull padding-lg">
    <div className="container">

            <div className="row heading heading-icon">
                <h3>Our Sessions</h3>
                {/* <hr className="divider bg-danger hr-md-left-0"/> */}
            </div>

            <div id="ul-div">
                    <ul className="row" id="ul-new">
                        {this.state.sessions.map(s => <Session session={s} key={s.id}/>)}
                    </ul>
            </div>
    </div>
</section>
{/* ========================================================== */}
    
</>
        )
    }
}

export default SessionsContainer