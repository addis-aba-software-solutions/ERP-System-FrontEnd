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

class EmployeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: [],
      search: ''
    };
  }
  
  deleteFun(employeId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.props.deleteEmploye(employeId)
      }
    })
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }


  componentDidMount() {
   this.props.getEmploye()
  }
  render() {

    const { employeeInfo, error } = this.state;
    const { classes } = this.props

    let filteredEmployee = employeeInfo.filter((employeeInfos) => {
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

        <Card
        >
          <CardContent className={classes.content}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Button> <Link to="/add_employe"
                ><Typography variant='h4'>Add New Employee</Typography></Link></Button>
                <input value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <SearchBar search={this.search} updateSearch={this.updateSearch} />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>

                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Phone Number</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Role</TableCell>
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

                        <TableCell><button>
                          <Link to={{
                            pathname: '/employe_profile',
                            state: employeeInfos.employeId,
                          }}>View</Link>

                        </button></TableCell>

                        <TableCell><button onClick={() => this.deleteFun(employeeInfos.employeId)}>
                          <Link>delete</Link>
                        </button></TableCell>

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
    getEmploye:actions.getEmploye,
    deleteEmploye:actions.deleteEmploye,

    
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EmployeTable));