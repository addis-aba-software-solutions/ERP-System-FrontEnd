import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2'
import history from '../../../../Routes/history'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { Form, FormGroup, Label, Input, Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});



class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      employeeInfo: [],
      deps: [],
      newEmployeeInfo: {
        employeId: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '',
        telephone: '',
        birthDate: '',
        country: '',
        region: '',
        city: '',
        department: '',
        termOfEmployment: '',
        salery: ''


      }
    }
  }

  componentDidMount() {
    fetch("http://192.168.1.9:8000/api/v1/department/")
      .then(res => res.json())
      .then(data => {
        this.setState({ deps: data });

      })
  }

  submit = () => {
    // submit() {
    // let url = "http://192.168.1.3:8001/api/v1/employe/";
    // let data = this.state;
    //let date = this.state;
    // 
    // fetch(url, {
    // method: 'POST',
    // headers: {
    // "Content-Type": "application/json",
    // "Accept": "application/json"
    // },
    // body: JSON.stringify(data)
    // }).then((result) => {
    // result.json().then((resp) => {
    // 
    // console.log("resp", resp)
    // alert("data is submitted")
    // Swal.fire({
    // position: 'top-end',
    // icon: 'success',
    // title: 'Registered',
    // showConfirmButton: false,
    // timer: 700
    // }).then(history.push('/Production'))
    // })
    // })
    axios.post('http://192.168.1.9:8000/api/v1/employe/', this.state.newEmployeeInfo).then((response) => {

      let { employeeInfo } = this.state;
      employeeInfo.push(response.data);
      this.setState({
        employeeInfo,
        newEmployeeInfo: {
          employeId: '',
          firstName: '',
          lastName: '',
          email: '',
          hiredDate: '',
          telephone: '',
          birthDate: '',
          country: '',
          region: '',
          city: '',
          department: '',
          termOfEmployment: '',
          salery: ''

        }
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registered',
        showConfirmButton: false,
        timer: 700
      }).then(history.push('/Production'))

    })

  }






  render() {
    const { error, employeeInfo } = this.state;

    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Employee Registration
           </Typography>


              <React.Fragment>

                <Typography variant="h6" gutterBottom>
                  Employee Information
         </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="Employee_ID"
                      name="Employee_ID"
                      label="Employee ID"
                      fullWidth

                      autoComplete="Employee_ID"
                      value={this.state.newEmployeeInfo.employeId}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.employeId = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"

                      value={this.state.newEmployeeInfo.firstName}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.firstName = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      n
                      ame="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                      value={this.state.newEmployeeInfo.lastName}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.lastName = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="Email"
                      name="Email"
                      label="Email"
                      fullWidth
                      autoComplete="Email"
                      value={this.state.newEmployeeInfo.email}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.email = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="PhoneNumber"
                      name="PhoneNumber"
                      label="PhoneNumber"
                      fullWidth
                      autoComplete="PhoneNumber"
                      value={this.state.newEmployeeInfo.telephone}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.telephone = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Role"
                    name="Role"
                    label="Role"
                    fullWidth
                    autoComplete="Role"
                  />
                </Grid> */}

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="Type"
                      name="Type"
                      label="Recruitment Type"
                      fullWidth
                      autoComplete="Type"
                      value={this.state.newEmployeeInfo.termOfEmployment}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.termOfEmployment = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }} />
                  </Grid>


                  {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Salary"
                    name="Salary"
                    label="Salary"
                    fullWidth
                    autoComplete="Salary"
                    value={this.state.newEmployeeInfo.salery}
                    onChange={(e)=>{
                      let{newEmployeeInfo}=this.state;
                      newEmployeeInfo.salery= e.target.value;
                      this.setState({newEmployeeInfo});
                    }}
                  />
                </Grid> */}

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="country"
                      fullWidth
                      autoComplete="country"
                      value={this.state.newEmployeeInfo.country}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.country = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="city"
                      fullWidth
                      autoComplete="city"
                      value={this.state.newEmployeeInfo.city}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.city = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="region"
                      name="region"
                      label="region"
                      fullWidth
                      autoComplete="region"
                      value={this.state.newEmployeeInfo.region}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.region = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="birthDate"
                      label="Birth Date"
                      type="date"
                      fullWidth
                      value={this.state.newEmployeeInfo.birthDate}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.birthDate = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}


                    />

                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField controlId="department">
                      <FormControl as="select" >
                        {this.state.deps.map(
                          dep => <option key={dep.departmentId}>{dep.departmentName}</option>
                        )}
                        value={this.state.newEmployeeInfo.department}
                    onChange={(e) => {
                          let { newEmployeeInfo } = this.state;
                          newEmployeeInfo.department = e.target.value;
                          this.setState({ newEmployeeInfo });
                        }}
                      </FormControl>
                    </TextField>

                    <TextField
                      required
                      id="hiredDate"
                      label="Hired Date"

                      type="date"
                      fullWidth
                      value={this.state.newEmployeeInfo.hiredDate}
                      onChange={(e) => {
                        let { newEmployeeInfo } = this.state;
                        newEmployeeInfo.hiredDate = e.target.value;
                        this.setState({ newEmployeeInfo });
                      }}


                    />

                  </Grid>


                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  Register
                   </Button>
              </React.Fragment>

            </Paper>
          </MuiPickersUtilsProvider>

        </main>
      </React.Fragment>
    )
  }
}


