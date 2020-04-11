import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { withStyles } from '@material-ui/core/styles';


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
      marginTop: 150,
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



class CreateOrder extends React.Component {


  submit = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Ordered',
      showConfirmButton: false,
      timer: 700
    })
  }




  render() {

    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Sales
           </Typography>


              <React.Fragment>

                <Typography variant="h6" gutterBottom>
                  Order Creation
         </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="Employee_ID"
                      name="Employee_ID"
                      label="Order_ID"
                      fullWidth
                      disabled

                      autoComplete="Employee_ID"

                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="Order Number"
                      fullWidth
                      autoComplete="fname"


                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="Quantity"
                      fullWidth
                      autoComplete="fname"


                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Description"
                      fullWidth
                      autoComplete="lname"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      id="PhoneNumber"
                      name="PhoneNumber"
                      label="Order Date"
                      fullWidth
                      autoComplete="PhoneNumber"

                    />
                  </Grid>


                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="Type"
                      name="Type"
                      label="Discount"
                      fullWidth
                      autoComplete="Type"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Item Information"
                      fullWidth
                      autoComplete="country"
                    />
                  </Grid>

                </Grid>
                <div style={{
                  paddingTop:20
                }}>
                <Typography variant="h6" gutterBottom>
                  Item Information
         </Typography>
                </div>


                <div style={{
                  paddingTop:20
                }}>
                <Typography variant="h6" gutterBottom>
                  Item Information Goes Here
         </Typography>
                </div>
                

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  Order
                   </Button>
              </React.Fragment>

            </Paper>
          </MuiPickersUtilsProvider>

        </main>
      </React.Fragment>
    )
  }
}


export default withStyles(styles)(CreateOrder);
