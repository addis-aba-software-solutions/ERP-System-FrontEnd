import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import LatestSales from './LatestSales';
import Budget from './Budget/Budget';
import TotalUsers from './Budget/TotalUsers';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TasksProgress from './Budget/TasksProgress';
import Container from '@material-ui/core/Container';
import Blah from './Budget/blah';
import Blah2 from './Budget/blah2';



const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  difference: {
    marginLeft: 90,
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: "#00970F",
  },
  differenceValue: {
    color: "#00970F",
    marginRight: 10
  },
  budgetTracking: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    width: 250,
    borderRadius: 20
  },
  toolbar: {

    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
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

export default function HomeNavBar() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>

      <main>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}
            >

              <Typography style={{
                fontSize: 20,
                color: '#818181',
              }}>
                Sales Dashboard
              </Typography>

            </Grid>

            <Grid item xs={4}>
              <Grid container>
                <Typography align='right' style={{
                  fontSize: 20,
                  color: '#818181',
                  paddingRight: 10
                }}>
                  Total Sale :
              </Typography>
                <Typography align='right' style={{
                  fontSize: 20,
                  color: '#000000',
                }}>
                  7,465,363.5 ETB
              </Typography>

              </Grid>
              <Grid style={{
                paddingLeft: 100
              }} container>
                <Grid >
                  <ArrowUpwardIcon className={classes.differenceIcon} />

                </Grid>
                <Grid item>
                  <Typography
                    align='right'
                    className={classes.differenceValue}
                    variant="caption"
                  >
                    56%
                  </Typography>
                </Grid>
                <Grid item>

                  <Typography

                    className={classes.caption}
                    variant="caption"
                  >
                    Compared to Last Year
                  </Typography>


                </Grid>

              </Grid>

            </Grid>


            <Grid item xs={12} >

              <LatestSales />

            </Grid>

            <Grid item xs={12} >

              <Typography style={{
                fontSize: 20,
                color: '#818181',
              }}>
                Sales By Category
          </Typography>

            </Grid>

            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Budget />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.budgetTracking}>
                <TotalUsers />
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Blah />
              </Paper>
            </Grid>

            <Grid item>
              <Paper className={classes.budgetTracking}>
                <Blah2 />
              </Paper>
            </Grid>


            <Grid item xs={12} >

              <Typography style={{
                fontSize: 20,
                color: '#818181',
              }}>
                Weekly Sales
            </Typography>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12} md={1} lg={3}
            >
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>


    </div>
  );
}
