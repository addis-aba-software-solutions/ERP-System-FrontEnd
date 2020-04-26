import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import actions from "../../../store/sales/action";
import { connect } from "react-redux";

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

  componentDidMount() {
    alert("component did mount");
    this.props.getOrders();
  }

  render() {
    // const { classes, orders } = this.props;
    // let filteredOrder = this.orders.filter((order) => {
    //   return (
    //     order.orderName
    //       .toLowerCase()
    //       .indexOf(this.state.search.toLowerCase()) !== -1
    //   );
    // });

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
                {this.props.orders.map((order) => (
                  <TableRow key={order.orderId}>
                    <TableCell>{order.orderId}</TableCell>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell>{order.OrderName}</TableCell>
                    <TableCell>{order.item}</TableCell>
                    <TableCell>{order.orderQuantity}</TableCell>
                    <TableCell>{order.email}</TableCell>
                    <TableCell>{order.hiredDate}</TableCell>
                    <TableCell>{order.telephone}</TableCell>
                    <TableCell>{order.birthDate}</TableCell>
                    <TableCell>{order.country}</TableCell>
                    <TableCell>{order.region}</TableCell>
                    <TableCell>{order.city}</TableCell>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>{order.company}</TableCell>
                    <TableCell>{order.orderDate}</TableCell>
                    <TableCell>
                      <button>
                        <Link
                          to={{
                            pathname: `/invoice/`,
                            state: { order: order.orderNumber },
                          }}
                        >
                          Invoice Available
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

const mapStateToProps = (state) => ({
  orders: state.salesReducer.orders,
});
const mapDispatchToProps = {
  getOrders: actions.getOrders,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Orders));
