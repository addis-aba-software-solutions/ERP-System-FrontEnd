import React, { Component } from "react";
import { withStyles, Grid, Typography, Button, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
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
import { PDFDownloadLink } from "@react-pdf/renderer";
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchBar from '../../SearchBar/SearchBar';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import GetAppIcon from '@material-ui/icons/GetApp';
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

      return (order.status === "Delivered") || (order.status === "Invoiced")
    }) : "";

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
                    <TableCell align='center'>Generate invoice</TableCell>
                    <TableCell align='center'>Actions</TableCell>

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
                        {this.props.success && (this.state.order === order.orderNumber) && this.props.invoices ? <PDFDownloadLink
                          document={<Invoice data={this.props.invoices} invoice_item={this.props.invoice_item} />}
                          fileName={`order_${order.orderNumber}.pdf`}>
                          <IconButton style={{
                            color: '#11669F'
                          }}>
                            <Grid>
                              <GetAppIcon fontSize='large' />

                            </Grid>

                          </IconButton>
                        </PDFDownloadLink> :
                          <IconButton onClick={() => this.handlePrint(order.orderNumber)}>
                            <PrintIcon fontSize='large' />
                          </IconButton>

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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  status: state.ordersReducer.status,
  invoices: state.invoiceReducer.invoices,
  invoice_item: state.invoiceReducer.invoice_item,
  success: state.invoiceReducer.success,
});

export default connect(mapStateToProps, { getOrders, getInvoice })(
  withStyles(styles)(ViewAllOrders)
);
