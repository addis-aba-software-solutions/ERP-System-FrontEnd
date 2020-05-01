import React, { Component } from "react";
import {
  Button,
  Divider,
  Typography,
  Grid,
  withStyles,
  Paper,
  IconButton
} from "@material-ui/core";
import SearchBar from "../../SearchBar/SearchBar";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getItems, deleteItem } from "../../../store/inventory/action";
import { connect } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';


const styles = (theme) => ({
  table: {
    // minWidth: 650,
    padding: 20,
  },
  tableRow: {
    // minWidth: 650,
    padding: 15,
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

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.container}>
          <Grid container xs={12} display='flex' justify='space-between'>
            <Grid item xs={6}>
              <Typography variant='h4' style={{
                marginTop: 30,
                marginLeft: 30
              }}>
                List of Items (Inventory Status)

            </Typography>

            </Grid>
            <Grid item xs={6}>
              <SearchBar search={this.search} updateSearch={this.updateSearch} />

            </Grid>

          </Grid>
          <div></div>
          <Divider className={classes.spacer}></Divider>
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
                      <b>Category</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Action</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.items ? this.props.items.map((item) => (
                    <TableRow key={item.InventoryItemId}>
                      <TableCell align="left">
                        {item.InventoryItemId}
                      </TableCell>
                      <TableCell align="left">{item.itemName}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{item.retailPrice}</TableCell>
                      <TableCell align="right">{item.packaging}</TableCell>
                      <TableCell align="right">{item.warehouseName}</TableCell>
                      <TableCell align="right">{item.discount}</TableCell>
                      <TableCell align="right">{item.catagory}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          onClick={this.props.deleteItem.bind(
                            this,
                            item.InventoryItemId
                          )}
                          className={classes.button}
                        >
                          <DeleteIcon color='secondary' />
                        </IconButton>

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
  items: state.inventoryReducer.items,
  errors: state.inventoryReducer.errors,
});

export default connect(mapStateToProps, { getItems, deleteItem })(
  withStyles(styles)(ItemList)
);
