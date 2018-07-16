import React, { Component } from 'react';
import '../App.css';
import { signup } from '../redux/user'
import { connect } from 'react-redux'



class Signup extends Component {
    constructor(){
        super()

        this.state ={
            email: '',
            password: '',
            company: '',
            aboutYourself: '',
            accountType: 'Client'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.signup(
            this.state
        )
    }
    render(){
        return(
            <div className='signup'>

                <h1>Sign Up</h1>

                <form onSubmit={this.handleSubmit} className='signUpForm'>
                    <input onChange={this.handleInputChange} 
                           name ='email' value={this.state.email} 
                           type='email' 
                           placeholder='E-mail'/>

                    <input onChange={this.handleInputChange} 
                           name ='password' 
                           value={this.state.password} 
                           type='text' 
                           placeholder='Password'/>


                    <input onChange={this.handleInputChange} 
                           name ='company' 
                           value={this.state.company} 
                           type='text' 
                           placeholder="Company"/>

                    <input onChange={this.handleInputChange}
                           name ='aboutYourself' 
                           value={this.state.aboutYourself} 
                           type='text' 
                           placeholder='About Yourself'/>

                    <p>Account Type:</p>
                    <select onChange={this.handleInputChange} 
                            name='accountType' 
                            value={this.state.accountType}>

                        <option value='Client'>Client</option>
                        <option value="Carrier">Carrier</option>
                        
                    </select>

                    <button className='signUpSubmit'>Submit</button>
                </form>

            </div>
        )
    }
}

export default connect(state=>({ user: state.user }), { signup })(Signup)