// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import PeopleIcon from '@material-ui/icons/People';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// // import AddNewProduct from './components/AddNewProduct'
// import ProfilePicture from '../../Assets/ww.jpg';
// // import InventoryStatus from './components/InventoryStatus';
// import Card from '@material-ui/core/Card';
// import SearchBar from '../SearchBar/SearchBar'
// import Orders from './components/orders'
// // import ItemList from './components/ItemList'

// // import Profile from './Components/HR/UserProfile/Profile'

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     toolbar: {
//         backgroundColor: '#11669F',
//         paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     menuButtonHidden: {
//         display: 'none',
//     },
//     title: {
//         display: 'flex',
//         justify: 'flex-start',
//         flexGrow: 1,
//     },
//     drawerPaper: {
//         position: 'relative',
//         whiteSpace: 'nowrap',
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerPaperClose: {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9),
//         },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     container: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4),


//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column',
//     },
//     fixedHeight: {
//         height: 240,
//     },
//     ProfilePicture: {
//         height: 10,
//     }
// }));

// export const routes = [
//     {
//         path: '/',
//         exact: true,
//         sidebar: () => '',
//         main: () =>
//             <Orders />
//     },
//     {
//         path: '/InventoryStatus',
//         exact: true,
//         sidebar: () => '',
//         main: () => <div></div>

//         // <InventoryStatus />

//     },
//     {
//         path: '/CategoryListView',
//         exact: true,
//         sidebar: () => '',
//         main: () => <div></div>

//         // <ItemList />

//     }
// ]

// export default function ViewAllOrders() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };
//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
//                 <Toolbar className={classes.toolbar}>
//                     <IconButton
//                         edge="start"
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//                         EATH
//                     </Typography>
//                     <IconButton color="inherit">
//                         <Badge badgeContent={4} color="secondary">
//                             <NotificationsIcon />
//                         </Badge>
//                     </IconButton>


//                     <img src={ProfilePicture} alt='' style={{
//                         height: 35,
//                         width: 35,
//                         borderRadius: 100
//                     }} />


//                     <IconButton color="inherit">
//                         <Typography variant="body2" gutterBottom>
//                             Samuel Kassa
//                         </Typography>

//                     </IconButton>
//                     <IconButton color="inherit">
//                         <ArrowDropDownIcon fontSize='large' />
//                     </IconButton>
//                 </Toolbar>





//             </AppBar>


//             <Drawer
//                 variant="permanent"
//                 classes={{
//                     paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//                 }}
//                 open={open}
//             >
//                 <div className={classes.toolbarIcon}>
//                     <IconButton onClick={handleDrawerClose}>
//                         <ChevronLeftIcon />
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <List>
//                     <Link to="/">
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <DashboardIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Dashboard" />

//                         </ListItem>
//                     </Link>
//                     <Link to="/InventoryStatus">
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <PeopleIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Category" />

//                         </ListItem>
//                     </Link>

//                     <Link to="/CategoryListView">
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <PeopleIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="ItemView" />

//                         </ListItem>
//                     </Link>
//                     <Link to="/Four">
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <PeopleIcon />
//                             </ListItemIcon>
//                             {/* <ListItemText primary="Hollup" /> */}

//                         </ListItem>
//                     </Link>
//                 </List>
//                 <Divider />
//                 {/* <List>{secondaryListItems}</List> */}
//             </Drawer>

//             <main className={classes.content} style={{
//                 backgroundColor: '#EBEBEB',
//                 height: '100vh  '
//             }}>
//                 <div className={classes.toolbar} />
//                 <div className={classes.appBarSpacer} />
//                 {/* <div className={classes.appBarSpacer} /> */}

//                 <div style={{
//                     padding: 30
//                 }}>
//                     <SearchBar />

//                 </div>
//                 <Switch>
//                     {routes.map((route, index) => (
//                         <Route
//                             key={index}
//                             path={route.path}
//                             exact={route.exact}
//                             children={<route.main />}
//                         />
//                     ))}
//                 </Switch>

//             </main>

//         </div>
//     );
// }

import React from 'react';
import clsx from 'clsx';
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
import ProfilePicture from '../../Assets/ww.jpg'
import { withStyles } from '@material-ui/core/styles';
import SearchBar from '../SearchBar/SearchBar';
import Orders from './components/orders'

import axios from 'axios'


const drawerWidth = 240;

const styles = theme => ({
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
        maxHeight: 440,

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
    },

    orders: {
        padding: 30
    }
});

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => '',
        main: () =>
            <Orders />
        //     <div style={{padding:30}} > 
        //     <Paper style={{  width: '100%', padding:20}}>
        //    <TableContainer style={{  maxHeight: 440}} >
        //    <Table stickyHeader aria-label="sticky table">
        //     <TableHead className="thead-dark" style={{backgroundColor: "#11669F"}}>

        //       <TableRow>
        //         <th style={{ width: 50 }} score="col">orderId</th>
        //         <th style={{ width: 100 }} score="col">orderNumber</th>
        //         <th style={{ width: 100 }} score="col">orderName</th>

        //         <th style={{ width: 100 }} score="col">item</th>

        //         <th style={{ width: 100 }} score="col">orderQuantity</th>
        //         <th style={{ width: 100 }} score="col">company</th>
        //         <th style={{ width: 100 }} score="col">orderDate</th>
        //         {/* <th style={{ width: 100 }} score="col">Position</th> */}
        //         {/* <th style={{ width: 100 }} score="col">Salary</th> */}
        //         {/* <th style={{ width: 100 }} score="col">Employment Status</th> */}
        //         {/* <th style={{ width: 100 }} score="col">Location</th> */}
        //         <th style={{ width: 50 }} score="col">__</th>
        //       </TableRow>
        //     </TableHead>
        //     <TableBody>
        //       {orderInfo.map(orderInfos => (
        //         <TableRow key={orderInfos.orderId}>
        //           <TableCell>{orderInfos.orderId}</TableCell>
        //           <TableCell>{orderInfos.orderNumber}</TableCell>

        //           <TableCell>{orderInfos.OrderName}</TableCell>
        //           <TableCell>{orderInfos.item}</TableCell>

        //           <TableCell>{orderInfos.orderQuantity}</TableCell>
        //           {/* <TableCell>{orderInfos.email}</TableCell> */}
        //           {/* <TableCell>{orderInfos.hiredDate}</TableCell> */}
        //           {/* <TableCell>{orderInfos.telephone}</TableCell> */}
        //           {/* <TableCell>{orderInfos.birthDate}</TableCell> */}
        //           {/* <TableCell>{orderInfos.country}</TableCell> */}
        //           {/* <TableCell>{orderInfos.region}</TableCell> */}
        //           {/* <TableCell>{orderInfos.city}</TableCell> */}
        //           {/* <TableCell>{orderInfos.orderNumber}</TableCell> */}
        //           {/* <TableCell>{orderInfos.orderDate}</TableCell> */}
        //           <TableCell>{orderInfos.company}</TableCell>
        //           <TableCell>{orderInfos.orderDate}</TableCell>
        //           {/* <TableCell><button>
        //                   <Link to={{
        //                     pathname: `/employe/${orderInfos.employeId}`,
        //                     state: { orderInfos: orderInfos.employeId }
        //                   }}>View</Link>
        //                 </button></TableCell> */}

        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        //   </TableContainer>
        //   </Paper>
        //   </div>



    },
    {
        path: '/InventoryStatus',
        exact: true,
        sidebar: () => '',
        main: () => <div></div>

        // <InventoryStatus />

    },
    {
        path: '/CategoryListView',
        exact: true,
        sidebar: () => '',
        main: () => <div></div>

        // <ItemList />

    }
]

class ViewAllOrders extends React.Component {
    // const {classes} = this.props

    // const [open, setOpen] = React.useState(false);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };
    state = {
        orderInfo: []
    }

    componentDidMount() {
        axios.get("http://192.168.1.9:8000/api/v1/order/")
            .then(res => {
                this.setState({
                    orderInfo: res.data
                })
                //   console.log(res.data.data.children);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {

        const { classes } = this.props

        return (

            <div className={classes.root}>
                <CssBaseline />


                <Drawer
                    variant="permanent"
                    classes={{
                        // paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                // open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton
                        // onClick={handleDrawerClose}
                        >
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
                        <Link to="/InventoryStatus">
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

                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                </Drawer>

                <main className={classes.content} style={{
                    backgroundColor: '#EBEBEB',
                    height: '100vh  '
                }}>
                    <div className={classes.toolbar} />
                    <div className={classes.appBarSpacer} />

                    <div style={{
                        padding: 30
                    }}>
                        <SearchBar />

                    </div>
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
}

export default withStyles(styles)(ViewAllOrders);


