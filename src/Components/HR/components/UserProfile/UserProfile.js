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
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap'


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
      depValue: '',
      rolValue: '',
      levValue: '',
      firstValue:'',
      lastValue:'',
      emailValue:'',
      countryValue:'',
      regionValue:'',
      cityValue:'',
      termofEmploymentValue:'Hourly',
      telephoneValue:'',
      
      employeeInfo: [],
      deps: [],
      rol: [],
      lev: [],
      newEmployeeInfo: {
        employeId: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '1999-06-06',
        telephone: '',
        birthDate: '1999-06-06',
        country: '',
        region: '',
        city: '',
        termOfEmployment: "Hourly",
        department: '',
        roles: '',
        level: ''
        //salery:''

      }
    }
    this.submit = this.submit.bind(this);
    this.departmentDropDown = this.departmentDropDown.bind(this);
    this.levelDropDown = this.levelDropDown.bind(this);
    this.roleDropDown = this.roleDropDown.bind(this);
    this.firstNameChange=this.firstNameChange.bind(this);
    this.lastNameChange=this.lastNameChange.bind(this);
    this.emailChange=this.emailChange.bind(this);
    this.countryChange=this.countryChange.bind(this);
    this.regionChange=this.regionChange.bind(this);
    this.termofEmploymentChange=this.termofEmploymentChange.bind(this);
    this.cityChange=this.cityChange.bind(this);
    this.telephoneChange=this.telephoneChange.bind(this);



  }

  componentDidMount() {
    fetch("http://192.168.1.5:8000/api/v1/department/")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({ deps: data });

      })
    fetch("http://192.168.1.5:8000/api/v1/role/")
      .then(res => res.json())
      .then(data => {
        console.log(data);


        this.setState({ rol: data });

      })
    fetch("http://192.168.1.5:8000/api/v1/level/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ lev: data });

      })

  }


  submit = () => {
 
    axios.post('http://192.168.1.5:8000/api/v1/employe/', {
      firstName:  this.state.firstValue,
      lastName: this.state.lastValue,
      email: this.state.emailValue,
      birthDate: "2020-10-10",
      hiredDate: "2020-10-10",
      termOfEmployment: 'Hourly',
      // this.state.termofEmploymentValue,
      country:  this.state.countryValue,
      region: this.state.regionValue,
      city:  this.state.cityValue,
      telephone:  this.state.telephoneValue,

      department: this.state.depValue,
      // roles:1,
      roles: this.state.rolValue,

      // level:1
      level: this.state.levValue,

    })
      .then((response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registered',
          showConfirmButton: false,
          timer: 700
        }).then(history.push('/UsersTable'))

      },
        (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Eror',
            showConfirmButton: false,
            timer: 700
          }).then(history.push('/UsersTable'))

        });




  }

  departmentDropDown(e) {
    this.setState({
      depValue: e.target.value
    })
  }
  levelDropDown(e) {
    this.setState({
      levValue: e.target.value
    })
  }
  roleDropDown(e) {
    this.setState({
      rolValue: e.target.value
    })
  }
  firstNameChange(e) {
    this.setState({
      firstValue: e.target.value
    })
  }
  lastNameChange(e) {
    this.setState({
      lastValue: e.target.value
    })
  }
  emailChange(e) {
    this.setState({
      emailValue: e.target.value
    })
  }
  telephoneChange(e) {
    this.setState({
      telephoneValue: e.target.value
    })
  }
  termofEmploymentChange(e) {
    this.setState({
      termofEmploymentValue: e.target.value
    })
  }

  countryChange(e) {
    this.setState({
      countryValue: e.target.value
    })
  }
 regionChange(e) {
    this.setState({
     regionValue: e.target.value
    })
  }
  cityChange(e) {
    this.setState({
      cityValue: e.target.value
    })
  }


  render() {
    const { error, newEmployeeInfo, deps, rol, lev, empId } = this.state;

    const { classes } = this.props
    var depValue = this.state.depValue;
    var rolValue = this.state.rolValue;
    var levValue = this.state.levValue;
    var regionValue = this.state.regionValue;
    var cityValue = this.state.cityValue;
    var countryValue = this.state.countryValue;
    var termofEmploymentValue = this.state.termofEmploymentValue;
    var telephoneValue = this.state.telephoneValue;
    var emailValue = this.state.emailValue;
    var lastValue = this.state.lastValue;
    var firstValue = this.state.firstValue;




 

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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"

                      // value={this.state.newEmployeeInfo.firstName}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.firstName = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.firstNameChange} 
                      value={firstValue} 
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
                      // value={this.state.newEmployeeInfo.lastName}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.lastName = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.lastNameChange} 
                      value={lastValue} 

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="Email"
                      // value={this.state.newEmployeeInfo.email}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.email = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}

                      onChange={this.emailChange}
                      value={emailValue} 

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="telephone"
                      name="telephone"
                      label="Phone Number"
                      fullWidth
                      autoComplete="PhoneNumber"
                      // value={this.state.newEmployeeInfo.telephone}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.telephone = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.telephoneChange} 
                      value={telephoneValue} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">Term Of Employment</InputLabel>
                      <Select  native defaultValue="" id="grouped-native-select">
                        <option aria-label="None" value="" />
                        <option >Permanent</option>
                        <option >Contract</option>
                        <option >Hourly</option>
                        {/* value={this.state.newEmployeeInfo.termOfEmployment}                   
                        onChange={(e) => {
                          let { newEmployeeInfo } = this.state;
                          newEmployeeInfo.termOfEmployment = e.target.value;
                          this.setState({ newEmployeeInfo });

                        }} */}
                         onChange={this.termofEmploymentChange}
                          value={termofEmploymentValue} 
                      </Select>
                    </FormControl>


                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="country"
                      // value={this.state.newEmployeeInfo.country}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.country = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.countryChange}
                      value={countryValue} 


                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">Department</InputLabel>

                      <Select onChange={this.departmentDropDown} value={depValue} native id="grouped-native-select">
                        <option aria-label="None" value="" />

                        {deps.map(dep => (
                          <option value={dep.departmentId}>{dep.departmentName}</option>
                        ))}

                      </Select>


                    </FormControl>


                  </Grid>
                  <Grid item xs={12} sm={4}>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">Level</InputLabel>
                      <Select onChange={this.levelDropDown} value={levValue} native id="grouped-native-select" >
                        <option aria-label="None" value="" />
                        {this.state.lev.map(levs =>
                          <option value={levs.levelId} key={levs.levelId}>{levs.level}</option>
                        )}
                        {/* value={this.state.newEmployeeInfo.level} */}

                      </Select>
                    </FormControl>






                  </Grid>

                  <Grid item xs={12} sm={4}>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">Role</InputLabel>
                      <Select onChange={this.roleDropDown} value={rolValue} native id="grouped-native-select">
                        <option aria-label="None" value="" />
                        {this.state.rol.map(rols =>
                          <option value={rols.roleId}  key={rols.roleId}>{rols.role}</option>
                        )}
                        {/* value={this.state.newEmployeeInfo.role}
                        onChange={(e) => {
                          let { newEmployeeInfo } = this.state;
                          newEmployeeInfo.role = e.target.value;
                          // newEmployeeInfo.roleId = e.target.value;

                          this.setState({ newEmployeeInfo });
                        }} */}
                      </Select>
                    </FormControl>


                  </Grid>


                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="city"
                      // value={this.state.newEmployeeInfo.city}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.city = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.cityChange}
                      value={cityValue} 


                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="region"
                      name="region"
                      label="Region"
                      fullWidth
                      autoComplete="region"
                      // value={this.state.newEmployeeInfo.region}
                      // onChange={(e) => {
                      //   let { newEmployeeInfo } = this.state;
                      //   newEmployeeInfo.region = e.target.value;
                      //   this.setState({ newEmployeeInfo });
                      // }}
                      onChange={this.regionChange}
                      value={regionValue} 
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <form className={classes.container} noValidate>
                      <TextField
                        fullWidth
                        id="date"
                        label="BirthDate"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>

                  </Grid>

                  <Grid item xs={12} sm={6}>

                    <form className={classes.container} noValidate>
                      <TextField
                        fullWidth
                        id="date"
                        label="Hired Date"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>

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


