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
import UsersTable from '../Components/HR/components/UsersTable/UsersTable'
import Employee from '../Components/HR/UserProfile/Employee';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" exact component={Production} /> */}
                    <Route path="/" exact component={UserProfile} />

                    {/* <Route path="/userProfile" exact component={UserProfile} /> */}

                    <Route path="/Dashboard" component={HomeNavBar} />
                    <Route path="/UserList" component={UserList} />
                    {/* <Route path="/" component={Inventory} /> */}
                    <Route path="/employe/:id" component={Employee}/>
                    <Route path="/UsersTable" component={UsersTable}/>
                    {/* <Route path="/" component={UsersTable}/> */}


                </Switch>
            </Router>
        )
    }
}



