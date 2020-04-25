import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
// import { makeStyles } from '@material-ui/styles';
<<<<<<< HEAD
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
=======
import { withStyles, Grid, IconButton } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
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
  TablePagination,
} from "@material-ui/core";
<<<<<<< HEAD
import VisibilityIcon from "@material-ui/icons/Visibility";
import history from "../../../../Routes/history";
import SearchBar from "../../../SearchBar/SearchBar";
import API from "../../../../api/API";
import Swal from "sweetalert2";
//import {Redirect} from 'react-router-dom';

const styles = (theme) => ({
  root: {},
=======
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import history from "../../../../Routes/history";
import SearchBar from "../../../SearchBar/SearchBar";
import API from "./../../../../api/API";
import actions from "./../../../../store/hr/action";
import { connect } from "react-redux";

const styles = (theme) => ({
  root: {
    padding: 10,
    borderRadius: 10,
  },
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 15,
  },
  actions: {
    justifyContent: "flex-end",
  },
});

<<<<<<< HEAD
class UsersTable extends React.Component {
=======
class EmployeTable extends React.Component {
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: [],
      search: "",
<<<<<<< HEAD
      redirect: false,
=======
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
    };
    this.logout = this.logout.bind(this);
  }
<<<<<<< HEAD
=======
  componentDidMount() {
    this.props.getEmploye();
  }
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
  deleteFun(employeId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
<<<<<<< HEAD
        axios
          .request({
            method: "DELETE",
            url: API + "employe/" + employeId,
            responseType: "json",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((user) => {
            const items = this.state.employeeInfo.filter(
              (employe) => employe.employeId !== employeId
            );
            this.setState({
              employeeInfo: items,
            });
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "Something went wrogn.", "error");
          });
=======
        this.props.deleteEmploye(employeId);
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
      }
    });
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

<<<<<<< HEAD
  // componentWillMount(){
  //   if(sessionStorage.getItem("userData")){
  //     console.log("From Login Page");

  //   }
  //   else{
  //     this.setState({redirect:true});
  //   }
  // }
  logout() {
    sessionStorage.getItem("userData");
    sessionStorage.clear();
  }

  componentDidMount() {
    axios
      .get(API + "employe/")
      .then((res) => {
        this.setState({
          employeeInfo: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
=======
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
  render() {
    const { employeeInfo, error } = this.state;
    const { classes } = this.props;

<<<<<<< HEAD
    if (this.state.redirect) {
      return <Redirect to={"./login"} />;
    }
    //  console.log(employeeInfo)
    //  employeeInfo.map((employ)=>{

    //  });
    //console.log(employeeInfo.map(employeeInfos=>(employeeInfos.employeId)));

    //console.log(employeeInfo);

    // if(!employeeInfo) return [];
    //  else {
    // console.log(employeeInfo.employeId);

    let filteredEmployee = employeeInfo.filter((employeeInfos) => {
      return (
        employeeInfos.firstName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
      // console.log(item);
    });
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <Card>
          <CardContent className={classes.content}>
            <PerfectScrollbar>
              <div className={classes.inner}>
                <Button>
                  {" "}
                  <Link to="/UserProfile">Add New Employee</Link>
                </Button>
                <Button onClick={this.logout}>LogOut</Button>
                <input
                  value={this.state.search}
                  onChange={this.updateSearch.bind(this)}
                />
                <SearchBar
                  search={this.search}
                  updateSearch={this.updateSearch}
                />
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
                    {filteredEmployee.map((employeeInfos) => (
=======
    let filteredEmployee = employeeInfo.filter((employeeInfos) => {
      return (
        employeeInfos.firstName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <>
          <SearchBar search={this.search} updateSearch={this.updateSearch} />

          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Id</b>
                      </TableCell>

                      <TableCell>
                        <b>First Name</b>
                      </TableCell>
                      <TableCell>
                        <b>Last Name</b>
                      </TableCell>
                      <TableCell>
                        <b>Phone Number</b>
                      </TableCell>
                      <TableCell>
                        <b>E-mail Address</b>
                      </TableCell>
                      <TableCell>
                        <b>Department</b>
                      </TableCell>
                      <TableCell>
                        <b>Role</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Actions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.employees.map((employeeInfos) => (
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
                      <TableRow key={employeeInfos.employeId}>
                        <TableCell>{employeeInfos.employeId}</TableCell>
                        <TableCell>{employeeInfos.firstName}</TableCell>
                        <TableCell>{employeeInfos.lastName}</TableCell>
                        <TableCell>{employeeInfos.telephone}</TableCell>
<<<<<<< HEAD
=======
                        <TableCell>{employeeInfos.email}</TableCell>
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
                        <TableCell>
                          {employeeInfos.department.departmentName}
                        </TableCell>
                        <TableCell>{employeeInfos.roles.role}</TableCell>

<<<<<<< HEAD
                        {/* <TableCell><button>
                          <Link to={{
                            pathname: `/profile/${employeeInfos.employeId}`,
                           
                            state: { employeeInfos:  employeeInfo.map(employeeInfos=>(employeeInfos.employeId)) },                                                   
                          }}>View</Link>
                        </button></TableCell> */}
=======
                        <TableCell align="center">
                          <Grid spacing={4}>
                            <IconButton
                              style={{
                                marginTop: 10,
                              }}
                            >
                              <Link
                                to={{
                                  pathname: "/employe_profile",
                                  state: employeeInfos.employeId,
                                }}
                              >
                                <VisibilityIcon />
                              </Link>
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                this.deleteFun(employeeInfos.employeId)
                              }
                            >
                              <DeleteIcon color="secondary" />
                            </IconButton>
                          </Grid>
                        </TableCell>
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
<<<<<<< HEAD
              </div>
            </PerfectScrollbar>
          </CardContent>
        </Card>
=======

                {/* </div> */}
              </PerfectScrollbar>
            </CardContent>
          </Card>
        </>
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
      );
    }
  }
}

<<<<<<< HEAD
export default withStyles(styles)(UsersTable);

// employeeInfos.employeId
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
=======
function mapStateToProps(state) {
  return {
    loading: state.hrReducer.loading,
    users: state.hrReducer.users,
    employees: state.hrReducer.employees,
    users: state.hrReducer.users,
    errors: state.hrReducer.errors,
  };
}
const mapDispatchToProps = {
  getEmploye: actions.getEmploye,
  deleteEmploye: actions.deleteEmploye,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EmployeTable));
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
