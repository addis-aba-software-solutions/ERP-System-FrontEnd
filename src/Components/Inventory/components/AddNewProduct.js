import React, { Component } from "react";
import {
  Button,
  Divider,
  Typography,
  Grid,
  withStyles,
  Paper,
  IconButton,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import Error from "../../../error/error";
import API from "../../../api/API";
import { addItem, getItems } from "../../../store/inventory/action";
import { getInvoice } from "../../../store/Invoice/action";
import  {getSiv}  from "../../../store/Siv/action";
import VisibilityIcon from '@material-ui/icons/Visibility';



const styles = (theme) => ({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    // paddingBottom: 40,
    height: "auto",
  },
  paper: {
    padding: 60,
    height: "auto",
    borderRadius: 20,
    // minWidth: 400
  },
  spacer: {
    margin: 20,
  },
  recentOrders: {
    padding: 20,
  },
  topOrders: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 22,

    borderRadius: 20,
    width: "auto",
  },
});

class AddNewProduct extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      quantity: "",
      warehouseName: "",
      discount: "",
      retailPrice: "",
      packaging: "",
      catagoryValue: "",
      catagoryList: [],
      items: [],
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.catagoryDropDown = this.catagoryDropDown.bind(this);
  }

  componentDidMount() {
    axios
      .get(API + "catagory/")
      .then((response) => {
        this.setState({
          catagoryList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.props.getItems());
    this.props.getItems();
    // For checking the invoice is in the state
    this.props.getInvoice(2);
    this.props.getSiv(2);
  }
  catagoryDropDown(e) {
    this.setState({
      catagoryValue: e.target.value,
    });
  }
  submit = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      quantity: this.state.quantity,
      warehouseName: this.state.warehouseName,
      discount: this.state.discount,
      retailPrice: this.state.retailPrice,
      packaging: this.state.packaging,
      catagory: this.state.catagoryValue,
    };
    this.props.addItem(newItem);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      packaging,
      retailPrice,
      discount,
      warehouseName,
      quantity,
      catagoryValue,
      itemName,
    } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.recentOrders}>
        <React.Fragment>

          <Grid container>
            <Grid item>
              <div className={classes.container}>
                <Paper className={classes.paper}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      display: "flex",
                      justify: "flex-start",
                    }}
                  >
                    <b>Goods Recieving Voucher</b>
                  </Typography>
                  <Divider className={classes.spacer} />

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        id="itemName"
                        name="itemName"
                        label="item Name"
                        fullWidth
                        autoComplete="itemName"
                        value={itemName}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.itemName
                            ? this.props.errors.itemName
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}></Grid>

                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        fullWidth
                        autoComplete="quantity"
                        value={quantity}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.quantity
                            ? this.props.errors.quantity
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        id="warehouseName"
                        name="warehouseName"
                        label="warehouseName"
                        fullWidth
                        autoComplete="warehouseName"
                        value={warehouseName}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.warehouseName
                            ? this.props.errors.warehouseName
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        required
                        id="retailPrice"
                        name="retailPrice"
                        label="Retail Price"
                        fullWidth
                        autoComplete="retailPrice"
                        value={retailPrice}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.retailPrice
                            ? this.props.errors.retailPrice
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        required
                        id="packaging"
                        name="packaging"
                        label="Packaging"
                        fullWidth
                        value={packaging}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.packaging
                            ? this.props.errors.packaging
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="discount"
                        name="discount"
                        label="Discount"
                        fullWidth
                        autoComplete="Contract_Info"
                        value={discount}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.discount
                            ? this.props.errors.discount
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="grouped-native-select">
                          Category
                    </InputLabel>
                        <Select
                          onChange={this.catagoryDropDown}
                          value={catagoryValue}
                          native
                          id="grouped-native-select"
                        >
                          <option aria-label="None" value="" />
                          {this.state.catagoryList.map((catagoryLists) => (
                            <option
                              value={catagoryLists.catagoryId}
                              key={catagoryLists.catagoryId}
                            >
                              {catagoryLists.catagory}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <Error
                        error={
                          this.props.errors.catagory
                            ? this.props.errors.catagory
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.submit}
                        className={classes.button}
                      >
                        Save
                  </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </div>



            </Grid>

          </Grid>

          <div className={classes.recentOrders}>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                display: "flex",
              }}
            >
              Recently Added Items
            </Typography>
            {/* <RecentOrders /> */}


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
                        <b>Actions</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.items
                      .slice(0)
                      .reverse()
                      .map((item) => (
                        <TableRow key={item.InventoryItemId}>
                          <TableCell >
                            {item.InventoryItemId}
                          </TableCell>
                          <TableCell >{item.itemName}</TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
                          <TableCell align="right">
                            {item.retailPrice}
                          </TableCell>
                          <TableCell align="right">{item.packaging}</TableCell>
                          <TableCell align="right">
                            {item.warehouseName}
                          </TableCell>
                          <TableCell align="right">{item.discount}</TableCell>
                          <TableCell align="right">{item.catagory}</TableCell>
                          <TableCell align="right">
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
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.inventoryReducer.items,
  errors: state.errorsReducer.errors,
});

export default connect(mapStateToProps, {
  addItem,
  getItems,
  getInvoice,
  getSiv,
})(withStyles(styles)(AddNewProduct));
