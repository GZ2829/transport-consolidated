import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editLoad, removeLoad } from '../../redux/loads'
import '../../App.css';
import stateOpts from "../../states.json"

class Editloads extends Component {
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
       this.toggle = this.toggle.bind(this)
       this.deleteLoad = this.deleteLoad.bind(this)
       this.editALoad=this.editALoad.bind(this)
  }

  toggle(){
    this.setState(prevState => {
        return {
            isToggled: !prevState.isToggled
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
deleteLoad(){
    if(window.confirm('Are you sure you want to delete this load?')){
        this.props.removeLoad(this.props.id)
    }else{
        return null
    }
}
editALoad(e){
    e.preventDefault()
   this.props.editLoad(this.props.id, this.state.inputs)
}


  render() {
    const stateOptions = stateOpts.map(state => <option value={state.name}>{state.name}</option>)
    return (
        <div className='loads'>
        <h3>Origin: {this.props.load.originCity}, {this.props.load.originState}</h3>
        <h3>Going To: {this.props.load.destinationCity}, {this.props.load.destinationState}</h3>
        <h4>Trailers Needed: {this.props.load.typeOfTrailers}</h4>
        <h5>In A Rush? {this.props.load.isRushed}</h5>
        <button onClick={this.toggle}>Edit</button>
        <button onClick={()=>this.deleteLoad(this.props.id)}>Delete</button>
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

export default connect(state=>({user: state.user}), { editLoad, removeLoad })(Editloads)