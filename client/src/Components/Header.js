import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
      const {user} = this.props
    return(
      <div className="header">
          <Link to ='/'>Home</Link>
          <Link to= '/loadboard'>Load Board</Link>
          {user.accountType === 'Carrier' || user.accountType ==='Admin' ? <Link to='/carrierpage'>Carrier Page</Link> : null}
          {user.accountType === 'Client' || user.accountType ==='Admin' ? <Link to='/clientpage'>Client Page</Link> : null}
          {user.loggedIn === false && <Link to='/signup'>Sign up</Link>}
          {user.loggedIn === true && <Link to='/logout'>Logout</Link>}
      </div>
    );
  }
}



export default connect(state=>({ user: state.user })) (Header)