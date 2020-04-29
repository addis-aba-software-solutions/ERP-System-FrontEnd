import React, { Component } from "react";
import { Button, withStyles, IconButton, Card } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders } from "../../../store/order/action";
import SearchBar from '../../SearchBar/SearchBar';
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
const styles = (theme) => ({
  table: {
    maxHeight: 800,
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
  button: {
    marginBottom: 10
  }
});

class ViewAllOrders extends Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <SearchBar />
        <div className={classes.container}>
          <div>
            <Link to="/create_Order" style={{
              padding: 30,
            }}>

              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: '#11669F',
                  color: '#FFFFFF'
                }}
                className={classes.button}
                startIcon={<SaveIcon style={{
                  color: '#FFFFFF'
                }} />}
              >
                Create An Order
              </Button>
            </Link>


            <Card className={classes.paper}>
              <TableContainer className={classes.table}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow className={classes.table}>
                      <TableCell> <b>Order Number</b></TableCell>

                      <TableCell><b>Company</b></TableCell>
                      <TableCell><b>Sales Person</b></TableCell>
                      <TableCell><b>Shipment Address</b></TableCell>
                      <TableCell><b>Order Date</b></TableCell>
                      <TableCell><b>Status</b></TableCell>
                      <TableCell><b>Actions</b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.orders ? this.props.orders.map((order) => (
                      <TableRow key={order.orderNumber}>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell>{order.company}</TableCell>
                        <TableCell>{order.salesPerson}</TableCell>
                        <TableCell>{order.shipmentAddress}</TableCell>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell>
                          <Link
                            to={{
                              pathname: "./salesOrder",
                              state: { order: order.orderNumber, },
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
            </Card>
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
