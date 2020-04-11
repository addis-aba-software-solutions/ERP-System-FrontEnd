import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, TextField } from '@material-ui/core';
import SearchBar from '../../SearchBar/SearchBar'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const styles = theme => ({
    table: {
        // minWidth: 650,
        padding: 20
    },
    tableRow: {
        // minWidth: 650,
        padding: 15
    },
    container: {
        padding: 20,
    },
    paper: {
        padding: 40,
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
        marginBottom: 30
    },
    header: {
        marginLeft: 100
    }
});

function createData(name, calories, fat, carbs, protein, Actions) {
    return { name, calories, fat, carbs, protein, Actions };
}

class ItemList extends React.Component {
    render() {
        const { classes } = this.props;
        const rows = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
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
                                marginRight: 100
                            }} variant='h5' color="textSecondary">
                                <b>Category</b> : Edibles
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
                    {/* <Divider className={classes.spacer}></Divider>
                        <Level /> */}
                    <Divider className={classes.spacer}></Divider>
                    <Paper className={classes.paper}>

                        <TableContainer>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow className={classes.table}>
                                        <TableCell className={classes.table}><b>ID</b></TableCell>

                                        <TableCell className={classes.table}><b>Item Name</b></TableCell>
                                        <TableCell align="right"><b>Quantity</b></TableCell>
                                        <TableCell align="right"><b>Price/Unit</b></TableCell>
                                        <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
                                        <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell>
                                        <TableCell align="right"><b>Actions</b></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell className={classes.tableRow} component="th" scope="row">
                                                #
                                        </TableCell>
                                            <TableCell className={classes.tableRow} component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="right">
                                                <Grid container display='flex' justify="flex-end">
                                                    <Grid item >
                                                        <Badge color="primary" overlap="circle" badgeContent=" ">
                                                        </Badge>
                                                    </Grid>
                                                    <Grid item style={{
                                                        marginLeft: 30
                                                    }}>
                                                        Enough
                                                            
                                                    </Grid>


                                                </Grid>

                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </>
        );
    }

}

export default withStyles(styles)(ItemList);
