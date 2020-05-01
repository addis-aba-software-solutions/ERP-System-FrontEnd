import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import Deposits from './Deposits';
import LatestSales from './LatestSales';
import Budget from './Budget/Budget';
import TotalUsers from './Budget/TotalUsers';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TasksProgress from './Budget/TasksProgress';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Blah from './Budget/Blah';
import Blah2 from './Budget/Blah2';


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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
  ];


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
                Finance Dashboard
              </Typography>

            </Grid>

            <Grid item xs={4} style={{
              // marginLeft: 100
            }}>
              <Grid container>
                <Typography align='right' style={{
                  fontSize: 20,
                  color: '#818181',
                  paddingRight: 10
                }}>
                  Cash Balance :
              </Typography>
                <Typography align='right' style={{
                  fontSize: 20,
                  color: '#000000',
                  // marginLeft: 50
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
                    In
                  </Typography>
                </Grid>
                <Grid item>

                  <Typography

                    className={classes.caption}
                    variant="body2"
                  >
                    6,476.00 ETB
                  </Typography>


                </Grid>

              </Grid>

              <Grid style={{
                paddingLeft: 100
              }} container>
                <Grid >
                  <ArrowDownwardIcon className={classes.differenceIcon} />

                </Grid>
                <Grid item>
                  <Typography
                    align='right'
                    className={classes.differenceValue}
                    variant="caption"
                  >
                    Out
                  </Typography>
                </Grid>
                <Grid item>

                  <Typography

                    className={classes.caption}
                    variant="body2"
                  >
                    2,476.00 ETB
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
                Follow-ups
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
                Reccuring Accounts
            </Typography>

            </Grid>
            <TableContainer style={{ maxHeight: 1000, padding: 20, borderRadius: 20 }} component={Paper}>
              <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Client ID</TableCell>
                    <TableCell align="right">Client Name</TableCell>
                    <TableCell align="right">Client Account</TableCell>
                    <TableCell align="right">Something</TableCell>
                    <TableCell align="right">Something</TableCell>
                    <TableCell align="right">Actions</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>
                        #
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">
                        <VisibilityIcon />
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Container>
      </main>


    </div>
  );
}
