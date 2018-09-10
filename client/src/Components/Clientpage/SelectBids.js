import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editLoad } from '../../redux/loads'
import { getBidData, editBid } from '../../redux/bids'
import '../../App.css';

class SelectBids extends Component {
  constructor(){
       super()

    this.state = {
        isToggled1: false,
        isToggled: false,
    }
    
       this.toggle = this.toggle.bind(this)
       this.selectBid=this.selectBid.bind(this)
  }

  componentDidMount(){
    this.props.getBidData()
  }


  toggle(){
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
}


selectBid(input){
    // confirm(message: 'Are you sure you want to select this bed?')
   this.props.editLoad(this.props.id, {
    originCity: this.props.originCity,
    originState: this.props.originState,
    destinationCity: this.props.destinationCity,
    destinationState: this.props.destinationState,
    typeOfTrailers: this.props.typeOfTrailers,
    isPalletized: this.props.isPalletized,
    needAssistanceLoading: this.props.needAssistanceLoading,
    isGPSRequired: this.props.isGPSRequired,
    isRushed: this.props.isRushed,
    winningBid: input
   })
   this.props.editBid(input, {
        winningBid: true
   })


}


addBid=(e)=>{
    e.preventDefault()
    this.props.addBid({
        bidAmountInUSD: this.state.bids.bidAmountInUSD,
        truckerId: this.props.user.userInfo._id,
        loadId: this.props.id
    })
    this.setState({
        isToggled1: false,
        bids : {
            bidAmountInUSD: Number
        }
    })
}


  render() {
       const bids = this.props.bids.filter(bid =>{
            return bid.loadId === this.props.id
      }).map(bid =>{
          return(
              <div className='selectedBid'>
                <h3>Bid Amount: {bid.bidAmountInUSD}</h3>
                <button onClick={()=>this.selectBid(bid._id)}>Accept Bid</button>
              </div>
          )
      })
    return (
        <div className='loads'>
        <h3>Origin: {this.props.originCity}, {this.props.originState}</h3>
        <h3>Going To: {this.props.destinationCity}, {this.props.destinationState}</h3>
        <h4>Trailers Needed: {this.props.typeOfTrailers}</h4>
        <h5>In A Rush? {this.props.isRushed}</h5>
        <button onClick={this.toggle}>Bids</button> 
        {this.state.isToggled ? <div className='bidOptions'>{bids}</div> : null}
      </div>
    );
  }
}

export default connect(state=>({user: state.user, bids: state.bids}), { editLoad , getBidData, editBid })(SelectBids)