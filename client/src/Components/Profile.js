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
       <div className='welcometitle'>
        <h1 >Welcome {this.props.user.userInfo.email}</h1>
        <img className='editbutton' src={'https://image.flaticon.com/icons/svg/84/84380.svg'}/>
        </div>
        <h3 className='company'>Company: {this.props.user.userInfo.company}</h3>
        <h3 className='aboutyourself'>About Yourself: {this.props.user.userInfo.aboutYourself}</h3>
        <img className='profilepic' src={'https://images.unsplash.com/photo-1522387026079-bd4a4d73115d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bab7386b1cbe55eae171863d6680b8b8&auto=format&fit=crop&w=2689&q=80'} alt='Insert Photo Here'/>
       </div>
      )
  }
}

export default connect(state=>({ user: state.user }), { logout })(Profile)