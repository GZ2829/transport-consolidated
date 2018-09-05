import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { getBidData } from '../../redux/bids'
import Bidlist from './Bidlist'


class Bids extends Component {
  constructor(){
    super()

    this.state={

    }
  }

    componentDidMount = ()=>{
      this.props.getBidData()
    }


  render() {
    console.log(this.props)
    const bids=this.props.bids.filter(bid=>{
      return bid.truckerId === this.props.user.userInfo._id
  }).map(bid=>{
      return(
        <Bidlist id={bid._id} bid={bid.bidAmountInUSD} thisLoad={bid.loadId} />
    )
    })
    return (
    <div className='yourBids'>
    <h1>Your Bids</h1>
    <div className='bidtest'>
      {bids}
    </div>
    </div>
    );
  }
}

export default connect(state=>({ bids: state.bids, user: state.user }), { getBidData })(Bids)