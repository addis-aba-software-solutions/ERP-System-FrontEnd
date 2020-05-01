import React from 'react';
import { Card, Paper, Button, Typography, TextField, IconButton, Divider, CardActions, Box, CardContent, Grid, withStyles } from '@material-ui/core'
import ViewAllOrders from './ViewAllOrders';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { getSingleOrder } from "../../../store/order/action";
import { connect } from "react-redux";
import CreateIcon from "@material-ui/icons/Create";
import ScreenShareRoundedIcon from "@material-ui/icons/ScreenShareRounded";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import DoneAllRoundedIcon from "@material-ui/icons/DoneAllRounded";
import { Redirect } from "react-router-dom";
const styles = ({
    paper: {
        maxWidth: 700,
        marginTop: 10,
        // marginLeft: 200,
        padding: 20,
        borderRadius: 10,
        marginTop: 210,
        height: 'auto',
        width: 'auto'
    },
    card: {
        // maxWidth: 1000,
        width: 'auto',
        padding: 20,
        // maxHeight: 100,
        // height: 'auto',
        borderRadius: 20

    },
    SingleOrder: {
        padding: 20
        // marginTop: 50
    },
    Progresspaper: {
        height: 120,
        width: 120,
        borderRadius: 200,
    },
    icons: {
        marginTop: 30,
        marginLeft: 42,
        color: "#818181",
    },
    progress: {
        padding: 6,
        width: 250,
        marginTop: 55,
        backgroundColor: "#FFFFFF",
    },
    progressDiv: {
        marginLeft: 70,
        paddingBottom: 40
    }

})
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData(1, 159, 6.0, 24, 4.0),
    createData('Ice', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Ice', 237, 9.0, 37, 4.3),


];

class ViewSingleOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        console.log("ccccccccccccccccccccccccccccccccc");
        console.log(this.props.location.state);

        if (this.props.location.state) {
            this.props.getSingleOrder(this.props.location.state.order)
        }
        else {
            this.setState({
                redirect: true
            })
        }

    }
    render() {
        const { classes } = this.props;
        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        return (
            <>

                <div style={{ marginTop: 10, padding: 20 }}>
                    <Typography variant='h5'>
                        Order State
                    </Typography>

                </div>

                <div className={classes.progressDiv}>

                    {
                        this.props.location.state ? (
                            this.props.location.state.status === 'Created' ? (
                                <Grid container>
                                    <Grid item>
                                        <Paper className={classes.Progresspaper} style={{
                                            backgroundColor: "#11669F",
                                        }}>
                                            <CreateIcon style={{
                                                color: "#FFFFFF",
                                            }} fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                color: "#FFFFFF",
                                                marginLeft: 35

                                            }} variant="body2">Created</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Divider style={{
                                            // backgroundColor: "#11669F",
                                        }} className={classes.progress} />

                                    </Grid>

                                    <Grid item>
                                        <Paper
                                            className={classes.Progresspaper}
                                            style={{
                                                // backgroundColor: "#11669F",
                                            }}
                                        >
                                            <ScreenShareRoundedIcon
                                                style={{
                                                    // color: "#FFFFFF",
                                                }}
                                                fontSize="large"
                                                className={classes.icons}
                                            />
                                            <Typography
                                                style={{
                                                    // color: "#FFFFFF",
                                                    marginLeft: 39
                                                }}
                                                variant="body2"
                                            >
                                                Issued
                                    </Typography>
                                        </Paper>
                                    </Grid>
                                    <Divider className={classes.progress} />
                                    <Grid item>
                                        <Paper className={classes.Progresspaper}>
                                            <DoneAllRoundedIcon fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                marginLeft: 30

                                            }} variant="body2">Delievered</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Divider className={classes.progress} />
                                    </Grid>

                                    <Grid item>
                                        <Paper className={classes.Progresspaper}>
                                            <ReceiptRoundedIcon fontSize="large" className={classes.icons} />
                                            <Typography
                                                style={{
                                                    marginLeft: 35

                                                }} variant="body2">Invoiced</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            ) : null
                        ) : null
                    }

                    {
                        this.props.location.state ? (


                            this.props.location.state.status === 'Issued' ? (
                                <Grid container>
                                    <Grid item>
                                        <Paper className={classes.Progresspaper} style={{
                                            backgroundColor: "#11669F",
                                        }}>
                                            <CreateIcon style={{
                                                color: "#FFFFFF",
                                            }} fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                color: "#FFFFFF",
                                                marginLeft: 35

                                            }} variant="body2">Created</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Divider style={{
                                            backgroundColor: "#11669F",
                                        }} className={classes.progress} />

                                    </Grid>

                                    <Grid item>
                                        <Paper
                                            className={classes.Progresspaper}
                                            style={{
                                                backgroundColor: "#11669F",
                                            }}
                                        >
                                            <ScreenShareRoundedIcon
                                                style={{
                                                    color: "#FFFFFF",
                                                }}
                                                fontSize="large"
                                                className={classes.icons}
                                            />
                                            <Typography
                                                style={{
                                                    color: "#FFFFFF",
                                                    marginLeft: 39
                                                }}
                                                variant="body2"
                                            >
                                                Issued
                                    </Typography>
                                        </Paper>
                                    </Grid>
                                    <Divider className={classes.progress} />
                                    <Grid item>
                                        <Paper className={classes.Progresspaper}>
                                            <DoneAllRoundedIcon fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                marginLeft: 30

                                            }} variant="body2">Delievered</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Divider className={classes.progress} />
                                    </Grid>

                                    <Grid item>
                                        <Paper className={classes.Progresspaper}>
                                            <ReceiptRoundedIcon fontSize="large" className={classes.icons} />
                                            <Typography
                                                style={{
                                                    marginLeft: 35

                                                }} variant="body2">Invoiced</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            ) : null
                        ) : null
                    }

                    {
                        this.props.location.state ? (
                            this.props.location.state.status === 'Delivered' ? (
                                <Grid container>
                                    <Grid item>
                                        <Paper className={classes.Progresspaper} style={{
                                            backgroundColor: "#11669F",
                                        }}>
                                            <CreateIcon style={{
                                                color: "#FFFFFF",
                                            }} fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                color: "#FFFFFF",
                                                marginLeft: 35

                                            }} variant="body2">Created</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Divider style={{
                                            backgroundColor: "#11669F",
                                        }} className={classes.progress} />

                                    </Grid>

                                    <Grid item>
                                        <Paper
                                            className={classes.Progresspaper}
                                            style={{
                                                backgroundColor: "#11669F",
                                            }}
                                        >
                                            <ScreenShareRoundedIcon
                                                style={{
                                                    color: "#FFFFFF",
                                                }}
                                                fontSize="large"
                                                className={classes.icons}
                                            />
                                            <Typography
                                                style={{
                                                    color: "#FFFFFF",
                                                    marginLeft: 39
                                                }}
                                                variant="body2"
                                            >
                                                Issued
                                    </Typography>
                                        </Paper>
                                    </Grid>
                                    <Divider className={classes.progress} style={{
                                        backgroundColor: '#11669F',

                                    }} />
                                    <Grid item>
                                        <Paper className={classes.Progresspaper} style={{
                                            backgroundColor: '#11669F',
                                            color: '#FFFFFF'

                                        }}>
                                            <DoneAllRoundedIcon style={{
                                                color: '#FFFFFF'
                                            }} fontSize="large" className={classes.icons} />
                                            <Typography style={{
                                                marginLeft: 30

                                            }} variant="body2">Delievered</Typography>
                                        </Paper>
                                    </Grid>

                                    <Grid item>
                                        <Divider className={classes.progress} />
                                    </Grid>

                                    <Grid item>
                                        <Paper className={classes.Progresspaper}>
                                            <ReceiptRoundedIcon fontSize="large" className={classes.icons} />
                                            <Typography
                                                style={{
                                                    marginLeft: 35

                                                }} variant="body2">Invoiced</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            ) : null
                        ) : null
                    }

                    {this.props.location.state ? (this.props.location.state.status === 'Invoiced' ? (
                        <Grid container>
                            <Grid item>
                                <Paper className={classes.Progresspaper} style={{
                                    backgroundColor: "#11669F",
                                }}>
                                    <CreateIcon style={{
                                        color: "#FFFFFF",
                                    }} fontSize="large" className={classes.icons} />
                                    <Typography style={{
                                        color: "#FFFFFF",
                                        marginLeft: 35

                                    }} variant="body2">Created</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Divider style={{
                                    backgroundColor: "#11669F",
                                }} className={classes.progress} />

                            </Grid>

                            <Grid item>
                                <Paper
                                    className={classes.Progresspaper}
                                    style={{
                                        backgroundColor: "#11669F",
                                    }}
                                >
                                    <ScreenShareRoundedIcon
                                        style={{
                                            color: "#FFFFFF",
                                        }}
                                        fontSize="large"
                                        className={classes.icons}
                                    />
                                    <Typography
                                        style={{
                                            color: "#FFFFFF",
                                            marginLeft: 39
                                        }}
                                        variant="body2"
                                    >
                                        Issued
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Divider className={classes.progress} style={{
                                backgroundColor: '#11669F',
                            }} />
                            <Grid item>
                                <Paper className={classes.Progresspaper} style={{
                                    backgroundColor: '#11669F',
                                    color: '#FFFFFF'

                                }}>
                                    <DoneAllRoundedIcon style={{
                                        color: '#FFFFFF'
                                    }} fontSize="large" className={classes.icons} />
                                    <Typography style={{
                                        marginLeft: 30

                                    }} variant="body2">Delievered</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Divider className={classes.progress} style={{
                                    backgroundColor: '#11669F',
                                }} />
                            </Grid>

                            <Grid item>
                                <Paper className={classes.Progresspaper} style={{
                                    backgroundColor: '#11669F',
                                    color: '#FFFFFF'
                                }}>
                                    <ReceiptRoundedIcon style={{
                                        color: '#FFFFFF'
                                    }} fontSize="large" className={classes.icons} />
                                    <Typography
                                        style={{
                                            marginLeft: 35

                                        }} variant="body2">Invoiced</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    ) : null
                    ) : null
                    }

                </div>


                < Grid xs={12} >

                    {
                        this.props.order ? [this.props.order].map((order) => (
                            <div className={classes.SingleOrder}>

                                <Grid container xs={12} spacing={2}>
                                    <Grid item xs={6}>
                                        <Card className={classes.card}>

                                            <Typography variant="h6" component="p" style={{
                                                padding: 10,
                                                marginLeft: 250
                                            }}>
                                                <b>   OrderID :                                                         {
                                                    order.orderNumber
                                                }</b>
                                            </Typography>
                                            <Divider></Divider>
                                            <CardContent >
                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-left'
                                                        }}>
                                                            <b>Order ID</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >

                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-right',

                                                        }}>
                                                            {
                                                                order.orderNumber
                                                            }
                                                        </Typography>

                                                    </Grid>
                                                </Grid>


                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-left'
                                                        }}>
                                                            <b>Order Date</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-center'
                                                        }}>
                                                            {
                                                                order.orderDate
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    // paddingLeft: 10,
                                                }}>
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-left'
                                                        }}>
                                                            <b>Shipment address</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-center'
                                                        }}>
                                                            {
                                                                order.shipmentAddress
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    // paddingLeft: 10,
                                                }}>
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-left'
                                                        }}>
                                                            <b>Sales person</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-center'
                                                        }}>
                                                            {
                                                                order.salesPerson
                                                            }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container xs={12} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',

                                                }}>
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3" style={{
                                                            display: 'flex',
                                                            justifyContent: 'flex-left',
                                                            paddingTop: 20,
                                                            paddingBottom: 20

                                                        }}>
                                                            <b>Description</b>
                                                        </Typography>
                                                    </Grid>
                                                    <Grid >
                                                        <Typography gutterBottom variant="body1" component="h3" style={{

                                                            paddingBottom: 20
                                                        }}>

                                                            {order.description}


                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Divider></Divider>
                                                <Divider></Divider>

                                                <Grid container xs={12} >
                                                    <Grid>
                                                        <Typography gutterBottom variant="body1" component="h3">
                                                            <b>Item Information</b>
                                                        </Typography>
                                                    </Grid>

                                                    <TableContainer>
                                                        <Table className={classes.table} aria-label="simple table">
                                                            <TableHead>
                                                                <TableRow>

                                                                    <TableCell align="left"><b>Item Name</b></TableCell>
                                                                    <TableCell align="right"><b>Quantity</b></TableCell>


                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {order.item_order ? order.item_order.map((item) => (
                                                                    <TableRow key={item.itemName}>
                                                                        <TableCell component="th" scope="row">
                                                                            {item.itemName}
                                                                        </TableCell>

                                                                        <TableCell align="right">{item.quantity}</TableCell>



                                                                    </TableRow>
                                                                )) : null

                                                                }
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Grid>
                                            </CardContent>
                                            <Grid container spacing={3} style={{
                                                paddingLeft: 100,
                                                paddingRight: 100,
                                            }} display="flex" justify="space-between" >


                                                <Grid item>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                    <Box style={{
                                        height: 20
                                    }}>

                                    </Box>
                                    <Grid item xs={6}>
                                        <Card className={classes.card}>
                                            <Typography variant="h6" component="p" style={{
                                                padding: 10
                                            }}>
                                                <b>Recently Viewed Orders</b>
                                            </Typography>
                                            <Divider></Divider>
                                            <TableContainer>
                                                <Table className={classes.table} aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell> <b>OrderID</b></TableCell>
                                                            <TableCell align="right"> <b>Name</b></TableCell>
                                                            <TableCell align="right"><b>Viewed Date</b></TableCell>
                                                            <TableCell align="right"><b>Discount</b></TableCell>
                                                            <TableCell align="right"><b>Requested Date</b></TableCell>
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
                                        </Card>
                                    </Grid>

                                </Grid>
                            </div>
                        )
                        ) : null
                    }

                    {/* <Grid sm={12}>
                    <div className={classes.Orders}>
                        <ViewAllOrders />
                    </div>
                </Grid> */}
                </Grid >
            </>



        )
    }
}
function mapStateToProps(state) {
    return {
        order: state.ordersReducer.order,
        items: state.ordersReducer.items,
    };
}

export default connect(mapStateToProps, { getSingleOrder })(
    withStyles(styles)(ViewSingleOrder)
);