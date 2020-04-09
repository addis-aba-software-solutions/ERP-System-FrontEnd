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


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
<<<<<<< HEAD
                    <Route path="/userProfile" exact component={UserProfile} />
=======
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" exact component={Production} /> */}
                    <Route path="/" exact component={UserProfile} />

                    {/* <Route path="/userProfile" exact component={UserProfile} /> */}

                    <Route path="/Dashboard" component={HomeNavBar} />
                    <Route path="/UserList" component={UserList} />
                    {/* <Route path="/" component={Inventory} /> */}
                </Switch>
            </Router>
        )
    }
}



