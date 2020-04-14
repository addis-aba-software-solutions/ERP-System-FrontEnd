import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import SignIn from '../Components/SignIn/SignIn';
import HomeNavBar from '../Components/Dashboard/HomeNavBar';
import Home from '../Components/Dashboard/Home';
import HR from '../Components/HR/HRhome'
import Production from '../Production';
import Inventory from '../Components/Inventory/Inventory'
import Finance from '../Components/Finance/Finance'
import Sales from '../Components/Saless/ViewAllOrders'
import Profile from "../Components/HR/components/UserProfile/Profile";
import UserProfile from "../Components/HR/components/UserProfile/UserProfile";
import UsersTable from "../Components/HR/components/UsersTable/UsersTable";
import CreateOrder from "../Components/Saless/components/CreateOrder";
import ViewAllOrders from "../Components/Saless/components/ViewAllOrders";
//import Saless from '../Components/'
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" exact component={Production} /> */}
                    {/* <Route path="/"  component={HR} /> */}
                    <Route path="/userProfile" component={HR} /> 
                    <Route path="/Dashboard" component={HomeNavBar} />
                    {/* <Route path="/UserList" component={UserList} /> */}
                    {/* <Route path="/" component={Sales} /> */}
                    {/* <Route path="/" component={SignIn} /> */}
                    <Route path="/" component={UserProfile} />
                    <Route path="/UserProfile" component={UserProfile} />
                    <Route path="/UserTable" component={UsersTable} />
                    <Route path="/CreateOrder" component={CreateOrder} />

                    



                    <Route path="/employe/:id" component={Profile} />


                    {/* <Route path="/" component={Sales} /> */}

                    {/* <Route path="/" component={Finance} /> */}

                </Switch>
            </Router>
        )
    }
}



