import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
// import UserList from '../Components/HR/UserList';
import Home from '../Components/Dashboard/Home';
import SearchBar from '../Components/SearchBar/SearchBar'
import Production from '../Production'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Production" exact component={Production} />
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path="/" exact component={SignIn} />


                    <Route path="/Dashboard" component={HomeNavBar} />
                    <Route path="/UserList" component={SignIn} />
                </Switch>
            </Router>
        )
    }
}



