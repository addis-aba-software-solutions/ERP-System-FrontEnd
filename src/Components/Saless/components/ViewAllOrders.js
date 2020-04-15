// import React, { Component } from 'react';
// import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, IconButton, TextField } from '@material-ui/core';
// import SearchBar from '../../SearchBar/SearchBar'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// const styles = theme => ({
//     table: {
//         maxHeight: 100,
//         padding: 20
//     },
//     tableRow: {
//         padding: 15
//     },
//     container: {
//         padding: 20,
//     },
//     paper: {
//         padding: 40,
//         height: 'auto',
//         borderRadius: 20
//     },
//     spacer: {
//         margin: 20,
//     },
//     recentOrders: {
//         padding: 20,
//         paddingBottom: 20
//     },
//     spacer: {
//         margin: 10,
//         marginBottom: 30
//     },
//     header: {
//         marginLeft: 100
//     }
// });

// function createData(name, calories, fat, carbs, protein, Actions) {
//     return { name, calories, fat, carbs, protein, Actions };
// }

// class ViewAllOrders extends React.Component {
//     render() {
//         const { classes } = this.props;
//         const rows = [
//             createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9),
//             createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),

//         ];
//         return (
//             <>
//                 <div className={classes.container}>
//                     <Grid container display='flex'
//                         justify="space-between"
//                         xs={12}
//                         style={{
//                             padding: 20,
//                             // paddingBottom: 20,

//                         }}>
//                         <Grid item className={classes.header}>
//                             <Typography variant='h5' color="textSecondary">
//                                 <b>Orders</b>
//                             </Typography>
//                         </Grid>
//                         <Grid item style={{
//                             display: 'flex',
//                             justify: 'flex-end'
//                         }}>
//                             <SearchBar />
//                         </Grid>
//                     </Grid>
//                     <div >
//                     </div>
//                     {/* <Divider className={classes.spacer}></Divider>
//                         <Level /> */}
//                     <Divider className={classes.spacer}></Divider>
//                     <Paper className={classes.paper}>

//                         <TableContainer>
//                             <Table className={classes.table} size="small" aria-label="a dense table">
//                                 <TableHead>
//                                     <TableRow className={classes.table}>
//                                         <TableCell className={classes.table}><b>ID</b></TableCell>

//                                         <TableCell className={classes.table}><b>Item Name</b></TableCell>
//                                         <TableCell align="right"><b>Quantity</b></TableCell>
//                                         <TableCell align="right"><b>Price/Unit</b></TableCell>
//                                         <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
//                                         <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell>
//                                         <TableCell align="center"><b>Actions</b></TableCell>

//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {rows.map((row) => (
//                                         <TableRow key={row.name}>
//                                             <TableCell className={classes.tableRow} component="th" scope="row">
//                                                 #
//                                         </TableCell>
//                                             <TableCell className={classes.tableRow} component="th" scope="row">
//                                                 {row.name}
//                                             </TableCell>
//                                             <TableCell align="right">{row.calories}</TableCell>
//                                             <TableCell align="right">{row.fat}</TableCell>
//                                             <TableCell align="right">{row.carbs}</TableCell>
//                                             <TableCell align="right">{row.protein}</TableCell>
//                                             <TableCell align="center">

//                                                 <Grid item style={{
//                                                     marginLeft: 30
//                                                 }}>
//                                                     <IconButton>
//                                                         <VisibilityIcon />

//                                                     </IconButton>

//                                                 </Grid>
//                                             </TableCell>

//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </Paper>
//                 </div>
//             </>
//         );
//     }
// }

// export default withStyles(styles)(ViewAllOrders);


import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, IconButton, TextField } from '@material-ui/core';
import SearchBar from '../../SearchBar/SearchBar'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility'
import axios from 'axios';
import { Link } from 'react-router-dom'
const styles = theme => ({
    table: {
        maxHeight: 100,
        // padding: 20
    },
    tableRow: {
        // padding: 15
    },
    container: {
        padding: 20,
    },
    paper: {
        padding: 10,
        height: 'auto',
        borderRadius: 20
    },
    spacer: {
        margin: 20,
    },
    recentitems: {
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



class OrderList extends React.Component {


    constructor() {
        super();
        this.state = {
            search: '',
            orderInfo: []
        };
    }
    updateSearch(e) {
        this.setState({
            search: e.target.value.substr(0, 20)
        })
    }


    componentDidMount() {
        axios.get("http://0.0.0.0:8000/api/v1/order/")
            .then(res => {
                this.setState({
                    orderInfo: res.data
                })
                //   console.log(res.data.data.children);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { classes } = this.props;
        //    if(!orderInfo) return [];
        //    else {
        //         let filteredOrder = this.orderInfo.filter(
        //             (orderInfos) => {
        //                 return orderInfos.item.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        //             }
        //         );
        //     }
        const { orderInfo } = this.state;

        return (
            <>
                <div className={classes.container}>

                    <div >
                        <Button variant='contained'> <Link to="/CreateOrder"
                        >Add New Order</Link></Button>
                        <br />
                        {/* <input placeholder="search" value={this.state.search} onChange={this.updateSearch.bind(this)} /> */}

                        <Paper className={classes.paper}>

                            <TableContainer style={{ maxHeight: 440 }} >
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>

                                        <TableRow className={classes.table}>

                                            <TableCell >Order Number</TableCell>
                                            <TableCell>Order Name</TableCell>

                                            <TableCell>Item</TableCell>
                                            <TableCell>Company</TableCell>
                                            <TableCell>Sales Person</TableCell>
                                            <TableCell>Shipment Address</TableCell>
                                            <TableCell>Order Date</TableCell>
                                            <TableCell >Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orderInfo.map(orderInfos => (
                                            <TableRow key={orderInfos.orderNumber}>
                                                <TableCell>{orderInfos.orderNumber}</TableCell>
                                                <TableCell>{orderInfos.orderName}</TableCell>
                                                <TableCell>{orderInfos.item}</TableCell>
                                                <TableCell>{orderInfos.company}</TableCell>
                                                <TableCell>{orderInfos.salesPerson}</TableCell>
                                                <TableCell>{orderInfos.shipmentAddress}</TableCell>
                                                <TableCell>{orderInfos.orderDate}</TableCell>


                                                {/* <TableCell><button>
                          <Link to={{
                            pathname: `/employe/${orderInfos.employeId}`,
                            state: { orderInfos: orderInfos.employeId }
                          }}>View</Link>
                        </button></TableCell> */}

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(OrderList);

