import React, { Component } from "react";
import {  withStyles, Paper } from "@material-ui/core";

import { Table, IconButton } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { getOrders } from "../../../store/order/action";
import Invoice from "./INVOICE";
import PrintIcon from "@material-ui/icons/Print";
import { PDFDownloadLink} from "@react-pdf/renderer"
import AutorenewIcon from "@material-ui/icons/Autorenew"
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
  
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

  componentDidMount() {
    this.props.getOrders();
  }


  render() {
    const { classes } = this.props;
    const deliveredOrders = this.props.orders?this.props.orders.filter((order) => {
      return order.status === "Delivered"}):"";
   
    
    
    

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
                            {/* <Grid container>
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
                            </Grid> */}
                  <TableBody>
                    {deliveredOrders?deliveredOrders.map((order) => (
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
                          
                            
                            <PDFDownloadLink  fileName ="invoice.pdf" style={
                              {
                                textDecoration:"none",
                                padding:"10px",
                                color:"#4a4a4a"
                              }
                            }>
                              {
                                ({loading})=> true?
                                 <AutorenewIcon/>:
                                <PrintIcon />
                              }
                              
                            </PDFDownloadLink>
                          
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
});

export default connect(mapStateToProps, { getOrders })(
  withStyles(styles)(ViewAllOrders)
);
