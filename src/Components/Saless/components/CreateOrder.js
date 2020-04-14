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
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { withStyles } from '@material-ui/core/styles';

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
      width: 600,
      marginTop: 150,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
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
        shipmentAddress: ''
        //salery:''


      }
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
    axios.post('http://192.168.1.9:8000/api/v1/order/',
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
            item: '',
            shipmentAddress: ''
            //salery:''


          }
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


              <React.Fragment>

                <Typography variant="h6" gutterBottom>
                  Order Creation
            </Typography>
                <Grid container spacing={3}>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="orderName"
                      name="orderName"
                      label="item Name"
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
                  <Form.Group controlId="item">
                    <Form.Label>item</Form.Label>
                    <Form.Control as="select">
                      {this.state.item.map(items =>
                        <option key={items.itemId}>{items.itemName}</option>
                      )}
                        value={this.state.newOrderInfo.item}
                        onChange={(e) => {
                        let { newOrderInfo } = this.state;
                        newOrderInfo.item = e.target.value;
                        this.setState({ newOrderInfo });
                      }}
                    </Form.Control>

                  </Form.Group>
                  
                  <Form.Group controlId="company">
                    <Form.Label>company</Form.Label>

                    <Form.Control as="select">
                      {this.state.comp.map(companys =>
                        <option key={companys.companyId}>{companys.companyName}</option>
                      )}
                        value={this.state.newOrderInfo.company}
                        onChange={(e) => {
                        let { newOrderInfo } = this.state;
                        newOrderInfo.company = e.target.value;
                        this.setState({ newOrderInfo });
                      }}
                    </Form.Control>

                  </Form.Group>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="salesPerson"
                      name="salesPerson"
                      label="salesPerson"
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

                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="quantity"
                      name="quantity"
                      label="quantity"
                      fullWidth
                      autoComplete="quantity"
                      value={this.state.newOrderInfo.quantity}
                      onChange={(e) => {
                        let { newOrderInfo } = this.state;
                        newOrderInfo.quantity = e.target.value;
                        this.setState({ newOrderInfo });
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="shipmentAddress"
                      name="shipmentAddress"
                      label="shipmentAddress"
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
                  <Grid item xs={12} sm={3}>
                    <TextField
                      required
                      id="orderDate"
                      name="orderDate"
                      label="orderDate"
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
                </Grid>

                <div style={{
                  paddingTop: 20
                }}>
                  <Typography variant="h6" gutterBottom>
                    Item Information
         </Typography>
                </div>


                <div style={{
                  paddingTop: 20
                }}>
                  <Typography variant="h6" gutterBottom>
                    Item Information Goes Here
         </Typography>
                </div>


                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  Order
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
