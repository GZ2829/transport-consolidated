import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTruckData, addTruck } from '../../redux/trucks'
import Trucklist from './Trucklist'
import '../../App.css';
import { editUser } from '../../redux/user'


class Trucks extends Component {
        constructor(){
            super()
            this.state ={
                make: '',
                model: '',
                year: Number,
                amountOfTrucks: Number,
                class: 'Class 1-3 (0-14,000lbs)',
                isToggled: false

            }
            this.addTrucks=this.addTrucks.bind(this)
            this.handleInputChange=this.handleInputChange.bind(this)
            this.toggle = this.toggle.bind(this)
        }

        componentDidMount(){
            this.props.getTruckData()
        }

        handleInputChange = event => {
            const {name, value} = event.target;
            this.setState({
                [name]: value
            })
        }

        addTrucks(e){
            e.preventDefault()
            this.props.addTruck({
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                amountOfTrucks: this.state.amountOfTrucks,
                class: this.state.class,
                clientId: this.props.user.userInfo._id
            })
        }
        toggle(){
            this.setState(prevState => {
                return {
                    isToggled: !prevState.isToggled
                }
            })
        }


   render() {
       console.log(this.props)
      const {trucks} = this.props
      const Vehicles=trucks.filter(truck=>{
          return truck.clientId === this.props.user.userInfo._id
      }).map(truck=>{
          return(
            <Trucklist key={truck._id} id={truck._id} make={truck.make} model={truck.model} year={truck.year} amountOfTrucks={truck.amountOfTrucks} class={truck.class}/>
          )
      })
    return (
    <div className='trucks'>
    <h1>Add A Truck</h1>
    <form className='truckform' onSubmit={this.addTrucks}>
       <input onChange={this.handleInputChange} name='make' value={this.state.make} type='text' placeholder='Make'/>
       <input onChange={this.handleInputChange} name='model' value={this.state.model} type='text' placeholder='Model'/>
       <input onChange={this.handleInputChange} name='year' value={this.state.year} type='number' placeholder='Year'/>
       <input onChange={this.handleInputChange} name='amountOfTrucks' value={this.state.amountOfTrucks} type='number' placeholder='Amount of Trucks'/>
       <select name='class' onChange={this.handleInputChange} value={this.state.class}>
           <option value='Class 1-3 (0-14,000lbs)'>Class 1-3 (0-14,000lbs)</option>
           <option value='Class 4-6 (14,000-26,000lbs)'>Class 4-6 (14,000-26,000lbs)</option>
           <option value='Class 7-8 (26,000-80,000lbs+)'>Class 7-8 (26,000-80,000lbs+)</option>
       </select>
       <button className='addTruckSubmit'>Submit</button>
    </form>
    <br/>
    <br/>
    <h1>View Your Trucks</h1>
    <div className='trucktest'>
    {Vehicles}
    </div>
    </div>
    );
  }
}

export default connect(state=>({ trucks: state.trucks , user: state.user }), { getTruckData, addTruck, editUser })(Trucks)