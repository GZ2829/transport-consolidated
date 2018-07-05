import React, { Component } from 'react';
import {connect} from 'react-redux'
import '../App.css';


class Notauth extends Component {
  render() {
    return (
      <div className='notauth'>
        <h1>You are not Authorized to View this Page</h1>
      </div>
    );
  }
}
 export default Notauth