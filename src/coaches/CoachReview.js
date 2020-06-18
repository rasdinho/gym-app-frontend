import React, { Component } from 'react';
import './ReviewCoach.css'
class CoachReview extends Component {
    state ={
        reviews: [],
        leaveReview: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3000/reviews/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(reviews => {
          this.setState({
            reviews: reviews
          })
        })
    }

    handleReview = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
//content,coach for, user leaving a review
    handleSubmit = (e) => {
        e.preventDefault()
       let review = {
            content: this.state.leaveReview,
            coach_id: this.props.match.params.id,
            user_id: this.props.userReview.id //this comes from app.js so we know the user who comment on the coach
        }

        fetch("http://localhost:3000/reviews", {
            method: 'POST',
            headers: {"Content-Type":"application/json", 
                    'Accept': 'application/json'
        },
        body: JSON.stringify(review)
        }
        ).then(resp => resp.json())
        .then(newReview => {
            newReview.user = this.props.userReview
            this.setState({
                reviews: [...this.state.reviews, newReview],
                leaveReview: ''
            })
        })

    }

    render() {
        // const  rev = this.state.coach.reviews.map(r => r.content)
        return (
<>
{/* ============================================================================================================ */}
    {!this.state.reviews[0] ? null : 

<div>
        <h1>{this.state.reviews[0].coach.name}</h1>
        
            <ul>{this.state.reviews.map(r => <li>{r.content} => writing by <small>{r.user ? r.user.name : null}</small></li>)}
        </ul>
            
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Write a Review</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" name="leaveReview" value={this.state.leaveReview} onChange={this.handleReview}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       
</div>
    }
{/* =============================================try it out=============================================================== */}


{/* ============================================================================================================ */}

</>
        );
    }
}

export default CoachReview;