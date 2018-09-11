import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTrailerData } from '../../redux/trailers'
import '../../App.css';
import { removeTrailer, editTrailer } from '../../redux/trailers'


class Trailerlist extends Component {
    constructor(props){
        super(props)
        this.state={
           inputs:{
            typeOfTrailer: props.typeOfTrailer,
            model: props.model,
            year: props.year, 
            carryingCapacityInLbs: props.carryingCapacityInLbs,
            palletCapacity: props.palletCapacity,
            amountOfTrailers: props.amountOfTrailers
           },
           isToggled: false,
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount(){
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState(prevState=>({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }


    toggle(){
        this.setState(prevState => {
            return {
                isToggled: !prevState.isToggled
            }
        })
    }

    handleDelete(){
         window.confirm('Are you sure you want to delete this Trailer?')
            this.props.removeTrailer(this.props.id)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.editTrailer(this.props.id, this.state.inputs)
    }




  render() {
    let className;
    if(this.state.isToggled){
        className='trailer'
    } else{
        className='trailer1'
    }
    return (
      <div className={className}>
          <h3>Type Of Trailer: {this.props.typeOfTrailer}</h3>
          <h3>Year: {this.props.year}</h3>
          <h4>Carrying Capacity In Lbs: {this.props.carryingCapacityInLbs}</h4>
          <h4>Amount of Trailers: {this.props.amountOfTrailers}</h4>
          <button className='traileredit' onClick={this.toggle}>edit</button>
          <button className='trailerdelete' onClick={()=> this.handleDelete(this.props.id)}>Delete</button>
          {this.state.isToggled 
            ? <form className='trailerform' onSubmit={this.handleSubmit}>
                <input 
                    type="text"     
                    value={this.state.inputs.typeOfTrailer} 
                    name="typeOfTrailer" 
                    onChange={ this.handleInputChange }
                    placeholder="Type Of Trailer"/>
                <input 
                    type="text" 
                    value={this.state.inputs.model} 
                    name="model" 
                    onChange={ this.handleInputChange }
                    placeholder="Model"/>
                <input type='number'
                       value={this.state.inputs.year}
                       name='year'
                       onChange={this.handleInputChange}
                       placeholder='Year'/>
                <input type='number'  
                        name='carryingCapacityInLbs'
                        onChange={this.handleInputChange}
                        placeholder='Carrying Capacity'
                        value={this.state.inputs.carryingCapacityInLbs}/>
                <input type='number' 
                        name='palletCapacity'
                        placeholder='Pallet Capacity'
                        value={this.state.inputs.palletCapacity}
                        onChange={this.handleInputChange}/>
                <input  type='number'
                        name='amountOfTrailers'
                        placeholder='Amount Of Trailers'
                        value={this.state.inputs.amountOfTrailers}
                        onChange={this.handleInputChange}/>
                    <button>Submit</button>
                </form>
              : null
              }  
              </div>
                );
            }
}

export default connect(state=>({ trailers: state.trailers }), { editTrailer, removeTrailer, getTrailerData })(Trailerlist)