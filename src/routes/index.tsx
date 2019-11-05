import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../views/login'
import Home from '../views/music_home'


const Routes: React.FunctionComponent = () => {
  return <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
    </BrowserRouter>
  </div>
}

export default Routes