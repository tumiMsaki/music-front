import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../views/login/login'


const Routes: React.FunctionComponent = () => {
  return <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path='/login' exact={true} component={Login}/>
        </Switch>
    </BrowserRouter>
  </div>
}

export default Routes