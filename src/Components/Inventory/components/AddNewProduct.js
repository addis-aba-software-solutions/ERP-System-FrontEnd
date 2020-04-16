
import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, IconButton, Card, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';

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
  }

  componentDidMount() {
    fetch("http://192.168.1.10:8000/api/v1/item/")
      .then(res => res.json())
      .then(data => {
        console.log(data);

        this.setState({ item: data });

      })
    fetch("http://192.168.1.10:8000/api/v1/catagory/")
      .then(res => res.json())
      .then(data => {
        console.log(data);


        this.setState({ cat: data });

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
    // body: JSON.stringify(data)
    // }).then((result) => {
    // result.json().then((resp) => {
    // 
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
    axios.post('http://192.168.1.9:8000/api/v1/item/', this.state.newItemInfo).then((response) => {

      let { itemInfo } = this.state;
      itemInfo.push(response.data);
      this.setState({
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
      });
      //  Swal.fire({
      //   position: 'top-end',
      //    icon: 'success',
      //    title: 'Registered',
      //    showConfirmButton: false,
      //    timer: 700
      //  })
      //  .then(history.push('/Production'))

    })

  }



  render() {
    const { classes } = this.props;
    const { error, itemInfo } = this.state;

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

                  <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="grouped-native-select">Department</InputLabel>
                    <Select native id="grouped-native-select">
                      <option aria-label="None" value="" />
                      {this.state.item.map(items =>
                        <option key={items.itemId}>{items.itemName}</option>
                      )}
                        value={this.state.newItemInfo.itemName}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.itemName = e.target.value;
                        this.setState({ newItemInfo });
                      }}
                    </Select>
                  </FormControl>



                  {/* <Form.Group controlId="catagory">
                    <Form.Label>Department</Form.Label>

                    <Form.Control as="select">
                      {this.state.item.map(items =>
                        <option value= {items.itemId} key={items.itemId}>{items.itemName}</option>
                      )}
                        value={this.state.newItemInfo.itemName}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.itemName = e.target.value;
                        this.setState({ newItemInfo });
                      }}
                    </Form.Control>

                  </Form.Group> */}



                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="quantity"
                    name="quantity"
                    label="Quantity"
                    fullWidth
                    autoComplete="quantity"
                    value={this.state.newItemInfo.quantity}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.quantity = e.target.value;
                      this.setState({ newItemInfo });
                    }}
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
                    value={this.state.newItemInfo.warehouseName}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.warehouseName = e.target.value;
                      this.setState({ newItemInfo });
                    }}
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
                    value={this.state.newItemInfo.retailPrice}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.retailPrice = e.target.value;
                      this.setState({ newItemInfo });
                    }}
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
                    value={this.state.newItemInfo.packaging}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.packaging = e.target.value;
                      this.setState({ newItemInfo });
                    }}
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
                    value={this.state.newItemInfo.discount}
                    onChange={(e) => {
                      let { newItemInfo } = this.state;
                      newItemInfo.discount = e.target.value;
                      this.setState({ newItemInfo });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>

                  <FormControl className={classes.formControl} fullWidth>
                    <InputLabel htmlFor="grouped-native-select">Category</InputLabel>
                    <Select native id="grouped-native-select">
                      <option aria-label="None" value="" />
                      {this.state.cat.map(cats =>
                        <option key={cats.catagoryId}>{cats.catagoryName}</option>
                      )}
                        value={this.state.newItemInfo.catagory}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.catagory = e.target.value;
                        this.setState({ newItemInfo });
                      }}
                    </Select>
                  </FormControl>



                  {/* <Form.Group controlId="catagory">
                    <Form.Label>catagory</Form.Label>

                    <Form.Control as="select">
                      {this.state.cat.map(cats =>
                        <option key={cats.catagoryId}>{cats.catagoryName}</option>
                      )}
                        value={this.state.newItemInfo.catagory}
                        onChange={(e) => {
                        let { newItemInfo } = this.state;
                        newItemInfo.catagory = e.target.value;
                        this.setState({ newItemInfo });
                      }}
                    </Form.Control>

                  </Form.Group> */}


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