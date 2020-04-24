import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
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
import VisibilityIcon from "@material-ui/icons/Visibility";
import history from "../../../../Routes/history";
import SearchBar from "../../../SearchBar/SearchBar";
import API from "../../../../api/API";
import Swal from "sweetalert2";
//import {Redirect} from 'react-router-dom';

const styles = (theme) => ({
  root: {},
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

class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: [],
      search: "",
      redirect: false,
    };
    this.logout = this.logout.bind(this);
  }
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
      }
    });
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

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
  render() {
    const { employeeInfo, error } = this.state;
    const { classes } = this.props;

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
                      <TableRow key={employeeInfos.employeId}>
                        <TableCell>{employeeInfos.employeId}</TableCell>
                        <TableCell>{employeeInfos.firstName}</TableCell>
                        <TableCell>{employeeInfos.lastName}</TableCell>
                        <TableCell>{employeeInfos.telephone}</TableCell>
                        <TableCell>
                          {employeeInfos.department.departmentName}
                        </TableCell>
                        <TableCell>{employeeInfos.roles.role}</TableCell>

                        {/* <TableCell><button>
                          <Link to={{
                            pathname: `/profile/${employeeInfos.employeId}`,
                           
                            state: { employeeInfos:  employeeInfo.map(employeeInfos=>(employeeInfos.employeId)) },                                                   
                          }}>View</Link>
                        </button></TableCell> */}
                      </TableRow>
                    ))}
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
