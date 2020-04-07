import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//import HeartIcon from '@material-ui/icons/HeartIcon';
import CardContent from '@material-ui/core/CardContent';
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

import {Link} from 'react-router-dom';
// const electron = require('electron');
// import { ipcRenderer } from 'electron';
// const electron = require('electron');
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;


class ItemList extends Component {
    state = {
        employeeInfo: []
    }
    singleEmployee = (image) => {
        ipcRenderer.send('toggle-image', image);
      }
    render() {
        return (
            <>
                <AppBar style={{ backgroundColor: "#11669F" }} position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" style={{ flex: 1 }}>
                            EATH_ERP
            </Typography>
                        {/* <div style={{ wordSpacing: 10 }}>
              <p style={{ paddingLeft: 10 }} className="float-right" >
                Logout
              </p>
              <p className="float-right">Admin</p> */}




                        {/* </div> */}


                        {/* <label for="another-input"><i className="fas fa-bell"></i>&nbsp;Admin&nbsp;<i className="fas fa-caret-down"></i> </label> */}
                        <label for="another-input">Admin&nbsp;Logout</label>

                    </Toolbar>
                </AppBar>


                <div style={{ padding: 15, marginTop: 10 }}>

                    {/* <p className="text-primary">.text-primary</p> */}





                    <div >
                        <div className="col-xs-3 col-sm-2">
                            {/* <h3 className="text-primary">Junior Sales</h3> */}
                        </div>
                        <div className="float-left">
                            {/* <p className="input-group">
              <input type="text" id="from" className="form-control"/>
              <span className="input-group-btn">
                <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
              </span>
            </p> */}
                            <h3 className="text-primary">Edibles</h3>



                        </div>
                        {/* <div className="col-xs-1 text-center">
            <label for="to">to</label>
        </div> */}
                        <div className="float-right">
                            {/* <p className="input-group">
              <input type="text" id="to" className="form-control"/>
              <span className="input-group-btn">
                <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
              </span>
            </p> */}
                            <FormGroup style={{}} required fullWidth>

                                <div className="float-right">
                                    <Input type="text" name="search" placeholder="search" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />

                                </div>
                            </FormGroup>
                            <div>
                                <Button style={{ backgroundColor: "#11669F" }} className="float right">Search</Button>

                            </div>
                        </div>
                    </div>


                    {/* <FormGroup  style={{}} required fullWidth>

              <div className="float-right">
                <Input  type="text" name="search" placeholder="search" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                <Button style={{ backgroundColor: "#11669F" }} className="float right">Search</Button>
                </div>
              </FormGroup> */}
                </div>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <table style={{ padding: 40 }} className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                {/* <th style={{ backgroundColor: "#11669F", width: 50 }} score="col">_</th> */}

                                <th style={{ backgroundColor: "#11669F", width: 50 }} score="col">ItemID</th>
                                <th style={{ backgroundColor: "#11669F", width: 150 }} score="col">Item Name</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">UOM</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Quantity</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Position</th> */}
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Price/Unit</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Salary</th> */}
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Imported Date</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Location</th> */}


                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Expiry Date</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Status</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Action</th>



                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                
                                <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />1</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100}}>Enough</td>
                                <td style={{width:100}}>___</td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />2</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100}}>Enough</td>
                                <td style={{width:100}}>___</td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />3</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100}}>Enough</td>
                                <td style={{width:100}}>___</td>
                            </tr>


                            <tr>
                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />4</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100}}>Enough</td>
                                <td style={{width:100}}>___</td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />5</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100, color:"yellow"}}>Purchase</td>
                                <td style={{width:100}}><button>+</button></td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />6</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100, color:"red"}}>Low</td>
                                <td style={{width:100}}><button>+</button></td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />7</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100, color:"red"}}>Low</td>
                                <td style={{width:100}}><button>+</button></td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />8</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100, color:"red"}}>Empty</td>
                                <td style={{width:100}}><button>+</button></td>
                            </tr>


                            <tr>

                            <th style={{ width: 50 }} scope="row">
                                    <div className="radio">
                                        <label><input type="radio" name="optradio"
                                        />9</label>
                                    </div></th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>1/12/14</td>
                                <td style={{width:100, color:"red"}}>Empty</td>
                                <Link to="/image">
                                <td style={{width:100}}><button>+</button></td>
                                </Link>
                            </tr>

                        </tbody>

                    </table>
                    <Link to = "/settings">
                    <Button style={{ backgroundColor: "#11669F" }} className="float right">Select</Button>
                    </Link>

                </div>



            </>

        );
    }
}
export default ItemList;