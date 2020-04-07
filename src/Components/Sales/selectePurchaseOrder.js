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


// const electron = require('electron');
// import { ipcRenderer } from 'electron';
// const electron = require('electron');
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;


class SelectedPurchaseOrder extends Component {
    state = {
        employeeInfo: []
    }
    singleDepartment = (image2) => {
        ipcRenderer.send('toggle-image2', image2);
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
                {/* <h2 className="float-left">Create sales Order</h2> */}
                <Grid>
                    <h2 style={{ padding: 20 }} className="text-center">Sales order Form</h2>

                    <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">Item&nbsp;Name</label>
                        </div>

                        {/* <Link to="/imagel"> */}
                        <div>
                            <p className="input-group">
                                <input type="text" id="from" value="Moya Biscuit" className="form-control" />
                                <span className="input-group-btn">

                                    <Link to="/imagel">

                                        <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-list"></i></button>
                                    </Link>
                                </span>
                            </p>
                        </div>
                        {/* </Link> */}
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Item ID</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" value="1" className="form-control" />
                        </div>

                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Quantity</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                    </div>
                    <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">Requested By</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Expected Date</label>
                        </div>
                        <div>
                            <p className="input-group">
                                <input type="text" id="to" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </div>

                    </div>
                    {/* <div style={{ padding: 20 }} className="form-group row ">
                        <div>
                            <label for="from">client Name</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="to">Client Address</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Discount</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>

                    </div> */}
                    <div>
                        {/* <div style={{marginLeft:10}}>
                            <label for="another-input">Quantity</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{marginLeft:10}}>
                            <label for="to">Expected Date</label>
                        </div>
                        <div>
                            <p className="input-group">
                                <input type="text" id="to" className="form-control" />
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-default"><i className="glyphicon glyphicon-calendar"></i></button>
                                </span>
                            </p>
                        </div>
                        <div style={{marginLeft:10}}>
                            <label for="another-input">Sales Person</label>
                        </div>
                        <div>
                            <input type="text" id="another-input" className="form-control" />
                        </div> */}

                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Description</label>
                        </div>
                        <div>
                            <input style={{ marginLeft: 10 }} type="text" id="another-input" className="form-control" />
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <label for="another-input">Item Request Reason</label>
                        </div>
                        <div>
                            <input style={{ marginLeft: 10 }} type="text" id="another-input" className="form-control" />
                        </div>
                    </div>
                    <div style={{ padding: 25 }}>

                        <Button style={{ backgroundColor: "#11669F" }} className="float right">Sale</Button>
                    </div>
                </Grid>
            </>
        );
    }
}
export default SelectedPurchaseOrder;