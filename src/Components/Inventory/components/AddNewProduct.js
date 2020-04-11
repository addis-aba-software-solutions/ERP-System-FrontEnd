import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';

const styles = theme => ({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 40,
        paddingBottom: 40,
        // height: 'auto'
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
                    <Grid container xs={12}
                        display='flex'
                        justify='space-between'>
                        <Grid item xs={6}>

                            <div className={classes.container}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" gutterBottom style={{
                                        display: 'flex',
                                        justify: 'flex-start'
                                    }}>
                                        <b>Add New Product Form</b>
                                    </Typography>
                                    <Divider className={classes.spacer} />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="ItemId"
                                                name="ItemId"
                                                label="Item Id"
                                                fullWidth
                                                autoComplete="ItemId"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="itemName"
                                                name="itemName"
                                                label="item Name"
                                                fullWidth
                                                autoComplete="itemName"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="quantity"
                                                name="quantity"
                                                label="Quantity"
                                                fullWidth
                                                autoComplete="quantity"
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
                                            />
                                            {/* <Button>
                                    Hello
                                </Button> */}
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="packaging"
                                                name="pakaging"
                                                label="Packaging"
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

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="discount"
                                                name="discount"
                                                label="Discount"
                                                fullWidth
                                                autoComplete="Contract_Info"
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
                                            />
                                        </Grid>
                                        <Grid container xs={12} display='flex' justify='space-between'>
                                            <Grid>
                                                <Button>
                                                    Add
                                </Button>
                                            </Grid>
                                            <Grid>
                                                <Button>
                                                    Clear
                                </Button>
                                            </Grid>

                                            <Grid>
                                                <Button>
                                                    Cancel
                                </Button>
                                            </Grid>
                                            <Grid>
                                                <Button>
                                                    Print Document
                                </Button>
                                            </Grid>

                                        </Grid>
                                    </Grid>

                                </Paper>

                            </div>




                        </Grid>

                        <Grid item xs={6}>

                            <div className={classes.container}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h6" gutterBottom style={{
                                        display: 'flex',
                                        justify: 'flex-start'
                                    }}>
                                        <b>Add New Product Form</b>
                                    </Typography>
                                    <Divider className={classes.spacer} />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="ItemId"
                                                name="ItemId"
                                                label="Item Id"
                                                fullWidth
                                                autoComplete="ItemId"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="itemName"
                                                name="itemName"
                                                label="item Name"
                                                fullWidth
                                                autoComplete="itemName"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="quantity"
                                                name="quantity"
                                                label="Quantity"
                                                fullWidth
                                                autoComplete="quantity"
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
                                            />
                                            {/* <Button>
                                    Hello
                                </Button> */}
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <TextField
                                                required
                                                id="packaging"
                                                name="pakaging"
                                                label="Packaging"
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

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="discount"
                                                name="discount"
                                                label="Discount"
                                                fullWidth
                                                autoComplete="Contract_Info"
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
                                            />
                                        </Grid>
                                        <Grid container xs={12} display='flex' justify='space-between'>
                                            <Grid>
                                                <Button>
                                                    Add
                                </Button>
                                            </Grid>
                                            <Grid>
                                                <Button>
                                                    Add
                                </Button>
                                            </Grid>

                                            <Grid>
                                                <Button>
                                                    Add
                                </Button>
                                            </Grid>
                                            <Grid>
                                                <Button>
                                                    Print Document
                                </Button>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                </Paper>

                            </div>




                        </Grid>
                    </Grid>





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
