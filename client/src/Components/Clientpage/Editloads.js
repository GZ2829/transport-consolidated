import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editLoad, removeLoad } from '../../redux/loads'
import '../../App.css';

class Editloads extends Component {
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
    this.props.removeLoad(this.props.id)
}
editALoad(e){
    e.preventDefault()
   this.props.editLoad(this.props.id, this.state.inputs)
}


  render() {
    return (
        <div className='loads'>
        <h3>Origin: {this.props.originCity}, {this.props.originState}</h3>
        <h3>Going To: {this.props.destinationCity}, {this.props.destinationState}</h3>
        <h4>Trailers Needed: {this.props.typeOfTrailers}</h4>
        <h5>In A Rush? {this.props.isRushed}</h5>
        <button onClick={this.toggle}>Edit</button>
        <button onClick={()=>this.deleteLoad(this.props.id)}>Delete</button>
        {this.state.isToggled
          ? <form className='loadboardDiv' onSubmit={this.editALoad}>
          <input name='originCity' type='text' onChange={this.handleInputChange} value={this.state.inputs.originCity} placeholder="Origin City"/>
          <select name='originState' onChange={this.handleInputChange} value={this.state.inputs.originState}>
              <option>Origin State</option>
              <option value='AL'>AL</option>
              <option value='AK'>AK</option>
              <option value='AR'>AR</option>
              <option value='AZ'>AZ</option>
              <option value='CA'>CA</option>
              <option value='CO'>CO</option>
              <option value='CT'>CT</option>
              <option value='DE'>DE</option>
              <option value='FL'>FL</option>
              <option value='GA'>GA</option>
              <option value='HI'>HI</option>
              <option value='IA'>IA</option>
              <option value='ID'>ID</option>
              <option value='IL'>IL</option>
              <option value='IN'>IN</option>
              <option value='KS'>KS</option>
              <option value='KY'>KY</option>
              <option value='LA'>LA</option>
              <option value='MA'>MA</option>
              <option value='MD'>MD</option>
              <option value='ME'>ME</option>
              <option value='MI'>MI</option>
              <option value='MN'>MN</option>
              <option value='MO'>MO</option>
              <option value='MS'>MS</option>
              <option value='MT'>MT</option>
              <option value='NC'>NC</option>
              <option value='ND'>ND</option>
              <option value='NE'>NE</option>
              <option value='NH'>NH</option>
              <option value='NJ'>NJ</option>
              <option value='NM'>NM</option>
              <option value='NV'>NV</option>
              <option value='NY'>NY</option>
              <option value='OH'>OH</option>
              <option value='OK'>OK</option>
              <option value='OR'>OR</option>
              <option value='PA'>PA</option>
              <option value='RI'>RI</option>
              <option value='SC'>SC</option>
              <option value='SD'>SD</option>
              <option value='TN'>TN</option>
              <option value='TX'>TX</option>
              <option value='UT'>UT</option>
              <option value='VA'>VA</option>
              <option value='VT'>VT</option>
              <option value='WA'>WA</option>
              <option value='WI'>WI</option>
              <option value='WV'>WV</option>
              <option value='WY'>WY</option>
          </select>
          <input name='destinationCity' onChange={this.handleInputChange} type='text' value={this.state.inputs.destinationCity} placeholder='Destination City'/>
          <select name='destinationState' onChange={this.handleInputChange} value={this.state.inputs.destinationState}>
              <option>Destination State</option>
              <option value='AL'>AL</option>
              <option value='AK'>AK</option>
              <option value='AR'>AR</option>
              <option value='AZ'>AZ</option>
              <option value='CA'>CA</option>
              <option value='CO'>CO</option>
              <option value='CT'>CT</option>
              <option value='DE'>DE</option>
              <option value='FL'>FL</option>
              <option value='GA'>GA</option>
              <option value='HI'>HI</option>
              <option value='IA'>IA</option>
              <option value='ID'>ID</option>
              <option value='IL'>IL</option>
              <option value='IN'>IN</option>
              <option value='KS'>KS</option>
              <option value='KY'>KY</option>
              <option value='LA'>LA</option>
              <option value='MA'>MA</option>
              <option value='MD'>MD</option>
              <option value='ME'>ME</option>
              <option value='MI'>MI</option>
              <option value='MN'>MN</option>
              <option value='MO'>MO</option>
              <option value='MS'>MS</option>
              <option value='MT'>MT</option>
              <option value='NC'>NC</option>
              <option value='ND'>ND</option>
              <option value='NE'>NE</option>
              <option value='NH'>NH</option>
              <option value='NJ'>NJ</option>
              <option value='NM'>NM</option>
              <option value='NV'>NV</option>
              <option value='NY'>NY</option>
              <option value='OH'>OH</option>
              <option value='OK'>OK</option>
              <option value='OR'>OR</option>
              <option value='PA'>PA</option>
              <option value='RI'>RI</option>
              <option value='SC'>SC</option>
              <option value='SD'>SD</option>
              <option value='TN'>TN</option>
              <option value='TX'>TX</option>
              <option value='UT'>UT</option>
              <option value='VA'>VA</option>
              <option value='VT'>VT</option>
              <option value='WA'>WA</option>
              <option value='WI'>WI</option>
              <option value='WV'>WV</option>
              <option value='WY'>WY</option>
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