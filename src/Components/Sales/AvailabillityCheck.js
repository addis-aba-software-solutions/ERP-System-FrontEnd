import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
//import HeartIcon from '@material-ui/icons/HeartIcon';
import CardContent from '@material-ui/core/CardContent';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import history from './history'


// const electron = require('electron');
// import { ipcRenderer } from 'electron';
// const electron = require('electron');
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;


class AvailabilityCheck extends Component {
  state = {
    employeeInfo: []
  }
//   singleDepartment = (image2) => {
//     ipcRenderer.send('toggle-image2', image2);
//   }

  singleEmployeeEdit = (image1) => {
    ipcRenderer.send('toggle-image1', image1);
  }
  post(e) {
    e.preventDefault();
    this.props.history.push("/imagine");

}


  render() {
    return (
      <>
        {/* <AppBar style={{ backgroundColor:"#11669F"}} position="static">

          <Toolbar>
            <h5>EATH {'  '}</h5>
            <span><p style={{ flex: 1 }}>Admin</p></span>

          </Toolbar>
        </AppBar> */}
        {/* <AppBar style={{ backgroundColor: "#11669F" }} position="static">
          <Toolbar>
            <Grid container spacing={24}>
              <Grid item xs={11}>
                <Typography >
                  EATH
            </Typography>
              </Grid>

              <Grid item xs={1}>

                <HeartIcon />
                <p>
                  Admin
              </p>

              </Grid>
            </Grid>
          </Toolbar>
        </AppBar> */}
        <AppBar style={{ backgroundColor: "#11669F" }} position="static">
          <Toolbar>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>
              EATH_ERP
            </Typography>
            <div style={{ wordSpacing: 10 }}>
              <p style={{ paddingLeft: 10 }} className="float-right" >
                Logout
              </p>
              <p className="float-right">Admin</p>



            </div>
          </Toolbar>
        </AppBar>
        <div style={{ backgroundColor: "#EDEDED" }}>
          <h1>GurdShola Warehouse</h1>
          <div style={{ backgroundColor: '#F8F8F8' }}>

            {/* <div  className='float-right'> */}
            <div className="float-right">
              <FormGroup style={{ flex: 1 }} required fullWidth>
                {/* <Label>Search</Label> */}
                <Box boxShadow={10}>
                  <Input style={{
                    // boxShadow : 100,
                    // height: 100, 
                    // width:100

                  }} type="text" name="description" multiline rows="3" placeholder="Moya Biscuit" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                </Box>
                <Button>Search</Button>
              </FormGroup>
            </div>
            {/* <Button>Filter</Button>
        <a href= '#'>Filter</a>
        <Button>Group By</Button> */}

          </div>

          <Grid container spacing={16} style={{ padding: 10, backgroundColor: "#EDEDED" }}>
            <Grid style={{ padding: 10 }} item sm={3} xs={12} >


              {/* <Link to="/imageo"> */}

                <Card onClick={() => history.push('/imageo')} style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                  <CardContent>
                    
                    <h5>Edibles</h5>
                    <p className="float-right text-primary">In stock:7767</p>

                  </CardContent>
                </Card>
              {/* </Link> */}
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>


              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                  
                  <h5>Clothing</h5>
                  <p className="float-right text-primary">In stock:7767</p>


                </CardContent>
              </Card>
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>

              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                 
                  <h5>Hair Products</h5>
                  <p className="float-right text-primary">In stock:7767</p>


                </CardContent>
              </Card>
            </Grid>


            <Grid style={{ padding: 10 }} item sm={3} xs={12}>

              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                 
                  <h5>Cosmotics</h5>
                  <p className="float-right text-primary">In stock:7767</p>

                </CardContent>
              </Card>
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>

              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                 
                  <h5>Writing Materials</h5>
                  <p className="float-right text-primary">In stock:7767</p>


                </CardContent>
              </Card>
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>

              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                 
                  <h5>Sanitation Products</h5>
                  <p className="float-right text-primary">In stock:7767</p>

                </CardContent>
              </Card>
            </Grid>
          </Grid>


        </div>
      </>

    );
  };
}
export default AvailabilityCheck;