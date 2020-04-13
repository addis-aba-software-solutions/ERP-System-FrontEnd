
import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, IconButton , Card, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
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
    paddingLeft:20,
    paddingRight:20,
    paddingTop:22,


    borderRadius: 20,
    width: 'auto'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0),
  createData('Ice', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),


];

class AddNewProduct extends React.Component {

  constructor() {
    super();
    this.state = {
      itemInfo: [],
      cat: [],
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
        itemInfo,
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

            <Grid container xs={12} spacing={3}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography variant="h6" gutterBottom style={{
                    display: 'flex',
                    justify: 'flex-start'
                  }}>
                    <b>Item Add Form</b>
                  </Typography>
                  <Divider className={classes.spacer} />
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
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
                    </Grid>
                    <Grid item xs={12} sm={4}>
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
                    <Grid item xs={12} sm={4}>
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

                    </Grid>
                    <Grid item xs={12} sm={6}>
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
                      <TextField
                        required
                        id="category"
                        name="category"
                        label="Category"
                        fullWidth
                        // autoComplete="Role"
                        value={this.state.newItemInfo.category}
                        onChange={(e) => {
                          let { newItemInfo } = this.state;
                          newItemInfo.category = e.target.value;
                          this.setState({ newItemInfo });
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container
                    spacing={3}
                    display='flex'
                    style={{
                      paddingTop: 10,
                      paddingLeft: 150,
                      paddingRight: 150,

                    }}
                    justify='space-between'>
                    <Grid item>
                      <Button variant="contained" color='primary'>
                        Order
              </Button>
                    </Grid>

                    <Grid item>
                      <Button variant="contained">
                        Clear
              </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="secondary">
                        Cancel
              </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.topOrders}>
                  <Typography variant="h6" gutterBottom style={{
                    display: 'flex',
                    justify: 'flex-start'
                  }}>
                    <b>Top Orders</b>
                  </Typography>
                  <TableContainer>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell> <b>OrderID</b></TableCell>
                                                <TableCell align="right"> <b>Name</b></TableCell>
                                                <TableCell align="right"><b>Viewed Date</b></TableCell>
                                                <TableCell align="right"><b>Amount</b></TableCell>
                                                <TableCell align="right"><b>Ordered Times</b></TableCell>
                                                <TableCell align="right"><b>Actions</b></TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                    <TableCell align="right">{row.protein}</TableCell>
                                                    <TableCell align="right">
                                                        <Grid item style={{
                                                            marginLeft: 30
                                                        }}>
                                                            <IconButton>
                                                                <VisibilityIcon />
                                                            </IconButton>
                                                        </Grid>

                                                    </TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                </Paper>
              </Grid>
            </Grid>
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