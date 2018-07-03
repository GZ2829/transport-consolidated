import React, { Component } from 'react';
import '../App.css';
import { logout } from '../redux/user'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'


class Logout extends Component {
    constructor(){
        super()

        this.state = {
        }
    }
    componentDidMount(){
        this.props.logout()
    }
  render() {
      return(
       <Redirect to='/' />
      )
  }
}

export default connect(state=>({ user: state.user }), { logout })(Logout)