import React from 'react';
import {Link} from 'react-router-dom'


class Coach extends React.Component{
    
    render(){
        const {coach, user} = this.props 
        return(
<>

{/* ====================================================================== */}

<div className="col-xs-12 col-sm-6 col-md-4">
                <div className="image-flip" >
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <p><img className=" img-fluid" src={coach.img} alt="cardImage"/></p>
                                    <h4 className="card-title">{coach.name}</h4>
                                    <p className="card-text">{coach.specialty}</p>
                                    <a href="." className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">{coach.name}</h4>
                                    <p className="card-text">{coach.bio}</p>

                                    {user ?
                                    <Link to={`/coaches/${coach.id}`}>
                                    <button id="review-coach-btn">Reviews</button>
                                    </Link> : null}
<hr />
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blank" href=".">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blank" href=".">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blank" href=".">
                                                <i className="fab fa-skype"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blank" href=".">
                                                <i className="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>


{/* ====================================================================== */}

</>
        )
    }
}

export default Coach