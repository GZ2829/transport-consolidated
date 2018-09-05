import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


class Clientbar extends Component {
    render() {
      return (
        <div className='clientbar'>
            <h2>Welcome To Your Toolbox</h2>
            <Link to='/clientpage/addaload'>Add A Load</Link>
            <Link to='/clientpage/editaload'>Edit A load</Link>
            <Link to='/clientpage/selectbid'>Select Bid</Link>
            <Link to='/clientpage/clientloadboard'>Load Board</Link>
        </div>
      );
    }
  }

export default Clientbar;