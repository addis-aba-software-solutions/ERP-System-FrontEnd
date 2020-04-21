
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import history from './history'
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;


class ItemList extends Component {
    state = {
        employeeInfo: []
    }

    singleOrderTruck = (image4) => {
        ipcRenderer.send('toggle-image4', image4);
    }
    post(e) {
        e.preventDefault();
        this.props.history.push("/tr");
    
    }

    render() {
        return (
            <>
                <AppBar style={{ backgroundColor: "#11669F" }} position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" style={{ flex: 1 }}>
                            EATH_ERP
                </Typography>

                        <label for="another-input">Admin &nbsp; Logout</label>

                    </Toolbar>
                </AppBar>


                <div style={{ padding: 15, marginTop: 10 }}>

                    <div >
                        <div className="col-xs-3 col-sm-2">

                        </div>
                        <div className="float-left">

                            <h3 className="text-primary">Requested Items</h3>

                        </div>

                        <div className="float-right">

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


                </div>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                    <table style={{ padding: 40 }} className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                {/* <th style={{ backgroundColor: "#11669F", width: 50 }} score="col">_</th> */}

                                <th style={{ backgroundColor: "#11669F", width: 50 }} score="col">OrderID</th>
                                <th style={{ backgroundColor: "#11669F", width: 150 }} score="col">Item Name</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">UOM</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Quantity</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Position</th> */}
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Price/Unit</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Salary</th> */}
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Requested At</th>
                                {/* <th style={{backgroundColor:"#11669F"}} score="col">Location</th> */}


                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Requested By</th>
                                <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Status</th>
                                <th style={{ backgroundColor: "#11669F", width: 50 }} score="col">Truck order</th>


                                {/* <th style={{ backgroundColor: "#11669F", width: 100 }} score="col">Action</th> */}



                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    1</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "yellow" }}> Pending</td>
                                <td style={{ width: 50 }}>
                                    <Button style={{backgroundColor:"#11669f"}} onClick={() => history.push('/tr')} > <i className=" glyphicon glyphicon-option-vertical "></i>
                                    </Button>
                                </td>

                               {/* // onClick={() => this.singleEmployeeEdit()} */}




                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    2</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "green" }}><i style={{ color: "green" }} className="glyphicon glyphicon-ok"></i>  Approved</td>
                               
                                <Link to="/truck">
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>
                                </Link>

                                 {/* {/* <Link to = "/settings"> */}



                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    3</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}



                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "green" }}><i style={{ color: "green" }} className="glyphicon glyphicon-ok"></i>  Approved</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>



                            </tr>


                            <tr>
                                <th style={{ width: 50 }} scope="row">
                                    4</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "green" }}><i style={{ color: "green" }} className="glyphicon glyphicon-ok"></i>  Approved</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>



                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    5</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "yellow" }}> Pending</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>


                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    6</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "yellow" }}> Pending</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>



                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    7</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "green" }}><i style={{ color: "green" }} className="glyphicon glyphicon-ok"></i>  Approved</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>




                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    8</th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "yellow" }}> Pending</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>



                            </tr>


                            <tr>

                                <th style={{ width: 50 }} scope="row">
                                    9 </th>
                                <td style={{ width: 100 }}>Moya Biscuit</td>
                                <td style={{ width: 100 }}>Pack</td>
                                <td style={{ width: 100 }}>2213</td>

                                {/* <td style={{ width: 100 }}>Senior</td> */}
                                <td style={{ width: 100 }}>320 ETB</td>
                                {/* <td style={{ width: 100 }}>10,000</td> */}
                                <td style={{ width: 100 }}>2/12/12</td>
                                {/* <td style={{ width: 100 }}>Wello Sefer</td> */}


                                <td style={{ width: 100 }}>Hana Belay</td>
                                <td style={{ width: 100, color: "yellow" }}> Pending</td>
                                <td style={{ width: 50 }}><i className=" glyphicon glyphicon-option-vertical "></i></td>


                                {/* <Link to="/image">
                                
                                </Link> */}
                            </tr>

                        </tbody>

                    </table>
                    {/* <Link to = "/settings">
                    <Button style={{ backgroundColor: "#11669F" }} className="float right">Select</Button>
                    </Link> */}

                </div>



            </>

        );
    }
}
export default ItemList;