import React, { Component } from "react";
import { withStyles, Grid, Typography, Paper } from "@material-ui/core";

import { Table, IconButton } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { getOrders } from "../../../store/order/action";
import { getInvoice } from "../../../store/Invoice/action";
import Invoice from "./INVOICE";
import PrintIcon from "@material-ui/icons/Print";
import { PDFDownloadLink } from "@react-pdf/renderer"
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
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      order: '',
    }


  }

  handlePrint = (order) => {
    this.props.getInvoice(order)
    this.setState({
      show: true,
      order: order
    })
  }
  componentDidMount() {
    this.props.getOrders();

  }


  render() {
    const { classes } = this.props;
    const deliveredOrders = this.props.orders ? this.props.orders.filter((order) => {
      console.log(order.status);

      return (order.status === "Delivered") || (order.status === "Invoiced")
    }) : "";

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
                    <TableCell align='center'>Company</TableCell>
                    <TableCell align='center'>Sales Person</TableCell>
                    <TableCell align='center'>Shipment Address</TableCell>
                    <TableCell align='center'>Order Date</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {deliveredOrders ? deliveredOrders.map((order) => (
                    <TableRow key={order.orderNumber}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell align='center'>{order.company}</TableCell>
                      <TableCell align='center'>{order.salesPerson}</TableCell>
                      <TableCell align='center'>{order.shipmentAddress}</TableCell>
                      <TableCell align='center'>{order.orderDate}</TableCell>
                      <TableCell align='center'>
                        {order.status}
                      </TableCell>

                      <TableCell align='center'>
                        <Grid container spacing={2}>
                          <Grid item>


                            {this.state.show && this.state.order === order.orderNumber && this.props.invoices ? <PDFDownloadLink
                              document={<Invoice data={this.props.invoices} invoice_item={this.props.invoice_item} />}
                              fileName={`order_${order.orderNumber}.pdf`}
                              style={{
                                textDecoration: "none",
                                padding: "10px",
                                color: "#456456",
                                backgroundColor: "#f2f2f2",
                                border: "1px solid #4a4a4a"
                              }}
                            >
                              Download Pdf
                            </PDFDownloadLink> : <button onClick={() => this.handlePrint(order.orderNumber)} >Print</button>
                            }
                          </Grid>
                          <Grid item>
                            <Typography variant='caption'>
                              Generate Invoice
                            </Typography>
                          </Grid>
                        </Grid>
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
  invoices: state.invoiceReducer.invoices,
  invoice_item: state.invoiceReducer.invoice_item,
});

export default connect(mapStateToProps, { getOrders, getInvoice })(
  withStyles(styles)(ViewAllOrders)
);
