import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core";
import { getItems } from "../../../store/inventory/action";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: 20,
  },
  container: {
    maxHeight: 440,
    borderRadius: 20,
    padding: 20,
  },
});

class RecentOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search: "",
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className={classes.table}>
                  <TableCell className={classes.table}>
                    <b>ID</b>
                  </TableCell>
                  <TableCell className={classes.table}>
                    <b>Item Name</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Quantity</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Retail Price</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Packaging</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Warehouse Name</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>Discount</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>catagory</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.items.map((item) => (
                  <TableRow key={item.InventoryItemId}>
                    <TableCell align="right">{item.InventoryItemId}</TableCell>
                    <TableCell align="right">{item.itemName}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.retailPrice}</TableCell>
                    <TableCell align="right">{item.packaging}</TableCell>
                    <TableCell align="right">{item.warehouseName}</TableCell>
                    <TableCell align="right">{item.discount}</TableCell>
                    <TableCell align="right">{item.catagory}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        >
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.inventoryReducer.items,
  errors: state.inventoryReducer.errors,
});

export default connect(mapStateToProps, { getItems })(
  withStyles(useStyles)(RecentOrders)
);
