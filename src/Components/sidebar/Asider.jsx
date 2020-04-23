import React from "react";
import { Link } from "react-router-dom";
import { Badge, Typography, Paper, Avatar, Grid } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";

class Asider extends React.Component {
  render() {
    return (
      <aside>
        <Paper
          id="sidebar"
          style={{
            backgroundColor: "#FFFFFF",
            width: 150,
          }}
          // className="nav-collapse "
        >
          <ul className="sidebar-menu">
            <li className="sub-menu">
              <Link className="" to="/">
                <DashboardIcon
                  style={{
                    height: 40,
                    width: 40,
                    marginLeft: 40,
                    color: '#11669F'
                  }}
                />
                <span
                  style={{
                    marginLeft: 15,
                    color: '#11669F'
                  }}
                >
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="sub-menu">
              <a href="javascript:;" className="">
                <Grid>
                  <PeopleAltIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 45 , color: '#11669F'}}> HR </span>
                </Grid>
              </a>

              <ul className="sub">
                <li
                  style={{
                    marginRight: 30,
                    width: "100vh",
                  }}
                >
                  <Link to="/add_employe">Add Employe</Link>
                </li>
                <li>
                  <Link to="/all_employe">View Employe</Link>
                </li>
              </ul>
            </li>

            <li className="sub-menu">
              <a href="javascript:;" className="">
                <Grid>
                  <AttachMoneyIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 33, color: '#11669F' }}> Finance </span>
                </Grid>
              </a>
              <ul className="sub">
                <li>
                  <Link to="/view">Task 1</Link>
                </li>
                <li>
                  <Link to="/view">Task 2</Link>
                </li>
                <li>
                  <Link to="/view">Task 3 </Link>
                </li>
                <li>
                  <Link to="/view">Task 3 </Link>
                </li>
              </ul>
            </li>

            <li className="sub-menu">
              <a href="javascript:;" className="">
                <Grid>
                  <ReceiptIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 40, color: '#11669F' }}> Sales </span>
                </Grid>
              </a>
              <ul className="sub">
                <li>
                  <Link to="/view">Task 1</Link>
                </li>
                <li>
                  <Link to="/view">Task 2</Link>
                </li>
                <li>
                  <Link to="/view">Task 3 </Link>
                </li>
              </ul>
            </li>

            <li className="sub-menu">
              <a href="javascript:;" className="">
                <Grid>
                  <LocalShippingIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 30, color: '#11669F' }}> Logistics </span>
                </Grid>
              </a>
              <ul className="sub">
                <li>
                  <Link to="/view">Task 1</Link>
                </li>
                <li>
                  <Link to="/view">Task 2</Link>
                </li>
                <li>
                  <Link to="/view">Task 3 </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">
                <Grid>
                  <StoreMallDirectoryIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 30, color: '#11669F' }}> Inventory </span>
                </Grid>
              </a>
              <ul className="sub">
                <li>
                  <Link to="/add_item">Add Product</Link>
                </li>
                <li>
                  <Link to="/view">Task 2</Link>
                </li>
                <li>
                  <Link to="/add_item">Task 3 </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu">
              <a href="javascript:;" className="">

              <Grid>
                  <ImportantDevicesIcon
                    style={{
                      height: 40,
                      width: 40,
                      marginLeft: 40,
                      color: '#11669F'
                    }}
                  />
                  <span style={{ marginLeft: 50 , color: '#11669F'}}> I.T </span>
                </Grid>

              </a>
              <ul className="sub">
                <li>
                  <Link to="/view">Add User</Link>
                </li>
                <li>
                  <Link to="/view_account">View Users</Link>
                </li>
              </ul>
            </li>
          </ul>
        </Paper>
      </aside>
    );
  }
}

export default Asider;
