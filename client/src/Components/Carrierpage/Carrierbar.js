import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';


class Carrierbar extends Component {
    render() {
      return (
        <div className='carrierbar'>
        <h4>Welcome To Your Toolbox</h4>
            <Link to='/carrierpage/trucks'>Your Trucks</Link>
            <Link to='/carrierpage/trailers'>Your Trailers</Link>
            <Link to='/carrierpage/bids'>Your Bids</Link>
            <Link to='/carrierpage/carrierloadboard'>Load Board</Link>
            <Link to='/carrierpage/carriertoolbox'>Tool Box</Link>
        </div>
      );
    }
  }

export default Carrierbar;