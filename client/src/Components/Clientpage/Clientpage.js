import React from 'react';
import '../../App.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import AddaLoad from './Addaload'
import Editaload from './Editaload'
import Clientbar from './Clientbar'
import Clientloadboard from './Clientloadboard'
import Footer from '../Footer'

const Clientpage = (props) =>{
   const {match} = props
    if(props.user.accountType === 'Client'|| props.user.accountType === 'Admin'){
    return(
      <div className="clientpage">
      <Clientbar match={match}/>
      <Switch>
          <Route path={`${match.url}/addaload`} component={AddaLoad}/>
          <Route path={`${match.url}/editaload`} component={Editaload}/>
          <Route path={`${match.url}/clientloadboard`} component={Clientloadboard}/>
      </Switch>
      </div>
    );
  } else{
    return(
    <Redirect to='/error' />
    )
  }} 
  


export default connect(state=>({ user: state.user }))(Clientpage)