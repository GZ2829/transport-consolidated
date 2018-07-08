import React, { Component } from 'react';
import '../App.css';
import { logout } from '../redux/user'
import { connect } from 'react-redux'


class Profile extends Component {
    constructor(){
        super()

        this.state = {

        }
    }
    
  render() {
      return(
       <div className='profile'>
        <h1>Welcome {this.props.user.userInfo.email}</h1>
        <h3>Company: {this.props.user.userInfo.company}</h3>
        <h3>About Yourself: {this.props.user.userInfo.aboutYourself}</h3>
       </div>
      )
  }
}

export default connect(state=>({ user: state.user }), { logout })(Profile)