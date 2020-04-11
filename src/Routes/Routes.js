import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
import Home from '../Components/Dashboard/Home';
import HR from '../Components/HR/HRhome';
import Inventory from '../Components/Inventory/Inventory';
import Finance from '../Components/Finance/Finance';
import Sales from '../Components/Saless/Sales';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/"  component={HR} /> */}
                    {/* <Route path="/userProfile" component={HR} />  */}
                    <Route path="/Dashboard" component={HomeNavBar} />
                    {/* <Route path="/UserList" component={UserList} /> */}
                    {/* <Route path="/" component={Inventory} /> */}
                    <Route path="/" component={Sales} />
                    {/* <Route path="/" component={Finance} /> */}
                </Switch>
            </Router>
        )
    }
}



