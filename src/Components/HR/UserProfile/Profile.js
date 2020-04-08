import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Swal from 'sweetalert2'
import history from '../../../Routes/history'
import avatar from "../../../Assets/ww.jpg";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
      display: 'flex',
      justify: 'flex-start',
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

  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default function Profile() {

  
  const classes = useStyles();


  return (
    <React.Fragment >
      <CssBaseline />
      <main className={classes.layout}>
      <Grid xs={12} sm={12} md={12}>
          <Card profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardContent profile>
                <Grid container xs={100}>
                <h6 className={classes.cardCategory}>HR Head</h6>

                </Grid>
              <h4 className={classes.cardTitle}>Samuel Kassa</h4>
              <p className={classes.description}>
                
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </main>
    </React.Fragment>
  )
 }