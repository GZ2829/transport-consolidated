import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import getBidData from '../../redux/bids'


class Bids extends Component {
  constructor(){
    super()

    this.state={

    }
  }

    componentDidMount(){
      this.props.getBidData
    }
  render() {
    const bids=this.props.bids.filter(bid=>{
      return bid.clientId === this.props.user.userInfo._id
  }).map(trailer=>{
      return(
        <Trailerlist key={trailer._id} id={trailer._id} typeOfTrailer={trailer.typeOfTrailer} model={trailer.model} year={trailer.year} carryingCapacityInLbs={trailer.carryingCapacityInLbs} palletCapacity=
        {trailer.palletCapacity} amountOfTrailers={trailer.amountOfTrailers} />
    )
    })
    return (
    <div className='yourBids'>
    <h1>Your Bids</h1>
    </div>
    );
  }
}

export default connect(state=>({ bids: state.bids, user: state.user }), { getBidData })(Bids)