import {React, Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Swal from 'sweetalert2'
import history from '../../../Routes/history'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { render } from '@testing-library/react';




const useStyles = makeStyles((theme) => ({
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
}));

const steps = ['Personal Information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>

        </React.Fragment>
      )
    default:
      throw new Error('Unknown step');
  }
}

export default class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      employeeInfo: []
    }
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
    let url = "http://192.168.1.3:8001/api/v1/employe/";
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
      })
    })
  }

  
  render(){
    const { error,employeeInfo}= this.state;
    
    const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
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
                    id="employeeId"
                    name="employeeId"
                    label="Employee Id"
                    fullWidth
                    autoComplete="fname"
                    value={this.state.employeId}
                    onChange={(data)=>{ this.setState({employeId:data.target.value})}}
                    
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
                    onChange={(data)=>{ this.setState({firstName:data.target.value})}}

                  />                 
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                    value={this.state.lastName}
                    onChange={(data)=>{ this.setState({lastName:data.target.value})}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="hiredDate"
                    name="hiredDate"
                    label="Hired Date"
                    fullWidth
                    autoComplete="Email"
                    value={this.state.hiredDate}
                    onChange={(data)=>{ this.setState({hiredDate:data.target.value})}}
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
                    value={this.state.email}
                    onChange={(data)=>{ this.setState({email:data.target.value})}}
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <TextField
                    required
                    id="telephone"
                    name="telephone"
                    label="telephone"
                    fullWidth
                    autoComplete="telephone"
                    value={this.state.telephone}
                    onChange={(data)=>{ this.setState({telephone:data.target.value})}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="birthDate"
                    name="birthDate"
                    label="birthDate"
                    fullWidth
                    autoComplete="birthDate"
                    value={this.state.birthDate}
                    onChange={(data)=>{ this.setState({birthDate:data.target.value})}}
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
                    onChange={(data)=>{ this.setState({country:data.target.value})}}
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
                    onChange={(data)=>{ this.setState({region:data.target.value})}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="city"
                    fullWidth
                    autoComplete="city"
                    value={this.state.city}
                    onChange={(data)=>{ this.setState({region:data.target.value})}}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Role"
                    name="Role"
                    label="Role"
                    fullWidth
                    autoComplete="Role"
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
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                onClick={SuccessAlert}
                className={classes.button}
              >
                Register
                  </Button>
            </React.Fragment>

          </Paper>
        </main>
      </React.Fragment>
    )
  }
}