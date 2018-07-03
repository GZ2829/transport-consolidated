import React, { Component } from 'react';
import '../App.css';
import { login } from '../redux/user'
import {connect} from 'react-redux'

class Homepage extends Component {
    constructor(){
      super()

      this.state={
        email: '',
        password: ''
      }
      this.handleInputChange=this.handleInputChange.bind(this)
      this.userLogin=this.userLogin.bind(this)
    }

    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]: value
      })
  }
    userLogin(e){
      e.preventDefault()
      this.props.login(
        this.state
      )
    }


  render() {
    return (
    <div className='homepage'>
      <div className='homepage1'><h1>Welcome to Transport Consolidated</h1></div>
      <div className='homepage2'><h1>"Bringing you quality service at a upfront, reasonable price"</h1></div>
      <div className='homepage3'><h1>We have you covered....</h1></div>
      <div className='homepage4'>
      <div><h3>"From finding a truck for your goods to the recievers dock; we'll get it there..."</h3></div>
      <form onSubmit={this.userLogin} className="loginform">
        <h4>Log In</h4>
        <input name='email' value={this.state.email} onChange={this.handleInputChange}type='text' placeholder='Email'/>
        <input name='password' value={this.state.password} onChange={this.handleInputChange}type='text' placeholder='Password'/>
        <button>Submit</button>
        </form></div> 
    </div>
    );
  }
}

export default connect(state=>({ user: state.user }), { login })(Homepage)