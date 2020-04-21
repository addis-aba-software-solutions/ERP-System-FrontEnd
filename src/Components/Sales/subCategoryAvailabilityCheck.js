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
import CardContent from '@material-ui/core/CardContent';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import history from './history'

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;


class SubCategoryAvailabilityCheck extends Component {
  state = {
    employeeInfo: []
  }


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

            
            <div className="float-right">
              <FormGroup style={{ flex: 1 }} required fullWidth>
                <Box boxShadow={10}>
                  <Input type="text" name="description" multiline rows="3" placeholder="Moya Biscuit" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                </Box>
                <Button>Search</Button>
              </FormGroup>
            </div>
          <h3 className="float-left">Edibles</h3>
          </div>

          <Grid container spacing={16} style={{ padding: 10, backgroundColor: "#EDEDED" }}>
            <Grid style={{ padding: 10 }} item sm={3} xs={12} >

                <Card  onClick={() => history.push('/imagine')}  style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                  <CardContent>
                    
                    <h5>Biscuit</h5>
                    <p className="float-right text-primary">In stock:7767</p>

                  </CardContent>
                </Card>
                
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>


              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                  
                  <h5>Juice</h5>
                  <p className="float-right text-primary">In stock:7767</p>


                </CardContent>
              </Card>
            </Grid>
            <Grid style={{ padding: 10 }} item sm={3} xs={12}>

              <Card style={{ backgroundColor:"#ffffff", borderRadius: 10 }}>
                <CardContent>
                 
                  <h5>Snacks</h5>
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
export default SubCategoryAvailabilityCheck;