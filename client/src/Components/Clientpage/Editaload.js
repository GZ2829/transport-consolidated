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
      return load.clientId === this.props.user.userInfo._id && load.winningBid === undefined
    }).map(load=>{
      return(
       <Editloads key={load._id + 1} id={load._id} load={load} />
    )
    })
    return (
      <div className="editLoadboard">
        <h1>Edit Your Loads</h1>
        <div className='clientEdits'>
        {loads}
        </div>
      </div>
    );
  }
}

export default connect(state=>({ loads: state.loads, user: state.user }), { getLoadData })(Editaload)