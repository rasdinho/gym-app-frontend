//rcc + tab
import React, { Component } from 'react';
import Profile from './Profile';
import EditProfileForm from './EditProfileForm';

class ProfileContainer extends Component {
    constructor(){
        super()
        this.state = {
            currentUser: null,
            showEditForm: false,
        }
    }
 

    editProfile = (user) => {
        // console.log("user", user)
        this.setState({showEditForm: true, currentUser: user})
      }
      
    // showDetail = () => {
    //     //console.log("att click submit")
    //     this.setState({
    //         showEditForm: false
    //     })
    // }

    render() {
        
        return (
<>
        {this.state.showEditForm ? 

            <EditProfileForm currentUser={this.state.currentUser} updateUser={this.props.updateUser} showDetail={this.showDetail}/>
        :
            <Profile user={this.props.user} editProfile={this.editProfile}/>
        }      
</>
        );
    }
}

export default ProfileContainer;



