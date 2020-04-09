

<<<<<<< HEAD
// import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

// import Paper from '@material-ui/core/Paper';

// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import AddressForm from './AddressForm';
// import Swal from 'sweetalert2'
// import history from '../../../Routes/history'
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
// //import { render } from '@testing-library/react';




// const styles = theme => ({
//   appBar: {
//     position: 'relative',
//   },
//   layout: {
//     width: 'auto',
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
//   stepper: {
//     padding: theme.spacing(3, 0, 5),
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(1),
//   },
// });

// const steps = ['Personal Information'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return (
//         <React.Fragment>

//         </React.Fragment>
//       )
//     default:
//       throw new Error('Unknown step');
//   }
// }
// class UserProfile extends Component {

//   constructor() {
//     super();
//     this.state = {
//       employeeInfo: []
//     }
//   }

//  SuccessAlert = () => {
//     Swal.fire({
//       // position: 'top-end',
//       icon: 'success',
//       title: 'Registered',
//       showConfirmButton: false,
//       timer: 700
//     }).then(history.push('/Production'))

//   }
  // submit() {
  //   let url = "http://192.168.1.3:8001/api/v1/employe/";
  //   let data = this.state;

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   }).then((result) => {
  //     result.json().then((resp) => {

  //       console.log("resp", resp)
  //       alert("data is submitted")
  //       Swal.fire({
  //               // position: 'top-end',
  //               icon: 'success',
  //               title: 'Registered',
  //               showConfirmButton: false,
  //               timer: 700
  //             }).then(history.push('/Production'))
  //     })
  //   })
  // }


//   render(){
//     // const { error,employeeInfo}= this.state;

//     const {classes} = this.props;
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <main className={classes.layout}>
//         <Paper className={classes.paper}>
//             <Typography component="h1" variant="h4" align="center">
//               Employee Registration
//           </Typography>

//             <React.Fragment>
//               <Typography variant="h6" gutterBottom>
//                 Employee Information
//         </Typography>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                 <TextField
//                     required
//                     id="employeeId"
//                     name="employeeId"
//                     label="Employee Id"
//                     fullWidth
//                     autoComplete="fname"
//                     value={this.state.employeId}
//                     onChange={(data)=>{ this.setState({employeId:data.target.value})}}

//                   />
//                   </Grid>
//                  <Grid item xs={12} sm={6}>
//                  <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First name"
//                     fullWidth
//                     autoComplete="fname"
//                     value={this.state.firstName}
//                     onChange={(data)=>{ this.setState({firstName:data.target.value})}}

//                   />                 
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last name"
//                     fullWidth
//                     autoComplete="lname"
//                     value={this.state.lastName}
//                     onChange={(data)=>{ this.setState({lastName:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="hiredDate"
//                     name="hiredDate"
//                     label="Hired Date"
//                     fullWidth
//                     autoComplete="Email"
//                     value={this.state.hiredDate}
//                     onChange={(data)=>{ this.setState({hiredDate:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="Email"
//                     name="Email"
//                     label="Email"
//                     fullWidth
//                     autoComplete="Email"
//                     value={this.state.email}
//                     onChange={(data)=>{ this.setState({email:data.target.value})}}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="telephone"
//                     name="telephone"
//                     label="telephone"
//                     fullWidth
//                     autoComplete="telephone"
//                     value={this.state.telephone}
//                     onChange={(data)=>{ this.setState({telephone:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="birthDate"
//                     name="birthDate"
//                     label="birthDate"
//                     fullWidth
//                     autoComplete="birthDate"
//                     value={this.state.birthDate}
//                     onChange={(data)=>{ this.setState({birthDate:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="country"
//                     name="country"
//                     label="country"
//                     fullWidth
//                     autoComplete="country"
//                     value={this.state.country}
//                     onChange={(data)=>{ this.setState({country:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                 <TextField
//                     required
//                     id="region"
//                     name="region"
//                     label="region"
//                     fullWidth
//                     autoComplete="region"
//                     value={this.state.region}
//                     onChange={(data)=>{ this.setState({region:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="city"
//                     fullWidth
//                     autoComplete="city"
//                     value={this.state.city}
//                     onChange={(data)=>{ this.setState({region:data.target.value})}}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="Role"
//                     name="Role"
//                     label="Role"
//                     fullWidth
//                     autoComplete="Role"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField id="Location" name="Location" label="Location" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="Type"
//                     name="Type"
//                     label="Recruitment Type"
//                     fullWidth
//                     autoComplete="Type"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="Salary"
//                     name="Salary"
//                     label="Salary"
//                     fullWidth
//                     autoComplete="Salary"
//                   />
//                 </Grid>
//               </Grid>

//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={this.SuccessAlert}
//                 className={classes.button}
//               >
//                 Register
//                   </Button>
//             </React.Fragment>

//           </Paper>
//         </main>
//       </React.Fragment>
//     )
//   }
// }
// export default withStyles(styles)(UserProfile);
import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
=======
import React, { Component } from 'react';
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Swal from 'sweetalert2'
import history from '../../../Routes/history'
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
<<<<<<< HEAD
import {Form, FormGroup, Label, Input, Table } from 'reactstrap';
=======
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormControl, InputLabel, FormGroup } from '@material-ui/core';
import Select from '@material-ui/core/Select';
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b




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
 const  submit = () => {
// submit() {
  let url = "http://192.168.1.3:8001/api/v1/employe/";
  let data = this.state;
  let date = this.state;

<<<<<<< HEAD
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  }).then((result) => {
    result.json().then((resp) => {

      console.log("resp", resp)
      alert("data is submitted")
      Swal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Registered',
              showConfirmButton: false,
              timer: 700
            }).then(history.push('/Production'))
    })
  })
}


