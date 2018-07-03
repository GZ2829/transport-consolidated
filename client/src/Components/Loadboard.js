import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLoadData } from '../redux/loads'
import '../App.css';
import Loadboarddiv from './Loadboarddiv'

class Loadboard extends Component {
  constructor(){
       super()

    this.state = {
        inputs:{
            originCity: '',
            originState: '',
            destinationCity: '',
            destinationState: '',
            typeOfTrailers: '',
            isPalletized: false,
            needAssistanceLoading: false,
            isGPSRequired: false,
            isRushed: false,
        }
    }
  }

  componentDidMount(){
    this.props.getLoadData()
  }


  render() {
    const loads=this.props.loads.map(load=>{
      return(
       <Loadboarddiv key={load._id} id={load._id} originCity={load.originCity} originState={load.originState} destinationCity={load.destinationCity} destinationState={load.destinationState} typeOfTrailers={load.typeOfTrailers} isPalletized={load.isPalletized} isGPSRequired={load.isGPSRequired} isRushed={load.isRushed} needAssistanceLoading={load.needAssistanceLoading} />
    )
    })
    return (
      <div className="loadboard">
        <h1>Load Board</h1>
        <div className='loadboardtest'>
        {loads}
        </div>
      </div>
    );
  }
}

export default connect(state=>({ loads: state.loads }), { getLoadData })(Loadboard)