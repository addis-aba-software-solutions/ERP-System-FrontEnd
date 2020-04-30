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
import { Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ProfilePicture from "../../Assets/ww.jpg";
import ViewAllEmployees from "./components/viewAllEmployees";
import AddBoxIcon from "@material-ui/icons/AddBox";
import PopUp from "./components/popup";
import Grid from "@material-ui/core";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    backgroundColor: "#11669F",
    paddingRight: 24,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    display: "flex",
    justify: "flex-start",
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor: "#EBEBEB",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  ProfilePicture: {
    height: 10,
  },
}));

export const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => "",
    main: () => (
      <>
        <ViewAllEmployees />
        <ViewAllEmployees />
      </>
    ),
  },
  {
    path: "/InventoryStatus",
    exact: true,
    sidebar: () => "",
    main: () => (
      <div>
        <PopUp />
      </div>
    ),
  },
  {
    path: "/CategoryListView",
    exact: true,
    sidebar: () => "",
    main: () => <div></div>,

  },
];

export default function Logistics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            EATH
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <img
            src={ProfilePicture}
            alt=""
            style={{
              height: 35,
              width: 35,
              borderRadius: 100,
            }}
          />

          <IconButton color="inherit">
            <Typography variant="body2" gutterBottom>
              Samuel Kassa
            </Typography>
          </IconButton>
          <IconButton color="inherit">
            <ArrowDropDownIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Route>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper),
          }}
        >
          <div className={classes.toolbarIcon}>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <Grid xs={12}>
                <Grid xs={12}>
                  <Link to="/">
                    <ListItemIcon>
                      <DashboardIcon
                        style={{
                          fontSize: 40,
                          marginLeft: 10,
                        }}
                      />
                    </ListItemIcon>
                  </Link>
                </Grid>
                <Grid xs={12}>
                  <Typography
                    style={{
                      marginLeft: 5,
                    }}
                    variant="caption"
                  >
                    All Users
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem button>
              <Grid xs={12}>
                <Grid xs={12}>
                  <Link to="/InventoryStatus">
                    <ListItemIcon>
                      <AddBoxIcon
                        style={{
                          fontSize: 40,
                          marginLeft: 10,
                        }}
                      />
                    </ListItemIcon>
                  </Link>
                </Grid>
                <Grid
                  xs={12}
                  style={{
                    marginLeft: 7,
                  }}
                >
                  <Grid container spacing={13}>
                    <Typography variant="caption">Account</Typography>
                    <Typography variant="caption">Creation</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>

            <ListItem button>
              <Grid xs={12}>
                <Grid xs={12}>
                  <Link to="/CategoryListView">
                    <ListItemIcon>
                      <PeopleIcon
                        style={{
                          fontSize: 40,
                          marginLeft: 10,
                        }}
                      />
                    </ListItemIcon>
                  </Link>
                </Grid>
                <Grid
                  xs={12}
                  style={{
                    marginLeft: 4,
                  }}
                >
                  <Grid container spacing={13}>
                    <Typography variant="caption">Something</Typography>
                    <Typography variant="caption">Goes Here</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.appBarSpacer} />

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </main>
      </Route>
    </div>
  );
}
