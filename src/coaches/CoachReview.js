import React, { Component } from 'react';

class CoachReview extends Component {
    state ={
        coach: null,
        leaveReview: ''
    }

    componentDidMount(){
        fetch(`http://localhost:3000/coaches/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(coach => {
          this.setState({
            coach: coach
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
            coach_id: this.state.coach.id,
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
            this.setState({
                coach: {
                    ...this.state.coach, //this array we wanna put reviews in it
                    reviews: [...this.state.coach.reviews, newReview]
                } 
            })
        })

    }

    render() {
        // const  rev = this.state.coach.reviews.map(r => r.content)
        return (
<>
            {!this.state.coach ? null : 

<div>
        <h1>{this.state.coach.name}</h1>
        <ul>{this.state.coach.reviews.map(r => <li>{r.content}</li>)}
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

</>
        );
    }
}

export default CoachReview;