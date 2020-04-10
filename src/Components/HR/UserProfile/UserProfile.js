

import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
  import Swal from 'sweetalert2'
import history from '../../../Routes/history'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import { FormControl, InputLabel, FormGroup } from '@material-ui/core';
import Select from '@material-ui/core/Select';




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
      })
    })
  }


  render() {
    // const { error,employeeInfo}= this.state;
    const { classes } = this.props;
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
                    onChange={(data) => { this.setState({ employeId: data.target.value }) }}

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
                    onChange={(data) => { this.setState({ lastName: data.target.value }) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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

                <Grid item xs={12}>
                  <TextField
                    required
                    id="telephone"
                    name="telephone"
                    label="telephone"
                    fullWidth
                    autoComplete="telephone"
                    value={this.state.telephone}
                    onChange={(data) => { this.setState({ telephone: data.target.value }) }}
                  />
                </Grid>
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
                onClick={this.submit}
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
export default withStyles(styles)(UserProfile);