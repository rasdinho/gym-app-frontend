import React from 'react'
import Coach from './Coach'


class CoachesContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            allCoaches: []
        }
      }


    // =========================================coaches fetch
componentDidMount(){
    fetch("http://localhost:3000/coaches")
    .then(resp => resp.json())
    .then(coachesArr => {
      this.setState({
        allCoaches: coachesArr
      })
    })
}
   

//=================================================
    
    render(){
        console.log("coaches", this.state.allCoaches)
        return(
<>
{/* ===========================================================first part */}
<div className="container-fluid padding" id="this-top">
            <div className="row padding">
                <div className="col-md-12 col-lg-6">
                    <h4>The team of professionals</h4>
                    <hr className="divider bg-danger hr-md-left-0"/>
                    <p>Our coaches represent years of experience in bodybuilding, yoga, CrossFit, fitness and other disciplines. As a team of professionals practicing for years, Intense provides high-quality training service to local residents and guests of the area. The work of our team has been numerously awarded by American sports committees for our contribution to the development of sport in America.</p>
                </div>

                <div className="col-md-5" id="vid-left">
                    
                    <iframe style={{
                                position: "absolute",top: 0,left: 0, width: "100%", height: "100%", 
                                }}title="youtube" className="img-fluid" width="570" height="300" src="https://www.youtube.com/embed/mJ5D1IdqtWQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

            </div>
            
        </div>
        <hr className="my-4"/>

{/* ==========================================second part ======================================== */}
<section id="team" className="pb-5">
    <div id="container">
        <h7 className="section-title h1">OUR TEAM</h7>
        <hr className="divider bg-danger hr-md-left-0"/>

        <div className="row">
             
            

          
                     {this.state.allCoaches.map(c => <Coach coach={c} key={c.id}/>)}
              

        </div> 

    </div>
</section> 
            
</>         
        )
    }
}

export default CoachesContainer