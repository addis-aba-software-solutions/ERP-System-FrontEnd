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
import Profile from './components/UserProfile/employe_profile'
import { connect } from 'react-redux'
import actions from '../../store/login/action'
// import classes from './../../App.style'

import { withStyles } from '@material-ui/core';
class HR extends React.Component {
    constructor(){
        super()
    }
   
    render(){
    return (
        <div>hello</div>
        // <div className={classes.root}>
        //     <CssBaseline />
        //     <AppBar position="absolute" className={clsx(classes.appBar)}>
        //         <Toolbar className={classes.toolbar}>
        //             <IconButton
        //                 edge="start"
        //                 color="inherit"
        //                 aria-label="open drawer"
        //                 className={clsx(classes.menuButton)}
        //             >
        //                 <MenuIcon />
        //             </IconButton>
        //             <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
        //                 EATH
        //             </Typography>
        //             <IconButton color="inherit">
        //                 <Badge badgeContent={4} color="secondary">
        //                     <NotificationsIcon />
        //                 </Badge>
        //             </IconButton>


        //             <img src={ProfilePicture} alt='' style={{
        //                 height: 35,
        //                 width: 35,
        //                 borderRadius: 100
        //             }} />


        //             <IconButton color="inherit">
        //                 <Typography variant="body2" gutterBottom>
        //                    {localStorage.getItem('username')}
        //                 </Typography>

        //             </IconButton>
        //             <IconButton color="inherit" onClick={this.props.logout}>
        //                 <ArrowDropDownIcon fontSize='large' />
        //             </IconButton>
        //         </Toolbar>
        //     </AppBar>
        //     <Drawer
        //         variant="permanent"
        //         classes={{
        //             paper: clsx(classes.drawerPaper && classes.drawerPaperClose),
        //         }}
            
        //     >
                
        //         <div className={classes.toolbarIcon}>
        //             <IconButton >
        //                 <ChevronLeftIcon />
        //             </IconButton>
        //         </div>
        //         <Divider />
        //         <List>
        //             <Link  to="/">
        //                 <ListItem button>
        //                     <ListItemIcon>
        //                         <DashboardIcon />
        //                     </ListItemIcon>

        //                 </ListItem>
        //             </Link>
        //             <Link to="/EmployeeCategories">
        //                 <ListItem button>
        //                     <ListItemIcon>
        //                         <PeopleIcon />
        //                     </ListItemIcon>

        //                 </ListItem>
        //             </Link>

        //             <Link to="/EmployeeListView">
        //                 <ListItem button>
        //                     <ListItemIcon>
        //                         <PeopleIcon />
        //                     </ListItemIcon>
        //                 </ListItem>
        //             </Link>

        //             <Link to="/EmployeeProfileView">
        //                 <ListItem button>
        //                     <ListItemIcon>
        //                         <PeopleIcon />
        //                     </ListItemIcon>
        //                 </ListItem>
        //             </Link>
        //         </List>
        //         <Divider />
        //     </Drawer>

        
     
        // </div>
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
export default  connect(mapStateToProps, mapDispatchToProps)(HR)