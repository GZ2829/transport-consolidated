import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLoadData } from '../../redux/loads'
import '../../App.css';

class Bidlist extends Component {
  constructor(){
       super()

    this.state = {
       isToggled: false
    }
  }
  componentDidMount =() =>{
      this.props.getLoadData()
  }

  toggle=()=>{
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
}

  render() {
      console.log(this.props)
       const load = this.props.loads.filter(load=>{
           return load._id = this.props.thisLoad
        }).map(load =>{
            <div>
            <h3>Origin: {load.originCity}, {load.originState}</h3>
            <h3>Going To: {load.destinationCity}, {load.destinationState}</h3>
            <h4>Trailers Needed: {load.typeOfTrailers}</h4>
            <h5>In A Rush? {load.isRushed}</h5>
            </div>
        })
    return (
      <div className="bidlist">
            <h4>Bid Amount: {this.props.bid}</h4>
            <button onClick={this.toggle}>Load Details</button>
            { this.state.isToggled === true ? <div>{load}</div> : null}
        </div>
    );
  }
}

export default connect(state=>({ bids: state.bids, loads: state.loads }), { getLoadData })(Bidlist)