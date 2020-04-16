import React, { Component } from 'react';
import { withStyles, Box, Paper, Divider, Typography, Grid } from '@material-ui/core'
import Logo from '../../../Assets/Trial.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = ({
    root: {
        width: '100vh',
        height: '100vh',
        backgroundColor: '#d1d1d1',
        padding: 10
    },
    pdf: {
        width: '792px',
        height: '450px',
        backgroundColor: '#FFFFFF',
        marginLeft: 100,

        // margin: 10,
        padding: 5
    },
    Paper: {
        backgroundColor: '#4083B0',
        height: 130,
        borderRadius: 0,
        padding: 10
        // boxShadow: {0},
    },
    text: {
        color: '#FFFFFF',
    },
    Header: {
        padding: 30,
    },
    logo: {
        height: 50,
        width: 50,
        marginTop: 10,
        borderRadius: 50
    },
    SIVStyling: {
        padding: 30
    },
    table: {
        padding: 10
    },
    textBody: {
        color: '#686868'
    }

});


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

class SIV extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Box style={{
                    height: 100
                }}>
                </Box>
                <div className={classes.pdf}>
                    <Paper className={classes.Paper}>
                        <Grid container xs={12}
                            display='flex'
                            justify='space-between'
                            className={classes.Header}>
                            <Grid item>
                                <Grid container style={{
                                    marginTop: 10,
                                    marginLeft: 10
                                }}>
                                    <img src={Logo} alt='' className={classes.logo} />
                                    <Typography className={classes.text} variant="h6" style={{
                                        marginTop: 20,
                                        marginLeft: 10
                                    }} >
                                        EATH
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.text} variant="body2" gutterBottom>
                                    <b>Warehouse ID : </b> RFGDERWS4434
                                </Typography>
                                <Typography className={classes.text} variant="body2" gutterBottom>
                                    <b>Warehouse Name : </b> Gurd-Sholla Warehouse
                                </Typography>
                                <Typography className={classes.text} variant="body2" gutterBottom>
                                    <b>Issued By :</b> Yelekal Solomon
                                </Typography>
                                <Typography className={classes.text} variant="body2" gutterBottom>
                                    <b>SIV Date :</b> 12/08/2020
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding:20
                    }}>
                        <Typography className={classes.text} variant='body2' color=''>
                            <b>Order Number :</b> YHDGTEYHT776
                        </Typography>
                    </Box>

                    {/* <Paper className={classes.table} > */}

                    <TableContainer >
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item Name</TableCell>
                                    <TableCell align="right">Item ID</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding:10
                    }}>
                        <Typography className={classes.textBody} variant='body2' color=''>
                            <b>Total :</b> 67
                        </Typography>
                    </Box>
                    <div style={{
                        paddingLeft:20
                    }}>

                    <Box style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                    }}>
                        <Typography className={classes.textBody} variant='body2' color=''>
                            <b>Recipient Name :</b> _______________________
                        </Typography>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingTop: 15,
                    }}>
                        <Typography className={classes.textBody} variant='body2' color=''>
                            <b>Recipient Signature :</b> _______________________
                        </Typography>
                    </Box>
                    </div>


                    {/* </Paper> */}

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SIV);