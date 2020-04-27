import React, { Component } from "react";
import { Button, withStyles, Paper, IconButton, Grid, Typography } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getOrders,
  updateStatus,
} from "../../../store/order/action";
import SearchBar from '../../SearchBar/SearchBar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import VisibilityIcon from '@material-ui/icons/Visibility';




const styles = (theme) => ({
  table: {
    maxHeight: 100,
    // padding: 20
  },
  tableRow: {
    // padding: 15
  },
  container: {
    padding: 20,
  },
  paper: {
    padding: 10,
    height: "auto",
    borderRadius: 20,
  },
  spacer: {
    margin: 20,
  },
  recentitems: {
    padding: 20,
    paddingBottom: 20,
  },
  header: {
    marginLeft: 100,
  },
});

class ViewAllOrders extends Component {
  
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { classes } = this.props;
<<<<<<< HEAD
    
=======
>>>>>>> 01b49c7f5e4c2902c229b50fc8804b85616a3d76

    return (
      <>
        <SearchBar />
        <div className={classes.container}>
<<<<<<< HEAD
          <div>
            <Button variant="contained">
              {" "}
              <Link to="/create_Order">Add New Order</Link>
            </Button>
            <br />

            <Paper className={classes.paper}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow className={classes.table}>
                      <TableCell>Order Number</TableCell>
                      <TableCell>Order Name</TableCell>

                      <TableCell>Description</TableCell>
                      <TableCell>Company</TableCell>
                      <TableCell>Sales Person</TableCell>
                      <TableCell>Shipment Address</TableCell>
                      <TableCell>Order Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.orders?this.props.orders.map((order) => (
                      <TableRow key={order.orderNumber}>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell>{order.orderName}</TableCell>
                        <TableCell>{order.description}</TableCell>
                        <TableCell>{order.company}</TableCell>
                        <TableCell>{order.salesPerson}</TableCell>
                        <TableCell>{order.shipmentAddress}</TableCell>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>{order.status}</TableCell>

                        <TableCell>
                          <button
                            onClick={this.props.updateStatus.bind(
                              this,
                              order.orderNumber,
                              {
                                status: "Delivered",
                              },
                            )}
                          >
                            Delivered
                          </button>
                        </TableCell>
                      </TableRow>
                    )):""}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
=======


          <Paper className={classes.paper}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.table}>
                    <TableCell><b>Order #</b></TableCell>
                    <TableCell><b>Order Name</b></TableCell>

                    <TableCell align='center'><b>Company</b></TableCell>
                    <TableCell align='center'><b>Sales Person</b></TableCell>
                    <TableCell align='center'><b>Shipment Address</b></TableCell>
                    <TableCell align='center'><b>Order Date</b></TableCell>
                    <TableCell align='center'><b>Status</b></TableCell>
                    <TableCell align='center'><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.orders.map((order) => (
                    <TableRow key={order.orderNumber}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell>{order.orderName}</TableCell>
                      <TableCell align='center'>{order.company}</TableCell>
                      <TableCell align='center'>{order.salesPerson}</TableCell>
                      <TableCell align='center'>{order.shipmentAddress}</TableCell>
                      <TableCell align='center'>{order.orderDate}</TableCell>


                      <TableCell align='center'>
                        <IconButton
                          onClick={this.props.updateStatus.bind(
                            this,
                            order.orderNumber,
                            {
                              status: "Delievered",
                            },
                          )}
                        >
                          <Grid container spacing={1}>
                            <Grid item>
                              <DoneAllIcon />
                            </Grid>
                            <Grid item >
                              <Typography variant='caption'>
                                Delievered
                              </Typography>

                            </Grid>

                          </Grid>
                        </IconButton>
                      </TableCell>
                      <TableCell align='center'>
                        <IconButton>
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
>>>>>>> 01b49c7f5e4c2902c229b50fc8804b85616a3d76
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
});

export default connect(mapStateToProps, { getOrders,updateStatus })(
  withStyles(styles)(ViewAllOrders)
);
