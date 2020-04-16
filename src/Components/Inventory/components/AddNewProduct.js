
import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, IconButton, Card, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Form } from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Swal from 'sweetalert2';
//import history from '../../../../Routes/history'
const styles = theme => ({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    // paddingBottom: 40,
    height: 'auto'
  },
  paper: {
    padding: 60,
    height: 'auto',
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
    width: 'auto'
  }
});

class AddNewProduct extends React.Component {

  constructor() {
    super();
    this.state = {
      itemValue:'',
      wareValue:'',
      quantityValue:'',
      packValue:'',
      priceValue:'',
      discountValue:'',
      catagoryValue:'',
      
      itemInfo: [],
      cat: [],
      item: [],
      newItemInfo: {
        itemId: '',
        itemName: '',
        email: '',
        warehouseName: '',
        quantity: '',
        retailPrice: '',
        packaging: '',
        discount: '',
        catagory: ''


      }
    }
    this.itemChange=this.itemChange.bind(this);
    this.wareChange=this.wareChange.bind(this);
    this.quantityChange=this.quantityChange.bind(this);
    this.packChange=this.packChange.bind(this);
    this.priceChange=this.priceChange.bind(this);
    this.discountChange=this.discountChange.bind(this);
    this.catagoryChange=this.catagoryChange.bind(this);
    this.submit=this.submit.bind(this);

  
  }

