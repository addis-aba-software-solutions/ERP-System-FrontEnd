import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";
import history from "../../../Routes/history";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { withStyles, IconButton, Box, Divider } from "@material-ui/core";
import actions from "./../../../store/sales/action";
import { connect } from "react-redux";
import Error from "../../../error/error";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "auto",
      maxWidth: 1000,
      marginTop: 150,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: 10,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    borderRadius: 10,
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    margin: 30,
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
  },
});

class CreateOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldName: "",
      orderNumber: "",
      orderName: "",
      company: "",
      description: "",
      orderDate: "",
      discount: "",
      salesPerson: "",
      itemQuantity: 0,
      itemName: "",
      item: "",
      // order_items: [],
      shipmentAddress: "",
      order_items: [{ itemName: "", quantity: "" }],

      form: "",
      items: [{ form: "" }],
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.ItemNameChange = this.ItemNameChange.bind(this);
    this.ItemQuantityChange = this.ItemQuantityChange.bind(this);
  }

  handleNameChange = (evt) => {
    this.setState({ itemName: evt.target.value });
  };
  handleAddItem = () => {
    this.setState({
      order_items: this.state.order_items.concat([
        { itemName: "", quantity: "" },
      ]),
    });
  };

  handleRemoveItem = (idx) => () => {
    this.setState({
      order_items: this.state.order_items.filter((s, sidx) => idx !== sidx),
    });
  };
  ItemNameChange = (idx) => (evt) => {
    console.log(this.state.order_items);
    const neworder_items = this.state.order_items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, itemName: evt.target.value };
    });

    this.setState({ order_items: neworder_items });
  };

  ItemQuantityChange = (idx) => (evt) => {
    const neworder_items = this.state.order_items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, quantity: evt.target.value };
    });

    this.setState({ order_items: neworder_items });
  };

  componentDidMount() {
    this.props.getAllCompany();
    this.props.getAllItem();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = () => {
    this.props.createOrder(this.state);
  };

  // handleAddItem = () => {
  //   if (
  //     this.state.itemName != "" &&
  //     this.state.itemQuantity != "" &&
  //     this.state.itemQuantity > 0
  //   ) {
  //     this.setState({
  //       order_items: this.state.order_items.concat([
  //         {
  //           itemName: this.state.itemName,
  //           itemQuantity: this.state.itemQuantity,
  //         },
  //       ]),
  //     });
  //     this.setState({
  //       itemName: "",
  //       itemQuantity: 0,
  //     });
  //     this.setState({
  //       items: this.state.items.concat([{ item: "" }]),
  //     });
  //   }
  // };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Sales
              </Typography>
              <Divider></Divider>
              <React.Fragment>
                <Box
                  style={{
                    height: 10,
                  }}
                ></Box>
                <Typography variant="h6" gutterBottom>
                  Order Creation
                </Typography>
                <Divider></Divider>
                <Grid
                  container
                  xs={12}
                  display="flex"
                  justify="space-between"
                  style={{
                    paddingLeft: 40,
                    marginTop: 10,
                  }}
                  spacing={4}
                >
                  <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h6" gutterBottom>
                        <b>Order Information</b>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <TextField
                        required
                        id="orderName"
                        name="orderName"
                        label="Order Name"
                        fullWidth
                        autoComplete="orderName"
                        value={this.state.orderName}
                        onChange={this.handleChange}
                      />

                      <Error
                        error={
                          this.props.errors.orderName
                            ? this.props.errors.orderName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="orderNumber"
                        name="orderNumber"
                        label="Order Number"
                        fullWidth
                        autoComplete="orderNumber"
                        value={this.state.orderNumber}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.orderNumber
                            ? this.props.errors.orderNumber
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="grouped-native-select">
                          Company
                        </InputLabel>
                        <Select
                          onChange={this.handleChange}
                          value={this.state.company}
                          native
                          name="company"
                          id="grouped-native-select"
                        >
                          <option aria-label="None" value="" />
                          {this.props.companys.map((comp) => (
                            <option value={comp.companyId}>
                              {comp.companyName}
                            </option>
                          ))}
                        </Select>
                      </FormControl>
                      <Error
                        error={
                          this.props.errors.company
                            ? this.props.errors.company
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="salesPerson"
                        name="salesPerson"
                        label="Sales Person"
                        fullWidth
                        autoComplete="salesPerson"
                        value={this.state.salesPerson}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.salesPerson
                            ? this.props.errors.salesPerson
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="shipmentAddress"
                        name="shipmentAddress"
                        label="Shipment Address"
                        fullWidth
                        autoComplete="shipmentAddress"
                        value={this.state.shipmentAddress}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.shipmentAddress
                            ? this.props.errors.shipmentAddress
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                      <TextField
                        required
                        id="quantity"
                        name="quantity"
                        label="Quantity"
                        fullWidth
                        disabled
                        autoComplete="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="Description"
                        name="description"
                        label="Description"
                        // rowsMax= '12'
                        multiline
                        fullWidth
                        autoComplete="quantity"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                      <Error
                        error={
                          this.props.errors.description
                            ? this.props.errors.description
                            : null
                        }
                      />
                    </Grid>
                  </Grid>

                  <Grid container xs={6}>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h6" gutterBottom>
                        <b>Item Information </b>
                      </Typography>

                      {this.state.order_items.map((item, idx) => (
                        <Grid container xs={12} sm={12} spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="grouped-native-select">
                              Item Name
                            </InputLabel>

                            <Select
                              value={item.itemName}
                              // name="itemName"
                              native
                              fullWidth
                              id="grouped-native-select"
                              onChange={this.ItemNameChange(idx)}
                            >
                              <option aria-label="None" value="" />
                              {this.props.items.map((_item) => (
                                <option value={_item.itemId}>
                                  {_item.itemName}
                                </option>
                              ))}
                            </Select>
                          </Grid>
                          <Grid item>
                            <Grid container xs={12}>

                              <Grid item xs={12} sm={11} style={{
                                marginTop: 3
                              }}>
                                <TextField
                                  required
                                  id="ItemQuantity"
                                  label="Item Quantity"
                                  fullWidth
                                  autoComplete="itemQuantity"
                                  value={item.quantity}
                                  onChange={this.ItemQuantityChange(idx)}
                                  placeholder={`Item #${idx + 1} name`}
                                />
                              </Grid>
                              <Grid item item xs={12} sm={1}>
                                <IconButton
                                  style={{
                                    marginTop: 20
                                  }}
                                  type="button"
                                  onClick={this.handleRemoveItem(idx)}
                                  className="small"
                                >
                                  <HighlightOffIcon color='secondary' />
                                </IconButton>
                              </Grid>
                            </Grid>


                          </Grid>

                        </Grid>
                      ))}

                      <Grid
                        xs={12}
                        sm={12}
                        display="flex"
                        justify="space-between"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.handleAddItem}
                          className={classes.button}
                        >
                          Add Another Item
                        </Button>
                      </Grid>
                    </Grid>
                    {/* {this.state.items.map((item, idx) => (
                      <>
                        <Grid item xs={12} sm={12}>
                          <Typography variant="h8" gutterBottom>
                            Item {idx + 1}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl
                            className={classes.formControl}
                            fullWidth
                          >
                            <InputLabel htmlFor="grouped-native-select">
                              Item Name
                            </InputLabel>
                            <Select
                              onChange={this.handleNameChange}
                              value={this.state.itemName}
                              // name="itemName"
                              native
                              id="grouped-native-select"
                            >
                              <option aria-label="None" value="" />
                              {this.props.items.map((item) => (
                                <option value={item.itemId}>
                                  {item.itemName}
                                </option>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="ItemQuantity"
                            name="itemQuantity"
                            label="Item Quantity"
                            fullWidth
                            autoComplete="itemQuantity"
                            onChange={this.handleChange}
                          />
                        </Grid>
                      </>
                    ))} */}
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  Place Order
                </Button>
              </React.Fragment>
            </Paper>
          </MuiPickersUtilsProvider>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.salesReducer.loading,
    errors: state.salesReducer.errors,
    items: state.salesReducer.items,
    companys: state.salesReducer.companys,
  };
}
const mapDispatchToProps = {
  createOrder: actions.createOrder,
  getAllItem: actions.getAllItem,
  getAllCompany: actions.getAllCompany,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CreateOrder));
