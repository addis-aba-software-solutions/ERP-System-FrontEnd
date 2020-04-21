
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
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;
const Menu = electron.remote.Menu;


class OrderTrucking extends Component {
    state = {
        employeeInfo: []
    }
    singleEmployee = (image) => {
        ipcRenderer.send('toggle-image', image);
    }
    successPopUp = {

    }
    render() {
        return (
            <>
                <AppBar style={{ backgroundColor: "#11669F" }} position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit" style={{ flex: 1 }}>
                            EATH_ERP
                        </Typography>

                        <label for="another-input">Admin&nbsp;Logout</label>

                    </Toolbar>
                </AppBar>


                <div style={{ padding: 15, marginTop: 10 }}>

                    <div >

                        <div className="text-center">

                            <h3 >Sales order Trucking</h3>
                        </div>
                        <div>
                            <div style={{ color: "#11669F" }} className="float-left"> OrderId: 001</div>
                            <br />
                            <div style={{ color: "#11669F" }} className="float-left"> Item Name : Cheralia Biscuit</div>
                            <div className="text-center" style={{ fontSize: 35, padding: 20, color: "#11669f" }}>Order Status</div>
                        </div>
                        <Grid container spacing={16}>
                            <Grid item sm={2} xs={12}></Grid>
                            <Grid item sm={8} xs={12}>

                                <div className="text-center">
                                    <p className="float-left"><i style={{ color: "#11669f", fontSize: 65, padding: 70 }} className="glyphicon glyphicon-ok"></i></p>
                                    <p className="float-left"><i style={{ color: "#11669f", fontSize: 65, padding: 70 }} className="glyphicon glyphicon-ok"></i></p>

                                    <p className="float-left"><i style={{ color: "#11669f", fontSize: 65, padding: 70 }} className="glyphicon glyphicon-ok"></i></p>

                                    <p className="float-left"><i style={{ color: "#11669f", fontSize: 65, padding: 70 }} className="glyphicon glyphicon-ok"></i></p>
                                </div>
                            </Grid>
                            <Grid item sm={2} xs={12}></Grid>
                        </Grid>



                        <Grid container spacing={16} style={{ padding: 10, backgroundColor: "#EDEDED" }}>
                            <Grid style={{ padding: 10 }} item sm={4} xs={12} >




                                <Card style={{ backgroundColor: "#ffffff", borderRadius: 10 }}>
                                    <CardContent>

                                        <p className="text-center font-weight-bold">Estimated Time Schedule</p>
                                        <div>
                                            <p className="float-left">Left the production Company: &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"><p className="float-right">&nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a Truck:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">Reached Akaki WareHouse:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right"> &nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a truck to You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;&nbsp;&nbsp;&nbsp;January 12, 2020</p></div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="float-left">Received By You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>


                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid style={{ padding: 10 }} item sm={4} xs={12}>


                                <Card style={{ backgroundColor: "#ffffff", borderRadius: 10 }}>
                                    <CardContent>
                                        <p className="text-center font-weight-bold">Condition of the Order</p>
                                        <div>
                                            <p className="float-left">Left the production Company: &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"><p className="float-right">&nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a Truck:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">Reached Akaki WareHouse:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right"> &nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a truck to You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp; &nbsp;&nbsp;&nbsp;January 12, 2020</p></div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="float-left">Received By You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>


                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid style={{ padding: 10 }} item sm={4} xs={12}>

                                <Card style={{ backgroundColor: "#ffffff", borderRadius: 10 }}>
                                    <CardContent>
                                        <p className="text-center font-weight-bold">Additional Information</p>
                                        <div>
                                            <p className="float-left">Left the production Company: &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"><p className="float-right">&nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a Truck:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">Reached Akaki WareHouse:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right"> &nbsp; January 12, 2020</p></div>
                                        </div>
                                        <div>
                                            <p className="float-left">On a truck to You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp; &nbsp;&nbsp;&nbsp;January 12, 2020</p></div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="float-left">Received By You:  &nbsp;&nbsp;&nbsp;</p>
                                            <div className="float-right"> <p className="float right">  &nbsp;January 12, 2020</p></div>
                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>





                    </div>
                </div>
            </>
        );
    }

}
export default OrderTrucking;
//, padding:20
// fontSize:25