  componentDidMount() {
    fetch("http://192.168.1.2:8000/api/v1/item/")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({ item: data });

      })
    fetch("http://192.168.1.2:8000/api/v1/catagory/")
      .then(res => res.json())
      .then(data => {
        console.log(data);


        this.setState({ cat: data });

      })


  }


  submit = () => {

    axios.post('http://192.168.1.2:8000/api/v1/item/', {
       
        //  itemId: '',
          itemName: this.state.itemValue,
          warehouseName:this.state.wareValue ,
          quantity: this.state.quantityValue,
          retailPrice: this.state.priceValue,
          packaging: this.state.packValue,
          discount: this.state.discountValue,
          catagory: this.state.catagoryValue


        })
   
       Swal.fire({
        position: 'top-end',
         icon: 'success',
         title: 'Registered',
         showConfirmButton: false,
         timer: 700
       })
      //  .then(history.push('/Production'))

    };
    
    itemChange(e) {
      this.setState({
        itemValue: e.target.value
      })
    }
    wareChange(e) {
      this.setState({
        wareValue: e.target.value
      })
    }
    quantityChange(e) {
      this.setState({
        quantityValue: e.target.value
      })
    }
    priceChange(e) {
      this.setState({
        priceValue: e.target.value
      })
    }
    packChange(e) {
      this.setState({
        packValue: e.target.value
      })
    }
    discountChange(e) {
      this.setState({
        discountValue: e.target.value
      })
    }
    catagoryChange(e) {
      this.setState({
        catagoryValue: e.target.value
      })
    }
  render() {
    const { classes } = this.props;
    const { error, itemInfo } = this.state;

    var itemValue = this.state.itemValue;
    var wareValue = this.state.wareValue;
    var quantityValue = this.state.quantityValue;
    var priceValue = this.state.priceValue;
    var packValue = this.state.packValue;
    var discountValue = this.state.discountValue;
    var catagoryValue = this.state.catagoryValue;
    const {  item, deps, rol, lev, empId } = this.state;


    return (
      <div className={classes.recentOrders}>
        <React.Fragment>

          <div className={classes.container}>

            <Paper className={classes.paper}>

              <Typography variant="h6" gutterBottom style={{
                display: 'flex',
                justify: 'flex-start'
              }}>
                <b>Goods Recieving Voucher</b>
              </Typography>
              <Divider className={classes.spacer} />



              <Grid container spacing={3}>

                {/* <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="itemName"
                    name="itemName"
                    label="item Name"
                    fullWidth
                    autoComplete="itemName"
                    value={this.state.newItemInfo.itemName}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.itemName = e.target.value;
                      this.setState({ newItemInfo });
                    }}
                  />
                </Grid> */}

                <Grid item xs={12} sm={6}>

                  {/* <Form.Group controlId="catagory">
                    <Form.Label>Item Name</Form.Label>

                    <Form.Control as="select">
                      {this.state.item.map(items =>
                        <option value= {items.itemId} key={items.itemId}>{items.itemName}</option>
                      )}
                        {/* value={this.state.newItemInfo.itemName}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.itemName = e.target.value;
                        this.setState({ newItemInfo });
                      }} */}
                      
                    {/* </Form.Control>

                  </Form.Group> */} 

                          <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">Item Name</InputLabel>

                      <Select onChange={this.itemChange} value={itemValue} native id="grouped-native-select">
                        <option aria-label="None" value="" />

                        {item.map(items => (
                          <option value={items.itemId}>{items.itemName}</option>
                        ))}

                      </Select>


                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    fullWidth
                    autoComplete="quantity"
                    // value={this.state.newItemInfo.quantity}
                    // onChange={(e) => {
                    //   let { newItemInfo } = this.state;
                    //   newItemInfo.quantity = e.target.value;
                    //   this.setState({ newItemInfo });
                    // }}
                    onChange={this.quantityChange}
                    value={quantityValue} 

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
                    // value={this.state.newItemInfo.warehouseName}
                    // onChange={(e) => {
                    //   let { newItemInfo } = this.state;
                    //   newItemInfo.warehouseName = e.target.value;
                    //   this.setState({ newItemInfo });
                    // }}
                    onChange={this.wareChange}
                    value={wareValue} 
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
                    // value={this.state.newItemInfo.retailPrice}
                    // onChange={(e) => {
                    //   let { newItemInfo } = this.state;
                    //   newItemInfo.retailPrice = e.target.value;
                    //   this.setState({ newItemInfo });
                    // }}
                    onChange={this.priceChange}
                    value={priceValue} 
                  />
                  {/* <Button>
                                    Hello
                                </Button> */}
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="packaging"
                    name="pakaging"
                    label="Packaging"
                    fullWidth
                    // autoComplete="GRVnumber"
                    // value={this.state.newItemInfo.packaging}
                    // onChange={(e) => {
                    //   let { newItemInfo } = this.state;
                    //   newItemInfo.packaging = e.target.value;
                    //   this.setState({ newItemInfo });
                    // }}
                    onChange={this.packChange}
                    value={packValue} 
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
                    // value={this.state.newItemInfo.discount}
                    // onChange={(e) => {
                    //   let { newItemInfo } = this.state;
                    //   newItemInfo.discount = e.target.value;
                    //   this.setState({ newItemInfo });
                    // }}
                    onChange={this.discountChange}
                    value={discountValue} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>

                  <Form.Group controlId="catagory">
                    <Form.Label>catagory</Form.Label>

                    <Form.Control as="select">
                      {this.state.cat.map(cats=>
                        <option value={cats.catagoryId} key={cats.catagoryId}>{cats.catagoryName}</option>
                      )}
                        {/* value={this.state.newItemInfo.catagory}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.catagory = e.target.value;
                        this.setState({ newItemInfo });
                      }} */}
                         onChange={this.catagoryChange}
                      value={catagoryValue} 
                    </Form.Control>

                  </Form.Group>
                  <Grid item xs={12} sm={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.submit}
                      className={classes.button}
                    >
                      Register
                   </Button>
                  </Grid>

                </Grid>
              </Grid>

            </Paper>

          </div>
          <div className={classes.recentOrders}>

            <Typography variant="h5" gutterBottom style={{
              display: 'flex',
            }}>
              Recent Imports
              </Typography>
            <RecentOrders />
          </div>

        </React.Fragment>
      </div>
    );
  }

}


export default withStyles(styles)(AddNewProduct);