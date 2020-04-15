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
    render() {
        const { classes } = this.props;
        return (
            <Grid xs={12}>
                <div className={classes.SingleOrder}>

                    <Grid container xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.card}>

                                <Typography variant="h6" component="p" style={{
                                    padding: 10
                                }}>
                                    <b>Single Order</b>
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
                                                TTGYGF778
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
                                                <b>Order Name</b>
                                            </Typography>
                                        </Grid>
                                        <Grid >

                                            <Typography gutterBottom variant="body1" component="h3" style={{
                                                display: 'flex',
                                                justifyContent: 'flex-center'
                                            }}>
                                                Something
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
                                                Some Date
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
                                                <b>Discount</b>
                                            </Typography>
                                        </Grid>
                                        <Grid >
                                            <Typography gutterBottom variant="body1" component="h3" style={{
                                                display: 'flex',
                                                justifyContent: 'flex-center'
                                            }}>
                                                Some Number
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
                                                <i>
                                                    Some Description Here
                                                    Some Description Here
                                                    Some Description Here
                                                    Some Description Here
                                                    Some Description HereSome Description HereSome Description HereSome Description Here
                                                    </i>

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
                                                        <TableCell> <b>#</b></TableCell>
                                                        <TableCell align="right"> <b>Item ID</b></TableCell>
                                                        <TableCell align="right"><b>Item Name</b></TableCell>
                                                        <TableCell align="right"><b>Quantity</b></TableCell>


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


                                                        </TableRow>
                                                    ))}
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
                                        <Button variant="contained" color="primary">
                                            Edit
                                    </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="secondary">
                                            Delete
                                            </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Print Document
                                            </Button>
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

                <Grid sm={12}>
                    <div className={classes.Orders}>
                        <ViewAllOrders />
                    </div>
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(styles)(ViewSingleOrder);