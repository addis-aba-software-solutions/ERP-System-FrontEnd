// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString(),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     padding:20
//   },
//   container: {
//     maxHeight: 440,
//   },
//   orders: {
//       padding: 30
//   }
// });

// export default function Orders() {
//   const {classes} = this.props


//   return (
//       <div className={classes.orders}> 

//     <Paper className={classes.root}>
//       <TableContainer className={classes.container}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page).map((row) => {
//               return (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                   {columns.map((column) => {
//                     const value = row[column.id];
//                     return (
//                       <TableCell key={column.id} align={column.align}>
//                         {column.format && typeof value === 'number' ? column.format(value) : value}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>

//     </Paper>
//     </div>

//   );
// }


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

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

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
    state = {
        orderInfo: []
      }

      componentDidMount() {
        axios.get("http://192.168.1.9:8000/api/v1/order/")
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
  const {classes} = this.props,
   orderInfo = this.state;


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
            <TableHead className="thead-dark" style={{backgroundColor: "#11669F"}}>
          
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
              {orderInfo.map(orderInfos => (
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
