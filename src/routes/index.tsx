import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../views/login/login'
import Regist from '../views/regist/regist'


const Routes: React.FunctionComponent = () => {
  return <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path='/login' exact={true} component={Login}/>
          <Route path='/regist' component={Regist}/>
        </Switch>
    </BrowserRouter>
  </div>
}

export default Routes