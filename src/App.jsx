import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "./Components/SignIn/SignIn";
import PrivateRoute from "./auth/private_route";
import PublicRoute from "./auth/public_route";
import { connect } from "react-redux";
import "./App.css";
import AddEmployee from "./Components/HR/components/UserProfile/UserProfile";
import AllEmploye from "./Components/HR/components/UsersTable/UsersTable";
import EmployeProfile from "./Components/HR/components/UserProfile/employe_profile";
import Asider from "./Components/sidebar/Asider";
import Nav from "./Components/nav/nav";
// import Dashboard from "./Components/Dashboard/HomeNavBar";
import AddNewProduct from "./Components/Inventory/components/AddNewProduct";
import ViewItem from "./Components/Inventory/components/ItemList";
import CreateOrder from "./Components/Saless/components/CreateOrder";
import ViewAllOrders from "./Components/Saless/components/ViewAllOrders";
import AddNewCompany from "./Components/Finance/components/AddNewCompany";
import ViewCompany from "./Components/Finance/components/ViewCompany";
import Invoice from "./Components/Finance/components/INVOICE";
import Dashboard from "./Components/Saless/Sales";
import Siv from "./Components/Inventory/components/SIV";
import ViewFinanceOrders from "./Components/Finance/components/ViewAllOrders";
import ViewInventoryOrders from "./Components/Inventory/components/ViewAllOrders";
import ViewLogisticsOrders from "./Components/Logistics/components/ViewAllOrders";
import ViewSingleOrder from './Components/Finance/components/ViewSingleOrder'
import ViewAccount from "./Components/HR/components/UsersTable/view_account"

class App extends React.Component {
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
                    path="/"
                    component={Dashboard}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  {/* inventory routes */}
                  <PrivateRoute
                    path="/add_item"
                    component={AddNewProduct}
                    exact
                  />
                  <PrivateRoute path="/list_item" component={ViewItem} exact />
                  <PrivateRoute path="/siv" component={Siv} exact  loggedIn={this.props.isLogin}/>
                  <PrivateRoute
                    path="/inventoryOrders"
                    component={ViewInventoryOrders}
                    exact
                  />
                  {/* logistics order routes */}
                  <PrivateRoute
                    path="/logisticsOrders"
                    component={ViewLogisticsOrders}
                    exact
                  />
                  <PrivateRoute
                    path="/add_employe"
                    component={AddEmployee}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  {/* employee routes */}
                  <PrivateRoute
                    path="/add_employe"
                    component={AddEmployee}
                    exact
                    loggedIn={this.props.isLogin}
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
                  {/* finance Routes */}
                  <PrivateRoute
                    path="/ViewSingleOrder"
                    component={ViewSingleOrder}
                    exact
                    loggedIn={this.props.isLogin}
                    
                  />
                  <PrivateRoute
                    path="/company"
                    component={AddNewCompany}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/companys"
                    component={ViewCompany}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/financeOrders"
                    component={ViewFinanceOrders}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute path="/invoice" component={Invoice} exact />
                  {/* sales order */}
                  <PrivateRoute
                    path="/create_order"
                    component={CreateOrder}
                    exact
                    loggedIn={this.props.isLogin}
                  />
                  <PrivateRoute
                    path="/salesOrders"
                    component={ViewAllOrders}
                    exact
                    loggedIn={this.props.isLogin}
                  />

                  {/* it department route */}
                  <PrivateRoute
                    path="/view_account"
                    component={ViewAccount}
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
    // function mapStateToProps(state) {
    //   return {
    //     isLogin: state.loginReducer.isLogin,
    //   };
  }
}

export default connect(null)(App);
