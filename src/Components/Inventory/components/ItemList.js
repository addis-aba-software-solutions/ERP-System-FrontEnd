// import React, { Component } from 'react';
// import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, TextField } from '@material-ui/core';
// import SearchBar from '../../SearchBar/SearchBar'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// const styles = theme => ({
//     table: {
//         // minWidth: 650,
//         padding: 20
//     },
//     tableRow: {
//         // minWidth: 650,
//         padding: 15
//     },
//     container: {
//         padding: 20,
//     },
//     paper: {
//         padding: 40,
//         height: 'auto',
//         bitemRadius: 20
//     },
//     spacer: {
//         margin: 20,
//     },
//     recentitems: {
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

// class ItemList extends React.Component {
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
//             createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'Hello'),
//             createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//             createData('Eclair', 262, 16.0, 24, 6.0),
//             createData('Cupcake', 305, 3.7, 67, 4.3),
//             createData('Gingerbread', 356, 16.0, 49, 3.9),
//         ];
//         return (
//             <>
//                 <div className={classes.container}>
//                     <Grid container display='flex'
//                         justify="space-between"
//                         xs={12}
//                         style={{
//                             padding: 20,
//                             paddingBottom: 20,

//                         }}>
//                         <Grid item className={classes.header}>
//                             <Typography variant='h5' color="textSecondary">
//                                 <b>Warehouse Name</b> : GurdSholla Warehouse
//                             </Typography>
//                             <Typography variant='h5' color="textSecondary">
//                                 <b>Warehouse ID</b> : YTFHGFTY556HHG
//                             </Typography>
//                             <Typography style={{
//                                 marginRight: 100
//                             }} variant='h5' color="textSecondary">
//                                 <b>Category</b> : Edibles
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
//                                         <TableCell align="right"><b>Actions</b></TableCell>

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
//                                             <TableCell align="right">
//                                                 <Grid container display='flex' justify="flex-end">
//                                                     <Grid item >
//                                                         <Badge color="primary" overlap="circle" badgeContent=" ">
//                                                         </Badge>
//                                                     </Grid>
//                                                     <Grid item style={{
//                                                         marginLeft: 30
//                                                     }}>
//                                                         Enough

//                                                     </Grid>


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

// export default withStyles(styles)(ItemList);





import React, { Component } from 'react';
import { Button, Divider, Typography, Grid, Badge, withStyles, Paper, Card, IconButton, TextField } from '@material-ui/core';
import SearchBar from '../../SearchBar/SearchBar'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
const styles = theme => ({
  table: {
    maxHeight: 100,
    padding: 20
  },
  tableRow: {
    padding: 15
  },
  container: {
    padding: 20,
  },
  paper: {
    padding: 40,
    height: 'auto',
    bitemRadius: 20
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



class ItemList extends React.Component {


  constructor() {
    super();
    this.state = {
      search: '',
      itemInfo: []
    };
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20)
    })
  }


  componentDidMount() {
    axios.get("http://0.0.0.0:8000/api/v1/item/")
      .then(res => {
        this.setState({
          itemInfo: res.data
        })
        //   console.log(res.data.data.children);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { classes } = this.props;
    const {itemInfo, error}= this.state;
    // let filteredItem = itemInfo.filter(
    //   (itemInfos) => {
    //     return itemInfos.itemName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    //   }
    // );
    let filteredItem = itemInfo.filter((itemInfos)=>{
      return itemInfos.itemName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      // console.log(item);
    })
   // const { itemInfo } = this.state;

    return (
      <>
        <div className={classes.container}>
          <Grid container display='flex'
            justify="space-between"
            xs={12}
            style={{
              padding: 20,

            }}>
            <Grid item className={classes.header}>
              <Typography variant='h5' color="textSecondary">
                <b>items</b>
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

          <Divider className={classes.spacer}></Divider>

          <div style={{ padding: 30 }} >
          <input  value={this.state.search} onChange={this.updateSearch.bind(this)}/>

            <Paper className={classes.paper}>

              <TableContainer style={{ maxHeight: 440 }} >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>

                    <TableRow className={classes.table}>

                      <TableCell >Item ID</TableCell>
                      <TableCell >Item Name</TableCell>
                      <TableCell >Category</TableCell>
                      <TableCell >Quantity</TableCell>
                      {/* <TableCell >warehouseName</TableCell> */}
                      <TableCell >Retail Price</TableCell>
                      <TableCell >Packaging</TableCell>
                      {/* <TableCell >discount</TableCell> */}
                      <TableCell >Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredItem.map(itemInfos => (
                      <TableRow key={itemInfos.itemId}>
                        <TableCell>{itemInfos.itemId}</TableCell>
                        <TableCell>{itemInfos.itemName}</TableCell>
                        <TableCell>{itemInfos.catagory.catagoryName}</TableCell>
                        <TableCell>{itemInfos.quantity}</TableCell>
                        {/* <TableCell>{itemInfos.warehouseName}</TableCell> */}
                        <TableCell>{itemInfos.retailPrice}</TableCell>
                        <TableCell>{itemInfos.packaging}</TableCell>
                        {/* <TableCell>{itemInfos.discount}</TableCell> */}


                        {/* <TableCell>{employeeInfos.department.departmentName}</TableCell>
                        <TableCell>{employeeInfos.roles.role}</TableCell> */}

                        {/* <TableCell><button>
                          <Link to={{
                            pathname: `/employe/${itemInfos.employeId}`,
                            state: { itemInfos: itemInfos.employeId }
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

export default withStyles(styles)(ItemList);


