import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
import UserList from '../Components/HR/UserList';
import Home from '../Components/Dashboard/Home';
import UserProfile from '../Components/HR/HRhome'
import Production from '../Production';
import Inventory from '../Components/Inventory/Inventory'
import Finance from '../Components/Finance/Finance'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" exact component={Production} /> */}
                    {/* <Route path="/"  component={UserProfile} /> */}

                    <Route path="/userProfile" component={UserProfile} />

                    <Route path="/Dashboard" component={HomeNavBar} />
                    <Route path="/UserList" component={UserList} />
                    <Route path="/" component={Inventory} />
                    {/* <Route path="/" component={Finance} /> */}

                </Switch>
            </Router>
        )
    }
}



