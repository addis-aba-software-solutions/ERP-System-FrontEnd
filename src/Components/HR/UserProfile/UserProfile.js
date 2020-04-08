import React from 'react';
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="PhoneNumber"
              name="PhoneNumber"
              label="PhoneNumber"
              fullWidth
              autoComplete="PhoneNumber"
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
      </React.Fragment>
      )
    default:
      throw new Error('Unknown step');
  }
}

export default function UserProfile() {

  const SuccessAlert = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Registered',
      showConfirmButton: false,
      timer: 700
    }).then(history.push('/Production'))

  }
  
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Employee Registration
          </Typography>
          <AddressForm />

          <React.Fragment>

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