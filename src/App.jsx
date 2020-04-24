import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ReactDOM from "react-dom";
import HR from "./Components/HR/hr_home";
import { Provider } from "react-redux";
import Store from "./store/store";
import SignIn from "./Components/SignIn/SignIn";
import PrivateRoute from "./auth/private_route";
import PublicRoute from "./auth/public_route";
import Inventory from "./Components/Inventory/Inventory";
import { connect } from "react-redux";
import "./App.css";
import AddEmployee from "./Components/HR/components/UserProfile/UserProfile";
import AllEmploye from "./Components/HR/components/UsersTable/UsersTable";
import EmployeProfile from "./Components/HR/components/UserProfile/employe_profile";
import AddAccount from "./Components/HR/components/UsersTable/add_account";
import ViewAccount from "./Components/HR/components/UsersTable/view_account";
import Asider from "./Components/sidebar/Asider";
import Nav from "./Components/nav/nav";
import Dashboard from "./Components/Dashboard/HomeNavBar";
import AddNewProduct from "./Components/Inventory/components/AddNewProduct";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/signin" component={SignIn} exact />
          <div id="container" className="">
            <div className="container-fluid page-body-wrapper">
              <Route component={Asider} />
              <Route component={Nav} />
              <section id="main-content">
                <section className="wrapper">
                  <PrivateRoute
                    path="/add_employe"
                    component={AddEmployee}
                    exact
                    loggedIn={this.props.isLogin}
                  />

                  <PrivateRoute path="/" component={Dashboard} exact loggedIn={this.props.isLogin}/>
                  <PrivateRoute
                    path="/add_item"
                    component={AddNewProduct}
                    exact
                  />
                  <PrivateRoute
                    path="/all_employe"
                    component={AllEmploye}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/employe_profile"
                    component={EmployeProfile}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/view_account"
                    component={ViewAccount}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/add_account"
                    component={AddAccount}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                </section>
              </section>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    isLogin: state.loginReducer.isLogin,
  };
}

export default connect(mapStateToProps, null)(App);
