import React, { Component } from "react";
import {
  Button,
  withStyles,
  IconButton,
  Grid,
  Paper,
  Typography,
  Box
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, getStatus } from "../../../store/order/action";
import ViewAllStatus from "./ViewAllStatus";
import VisibilityIcon from "@material-ui/icons/Visibility";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import SaveIcon from "@material-ui/icons/Save";


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
      status: [],
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
    // this.props.getStatus();
  }

  orderStatus = (orderNumber) => {
    alert(orderNumber);
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
    //    if(!orderInfo) return [];
    //    else {
    //         let filteredOrder = this.orderInfo.filter(
    //             (orderInfos) => {
    //                 return orderInfos.item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //             }
    //         );
    //     }

    return (
      <>
        <div className={classes.container}>
          <div>
            {/* <Button variant="contained">
              {" "}
              <Link to="/create_Order">Add New Order</Link>
            </Button> */}
            <Link to="/create_Order">
              <Button
                variant="contained"
                size="large"
                style={{
                  backgroundColor: "#11669F",
                  color: "#FFFFFF",
                  marginLeft: 10
                }}
                className={classes.button}
                startIcon={<SaveIcon style={{ color: "#FFFFFF" }} />}
              >
                Add New Order
              </Button>
            </Link>
            <Box style={{ height: 10}}/>

            <Paper className={classes.paper}>
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Order #</b>
                      </TableCell>
                      <TableCell>
                        <b>Order Name</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Company</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Sales Person</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Shipment Address</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Order Date</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Status</b>
                      </TableCell>
                      <TableCell align="center">
                        <b>Actions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.orders.map((order) => (
                      <TableRow key={order.orderNumber}>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell>{order.orderName}</TableCell>
                        <TableCell align="center">{order.company}</TableCell>
                        <TableCell align="center">
                          {order.salesPerson}
                        </TableCell>
                        <TableCell align="center">
                          {order.shipmentAddress}
                        </TableCell>
                        <TableCell align="center">{order.orderDate}</TableCell>
                        <TableCell align="center">
                          <IconButton>
                            <Grid container spacing={2}>
                              <Grid item>
                                <UnarchiveIcon />
                              </Grid>
                              <Grid item>
                                <Typography>Issued</Typography>
                              </Grid>
                            </Grid>
                          </IconButton>
                        </TableCell>

                        <TableCell align="center">
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
