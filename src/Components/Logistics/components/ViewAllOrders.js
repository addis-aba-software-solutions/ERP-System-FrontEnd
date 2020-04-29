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
import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneAllIcon from '@material-ui/icons/DoneAll';




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
    const issuedOrders = this.props.orders.filter((order) => { return order.status === "Issued" || order.status === "Delivered" })


    return (
      <>
        <SearchBar />
        <div className={classes.container}>
          <div>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow className={classes.table}>
                      <TableCell><b>Order Number</b></TableCell>

                      <TableCell align='center'><b>Company</b></TableCell>
                      <TableCell align='center'><b>Sales Person</b></TableCell>
                      <TableCell align='center'><b>Shipment Address</b></TableCell>
                      <TableCell align='center'><b>Order Date</b></TableCell>
                      <TableCell align='center'><b>Status</b></TableCell>
                      <TableCell align='center'><b>Action</b></TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {issuedOrders ? issuedOrders.map((order) => (
                      <TableRow key={order.orderNumber}>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell align='center'>{order.company}</TableCell>
                        <TableCell align='center'>{order.salesPerson}</TableCell>
                        <TableCell align='center'>{order.shipmentAddress}</TableCell>
                        <TableCell align='center'>{order.orderDate}</TableCell>
                        <TableCell align='center'>{order.status}</TableCell>

                        <TableCell align='center'>
                          {order.status === "Delivered" ? (
                            <Link
                              to={{
                                pathname: "./salesOrder",
                                state: { order: order.orderNumber, },
                              }}>

                              <IconButton>
                                <VisibilityIcon />
                              </IconButton>
                            </Link>
                          ) :
                            (
                              <Button
                                style={{
                                  backgroundColor: '#00970F',
                                  color: '#FFFFFF'
                                }}
                                variant='contained'
                                onClick={this.props.updateStatus.bind(
                                  this,
                                  order.orderNumber,
                                  {
                                    status: "Delivered",
                                  },
                                )}
                              >
                                Deliver
                              </Button>
                            )
                          }
                        </TableCell>

                      </TableRow>
                    )) : ""}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
});

export default connect(mapStateToProps, { getOrders, updateStatus })(
  withStyles(styles)(ViewAllOrders)
);
