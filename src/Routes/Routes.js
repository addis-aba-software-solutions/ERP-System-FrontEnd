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
import CreateOrder from "../Components/Saless/components/CreateOrder";
import UsersTable from "../Components/HR/components/UsersTable/UsersTable";
import UserProfile from "../Components/HR/components/UserProfile/UserProfile";
import ViewAllOrders from "../Components/Saless/components/ViewAllOrders";
import Profile from "../Components/HR/components/UserProfile/Profile";
import ItemList from "../Components/Inventory/components/ItemList";
import ViewSingleOrder from "../Components/Saless/components/ViewSingleOrder";
import AddNewProduct from "../Components/Inventory/components/AddNewProduct";
import SIV from '../Components/Inventory/components/SIV';
import Invoice from '../Components/Finance/components/INVOICE';
import Div from '../Components/Saless/components/Div'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" component={SignIn} exact />

                    {/* <Route path="/" exact component={Home} /> */}
                    {/* <Route path="/" component={HR} />  */}
                    <Route path="/Dashboard" component={HomeNavBar} exact />
                    {/* <Route path="/UserList" component={UserList} /> */}
                    {/* <Route path="/" component={SignIn} /> */}

                    {/* <Route path="/Inventory" component={Inventory} /> */}
                    {/* <Route path="/" component={Inventory} /> */}
                    {/* <Route path="/" component={Div} /> */}
                    {/* <Route path="/" component={CreateOrder} /> */}
                    {/* <Route path="/" component={Sales} /> */}
                    <Route path="/Invoice" component={Invoice} />  
                    <Route path="/UserProfile" component={UserProfile} />





                    <Route path="/Finance" component={Finance} exact />
                    <Route path="/UserTable" component={UsersTable} exact />

                    {/* <Route path="/" component={AddNewProduct} /> */}
                    <Route path="/profile:id" component={Profile} />


                    {/* <Route path="/" component={UserProfile} /> */}
                    {/* <Route path="/" component={ItemList} /> */}


                    <Route path="/sales" component={Sales} />


                </Switch>
            </Router>
        )
    }
}



