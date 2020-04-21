import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    padding:20
  },
  container: {
    maxHeight: 440,
  },
  orders: {
      padding: 30
  }
});

class  Orders extends React.Component {

  constructor(){
    super();
    this.state={
      search:'', 
     orderInfo: []
    };
  }
  updateSearch(e){
    this.setState({
      search:e.target.value.substr(0,20)
    })
  }


  

      componentDidMount() {
        axios.get("http://192.168.1.4:8000/api/v1/order/")
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


    render(){
//   const {classes. orderInfo} = this.props,
let filteredOrder= this.orderInfo.filter(
       (orderInfos)=>{
         return orderInfos.orderName.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1; 
       }
     );
 const {orderInfo} = this.state;


  return (
    //   <div className={classes.orders}> 

    // <Paper className={classes.root}>
    //   <TableContainer className={classes.container}>
    //     <Table stickyHeader aria-label="sticky table">
    //       <TableHead>
    //         <TableRow>
    //           {columns.map((column) => (
    //             <TableCell
    //               key={column.id}
    //               align={column.align}
    //               style={{ minWidth: column.minWidth }}
    //             >
    //               {column.label}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {rows.slice(page).map((row) => {
    //           return (
    //             <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
    //               {columns.map((column) => {
    //                 const value = row[column.id];
    //                 return (
    //                   <TableCell key={column.id} align={column.align}>
    //                     {column.format && typeof value === 'number' ? column.format(value) : value}
    //                   </TableCell>
    //                 );
    //               })}
    //             </TableRow>
    //           );
    //         })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>

    // </Paper>
    // </div>

    <div style={{padding:30}} > 
           <Paper style={{  width: '100%', padding:20}}>
           <TableContainer style={{  maxHeight: 440}} >
           <Table stickyHeader aria-label="sticky table">
            <TableHead>
          
              <TableRow>
                <th style={{ width: 50 }} score="col">orderId</th>
                <th style={{ width: 100 }} score="col">orderNumber</th>
                <th style={{ width: 100 }} score="col">orderName</th>

                <th style={{ width: 100 }} score="col">item</th>

                <th style={{ width: 100 }} score="col">orderQuantity</th>
                <th style={{ width: 100 }} score="col">company</th>
                <th style={{ width: 100 }} score="col">orderDate</th>
                {/* <th style={{ width: 100 }} score="col">Position</th> */}
                {/* <th style={{ width: 100 }} score="col">Salary</th> */}
                {/* <th style={{ width: 100 }} score="col">Employment Status</th> */}
                {/* <th style={{ width: 100 }} score="col">Location</th> */}
                <th style={{ width: 50 }} score="col">__</th>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrder.map(orderInfos => (
                <TableRow key={orderInfos.orderId}>
                  <TableCell>{orderInfos.orderId}</TableCell>
                  <TableCell>{orderInfos.orderNumber}</TableCell>

                  <TableCell>{orderInfos.OrderName}</TableCell>
                  <TableCell>{orderInfos.item}</TableCell>
                  
                  <TableCell>{orderInfos.orderQuantity}</TableCell>
                  {/* <TableCell>{orderInfos.email}</TableCell> */}
                  {/* <TableCell>{orderInfos.hiredDate}</TableCell> */}
                  {/* <TableCell>{orderInfos.telephone}</TableCell> */}
                  {/* <TableCell>{orderInfos.birthDate}</TableCell> */}
                  {/* <TableCell>{orderInfos.country}</TableCell> */}
                  {/* <TableCell>{orderInfos.region}</TableCell> */}
                  {/* <TableCell>{orderInfos.city}</TableCell> */}
                  {/* <TableCell>{orderInfos.orderNumber}</TableCell> */}
                  {/* <TableCell>{orderInfos.orderDate}</TableCell> */}
                  <TableCell>{orderInfos.company}</TableCell>
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

  );
}
}
export default withStyles(styles)(Orders);
