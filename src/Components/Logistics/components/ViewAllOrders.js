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

const styles = (theme) => ({
  table: {
    maxHeight: 100,
  },
  tableRow: {
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
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  componentDidMount() {
    this.props.getOrders();
  }
  handleClick = (order) => {
    this.props.updateStatus(
      order,
      {
        status: "Delivered",
      },
    )



  };
  render() {
    const { classes } = this.props;
    const issuedOrders = this.props.orders.filter((order) => { return order.status === "Issued" || order.status === "Delivered" })


    return (
      <>
        <Grid container xs={12} display='flex' justify='space-between'>
          <Grid item xs={6}>
            <Typography variant='h4' style={{
              marginTop: 30,
              marginLeft: 30
            }}>
              List Of Orders

            </Typography>

          </Grid>
          <Grid item xs={6}>
            <SearchBar search={this.search} updateSearch={this.updateSearch} />

          </Grid>

        </Grid>
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
                        {/* <TableCell align='center'>{order.status}</TableCell> */}

                        <TableCell align='center'>

                          {order.status === 'Delivered' ? (
                            < Typography >
                              {order.status}
                            </Typography>

                          )
                            :
                            (
                              <Button
                                style={{
                                  backgroundColor: '#11669F',
                                  color: '#FFFFFF'
                                }}
                                variant='contained'
                                onClick={() => this.handleClick(order.orderNumber)}
                              >
                                Deliver
                              </Button>
                            )
                          }

                        </TableCell>
                        <TableCell>
                          <Link
                            to={{
                              pathname: "./salesOrder",
                              state: { order: order.orderNumber, status: order.status },
                            }}>

                            <IconButton>
                              <VisibilityIcon />
                            </IconButton>
                          </Link>
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
  success: state.ordersReducer.success,

});

export default connect(mapStateToProps, { getOrders, updateStatus })(
  withStyles(styles)(ViewAllOrders)
);
