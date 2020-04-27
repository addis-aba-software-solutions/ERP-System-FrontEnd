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
  getStatus,
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
        // alert(status.order);
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
                              status: "Delivered",
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
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
});

export default connect(mapStateToProps, { getOrders, getStatus, updateStatus })(
  withStyles(styles)(ViewAllOrders)
);
