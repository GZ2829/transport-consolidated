import React from 'react';
import '../../App.css';
import { Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Carrierbar from './Carrierbar';
import Carrierloadboard from './Carrierloadboard';
import Carriertoolbox from './Carriertoolbox';
import Trucks from './Trucks';
import Trailers from './Trailers';
import Bids from './Bids'

const Carrierpage = (props) => {
  const {match} = props
  if(props.user.accountType === 'Carrier'|| props.user.accountType === 'Admin'){
    return (
      <div className="carrierpage">
      <Carrierbar />
        <Switch>
          <Route path={`${match.url}/trucks`} component={Trucks}/>
          <Route path={`${match.url}/trailers`} component={Trailers}/>
          <Route path={`${match.url}/bids`} component={Bids}/>
          <Route path={`${match.url}/carrierloadboard`} component={Carrierloadboard}/>
          <Route path={`${match.url}/carriertoolbox`} component={Carriertoolbox}/>
      </Switch>
      </div>
    );
}
else{
  return(
    <Redirect to='/error' />
    )
}
}

export default connect(state=>({ user: state.user }))(Carrierpage)