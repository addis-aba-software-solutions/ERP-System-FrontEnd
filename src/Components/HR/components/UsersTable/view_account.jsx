import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
  TablePagination
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import history from '../../../../Routes/history'
import SearchBar from '../../../SearchBar/SearchBar'
import API from './../../../../api/API'
import actions from './../../../../store/hr/action'
import { connect } from 'react-redux'
const styles = theme => ({

  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: 15,
  },
  actions: {
    justifyContent: 'flex-end'
  }
});

class UsersTable extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: [],
      search: ''
    };
  }

  componentWillMount() {
    this.props.getEmploye()
  }

  createAccountFun(employe){
   var data={
          username:employe.email,
          password:employe.email,
          email:employe.email,
          employe:employe.employeId,
          department:employe.department.departmentId,
          role:employe.roles.roleId,
          claim:employe.level.levelId,
      }

this.props.addAccount(data)
 
    
  }
  deleteFun(employeId){
    this.props.deleteAccount(employeId)
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }


  render() {

   const {employeeInfo, error}= this.state;
   const { classes } = this.props
  
    let filteredEmployee = employeeInfo.filter((employeeInfos)=>{
      return employeeInfos.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    if (error) {
      return (
        <div>
          Error:{error.message}
        </div>
      )
    }
    else {
      return (
        <Card>
          <CardContent className={classes.content}>
            <PerfectScrollbar>
              <div className={classes.inner}>
             
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>

                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Claim</TableCell>
                      <TableCell>Actions</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {this.props.employees.map(employeeInfos => (
                      <TableRow key={employeeInfos.employeId}>
                        <TableCell>{employeeInfos.employeId}</TableCell>
                        <TableCell>{employeeInfos.firstName}</TableCell>
                        <TableCell>{employeeInfos.lastName}</TableCell>
                        <TableCell>{employeeInfos.telephone}</TableCell>
                        <TableCell>{employeeInfos.department.departmentName}</TableCell>
                        <TableCell>{employeeInfos.roles.role}</TableCell>
                        <TableCell>{employeeInfos.level.level}</TableCell>
                        {!employeeInfos.has_account?(
                            <TableCell><button onClick={()=>this.createAccountFun(employeeInfos)}>
                            <Link>Create Account</Link>
                            
                          </button></TableCell>
                            ):( <TableCell><button onClick={()=>this.deleteFun(employeeInfos.employeId)}>
                            <Link>delete</Link>
                            </button></TableCell>)}
                      </TableRow>
                    )

                    )}
                  </TableBody>
                </Table>
                
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>

      );
    }
  }
}
function mapStateToProps(state) {
	return {
        loading: state.hrReducer.loading,
        users:state.hrReducer.users,
        employees:state.hrReducer.employees,
        users:state.hrReducer.users,
        errors:state.hrReducer.errors,
        

	}
}
const mapDispatchToProps = {
    addAccount:actions.addAccount,
    getEmploye:actions.getEmploye,
    deleteAccount:actions.deleteAccount,

    
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersTable));

