import React, { Component } from 'react';
import '../../App.css';
import { addLoad } from '../../redux/loads'
import { connect } from 'react-redux'

class Addaload extends Component {
    constructor(){
        super()

        this.state ={
            originCity: '',
            originState: '',
            destinationCity: '',
            destinationState: '',
            typeOfTrailers: '',
            isPalletized: Boolean,
            needAssistanceLoading: Boolean,
            isGPSRequired: Boolean,
            isRushed: Boolean,
            clientId: this.props.user.userInfo._id

        }
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.AddALoad=this.AddALoad.bind(this)
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    AddALoad(e){
        e.preventDefault()
        this.props.addLoad({
            originCity: this.state.originCity,
            originState: this.state.originState,
            destinationCity: this.state.destinationCity,
            destinationState: this.state.destinationState,
            typeOfTrailers: this.state.typeOfTrailers,
            isPalletized: this.state.isPalletized,
            needAssistanceLoading: this.state.needAssistanceLoading,
            isGPSRequired: this.state.isGPSRequired,
            isRushed: this.state.isRushed,
        })
    }

  render() {
    return (
    <div className='addaload'>
    <h1>Add A Load</h1>
      <form onSubmit={this.AddALoad}>
          <input name='originCity' type='text' onChange={this.handleInputChange} value={this.state.originCity} placeholder="Origin City"/>
          <select name='originState' onChange={this.handleInputChange} value={this.state.originState}>
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
          <input name='destinationCity' onChange={this.handleInputChange} type='text' value={this.state.destinationCity} placeholder='Destination City'/>
          <select name='destinationState' onChange={this.handleInputChange} value={this.state.destinationState}>
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
          <input name='typeOfTrailers' onChange={this.handleInputChange} value={this.state.typeOfTrailers} type='text' placeholder="Type Of Trailers Needed"/>
          <select name='isPalletized' onChange={this.handleInputChange} value={this.state.isPalletized}>
              <option>Is Palletized?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='needAssistanceLoading' onChange={this.handleInputChange} value={this.state.needAssistanceLoading}>
              <option>Need Loading Assistance?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='isGPSRequired' onChange={this.handleInputChange} value={this.state.isGPSRequired}>
              <option>Is GPS Required?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <select name='isRushed' onChange={this.handleInputChange} value={this.isRushed}>
              <option>Need in a Rush?</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
          </select>
          <button>Submit</button>
      </form>
    </div>
    );
  }
}


export default connect(state=>({ loads: state.loads, user: state.user }), { addLoad })(Addaload)