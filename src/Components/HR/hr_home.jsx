import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ProfilePicture from '../../Assets/ww.jpg';
import AddNewEmployee from './components/UserProfile/UserProfile'
import UsersCategory from './components/UsersCategory';
import Category from './components/Category'
import SearchBar from '../SearchBar/SearchBar';
import Profile from './components/UserProfile/Profile'
import { connect } from 'react-redux'
import actions from '../../store/login/action'

import { withStyles } from '@material-ui/core';


const drawerWidth = 240;

const styles = ((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        backgroundColor: '#11669F',
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        display: 'flex',
        justify: 'flex-start',
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#EBEBEB'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),


    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    ProfilePicture: {
        height: 10,
    }
}));

export const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => '',
        main: () => <AddNewEmployee />
    },
    {
        path: '/EmployeeCategories',
        exact: true,
        sidebar: () => '',
        main: () =>

            <>

                <Category />
            </>


    },
    {
        path: '/EmployeeListView',
        exact: true,
        sidebar: () => '',
        main: () =>
            <>
                <UsersCategory />

            </>
    },
    {
        path: '/EmployeeProfileView',
        exact: true,
        sidebar: () => '',
        main: () =>
            <>
                <Profile />

            </>
    }
]

class HR extends React.Component {

 

    render(){
        const {classes} = this.props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        // onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        EATH
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>


                    <img src={ProfilePicture} alt='' style={{
                        height: 35,
                        width: 35,
                        borderRadius: 100
                    }} />


                    <IconButton color="inherit">
                        <Typography variant="body2" gutterBottom>
                           {localStorage.getItem('username')}
                        </Typography>

                    </IconButton>
                    <IconButton color="inherit" onClick={this.props.logout}>
                        <ArrowDropDownIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper && classes.drawerPaperClose),
                }}
                // open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton >
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/">
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>

                        </ListItem>
                    </Link>
                    <Link to="/EmployeeCategories">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>

                        </ListItem>
                    </Link>

                    <Link to="/EmployeeListView">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                        </ListItem>
                    </Link>

                    <Link to="/EmployeeProfileView">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
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

        </div>
    )
}
}
function mapStateToProps(state) {
	return {
        isLogin: state.loginReducer.isLogin,
	}
}
const mapDispatchToProps = {
    logout:actions.logout,
    
};
export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HR))