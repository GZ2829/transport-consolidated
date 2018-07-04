import React from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import Header from './Components/Header'
import { Switch, Route } from 'react-router-dom'
import Signup from './Components/Signup';
import Clientpage from './Components/Clientpage/Clientpage';
import Carrierpage from './Components/Carrierpage/Carrierpage';
import Loadboard from './Components/Loadboard'
import Logout from './Components/Logout';
import Notauth from './Components/Notauth'
import Profile from './Components/Profile';
import Footer from './Components/Footer'


const App =() => {
    return (
      <div className="home">
      <Header/>
      <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/loadboard' component={Loadboard}/>
          <Route path='/carrierpage' component={Carrierpage}/>
          <Route path='/clientpage' component={Clientpage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/error' component={Notauth}/>
          <Route path='/profile' component={Profile}/>
      </Switch>
      
      </div>
    );
}

export default App;
