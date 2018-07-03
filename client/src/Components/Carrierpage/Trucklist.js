import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import { getTruckData, removeTruck, editTruck } from '../../redux/trucks'

class Trucklist extends Component {
    constructor(){
        super()
        this.state ={
            inputs:{
                make: '',
                model: '',
                year: Number,
                amountOfTrucks: Number,
                class: '',
                isToggled: false,
            }

        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.toggle = this.toggle.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }

    componentDidMount(){
        this.props.getTruckData()
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
            this.props.removeTruck(this.props.id)
    }

    handleEdit(e){
            e.preventDefault()
            this.props.editTruck(
                this.props.id,
                  this.state.inputs
                )
    }


  render() {
      let className;
            if(this.state.isToggled){
                className='truck1'
            } else{
                className='truck'
            }
    return (
      <div className={className}>
                  <h4>Make: {this.props.make}</h4>
                  <h4>Model: {this.props.model}</h4>
                  <h4>Year: {this.props.year}</h4>
                  <h4>Class: {this.props.class}</h4>
                  <button className='trucksbutton' onClick={this.toggle}>edit</button>
                  <button className='trucksbutton'onClick={()=> this.handleDelete(this.props.id)}>Delete</button>
                {this.state.isToggled 
                ? <form onSubmit={this.handleEdit} className='truckEditForm' >
                <input 
                    type="text"     
                    value={this.state.inputs.make} 
                    name="make" 
                    onChange={ this.handleInputChange }
                    placeholder="make"/>
                <input 
                    type="text" 
                    value={this.state.inputs.model} 
                    name="model" 
                    onChange={ this.handleInputChange }
                    placeholder="model"/>
                <input type='number'
                       value={this.state.inputs.year}
                       name='year'
                       onChange={this.handleInputChange}
                       placeholder='Year'/>
                <input type='number'
                        onChange={this.handleInputChange}
                        value={this.state.inputs.amountOfTrucks}
                        placeholder='Amount Of Trucks'
                        name='amountOfTrucks' />
                <select name='class' onChange={this.handleInputChange} value={this.state.inputs.class}>
                        <option value='Class 1-3 (0-14,000lbs)'>Class 1-3 (0-14,000lbs)</option>
                        <option value='Class 4-6 (14,000-26,000lbs)'>Class 4-6 (14,000-26,000lbs)</option>
                        <option value='Class 7-8 (26,000-80,000lbs+)'>Class 7-8 (26,000-80,000lbs+)</option>
                 </select>
                    <button className='truck1Submit'>Submit</button>
                </form>
              : null
              }  
              </div>
                );
            }
}

export default connect(state=>({ trucks: state.trucks }), { editTruck, getTruckData, removeTruck })(Trucklist)