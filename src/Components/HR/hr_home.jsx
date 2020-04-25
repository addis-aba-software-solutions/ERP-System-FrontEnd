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
        <div></div>
       
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