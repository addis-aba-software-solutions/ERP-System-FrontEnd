import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HR from './Components/HR/hr_home'
import {Provider} from 'react-redux'
import Store from './store/store'
import SignIn from './Components/SignIn/SignIn'
import PrivateRoute from './auth/private_route'
import PublicRoute from './auth/public_route'
import Inventory from './Components/Inventory/Inventory'
let storeInstance = Store();
ReactDOM.render(

    <Provider store={storeInstance}>
     <BrowserRouter>
      <Switch>
          <PublicRoute
              path="/signin"
              component={SignIn}
              exact
            />
          <PrivateRoute
              path="/"
              component={HR}
              exact
            />
        
      </Switch>
    </BrowserRouter> </Provider>,

    document.getElementById("root")
)