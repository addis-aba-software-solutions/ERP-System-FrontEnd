
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
import { connect } from 'react-redux'

class App extends React.Component {
    constructor() {
        super();
    
    }
    render() {
        return (
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
                loggedIn={this.props.isLogin}
                exact
              />
             <PrivateRoute
                path="/inventory"
                component={Inventory}
                loggedIn={this.props.isLogin}
                exact
              />
            </Switch>
            </BrowserRouter>

        );
    }
}
function mapStateToProps(state) {
	return {
        isLogin:state.loginReducer.isLogin
	}
}


export default connect(mapStateToProps, null)(App);
