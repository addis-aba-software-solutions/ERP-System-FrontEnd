
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
import SalesDashboard from './components/HomeNavBar'
import HomeNavBar from '../Dashboard/HomeNavBar';
import { Paper, Grid } from '@material-ui/core'
import Notification from './components/Notification';
import Meetings from './components/Meetings'
import CreateOrder from './components/CreateOrder'
import ViewAllOrders from './components/ViewAllOrders'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
        main: () => <div style={{
            padding: 20,
            marginTop: 10
        }}>
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
        path: '/CreateOrder',
        exact: true,
        sidebar: () => '',
        main: () => 
        <ViewAllOrders />
    },
    {
        path: '/CategoryListView',
        exact: true,
        sidebar: () => '',
        main: () => <div>
        <CreateOrder />

        </div>


    }
]

export default function Sales() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
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
                            Samuel Kassa
                        </Typography>

                    </IconButton>
                    <IconButton color="inherit">
                        <ArrowDropDownIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>


            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
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
                            <ListItemText primary="Dashboard" />

                        </ListItem>
                    </Link>
                    <Link to="/CreateOrder">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Category" />

                        </ListItem>
                    </Link>
                    <Link to="/CategoryListView">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="ItemView" />

                        </ListItem>
                    </Link>
                    <Link to="/Four">
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            {/* <ListItemText primary="Hollup" /> */}

                        </ListItem>
                    </Link>
                </List>
                <Divider />
                {/* <List>{secondaryListItems}</List> */}
            </Drawer>

            <main className={classes.content} style={{
                backgroundColor: '#EBEBEB',
                height: '100vh  '
            }}>
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
    );
}