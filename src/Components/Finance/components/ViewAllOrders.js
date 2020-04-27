import React, { Component } from "react";
import { Button, withStyles, Paper, Typography, Grid } from "@material-ui/core";

import { Table, IconButton } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, getStatus } from "../../../store/order/action";
import PrintIcon from "@material-ui/icons/Print";
import SearchBar from '../../SearchBar/SearchBar'

const styles = (theme) => ({
  table: {
    maxHeight: 100,
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
  constructor() {
    super();
    this.state = {
      search: "",
      orders: [],
    };
    this.orderStatus = this.orderStatus.bind(this);
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

  componentDidMount() {
    this.props.getOrders();
    this.props.getStatus();
  }

  orderStatus = (orderNumber, i) => {
    this.props.status.find((status) => {
      let orderstatus = "";
      if (status.order === orderNumber) {
        orderstatus = status.order;
      }
      return orderstatus;
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <SearchBar />
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow className={classes.table}>
                    <TableCell>Order Number</TableCell>
                    <TableCell>Order Name</TableCell>
                    <TableCell align='center'>Company</TableCell>
                    <TableCell align='center'>Sales Person</TableCell>
                    <TableCell align='center'>Shipment Address</TableCell>
                    <TableCell align='center'>Order Date</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.orders.map((order) => (
                    <TableRow key={order.orderNumber}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell >{order.orderName}</TableCell>
                      <TableCell align='center'>{order.company}</TableCell>
                      <TableCell align='center'>{order.salesPerson}</TableCell>
                      <TableCell align='center' >{order.shipmentAddress}</TableCell>
                      <TableCell align='center'>{order.orderDate}</TableCell>
                      <TableCell align='center'>
                        {/* {this.orderStatus(order.orderNumber)} */}
                        {order.orderDate}
                      </TableCell>
                      <TableCell align='right'>
                        <IconButton>
                          <Link
                            to={{
                              pathname: "/invoice",
                              state: { order: order.orderNumber },
                            }}>
                            <Grid container>
                              <Grid item>
                                <IconButton>
                                  <PrintIcon style={{
                                    // color: '#E8E8E8'
                                  }} />
                                </IconButton>
                              </Grid>
                              <Grid item style={{
                                marginTop: 5
                              }}>
                                <Typography variant='caption' style={{
                                  color: '#686868'
                                }}>
                                  Generate Invoice
                              </Typography>
                              </Grid>
                            </Grid>
                          </Link>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
});

export default connect(mapStateToProps, { getOrders, getStatus })(
  withStyles(styles)(ViewAllOrders)
);
