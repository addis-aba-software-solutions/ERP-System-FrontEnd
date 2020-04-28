import React from "react";
import { Link } from "react-router-dom";
import { Paper, Typography, Grid } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import TocRoundedIcon from '@material-ui/icons/TocRounded';
import AddToQueueRoundedIcon from '@material-ui/icons/AddToQueueRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
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
        >
          <ul className="sidebar-menu">
            <li className="sub-menu">
              <Link className="" to="/">
                <DashboardIcon
                  style={{
                    height: 40,
                    width: 40,
                    marginLeft: 40,
                    color: "#818181",
                  }}
                />
                <span
                  style={{
                    marginLeft: 15,
                    color: "#818181",
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 45, color: "#818181" }}> HR </span>
                </Grid>
              </a>

              <ul className='sub-menu' style={{
              }} >
                <li >
                  <Link style={{
                    height: 90

                  }} className="" to="/add_employe">
                    <PersonAddRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Add Employee

                  </Typography>
                    </span>
                  </Link>
                </li>
                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/all_employe">
                    <TocRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View Employees

                  </Typography>
                    </span>
                  </Link>
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 33, color: "#818181" }}>
                    Finance
                  </span>
                </Grid>
              </a>
              <ul className="sub-menu">

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/company">
                    <AddToQueueRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Add Company

                  </Typography>
                    </span>
                  </Link>
                </li>

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/companys">
                    <TocRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View Companies

                  </Typography>
                    </span>
                  </Link>
                </li>

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/financeOrders">
                    <ListAltRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View Orders

                  </Typography>
                    </span>
                  </Link>
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 40, color: "#818181" }}>
                    {" "}
                    Sales{" "}
                  </span>
                </Grid>
              </a>
              <ul className="sub-menu">
                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/create_order">
                    <AddRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Create Order

                  </Typography>
                    </span>
                  </Link>
                </li>
                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/salesOrders">
                    <ListAltRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View Orders

                  </Typography>
                    </span>
                  </Link>
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 30, color: "#818181" }}>
                    {" "}
                    Logistics{" "}
                  </span>
                </Grid>
              </a>
              <ul className="sub-menu">

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/logisticsOrders">
                    <ListAltRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View Orders

                  </Typography>
                    </span>
                  </Link>
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 30, color: "#818181" }}>
                    {" "}
                    Inventory{" "}
                  </span>
                </Grid>
              </a>
              <ul className="sub-menu">
                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/add_item">
                    <AddRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Add Item

                  </Typography>
                    </span>
                  </Link>
                </li>

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/list_item">
                    <TocRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Inventory Status

                  </Typography>
                    </span>
                  </Link>
                </li>

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/list_item">
                    <ListAltRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        View All Orders

                  </Typography>
                    </span>
                  </Link>
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
                      color: "#818181",
                    }}
                  />
                  <span style={{ marginLeft: 50, color: "#818181" }}>
                    {" "}
                    I.T{" "}
                  </span>
                </Grid>
              </a>
              <ul className="sub-menu">

                <li style={{
                  backgroundColor: '#FFFFFF'
                }}>
                  <Link className="" to="/view_account">
                    <ListAltRoundedIcon
                      style={{
                        height: 35,
                        width: 35,
                        // marginLeft: 40,
                        color: "#11669F",
                      }}
                    />
                    <span
                      style={{
                        // marginLeft: 15,
                        color: "#11669F",
                      }}
                    >
                      <Typography variant='body2'>
                        Manage Accounts

                  </Typography>
                    </span>
                  </Link>
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
