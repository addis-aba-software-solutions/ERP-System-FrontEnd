import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import Budget from './Budget/Budget';
import TotalUsers from './Budget/TotalUsers';
import TasksProgress from './Budget/TasksProgress';
import UserList from '../HR/UserList'
import Level from '../HR/components/Level'


const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  difference: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: "#00970F",
    marginLeft: 90
  },
  differenceValue: {
    color: "#00970F",
    marginRight: 10
  },
  budgetTracking: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 260,
    borderRadius: 20
  },
  toolbar: {

    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    background: '#11669F',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',

    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    borderRadius: 16,
    boxShadow: 0,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  fixedNotificationHeight: {
    height: 350,
  },
}));

export default function HRContents() {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.content}>
        {/* <Grid container spacing={5} style={{
          padding: 10
        }}>

          <Grid item>
            <Paper className={classes.budgetTracking}>
              <Level />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.budgetTracking}>
              <TotalUsers />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.budgetTracking}>
              <TasksProgress />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.budgetTracking}>
              <Level />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.budgetTracking}>
              <Level />
            </Paper>
          </Grid>
        </Grid> */}
        <UserList />
      </main>

    </div>
  );
}
