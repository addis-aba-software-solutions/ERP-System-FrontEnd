import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HR from './Components/HR/hr_home'
import {Provider} from 'react-redux'
import Store from './store/store'
import SignIn from './Components/SignIn/SignIn'
import PrivateRoute from './auth/private_route'
import PublicRoute from './auth/public_route'
import App from './app'

let storeInstance = Store();
ReactDOM.render(

    <Provider store={storeInstance}>
     <App />
      </Provider>,

    document.getElementById("root")
)