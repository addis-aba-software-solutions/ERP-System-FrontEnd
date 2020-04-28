import React, { Component } from "react";
import { Button, withStyles, Paper, IconButton, Typography, Grid } from "@material-ui/core";

import {Table} from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrders, getStatus } from "../../../store/order/action";
import getSiv  from "../../../store/Siv/action";
import PrintIcon from "@material-ui/icons/Print";
import SearchBar from '../../SearchBar/SearchBar'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SIV from './Printable_SIV';
import { PDFDownloadLink } from "@react-pdf/renderer";
import AutorenewIcon from "@material-ui/icons/Autorenew";



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

  render() {
    const { classes } = this.props;

    return (
      <>
        <SearchBar />
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow className={classes.table}>
                    <TableCell>Order #</TableCell>
                    <TableCell>Order Name</TableCell>

                    <TableCell>Company</TableCell>
                    <TableCell>Sales Person</TableCell>
                    <TableCell>Shipment Address</TableCell>
                    <TableCell>Order Date</TableCell>
                    <TableCell align='center'>Status</TableCell>
                    <TableCell align='center'>Action</TableCell>
                  </TableRow>
                </TableHead>
                


                      {/* <TableCell align="center">
                        <IconButton>
                          <Grid container spacing={2}>
                            <Grid item>
                              <PDFDownloadLink
                                document={<SIV />}
                                fileName="SIV.pdf"
                                style={{
                                  textDecoration: "none",
                                  padding: "10px",
                                  color: "#4a4a4a",
                                }}
                              >
                                {({ loading }) =>
                                  loading ? <AutorenewIcon /> : <PrintIcon />
                                }
                              </PDFDownloadLink>


                            </Grid>
                            <Grid item>
                              <Typography variant='caption'>Generate SIV</Typography>
                            </Grid>
                          </Grid>
                        </IconButton>
                      </TableCell> */}
                    
                  <TableBody>
                    {this.props.ordrs?this.props.orders.map((order) => (
                      <TableRow key={order.orderNumber}>
                        <TableCell>{order.orderNumber}</TableCell>
                        <TableCell>{order.orderName}</TableCell>
                        <TableCell>{order.description}</TableCell>
                        <TableCell>{order.company}</TableCell>
                        <TableCell>{order.salesPerson}</TableCell>
                        <TableCell>{order.shipmentAddress}</TableCell>
                        <TableCell>{order.orderDate}</TableCell>
                        <TableCell>
                          {order.status}
                        </TableCell>

                        <TableCell>
                          <IconButton>
                            <Link
                              to={{
                                pathname: "/siv",
                                state: { order: order.orderNumber },
                              }}
                            >
                              <PrintIcon />
                            </Link>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )):""}
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

export default connect(mapStateToProps, { getOrders, getStatus, getSiv})(
  withStyles(styles)(ViewAllOrders)
);
