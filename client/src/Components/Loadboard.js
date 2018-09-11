import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLoadData } from '../redux/loads'
import '../App.css';
import Loadboarddiv from './Loadboarddiv'

class Loadboard extends Component {
  constructor(){
       super()

    this.state = {
    }
  }

  componentDidMount(){
    this.props.getLoadData()
  }


  render() {
    const loads = this.props.loads.filter(load=>{
      return load.winningBid === undefined
    }).map(load=>{
      return(
       <Loadboarddiv 
        clientId={load.clientId} 
        key={load._id} 
        load={load}
      />
    )
    })
    return (
      <div className="loadboard">
        <h1>Load Board</h1>
        <div className='loadboardtest'>
        {loads}
        </div>
      </div>
    );
  }
}

export default connect(state=>({ loads: state.loads }), { getLoadData })(Loadboard)