import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';

const styles = theme => ({
    container: {
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 40,
        paddingBottom: 40,
        height: 'auto'
    },
    paper: {
        padding: 60,
        height: 'auto',
        borderRadius: 20
    },
    spacer: {
        margin: 20,
    },
    recentOrders: {
        padding: 20
    }


});

class AddNewProduct extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.recentOrders}>
                <React.Fragment>

                    <div className={classes.container}>

                        <Typography variant="h5" gutterBottom>
                            Goods Recieving Voucher
              </Typography>
                        <Divider className={classes.spacer} />
                        {/* <Divider /> */}

                        <Paper className={classes.paper}>

                            <Typography variant="h6" gutterBottom style={{
                                display: 'flex',
                                justify: 'flex-start'
                            }}>
                                <b>General Information</b>
                            </Typography>
                            <Divider className={classes.spacer} />



                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Store"
                                        name="Store"
                                        label="Store/ Department"
                                        fullWidth
                                        autoComplete="Store"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="POnumber"
                                        name="POnumber"
                                        label="Purchase Order Number"
                                        fullWidth
                                        autoComplete="POnumber"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="GRVnumber"
                                        name="GRVnumber"
                                        label="GRV Number"
                                        fullWidth
                                        autoComplete="GRVnumber"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        id="Supplier"
                                        name="Supplier"
                                        label="Supplier"
                                        fullWidth
                                        autoComplete="Email"
                                    />
                                    {/* <Button>
                                    Hello
                                </Button> */}
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="Date"
                                        name="Date"
                                        label="Date"
                                        fullWidth
                                    // autoComplete="GRVnumber"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="Location"
                                        name="Location"
                                        label="Location"
                                        fullWidth
                                    // autoComplete="GRVnumber"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="Contract_Info"
                                        name="Contract_Info"
                                        label="Contract Info"
                                        fullWidth
                                        autoComplete="Contract_Info"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="Invoice_Number"
                                        name="Invoice_Number"
                                        label="Invoice Number"
                                        fullWidth
                                    // autoComplete="Role"
                                    />
                                </Grid>                            <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="SIV_number"
                                        name="SIV_number"
                                        label="SIV Number"
                                        fullWidth
                                        autoComplete="SIV_number"
                                    />
                                </Grid>

                            </Grid>

                            <Typography variant="h6" gutterBottom style={{
                                display: 'flex',
                                justify: 'flex-start',
                                paddingTop: 30
                            }}>
                                <b>Item Information</b>
                            </Typography>
                            <Divider className={classes.spacer} />

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="Store"
                                        name="Store"
                                        label="Store/ Department"
                                        fullWidth
                                        autoComplete="Store"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="POnumber"
                                        name="POnumber"
                                        label="Purchase Order Number"
                                        fullWidth
                                        autoComplete="POnumber"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="GRVnumber"
                                        name="GRVnumber"
                                        label="GRV Number"
                                        fullWidth
                                        autoComplete="GRVnumber"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        required
                                        id="Supplier"
                                        name="Supplier"
                                        label="Supplier"
                                        fullWidth
                                        autoComplete="Email"
                                    />
                                    {/* <Button>
                                    Hello
                                </Button> */}
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="Date"
                                        name="Date"
                                        label="Date"
                                        fullWidth
                                    // autoComplete="GRVnumber"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        required
                                        id="Location"
                                        name="Location"
                                        label="Location"
                                        fullWidth
                                    // autoComplete="GRVnumber"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="Contract_Info"
                                        name="Contract_Info"
                                        label="Contract Info"
                                        fullWidth
                                        autoComplete="Contract_Info"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="Invoice_Number"
                                        name="Invoice_Number"
                                        label="Invoice Number"
                                        fullWidth
                                    // autoComplete="Role"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="SIV_number"
                                        name="SIV_number"
                                        label="SIV Number"
                                        fullWidth
                                        autoComplete="SIV_number"
                                    />
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
