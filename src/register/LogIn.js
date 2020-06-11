import React from 'react';
import swal from 'sweetalert'




class LogIn extends React.Component{
    state = {
        username: "",
        password: "",
        signIn: true
      };


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };


    handleLoginSubmit =(event) => {
        event.preventDefault()
        fetch("http://localhost:3000/login", {
          method:"POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            name: this.state.username,
            password: this.state.password
          })
        }).then(res => res.json())
        .then(userData => {
          console.log("response from the server", userData)
          if(userData.error_message){
            alert(userData.error_message)
          }else{    
            localStorage.setItem("token", userData.token)
            localStorage.setItem("userId", userData.user_data.id)   //added this to store current user 
            this.props.updateCurrentUser(userData.user_data)   
          }
        })
        swal({
            title: "Successfully logged in!",
            // text: "You clicked the button!",
            icon: "success",
            button: "See Profile!",
          });
    }

    render(){
        return(
<>
{/* ===================================================== LogIn ================================================================= */}


{/* ========================================================================================================================= */}

<section className="login-block-new">
    <div className="container" id="login-container">
    <div className="row">
        <div className="col-md-4 login-sec">
            <h2 className="text-center">Login Now</h2>
            {/* ===========================================form ============================= */}
            <form className="login-form" onSubmit={this.handleLoginSubmit} >
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                            <input type="text" className="form-control"  name="username" placeholder="" value={this.state.username} onChange={this.handleChange}/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                            <input type="password" className="form-control" placeholder="" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        
                        
                            <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <small>Remember Me</small>
                            </label>
                            <button type="submit" className="btn btn-login float-right">Submit</button>
                        </div>
            </form>
{/* ================================================================= */}
<div className="copy-text">Created with <i className="fa fa-heart"></i> by <a href="https://www.google.com">Junior</a></div>
        </div>
        <div className="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                 <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
            <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="https://img5.goodfon.com/wallpaper/nbig/6/9f/fitness-abs-muscles-sexy.jpg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
            <h2 id="h2-login">One Community!</h2>
            <p>We value teamwork and mutual assistance above everything else! While our coaches will be gladly helping your fitness growth at individual classes.</p>
        </div>  
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://besthqwallpapers.com/Uploads/5-4-2017/15034/thumb2-bodybuilding-barbell-biceps-exercises-fitness.jpg" alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
            <h2 id="h2-login">We Got You</h2>
            <p>We take our attendees needs closely. Our gym is fully equipped with top notch tools and gears only.</p>
        </div>  
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="https://wallpapercave.com/wp/wp1875535.jpg" alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
        <div className="banner-text">
            <h2 id="h2-login">This is Heaven</h2>
            <p>Our facility offers an extensive place for your CrossFit and fitness practice. Across our 20,000 sq/ft gym space you’ll surely have more than enough room for maneuvering!</p>
        </div>  
    </div>
  </div>
            </div>     
            
        </div>
    </div>
</div>
</div>
</section>
                     {/* ============= */}

{/* ========================================================================================================================= */}

</>

        )
    }
}

export default LogIn