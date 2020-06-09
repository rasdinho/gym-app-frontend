import React from 'react'


class Coach extends React.Component{
    
    render(){
        return(
<>

{/* ====================================================================== */}

<div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src={this.props.coach.img} alt="cardImage"/></p>
                                    <h4 class="card-title">{this.props.coach.name}</h4>
                                    <p class="card-text">{this.props.coach.specialty}</p>
                                    <a href="." class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{this.props.coach.name}</h4>
                                    <p class="card-text">{this.props.coach.bio}</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="blank" href=".">
                                                <i class="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="blank" href=".">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="blank" href=".">
                                                <i class="fab fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="blank" href=".">
                                                <i class="fab fa-google"></i>
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