import React, { Component } from "react";
import {  withStyles, Paper } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import {  getStatus } from "../../../store/order/action";
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

class ViewAllStatus extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      status:[],
    };
  }
 

  componentDidMount() {
    this.props.getStatus();
  }

  

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.container}>
          <div>
            {/* <input placeholder="search" value={this.state.search} onChange={this.updateSearch.bind(this)} /> */}
              <Paper className={classes.paper}> 
              <TableContainer>
                <Table stickyHeader aral-label ="sticky table">
                  <TableHead>
                    <TableRow className ={classes.table}>
                      <TableCell>Status</TableCell>
                    </TableRow>
                    <TableBody>
                      {this.props.status.map((status) => (
                        <TableRow key={status.orderNumber}>
                          <TableCell>{}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </TableHead>
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
  status: state.ordersReducer.status,
});

export default connect(mapStateToProps, { getStatus })(
  withStyles(styles)(ViewAllStatus)
);
