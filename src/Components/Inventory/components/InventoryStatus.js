import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, withStyles, Paper, TextField } from '@material-ui/core';
import RecentOrders from './RecentOrders';
import SearchBar from '../../SearchBar/SearchBar'

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

class InventoryStatus extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <>
            <div style = {{
                padding: 40
            }}>
            <SearchBar />

            </div>
            <div>
                Inventory Status Goes Here
            </div>
            </>
        );
    }

}

export default withStyles(styles)(InventoryStatus);