const [selectedHiredDate, setSelectedHiredDate] = React.useState(new Date('2014-08-18T21:11:54'));
const [selectedBirthDate, setSelectedBirthDate] = React.useState(new Date('2014-08-18T21:11:54'));


const [role, setRole] = React.useState('');
const [department, setDepartment] = React.useState('');

const [level, setLevel] = React.useState('');



const handleRoleChange = (event) => {
  setRole(event.target.value);
};
const handleDepartmentChange = (event) => {
  setDepartment(event.target.value);
};
const handleLevelChange = (event) => {
  setLevel(event.target.value);
};

const handleDateChange = (date) => {
  setSelectedHiredDate(date);
};
const handleBirthDateChange = (date) => {
  setSelectedBirthDate(date);

};
             // value={level= this.state.level}
                    // onChange={handleChange}
                    // value={this.state.level}
                    // onChange={}
class UserProfile extends Component {

    constructor() {
      super();
      this.state = {
        employeeInfo: [], 
        deps:[]        
      }
    }

    componentDidMount(){
      fetch("http://192.168.1.3:8001/api/v1/department/")
      .then(res=>res.json())
      .then(data=>{
        this.setState({deps:data});

=======
const steps = ['Personal Information'];

class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      employeeInfo: [],
      deps: []
    }
  }

  componentDidMount() {
    fetch("http://192.168.1.7:8000/api/v1/department/")
      .then(res => res.json())
      .then(data => {
        this.setState({ deps: data });

      })
  }
  SuccessAlert = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Registered',
      showConfirmButton: false,
      timer: 700
    }).then(history.push('/Production'))

  }
  submit() {
    let url = "http://192.168.1.7:8000/api/v1/employe/";
    let data = this.state;
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {

        console.log("resp", resp)
        alert("data is submitted")
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
      })
    }