export default withStyles(styles)(UserProfile);


// const Employees=props=>(
//   <div>
//     <table className="table table-bordered">
// <thead className="thead-dark" style={{backgroundColor: "#11669F"}}>
//   {/* <h2>Product List</h2> */}

//   <tr>
//     <th style={{ width: 50 }} score="col">employeId</th>
//     <th style={{ width: 100 }} score="col">First Name</th>
//     <th style={{ width: 100 }} score="col">Last Name</th>
//     <th style={{ width: 100 }} score="col">Department</th>
//     <th style={{ width: 100 }} score="col">Job Title</th>
//     <th style={{ width: 100 }} score="col">Position</th>
//     {/* <th style={{ width: 100 }} score="col">Salary</th> */}
//     <th style={{ width: 100 }} score="col">Employment Status</th>
//     {/* <th style={{ width: 100 }} score="col">Location</th> */}
//     <th style={{ width: 50 }} score="col">__</th>
//   </tr>
// </thead>
// <tbody>
//   {props.employeeInfo.map(employeeInfos => (
//     <tr key={employeeInfos.employeId}>
//       <td>{employeeInfos.employeId}</td>
//       <td>{employeeInfos.firstName}</td>
//       <td>{employeeInfos.lastName}</td>
//       {/* <td>{employeeInfos.email}</td> */}
//       {/* <td>{employeeInfos.hiredDate}</td> */}
//       {/* <td>{employeeInfos.telephone}</td> */}
//       {/* <td>{employeeInfos.birthDate}</td> */}
//       {/* <td>{employeeInfos.country}</td> */}
//       {/* <td>{employeeInfos.region}</td> */}
//       {/* <td>{employeeInfos.city}</td> */}
//       <td>{employeeInfos.department}</td>
//       <td>{employeeInfos.role}</td>
//       <td>{employeeInfos.level}</td>
//       <td>{employeeInfos.termOfEmployment}</td>
//       <td><button>
//            <Link to={{
//              pathname:`/employe/${employeeInfos.employeId}`,
//              state:{employeeInfos: employeeInfos.firstName}
//           }}>View</Link>
//           </button></td>


//       {/* <td>{employeeInfos.Location}</td> */}

//     </tr>
//   ))}
// </tbody>
// </table>
//   </div>
// )


// {
//   props.employeeInfo.map((employeeInfos)=>{
//     return(
//       <div key={employeeInfos.employeId}>
//         <li>{employeeInfos.firstName}</li>
//       </div>
//     );
//   })
// }