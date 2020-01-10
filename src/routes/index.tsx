import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from '../views/Home'
import { Search } from '../views/Search'
import { Recommend } from '../views/Recommend'
import { Rank } from '../views/Rank'

const Routes: React.FunctionComponent = () => {
  return <div className="App">
    <BrowserRouter>
        <Switch>
          <Home/>
        </Switch>
        <Route path="/recommend" component={Recommend}/>
        <Route path="/rank" component={Rank}/>
        <Route path="/search" component={Search}/>
    </BrowserRouter>
  </div>
}

export default Routes