import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
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


  constructor() {
    super();
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
    axios.get("http://0.0.0.0:8000/api/v1/employe/")
      .then(res => {
        this.setState({
          employeeInfo: res.data,
          
        })
          console.log(this.employeeInfo.employeId)
        //   console.log(res.data.data.children);
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {

   const {employeeInfo, error}= this.state;

   console.log(employeeInfo.employeId)
    // if(!employeeInfo) return [];
    //  else {
    // console.log(employeeInfo.employeId);
      
    // let filteredEmployee = this.employeeInfo.filter(
    //   (employeeInfos) => {
    //     return employeeInfos.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   }
    // );
  // }

    const { classes } = this.props
   // const { error, employeeInfo, empId } = this.state;

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
                <Button> <Link to="/UserProfile"
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
                    {employeeInfo.map(employeeInfos => (
                      <TableRow key={employeeInfos.employeId}>
                        <TableCell>{employeeInfos.employeId}</TableCell>
                        <TableCell>{employeeInfos.firstName}</TableCell>
                        <TableCell>{employeeInfos.lastName}</TableCell>
                        <TableCell>{employeeInfos.telephone}</TableCell>
                        <TableCell>{employeeInfos.department.departmentName}</TableCell>
                        <TableCell>{employeeInfos.roles.role}</TableCell>

                        <TableCell><button>
                          <Link to={{
                            pathname: `/profile/${employeeInfos.employeId}`,
                            state: { employeeInfos: employeeInfos.employeId }
                          }}>View</Link>
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


//Search

  // class App extends Component{
  //   constructor(){
  //     super();
  //     this.state={
  //       movies:[],
  //       search:''    }
  //   }

  //   handleSubmit=(e)=>{
  //     e.preventDefault();
  //     fetch(`http://192.168.1.3:8001/api/v1/employe/${this.state.search}`)
  //     .then(data=> data.json()
  //     .then(data=>{
  //       console.log(data);
  //       this.setState({movies:[...data.results]})
  //     }))
  //   }
  //   handleChange=(e)=>{
  //     this.setState({search:e.target.value})
  //   }
  //   render(){
  //     return(
  //       <form onSubmit={this.handleSubmit}>
  //         <input onChange={this.handleChange}/>>
  //       </form>
  //     );
  //   }
  // }

//Filter

// class Filter extends Component{

//   constructor(){
//     super();
//     this.state={
//       search:''
//     };
//   }
//   updateSearch(e){
//     this.setState({
//       search:e.target.value.substr(0,20)
//     })
//   }
// render(){
//    let filteredEmployee= this.employeeInfo.filter(
//      (employeeInfos)=>{
//        return employeeInfos.firstName.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1; 
//      }
//    );
//   return(
//     <div>
//     <ul>
// <TableBody>

//     {filteredEmployee.map(employeeInfos => (

//       // <li>{employeeInfos.firstName}</li>
//       <TableRow key={employeeInfos.employeId}>
//       <TableCell>{employeeInfos.employeId}</TableCell>
//       <TableCell>{employeeInfos.firstName}</TableCell>
//       <TableCell>{employeeInfos.lastName}</TableCell>
//       {/* <TableCell>{employeeInfos.email}</TableCell> */}
//       {/* <TableCell>{employeeInfos.hiredDate}</TableCell> */}
//       {/* <TableCell>{employeeInfos.telephone}</TableCell> */}
//       {/* <TableCell>{employeeInfos.birthDate}</TableCell> */}
//       {/* <TableCell>{employeeInfos.country}</TableCell> */}
//       {/* <TableCell>{employeeInfos.region}</TableCell> */}
//       {/* <TableCell>{employeeInfos.city}</TableCell> */}
//       <TableCell>{employeeInfos.department}</TableCell>
//       <TableCell>{employeeInfos.role}</TableCell>
//       <TableCell>{employeeInfos.level}</TableCell>
//       <TableCell>{employeeInfos.termOfEmployment}</TableCell>
//       <TableCell><button>
//            <Link to={{
//              pathname:`/employe/${employeeInfos.employeId}`,
//              state:{employeeInfos: employeeInfos.employeId}
//           }}>View</Link>
//           </button></TableCell>


//       {/* <TableCell>{employeeInfos.Location}</TableCell> */}

//     </TableRow>
//     )

// )  }
// </TableBody>
//   </ul>
//   <input  value={this.state.search} onChange={this.updateSearch.bind(this)}/>
//   </div>
//   );

//         }

//       
