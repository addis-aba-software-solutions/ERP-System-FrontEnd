import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: 20,
  },
  container: {
    maxHeight: 440,
  },
  orders: {
    padding: 30,
  },
});

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      search: "",
    };
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

  componentDidMount() {}

  render() {
    // const { classes, orders } = this.props;
    const { orders } = this.state;
    let filteredOrder = this.orders.filter((order) => {
      return (
        order.orderName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div style={{ padding: 30 }}>
        <Paper style={{ width: "100%", padding: 20 }}>
          <TableContainer style={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <th style={{ width: 50 }} score="col">
                    Order Id
                  </th>
                  <th style={{ width: 100 }} score="col">
                    Order Number
                  </th>
                  <th style={{ width: 100 }} score="col">
                    Order Name
                  </th>

                  <th style={{ width: 100 }} score="col">
                    salesPerson
                  </th>

                  <th style={{ width: 100 }} score="col">
                    Description
                  </th>
                  <th style={{ width: 100 }} score="col">
                    Company
                  </th>
                  <th style={{ width: 100 }} score="col">
                    orderDate
                  </th>
                  <th style={{ width: 50 }} score="col">
                    Shipment Address
                  </th>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrder.map((orderInfos) => (
                  <TableRow key={orderInfos.orderId}>
                    <TableCell>{orderInfos.orderId}</TableCell>
                    <TableCell>{orderInfos.orderNumber}</TableCell>
                    <TableCell>{orderInfos.OrderName}</TableCell>
                    <TableCell>{orderInfos.item}</TableCell>
                    <TableCell>{orderInfos.orderQuantity}</TableCell>
                    <TableCell>{orderInfos.email}</TableCell> */}
                    <TableCell>{orderInfos.hiredDate}</TableCell>
                    <TableCell>{orderInfos.telephone}</TableCell>
                    <TableCell>{orderInfos.birthDate}</TableCell>
                    <TableCell>{orderInfos.country}</TableCell>
                    <TableCell>{orderInfos.region}</TableCell>
                    <TableCell>{orderInfos.city}</TableCell>
                    <TableCell>{orderInfos.orderNumber}</TableCell>
                    <TableCell>{orderInfos.orderDate}</TableCell>
                    <TableCell>{orderInfos.company}</TableCell>
                    <TableCell>{orderInfos.orderDate}</TableCell>
                    <TableCell>
                      <button>
                        <Link
                          to={{
                            pathname: `/employe/${orderInfos.employeId}`,
                            state: { orderInfos: orderInfos.employeId },
                          }}
                        >
                          View
                        </Link>
                      </button>
                    </TableCell>
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
