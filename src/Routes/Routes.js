import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar'
// import AddProduct from './image';
// import HrDashboard from './HrDashboard';
// import LevelDashboard from './levelDashboard';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={SignIn} />
                    <Route path="/Dashboard" component={HomeNavBar} />
                    {/* <Route path="/HrDashboard" component={HrDashboard} />
                    <Route path="/LevelDashboard" component={LevelDashboard} /> */}
                </Switch>
            </Router>
        )
    }
}
