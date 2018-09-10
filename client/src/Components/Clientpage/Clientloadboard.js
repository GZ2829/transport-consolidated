import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLoadData } from '../../redux/loads'
import '../../App.css';

class Clientloadboard extends Component {
  constructor(){
       super()

    this.state = {

    }
  }

  componentDidMount(){
    this.props.getLoadData()
  }


  render() {
    const loads=this.props.loads.filter(load=>{
      if(load.winningBid === undefined){
        return load
      }}).map((load)=>{
      return(
        <div className='loads'>
          <h3>Origin: {load.originCity}, {load.originState}</h3>
          <h3>Going To: {load.destinationCity}, {load.destinationState}</h3>
          <h4>Trailers Needed: {load.typeOfTrailers}</h4>
          <h5>In A Rush? {load.isRushed}</h5>
        </div>
    )
    })
    return (
      <div className="clientloadboard">
        <h1>Load Board</h1>
        
        <div className="loadtest">
           {loads}
        </div>
      </div>
    );
  }
}

export default connect(state=>({ loads: state.loads }), { getLoadData })(Clientloadboard)