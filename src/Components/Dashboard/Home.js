import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import Notification from '../Dashboard/Notification';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
// import Contents from './HRContents';
import HomeNavBar from './HomeNavBar';
import SearchBar from '../SearchBar/SearchBar';
// import UsersCategory from '../HR/UsersCategory';
import UserProfile from '../HR/components/UserProfile/UserProfile';
import Profile from '../HR/components/UserProfile/Profile';

import HRHome from '../HR/HRhome';


// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
// import Box from '@material-ui/core/Box';

import Meetings from './Meetings';

// import LatestSales from './LatestSales';
// import Budget from './Budget/Budget';
// import TotalUsers from './Budget/TotalUsers';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import UsersByDevice from '../Budget/UsersByDevice';
// import TasksProgress from './Budget/TasksProgress';

// import UserList from '../HR/UserList'

// import classes from "*.module.css";
// mport AssignmentIcon from "@material-ui/icons/AssignmentIcon";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    paper: {
        borderRadius: 16,
        boxShadow: 0,
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        // backgroundColor: '#11669F',s

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },

}));


export const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () =>
            <div >
                <Grid container spacing={2} >
                    <Grid item xs={9}>
                        <HomeNavBar />
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={{
                            borderRadius: 20,
                            padding: 20
                        }}>
                            <Notification />
                        </Paper>
                        <Paper style={{
                            borderRadius: 20,
                            marginTop: 10,
                            padding: 20
                        }}>
                            <Meetings />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
    },
    {
        path: "/inbox",
        sidebar: () => <div>Employees</div>,
        main: () => <div>
            <SearchBar />
            <HRHome />

            {/* <Contents /> */}

        </div>
    },
    {
        path: "/Three",
        sidebar: () => <div>Sales</div>,
        main: () => <div>
            <Grid container spacing={2} >
                <Grid item xs={9}>
                    {/* <UsersCategory /> */}
                </Grid>
                <Grid item xs={3}>
                    <Paper style={{
                        borderRadius: 20,
                        padding: 20
                    }}>
                        <Notification />
                    </Paper>
                    <Paper style={{
                        borderRadius: 20,
                        marginTop: 10,
                        padding: 20
                    }}>
                        <Meetings />
                    </Paper>
                </Grid>
            </Grid>        </div>
    },
    {
        path: "/Four",
        sidebar: () => <div>Sales</div>,
        main: () => <div>
            <Profile />

       </div>
    },
];



export default function Main() {
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
          </Typography>
                </Toolbar>
            </AppBar>
            <Router >
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open
                        })
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                    <ChevronLeftIcon />
                                )}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link to="/">
                            <ListItem button>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />

                            </ListItem>
                        </Link>
                        <Link to="/inbox">
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />

                            </ListItem>
                        </Link>

                        <Link to="/Three">
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Wazzzza" />

                            </ListItem>
                        </Link>
                        <Link to="/Four">
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hollup" />

                            </ListItem>
                        </Link>
                    </List>
                </Drawer>


                <main className={classes.content} style={{
                    backgroundColor: '#EBEBEB',
                    height: '100%'
                }}>
                    <div className={classes.toolbar} />
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
            </Router>
        </div>
    );
}