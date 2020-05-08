import React, { Component } from "react";
import { Button, withStyles, Paper, IconButton, Typography, Grid } from "@material-ui/core";

import { Table } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, getStatus } from "../../../store/order/action";
import { getSiv, updateSiv } from '../../../store/Siv/action';
import PrintIcon from "@material-ui/icons/Print";
import SearchBar from '../../SearchBar/SearchBar'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SIV from './Printable_SIV';
import { PDFDownloadLink } from "@react-pdf/renderer";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import DoneAllIcon from '@material-ui/icons/DoneAll';
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
    padding: 20,
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

  handleApprove = (order) => {

    this.props.updateSiv(order, {
      'sivStatus': 'Approved',
    })
    this.props.getSiv(order);
  };
  render() {
    const { classes } = this.props;
    const createdOrders = this.props.orders ? this.props.orders.filter((order) => { return order.status === "Created" || order.status === "Issued" }) : "";

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
        {/* <SearchBar /> */}
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <TableContainer style={{
              height: 900
            }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow className={classes.table}>
                    <TableCell><b>Order #</b></TableCell>
                    <TableCell><b>Company</b></TableCell>
                    <TableCell align='center'><b>Sales Person</b></TableCell>
                    <TableCell align='center'><b>Shipment Address</b></TableCell>
                    <TableCell align='center'><b>Order Date</b></TableCell>
                    <TableCell align='center'><b>Status</b></TableCell>
                    <TableCell align='center'><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {createdOrders ? createdOrders.map((order) => (
                    <TableRow key={order.orderNumber}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell>{order.company}</TableCell>
                      <TableCell align='center'>{order.salesPerson}</TableCell>
                      <TableCell align='center'>{order.shipmentAddress}</TableCell>
                      <TableCell align='center' >{order.orderDate}</TableCell>
                      {order.status === "Issued" ?
                        <TableCell align='center' style={{
                          color: '#00AF58'
                        }}>
                          <Link
                            to={{
                              pathname: "/siv",
                              state: { order: order.orderNumber },
                            }}
                          > <DoneAllIcon fontSize='large' /></Link>

                          <Typography variant='body2'>
                            SIV Issued
                            </Typography>
                        </TableCell>
                        : (


                          <TableCell align='center'>
                            <Button
                              style={{
                                backgroundColor: '#11669F',
                                color: '#FFFFFF'
                              }}
                              variant='contained'
                              onClick={() => this.handleApprove(order.orderNumber)}
                            >
                              Approve
                        </Button>

                          </TableCell>

                        )}
                      <TableCell>
                        <Link
                          to={{
                            pathname: "./salesOrder",
                            state: { order: order.orderNumber, status: order.status },
                          }}>

                          <IconButton>
                            <VisibilityRoundedIcon />
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

      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
  sivs: state.invoiceReducer.sivs,
  siv_item: state.invoiceReducer.siv_item,
});

export default connect(mapStateToProps, { getOrders, getStatus, getSiv, updateSiv })(
  withStyles(styles)(ViewAllOrders)
);
