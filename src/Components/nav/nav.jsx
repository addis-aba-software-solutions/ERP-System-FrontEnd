import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import { blue } from "@material-ui/core/colors";
import { Badge, Typography, Paper, Avatar, Grid } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Logo from "../../Assets/NAZO.png";

class Nav extends React.Component {
  logoutHandler = (e) => {
    localStorage.clear();
    this.props.history.replace("/login");
  };

  render() {
    return (
      <header className="header" style={{ backgroundColor: "#11669F" }}>
        <div
          className="top-nav"
          style={{
            paddingBottom: 15,
          }}
        >
          <ul className="nav pull-left top-menu">
            <Avatar
              variant="square"
              alt=""
              src={Logo}
              style={{
                marginLeft: 10,
                marginRight: 50,
                width: 80,
                height: 50,
              }}
            />
          </ul>
        </div>

        <div>
          <ul className="nav pull-right top-menu">
            <Grid
              container
              style={{
                paddingBottom: 8,
              }}
              spacing={3}
            >
              <Grid
                item
                style={{
                  marginTop: 12,
                }}
              >
                <li className="dropdown">
                  <a data-toggle="dropdown">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsActiveIcon
                        style={{
                          color: "#FFFFFF",
                        }}
                        fontSize="large"
                      />
                    </Badge>
                  </a>
                  {/* =================== Notifications DropDown ==================? */}
                  <ul className="dropdown-menu extended notification">
                    <div className="notify-arrow notify-arrow-blue"></div>
                    <li>
                      <p className="blue">You have 4 new notifications</p>
                    </li>
                    <li>
                      <a href="#">
                        <span className="label label-primary">
                          <i className="icon_profile"></i>
                        </span>
                        Friend Request
                        <span className="small italic pull-right">5 mins</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="label label-warning">
                          <i className="icon_pin"></i>
                        </span>
                        John location.
                        <span className="small italic pull-right">50 mins</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="label label-danger">
                          <i className="icon_book_alt"></i>
                        </span>
                        Project 3 Completed.
                        <span className="small italic pull-right">1 hr</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="label label-success">
                          <i className="icon_like"></i>
                        </span>
                        Mick appreciated your work.
                        <span className="small italic pull-right"> Today</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">See all notifications</a>
                    </li>
                  </ul>
                  {/* ============================================================? */}
                </li>
              </Grid>
              <Grid item>
                <li className="dropdown">
                  <a
                    data-toggle="dropdown"
                    // className="dropdown-toggle"
                    href="#"
                  >
                    <Grid container>
                      <Typography
                        variant="h5"
                        style={{
                          marginTop: 10,
                          color: "#FFFFFF",
                        }}
                      >
                        {localStorage.getItem("username")}{" "}
                      </Typography>
                      {/* <span className="profile-ava"> */}
                      <Avatar
                        alt=""
                        src="img/sample-img-1.jpg"
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                      <ArrowDropDownCircleIcon
                        style={{
                          color: "#FFFFFF",
                          marginTop: 10,
                        }}
                        fontSize="large"
                      />
                    </Grid>
                  </a>
                  <ul className="dropdown-menu extended logout">
                    <div className="log-arrow-up"></div>
                    <li className="eborder-top">
                      <a href="#">
                        <i className="icon_profile"></i> My Profile
                      </a>
                    </li>
                    <li>
                      <Link onClick={(e) => this.logoutHandler(e)}>
                        <i className="icon_key_alt"></i> Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </Grid>
            </Grid>
          </ul>
        </div>
      </header>
    );
  }
}

export default Nav;
