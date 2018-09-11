import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrailerData, addTrailer } from '../../redux/trailers'
import '../../App.css';
import Trailerlist from './Trailerlist'

class Trailer extends Component {
  constructor(){
       super()

    this.state = {

    }
    this.handleInputChange= this.handleInputChange.bind(this)
    this.trailerPost = this.trailerPost.bind(this)
  }

  componentDidMount(){
    this.props.getTrailerData()
  }

  trailerPost(e){
        e.preventDefault()
    this.props.addTrailer({
        typeOfTrailer: this.state.typeOfTrailer,
        model: this.state.model,
        year: this.state.year,
        carryingCapacityInLbs: this.state.carryingCapacityInLbs,
        palletCapacity: this.state.palletCapacity,
        amountOfTrailers: this.state.amountOfTrailers,
        clientId: this.props.user.userInfo._id
    })
  }
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
}


  render() {
    const trailers=this.props.trailers.filter(trailer=>{
      return trailer.clientId === this.props.user.userInfo._id
  }).map(trailer=>{
      return(
        <Trailerlist key={trailer._id} id={trailer._id} typeOfTrailer={trailer.typeOfTrailer} model={trailer.model} year={trailer.year} carryingCapacityInLbs={trailer.carryingCapacityInLbs} palletCapacity=
        {trailer.palletCapacity} amountOfTrailers={trailer.amountOfTrailers} />
    )
    })
    return (
        <div className='trailers'>
        <h1>Add A Trailer</h1>
        <form className='addATrailer' onSubmit={this.trailerPost}>
        <input type='text'   onChange={this.handleInputChange} placeholder='Type Of Trailer' name='typeOfTrailer' value ={this.state.typeOfTrailer}/>
        <input type='text'   onChange={this.handleInputChange} placeholder='Trailer Model' name='model' value={this.state.model}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Trailer Year' name='year' value={this.state.year}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Carrying Capacity' name='carryingCapacityInLbs' value={this.state.carryingCapacityInLbs}/>
        <input type='number' onChange={this.handleInputChange} placeholder='Pallet Capcity' name='palletCapacity' value={this.state.palletCapacity}/>
        <input type='number' onChange={this.handleInputChange} placeholder="Amount of Trailers" name='amountOfTrailers' value={this.state.amountOfTrailers}/>
        <button>Submit</button>
        </form>
        <br/>
        <h1 id='viewTrailers'>View Your Trailers</h1>
        <div className='trailertest'>
        {trailers}
        </div>
        </div>
    );
  }
}

export default connect(state=>({ trailers: state.trailers, user: state.user }), { getTrailerData, addTrailer })(Trailer)