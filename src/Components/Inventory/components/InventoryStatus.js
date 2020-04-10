import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';
import SearchBar from '../../SearchBar/SearchBar'
import Category from './Category'

const styles = theme => ({
    container: {
        padding: 20,
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
        padding: 20,
        paddingBottom: 20
    },
    spacer: {
        margin: 10,
        marginBottom: 30,   
    },
});

class InventoryStatus extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.container}>
                    <Grid container display='flex'
                        justify="space-between"
                        xs={12}
                        style={{
                            padding: 20,
                            paddingBottom: 20,
                        }}>
                        <Grid item className={classes.header}>
                            <Typography variant='h5' color="textSecondary">
                                <b>Warehouse Name</b> : GurdSholla Warehouse
                            </Typography>
                            <Typography variant='h5' color="textSecondary">
                            <b>Warehouse ID</b> : YTFHGFTY556HHG
                            </Typography>                            
                            <Typography style={{
                                marginLeft:200
                            }} variant='h5' color="textSecondary">
                            <b>Location</b> : GurdSholla infront of 'Top 10' Hotel
                            </Typography>
                        </Grid>
                        <Grid item style={{
                            display: 'flex',
                            justify: 'flex-end'
                        }}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                    <div >
                    </div>
                    <div>
                        <Divider className={classes.spacer}></Divider>
                        <Category />
                    </div>
                </div>

            </>
        );
    }

}

export default withStyles(styles)(InventoryStatus);
