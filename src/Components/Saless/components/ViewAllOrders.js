import React, { Component } from "react";
import { Button, withStyles, Paper } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders } from "../../../store/order/action";
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

    return (
      <>
        <div className={classes.container}>
          <div>
            <Button variant="contained">
              {" "}
              <Link to="/create_Order">Add New Order</Link>
            </Button>
            <br />
            {/* <input placeholder="search" value={this.state.search} onChange={this.updateSearch.bind(this)} /> */}

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
                      </TableRow>
                    )):""}
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

export default connect(mapStateToProps, { getOrders })(
  withStyles(styles)(ViewAllOrders)
);
