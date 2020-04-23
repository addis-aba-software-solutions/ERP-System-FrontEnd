import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }


  componentDidMount() {
    axios.get(API+"employe/")
      .then(res => {
        this.setState({
          employeeInfo: res.data,
          
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {

   const {employeeInfo, error}= this.state;
   const { classes } = this.props
  
    let filteredEmployee = employeeInfo.filter((employeeInfos)=>{
      return employeeInfos.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      // console.log(item);
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
                >Add New Employee</Link></Button>
                <input value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <SearchBar search={this.search} updateSearch={this.updateSearch}/>
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


                  {/* console.log({this.employeeInfo.map(employeeInfos=>({employeeInfos.employeId}))}) */}

                    {filteredEmployee.map(employeeInfos => (
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
                     
                        <TableCell><button>
                        delete
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

export default withStyles(styles)(UsersTable);

