import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import history from '../../../Routes/history'
import axios from 'axios'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { withStyles, Box, Divider } from '@material-ui/core';

import { Form } from 'react-bootstrap'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 'auto',
      maxWidth: 1000,
      marginTop: 150,
      marginLeft: 'auto',
      marginRight: 'auto',
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
    display: 'flex',
    justifyContent: 'flex-end',
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
      orderInfo: [],
      item: [],
      comp: [],
      newOrderInfo: {
        orderNumber: '',
        orderName: '',
        quantity: '',
        description: '',
        orderDate: '',
        discount: '',
        salesPerson: '',
        item: '',
        shipmentAddress: '',
      },
      form: '',
      items: [{form: ''}],

    }
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    fetch("http://192.168.1.10:8000/api/v1/item/")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({ item: data });

      })
    fetch("http://192.168.1.10:8000/api/v1/company/")
      .then(res => res.json())
      .then(data => {
        console.log(data);


        this.setState({ comp: data });

      })


  }

  submit = () => {
    // submit() {
    // let url = "http://192.168.1.3:8001/api/v1/employe/";
    // let data = this.state;
    //let date = this.state;
    // 
    // fetch(url, {
    // method: 'POST',
    // headers: {
    // "Content-Type": "application/json",
    // "Accept": "application/json"
    // },
    // body: JSON.stringify
    //(data) 
    // ({
    //   employeId: null,
    //   firstName: e.target.firstName.value,
    //   lastName:e.target.lastName.value,
    //   email:e.target.email.value,
    //   hiredDate:e.target.hiredDate.value,
    //   telephone:e.target.telephone.value,
    //   birthDate:e.target.birthDate.value,
    //   country:e.target.country.value,
    //   region:e.target.region.value,
    //   city:e.target.city.value,
    //   department:e.target.department.value,
    //   termOfEmployment:e.target.termOfEmployment.value,
    //   //salery:e.target.salery.value

    // })
    // }).then(res => res.json())
    //.then((result) => {
    //  alert(result);
    //         },
    //     (error)=>{
    //    alert("failed")
    //  }
    //)

    // console.log("resp", resp)
    // alert("data is submitted")
    // Swal.fire({
    // position: 'top-end',
    // icon: 'success',
    // title: 'Registered',
    // showConfirmButton: false,
    // timer: 700
    // }).then(history.push('/Production'))
    // })
    // })
    axios.post('http://192.168.1.5:8000/api/v1/order/',
      this.state.newOrderInfo)
      .then((response) => {

        let { employeeInfo } = this.state;
        employeeInfo.push(response.data);
        this.setState({
          employeeInfo,
          newOrderInfo: {
            orderNumber: '',
            orderName: '',
            quantity: '',
            description: '',
            orderDate: '',
            discount: '',
            salesPerson: '',
            //item: '',
            items: {
              itemName: '',
              quantity: ''
            },
            shipmentAddress: ''
            //salery:''
          }
          // items:{
          //   itemName:'',
          //   quantity:""
          // }
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registered',
          showConfirmButton: false,
          timer: 700
        }).then(history.push('/ViewAllOrder'))
      })
  }


  handleAddItem = () => {
    this.setState({
      items: this.state.items.concat([{ item: "" }])
    });
  };

  handleRemoveItem = idx => () => {
    this.setState({
      items: this.state.items.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    


    const { classes } = this.props

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
                <Box style={{
                  height: 10
                }}>

                </Box>
                <Typography variant="h6" gutterBottom>
                  Order Creation
            </Typography>
                <Divider></Divider>
                <Grid container xs={12} display="flex" justify="space-between" style={{
                  paddingLeft: 40, marginTop: 10
                }} spacing={4}>
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
                        value={this.state.newOrderInfo.orderName}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.orderName = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
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
                        value={this.state.newOrderInfo.orderNumber}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.orderNumber = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="grouped-native-select">Item</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                          <option aria-label="None" value="" />
                          <option >Permanent</option>
                          <option >Contract</option>
                          <option >Hourly</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="grouped-native-select">Company</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                          <option aria-label="None" value="" />
                          <option >Permanent</option>
                          <option >Contract</option>
                          <option >Hourly</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="salesPerson"
                        name="salesPerson"
                        label="Sales Person"
                        fullWidth
                        autoComplete="salesPerson"
                        value={this.state.newOrderInfo.salesPerson}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.salesPerson = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
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
                        value={this.state.newOrderInfo.shipmentAddress}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.shipmentAddress = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
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
                        value={this.state.newOrderInfo.quantity}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.quantity = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={7}>
                      <TextField
                        required
                        id="orderDate"
                        name="orderDate"
                        label="Order Date"
                        fullWidth
                        autoComplete="orderDate"
                        value={this.state.newOrderInfo.orderDate}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.orderDate = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        id="Description"
                        name="Description"
                        label="Description"
                        // rowsMax= '12'
                        multiline
                        fullWidth
                        autoComplete="quantity"
                        value={this.state.newOrderInfo.description}
                        onChange={(e) => {
                          let { newOrderInfo } = this.state;
                          newOrderInfo.description = e.target.value;
                          this.setState({ newOrderInfo });
                        }}
                      />
                    </Grid>
                  </Grid>



                  <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <Typography variant="h6" gutterBottom>
                        <b>Item Information </b>
                      </Typography>
                    </Grid>





                    {this.state.items.map((item, idx) => (
                      <>
                     <Grid item xs={12} sm={12}>
                      <Typography variant="h8" gutterBottom>
                        Item {idx+1}
            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel htmlFor="grouped-native-select">Item Name</InputLabel>
                        <Select native defaultValue="" id="grouped-native-select">
                          <option aria-label="None" value="" />
                          <option >Permanent</option>
                          <option >Contract</option>
                          <option >Hourly</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="ItemQuantity"
                        name="ItemQuantity"
                        label="Item Quantity"
                        fullWidth
                        autoComplete="itemQuantity"
                      />
                    </Grid> 
                    </>
        ))}





                    <Grid xs={12} sm={12} display='flex' justify='space-between' >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.submit}
                        className={classes.button}
                      >
                        Clear
                   </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        // onClick={this.submit}
                        onClick={this.handleAddItem}
                        className={classes.button}
                      >
                        Add Another Item
                   </Button>
                    </Grid>
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
    )
  }
}


export default withStyles(styles)(CreateOrder);
