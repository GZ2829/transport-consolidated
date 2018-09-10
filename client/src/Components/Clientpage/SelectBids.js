import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editLoad } from '../../redux/loads'
import { getBidData } from '../../redux/bids'
import '../../App.css';

class SelectBids extends Component {
  constructor(){
       super()

    this.state = {
        isToggled1: false,
        isToggled: false,
        inputs:{
            originCity: '',
            originState: '',
            destinationCity: '',
            destinationState: '',
            typeOfTrailers: '',
            isPalletized: Boolean,
            needAssistanceLoading: Boolean,
            isGPSRequired: Boolean,
            isRushed: Boolean,
        },

    }
    
       this.toggle = this.toggle.bind(this)
       this.editALoad=this.editALoad.bind(this)
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


editALoad(e){
    e.preventDefault()
   this.props.editLoad(this.props.id, this.state.inputs)
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
      console.log(this.props)
       const bids = this.props.bids.filter(bid =>{
            bid.loadId === this.props.id
            return true
      }).map(bid =>{
          return(
              <div>
                <h4>Bid Amount: {bid.bidAmountInUSD}</h4>
                <button>Accept Bid</button>

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
        {this.isToggled ? <div>{bids}</div> : null}
      </div>
    );
  }
}

export default connect(state=>({user: state.user, bids: state.bids}), { editLoad , getBidData })(SelectBids)