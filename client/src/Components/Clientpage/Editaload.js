import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getLoadData } from '../../redux/loads'
import '../../App.css';
import Editloads from '../Clientpage/Editloads'

class Editaload extends Component {
  constructor(){
       super()

    this.state = {
            
    }
  }

  componentDidMount(){
    this.props.getLoadData()
  }


  render() {
    const loads=this.props.loads.filter(load=>{
      return load.clientId === this.props.user.userInfo._id
    }).map(load=>{
      return(
       <Editloads key={load._id + 1} id={load._id} originCity={load.originCity} originState={load.originState} destinationCity={load.destinationCity} destinationState={load.destinationState} typeOfTrailers={load.typeOfTrailers} isPalletized={load.isPalletized} isGPSRequired={load.isGPSRequired} isRushed={load.isRushed} needAssistanceLoading={load.needAssistanceLoading} />
    )
    })
    return (
      <div className="editLoadboard">
        <h1>Edit Your Loads</h1>
        {loads}
      </div>
    );
  }
}

export default connect(state=>({ loads: state.loads, user: state.user }), { getLoadData })(Editaload)