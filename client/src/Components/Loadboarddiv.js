import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editLoad, getLoadData, removeLoad } from '../redux/loads'
import { addBid } from '../redux/bids'
import '../App.css';
import stateOpts from "../states.json"

class Loadboarddiv extends Component {
  constructor(props){
       super(props)

    this.state = {
        isToggled1: false,
        isToggled: false,
        inputs:{
            originCity: props.load.originCity,
            originState: props.load.originState,
            destinationCity: props.load.destinationCity,
            destinationState: props.load.destinationState,
            typeOfTrailers: props.load.typeOfTrailers,
            isPalletized: props.load.isPalletized,
            needAssistanceLoading: props.load.needAssistanceLoading,
            isGPSRequired: props.load.isGPSRequired,
            isRushed: props.load.isRushed,
        },
        bids:{
            bidAmountInUSD: Number
        }

    }
       this.handleInputChange=this.handleInputChange.bind(this)
       this.handleInputChange1=this.handleInputChange1.bind(this)
       this.toggle = this.toggle.bind(this)
       this.deleteLoad = this.deleteLoad.bind(this)
       this.editALoad=this.editALoad.bind(this)
       this.toggle1 = this.toggle1.bind(this)
  }

  componentDidMount(){
  }
  toggle(){
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
        }
    })
}
toggle1(){
    this.setState(prevState => {
        return {
            isToggled1: !prevState.isToggled1
        }
    })
}
handleInputChange = event => {
    const {name, value} = event.target;
    this.setState(prevState=>({
        inputs: {
            ...prevState.inputs,
            [name]: value
        },
    }))
}
handleInputChange1 = event => {
    this.setState({bids: {
        bidAmountInUSD: event.target.value
    }})
}
deleteLoad(){
    window.confirm('Are you sure you want to delete this load?')
    this.props.removeLoad(this.props.load._id)
}

editALoad(e){
    e.preventDefault()
   this.props.editLoad(this.props.load._id, this.state.inputs)
}


addBid=(e)=>{
    e.preventDefault()
    this.props.addBid({
        bidAmountInUSD: this.state.bids.bidAmountInUSD,
        truckerId: this.props.user.userInfo._id,
        loadId: this.props.load._id
    })
    this.setState({
        isToggled1: false,
        bids : {
            bidAmountInUSD: Number
        }
    })
}


  render() {
      const stateOptions = stateOpts.map(state => <option value={state.name}>{state.name}</option>)
      const {user} = this.props
    return (
        <div className='loads'>
        <h3>Origin: {this.props.load.originCity}, {this.props.load.originState}</h3>
        <h3>Going To: {this.props.load.destinationCity}, {this.props.load.destinationState}</h3>
        <h4>Trailers Needed: {this.props.load.typeOfTrailers}</h4>
        <h5>In A Rush? {this.props.load.isRushed}</h5>
        {user.userInfo._id === this.props.clientId  || user.accountType==='Admin' ? <button onClick={this.toggle}>Edit</button> : null}
        {user.userInfo._id === this.props.clientId  || user.accountType==='Admin' ? <button onClick={()=>this.deleteLoad(this.props.load._id)}>Delete</button> : null}
        {user.accountType ==='Carrier' ? <button className='bidbutton' onClick={this.toggle1}>Bid</button> : null}
        {this.state.isToggled1 ?
           <form onSubmit={this.addBid}>
               <input value='number' onChange={this.handleInputChange1} placeholder='Bid Amount In USD' value={this.state.bids.bidAmountInUSD} />
               <button>Submit</button>
           </form> : null}
        {this.state.isToggled
          ? <form className='loadboardDiv' onSubmit={this.editALoad}>
          <input name='originCity' type='text' onChange={this.handleInputChange} value={this.state.inputs.originCity} placeholder="Origin City"/>
          
          <select name='originState' onChange={this.handleInputChange} value={this.state.inputs.originState}>
              <option>Origin State</option>
              {stateOptions}
          </select>

          <input name='destinationCity' onChange={this.handleInputChange} type='text' value={this.state.inputs.destinationCity} placeholder='Destination City'/>
          
          <select name='destinationState' onChange={this.handleInputChange} value={this.state.inputs.destinationState}>
              <option>Destination State</option>
              {stateOptions}
          </select>

          <input name='typeOfTrailers' onChange={this.handleInputChange} value={this.state.inputs.typeOfTrailers} type='text' placeholder="Type Of Trailers Needed"/>
          <select name='isPalletized' onChange={this.handleInputChange} value={this.state.inputs.isPalletized}>
              <option>Is Palletized?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='needAssistanceLoading' onChange={this.handleInputChange} value={this.state.inputs.needAssistanceLoading}>
              <option>Need Loading Assistance?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='isGPSRequired' onChange={this.handleInputChange} value={this.state.inputs.isGPSRequired}>
              <option>Is GPS Required?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='isRushed' onChange={this.handleInputChange} value={this.state.inputs.isRushed}>
              <option>Need in a Rush?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <button>Submit</button>
      </form>
            : null
            }
      </div>
    );
  }
}

export default connect(state=>({user: state.user, bids: state.bids}), { editLoad, removeLoad, getLoadData, addBid })(Loadboarddiv)