<<<<<<< HEAD
  render(){
   const { error,employeeInfo}= this.state;

   const {classes} = this.props

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

=======

  render() {
    // const { error,employeeInfo}= this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Employee Registration
           </Typography>


            <React.Fragment>

              <Typography variant="h6" gutterBottom>
                Employee Information
         </Typography>
              <Grid container spacing={3}>
<<<<<<< HEAD
                <Grid item xs={12}>
=======
                <Grid item xs={12} sm={6}>
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
                  <TextField
                    required
                    id="Employee_ID"
                    name="Employee_ID"
                    label="Employee ID"
                    fullWidth
                    disabled
                    autoComplete="Employee_ID"
                    value={this.state.employeId}
<<<<<<< HEAD
                    onChange={(data)=>{ this.setState({employeId:data.target.value})}}
=======
                    onChange={(data) => { this.setState({ employeId: data.target.value }) }}

>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
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
                    value={this.state.firstName}
<<<<<<< HEAD
                    onChange={(data)=>{ this.setState({firstName:data.target.value})}}
                  />
=======
                    onChange={(data) => { this.setState({ firstName: data.target.value }) }}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>

                  {/* <TextField
                    required
                    id="Department"
                    name="lastName"
                    label="Department"
                    fullWidth
                    autoComplete="department"
                    value={this.state.department}
                    onChange={(data) => { this.setState({ department: data.target.value }) }}
                  /> */}

                  <FormGroup as="select">

                    <FormControl className={classes.formControl}>

                      <InputLabel id="demo-simple-select-label">Department</InputLabel>

                        {this.state.deps.map(
                          dep => <option key={dep.departmentId}>{dep.departmentName}</option>
                        )}

                    </FormControl>
                  </FormGroup>
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
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
                    value={this.state.lastName}
                    onChange={(data) => { this.setState({ lastName: data.target.value }) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
<<<<<<< HEAD
=======
                    id="hiredDate"
                    label="hiredDate"
                    name="hiredDate"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    onChange={(data) => { this.setState({ hiredDate: data.target.value }) }}

                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
                    required
                    id="Email"
                    name="Email"
                    label="Email"
                    fullWidth
                    autoComplete="Email"
                    value={this.state.email}
                    onChange={(data) => { this.setState({ email: data.target.value }) }}
                  />
                </Grid>
<<<<<<< HEAD
=======

>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
                <Grid item xs={12}>
                  <TextField
                    id="PhoneNumber"
                    name="PhoneNumber"
                    label="PhoneNumber"
                    fullWidth
                    autoComplete="PhoneNumber"
                    value={this.state.telephone}
                    onChange={(data) => { this.setState({ telephone: data.target.value }) }}
                  />
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Role"
                    name="Role"
                    label="Role"
                    fullWidth
                    autoComplete="Role"
=======
                <Grid item xs={12}>

                  <TextField
                    id="birthDate"
                    label="birthDate"
                    name="birthDate"
                    type="date"
                    fullWidth
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    onChange={(data) => { this.setState({ birthDate: data.target.value }) }}

                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="country"
                    fullWidth
                    autoComplete="country"
                    value={this.state.country}
                    onChange={(data) => { this.setState({ country: data.target.value }) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="region"
                    name="region"
                    label="region"
                    fullWidth
                    autoComplete="region"
                    value={this.state.region}
                    onChange={(data) => { this.setState({ region: data.target.value }) }}
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField id="Location" name="Location" label="Location" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Type"
                    name="Type"
                    label="Recruitment Type"
                    fullWidth
                    autoComplete="Type"
                    value={this.state.termOfEmployment}
                    onChange={(data)=>{this.setState({termOfEmployment:data.target.value})}}
                  />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Salary"
                    name="Salary"
                    label="Salary"
                    fullWidth
                    autoComplete="Salary"
                    value={this.state.salery}
                    onChange={(data)=>{this.setState({salery:data.target.value})}}
                  />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    id="date-picker-dialog"
                    label="Birth Date"
                    format="MM/dd/yyyy"
                    //value={setSelectedBirthDate}
                    value={this.state.birthDate= selectedBirthDate}
                    onChange={ this.setState({birthDate:setSelectedBirthDate})}
                    fullWidth
                 //   onChange={handleBirthDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                   // value={this.state.birthDate}
                    //onChange={(data)=>{this.setState({birthDate:data.target.value})}}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormGroup controlId="department">
                    <FormControl as= "select" >
                      {this.state.deps.map(
                        dep=> <option key={dep.departmentId}>{dep.departmentName}</option>
                      )}
                    </FormControl>
                  </FormGroup>

                    
                  <KeyboardDatePicker
                
                    id="date-picker-dialog"
                    label="Hired Date"
                    format="MM/dd/yyyy"
                    fullWidth
                    value={this.state.hiredDate= selectedHiredDate}
                    onChange={ this.setState({hiredDate:setSelectedHiredDate})}
                   //value={selectedHiredDate}
                    //onChange={handleHiredDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    //value={this.state.hiredDate}
                    //onChange={(data)=>{ this.setState({hiredDate:data.target.value})}}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box style={{
                    height: 16
                  }}>

                  </Box>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    value={this.state.department}
                    onChange={(data)=>{ this.setState({department:data.target.value})}}
                    displayEmpty
                    fullWidth
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{
                      display: 'flex',
                      justify: 'left'
                    }}
                  >
                    <MenuItem value="" disabled>
                      Role
           </MenuItem>
                  <li><MenuItem value={10}>department.name</MenuItem></li>
                    <MenuItem value={10}>Ten</MenuItem> 
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box style={{
                    height: 16
                  }}>

                  </Box>
                  <Select
                    // value={age}
                    // onChange={handleChange}
                    value={this.state.level}
                    onChange={(data)=>{ this.setState({level:data.target.value})}}
                    displayEmpty
                    fullWidth
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    style={{
                      display: 'flex',
                      justify: 'left'
                    }}
                  >
                    <MenuItem value="" disabled>
                      Department
           </MenuItem>
                  <li> <MenuItem value={10}>evel.name</MenuItem></li>
                    <MenuItem value={20}>Logistics</MenuItem>
                    <MenuItem value={30}>Minamn</MenuItem>
                  </Select>
                </Grid>

              </Grid>

              <Button
                variant="contained"
                color="primary"
<<<<<<< HEAD
                onClick={submit}
=======
                onClick={this.submit}
>>>>>>> f9a48729fb42a52bddfae34a0ad2959a63057e5b
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