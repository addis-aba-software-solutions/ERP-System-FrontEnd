import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import { blue } from "@material-ui/core/colors";
class Nav extends React.Component {
  logoutHandler = (e) => {
    localStorage.clear();
    this.props.history.replace("/login");
  };

  render() {
    const progressStyle50 = {
      width: "50%",
    };
    const progressStyle35 = {
      width: "35%",
    };
    const progressStyle78 = {
      width: "78%",
    };
    const progressStyle80 = {
      width: "80%",
    };
    const progressStyle30 = {
      width: "30%",
    };
    const progressStyle90 = {
      width: "90%",
    };
    const profileImg = {
      width: "30px",
      heigth: "30px",
    };

    return (
      <header className="header" style={{ backgroundColor: "#11669F" }}>
        <div className="toggle-nav">
          <div
            className="icon-reorder tooltips"
            data-original-title="Toggle Navigation"
            data-placement="bottom"
          >
            <i className="icon_menu"></i>
          </div>
        </div>

        <Link to="/" className="logo">
          HR <span className="lite">Admin</span>
        </Link>

        <div className="nav search-row" id="top_menu">
          <ul className="nav top-menu">
            <li>
              <form className="navbar-form">
                <input
                  className="form-control"
                  placeholder="Search"
                  type="text"
                />
              </form>
            </li>
          </ul>
        </div>

        <div className="top-nav notification-row">
          <ul className="nav pull-right top-menu">
            <li id="task_notificatoin_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-task-l"></i>
                <span className="badge bg-important">6</span>
              </a>
              <ul className="dropdown-menu extended tasks-bar">
                <div className="notify-arrow notify-arrow-blue"></div>
                <li>
                  <p className="blue">You have 6 pending letter</p>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info">
                      <div className="desc">Design PSD </div>
                      <div className="percent">90%</div>
                    </div>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressStyle90}
                      >
                        <span className="sr-only">90% Complete (success)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info">
                      <div className="desc">Project 1</div>
                      <div className="percent">30%</div>
                    </div>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-warning"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressStyle30}
                      >
                        <span className="sr-only">30% Complete (warning)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info">
                      <div className="desc">Digital Marketing</div>
                      <div className="percent">80%</div>
                    </div>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressStyle80}
                      >
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info">
                      <div className="desc">Logo Designing</div>
                      <div className="percent">78%</div>
                    </div>
                    <div className="progress progress-striped">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow="78"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressStyle78}
                      >
                        <span className="sr-only">78% Complete (danger)</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="task-info">
                      <div className="desc">Mobile App</div>
                      <div className="percent">50%</div>
                    </div>
                    <div className="progress progress-striped active">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={progressStyle50}
                      >
                        <span className="sr-only">50% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="external">
                  <a href="#">See All Tasks</a>
                </li>
              </ul>
            </li>
            <li id="mail_notificatoin_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-envelope-l"></i>
                <span className="badge bg-important">5</span>
              </a>
              <ul className="dropdown-menu extended inbox">
                <div className="notify-arrow notify-arrow-blue"></div>
                <li>
                  <p className="blue">You have 5 new messages</p>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="./img/avatar-mini.jpg" />
                    </span>
                    <span className="subject">
                      <span className="from">Greg Martin</span>
                      <span className="time">1 min</span>
                    </span>
                    <span className="message">
                      0 I really like this admin panel.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="./img/avatar-mini2.jpg" />
                    </span>
                    <span className="subject">
                      <span className="from">Bob Mckenzie</span>
                      <span className="time">5 mins</span>
                    </span>
                    <span className="message">
                      Hi, What is next project plan?
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="./img/avatar-mini3.jpg" />
                    </span>
                    <span className="subject">
                      <span className="from">Phillip Park</span>
                      <span className="time">2 hrs</span>
                    </span>
                    <span className="message">
                      I am like to buy this Admin Template.
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="photo">
                      <img alt="avatar" src="./img/avatar-mini4.jpg" />
                    </span>
                    <span className="subject">
                      <span className="from">Ray Munoz</span>
                      <span className="time">1 day</span>
                    </span>
                    <span className="message">Icon fonts are great.</span>
                  </a>
                </li>
                <li>
                  <a href="#">See all messages</a>
                </li>
              </ul>
            </li>
            <li id="alert_notificatoin_bar" className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <i className="icon-bell-l"></i>
                <span className="badge bg-important">7</span>
              </a>
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
            </li>
            <li className="dropdown">
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="username">
                  {localStorage.getItem("username")}{" "}
                </span>
                <span className="profile-ava">
                  <img alt="" src="img/sample-img-1.jpg" style={profileImg} />
                </span>

                <b className="caret"></b>
              </a>
              <ul className="dropdown-menu extended logout">
                <div className="log-arrow-up"></div>
                <li className="eborder-top">
                  <a href="#">
                    <i className="icon_profile"></i> My Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon_mail_alt"></i> My Inbox
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon_clock_alt"></i> Timeline
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon_chat_alt"></i> Chats
                  </a>
                </li>
                <li>
                  <Link onClick={(e) => this.logoutHandler(e)}>
                    <i className="icon_key_alt"></i> Log Out
                  </Link>
                </li>
                <li>
                  <a href="documentation.html">
                    <i className="icon_key_alt"></i> Documentation
                  </a>
                </li>
                <li>
                  <a href="documentation.html">
                    <i className="icon_key_alt"></i> Documentation
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Nav;
