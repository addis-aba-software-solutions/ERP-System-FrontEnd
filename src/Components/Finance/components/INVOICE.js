import React, { Component } from "react";
import {
  withStyles,
  Box,
  Divider,
  Typography,
  Badge,
  Grid,
} from "@material-ui/core";
import Logo from "../../../Assets/Trial.jpg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { getInvoice } from "../../../store/Invoice/action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#5899C5",
    color: theme.palette.common.white,
    height: 1,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

const styles = {
  root: {
    width: "100vh",
    height: "100vh",
    backgroundColor: "#d1d1d1",
    padding: 30,
  },
  pdf: {
    width: "595px",
    height: "842px",
    backgroundColor: "#FFFFFF",
    // marginLeft: 100,
    padding: 40,
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 10,
    borderRadius: 50,
  },
  text: {
    color: "#FFFFFF",
  },
  textBody: {
    color: "#686868",
  },
  divider: {
    backgroundColor: "#11669F",
    margin: 1,
  },
  box: {
    // backgroundColor: '#F2F2F2',
    height: "auto",
    padding: 20,
  },
  invoiceInfo: {
    // backgroundColor: '#5899C5',
    height: "auto",
    width: "auto",
    // padding: 15
  },
  contactInformation: {
    marginLeft: 10,
  },
};

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
      invoice_item: [],
    };
  }

  componentDidMount() {
    this.props.getInvoice(this.props.location.state.order);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Box
          style={{
            height: 100,
          }}
        ></Box>
        <div className={classes.pdf}>
          <Grid container xs={12} display="flex" justify="space-between">
            <Grid item>
              <Grid
                container
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                <img src={Logo} alt="" className={classes.logo} />
                <Typography
                  className={classes.textBody}
                  variant="h6"
                  style={{
                    marginTop: 20,
                    marginLeft: 10,
                  }}
                >
                  EATH
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Typography
                align="right"
                className={classes.textBody}
                variant="body2"
                gutterBottom
              >
                East African Trading House
              </Typography>

              <Typography
                align="right"
                className={classes.textBody}
                variant="body2"
                gutterBottom
              >
                Kazanchis Johnny Building
              </Typography>
              <Typography
                align="right"
                className={classes.textBody}
                variant="body2"
                gutterBottom
              >
                <b>Mobile</b> +251-92125 8848
              </Typography>
              <Typography
                align="right"
                className={classes.textBody}
                variant="body2"
                gutterBottom
              >
                <b>Email :</b> EastAfricanTradingPlc@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider}></Divider>
          <Box className={classes.box}>
            <Grid container xs={12} display="flex" justify="space-between">
              {/* <Grid item>
                <Typography
                  align="left"
                  className={classes.textBody}
                  style={{ color: "#11669F" }}
                  variant="body2"
                  color=""
                >
                  <b>Invoice To</b>
                </Typography>
                <div
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Box
                    style={{
                      height: 10,
                    }}
                  ></Box>

                  <Typography
                    align="left"
                    className={classes.textBody}
                    variant="body2"
                  >
                    Samuel Kassa
                  </Typography>
                  <Box
                    style={{
                      height: 10,
                    }}
                  ></Box>
                  <Typography
                    align="left"
                    className={classes.textBody}
                    variant="body2"
                  >
                    Military Tera (Merkato)
                  </Typography>

                  <div className={classes.contactInformation}>
                    <Typography
                      align="left"
                      className={classes.textBody}
                      variant="body2"
                    >
                      +251 921-33-44-32
                    </Typography>
                    <Typography
                      align="left"
                      className={classes.textBody}
                      variant="body2"
                    >
                      +251 921-33-44-32
                    </Typography>
                  </div>
                  <div className={classes.contactInformation}>
                    <Typography
                      align="right"
                      className={classes.textBody}
                      variant="body2"
                    >
                      SamuelKassa23@gmail.com
                    </Typography>
                    <Typography
                      align="right"
                      className={classes.textBody}
                      variant="body2"
                    ></Typography>
                  </div>
                </div>
              </Grid> */}

              <Grid item>
                <Box className={classes.invoiceInfo}>
                  <Typography variant="body2" className={classes.textBody}>
                    <Grid container display="flex" justify="space-between">
                      <Grid item>
                        <b>Invoice Number :</b>
                      </Grid>

                      <Grid item>{this.props.invoices.invoiceId}</Grid>
                    </Grid>
                  </Typography>
                </Box>
                <Box
                  style={{
                    height: 20,
                  }}
                ></Box>
                <Box className={classes.invoiceInfo}>
                  <Typography variant="body2" className={classes.textBody}>
                    <Grid container display="flex" justify="space-between">
                      <Grid item>
                        <b>Invoice Date :</b>
                      </Grid>

                      <Grid item>{this.props.invoices.date}</Grid>
                    </Grid>
                  </Typography>
                  <Box
                    style={{
                      height: 7,
                    }}
                  ></Box>
                  <Typography variant="body2" className={classes.textBody}>
                    <Grid container display="flex" justify="space-between">
                      <Grid item>
                        <b>SO :</b>
                      </Grid>

                      <Grid item>SO013</Grid>
                    </Grid>
                  </Typography>
                  <Box
                    style={{
                      height: 7,
                    }}
                  ></Box>
                  {/* <Typography variant="body2" className={classes.textBody}>
                    <Grid container display="flex" justify="space-between">
                      <Grid item>
                        <b>Order Date : </b>
                      </Grid>

                      <Grid item>{this.props.invoices.date}</Grid>
                    </Grid>
                  </Typography> */}
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider className={classes.divider}></Divider>

          <Box
            style={{
              height: 10,
            }}
          ></Box>
          <TableContainer size="small">
            <Table
              className={classes.table}
              size="small"
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell>SR</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Unit Price</StyledTableCell>
                  <StyledTableCell align="right">Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.invoice_item.map((item) => (
                  <StyledTableRow key={item.itemName}>
                    <StyledTableCell align="right">{}</StyledTableCell>

                    <StyledTableCell
                      component="th"
                      scope="item
                    "
                    >
                      {item.itemName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.unitPrice}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {item.quantity * item.unitPrice}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            style={{
              height: 10,
            }}
          ></Box>
          <Grid
            container
            xs={12}
            style={{
              paddingTop: 15,
              // paddingRight: 20
            }}
            display="flex"
            justify="flex-end"
          >
            <Grid item xs={6}>
              <Grid container display="flex" justify="space-between">
                <Grid
                  item
                  style={{
                    padding: 2,
                  }}
                >
                  <Typography variant="caption" className={classes.textBody}>
                    Sub Total
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" className={classes.textBody}>
                    {this.props.invoices.subTotal} ETB
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{ padding: 0.2 }}></Divider>
              <Grid container display="flex" justify="space-between">
                <Grid
                  item
                  style={{
                    padding: 2,
                  }}
                >
                  <Typography variant="caption" className={classes.textBody}>
                    Tax:
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" className={classes.textBody}>
                    {this.props.invoices.Tax} ETB
                  </Typography>
                </Grid>
              </Grid>
              <Divider></Divider>
              <Grid container display="flex" justify="space-between">
                <Grid
                  item
                  style={{
                    padding: 2,
                  }}
                >
                  <Typography variant="caption" className={classes.textBody}>
                    Total
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" className={classes.textBody}>
                    {this.props.invoices.Total} ETB
                  </Typography>
                </Grid>
              </Grid>
              <Divider></Divider>
            </Grid>
          </Grid>
          <Box
            style={{
              height: 200,
            }}
          ></Box>

          <Box
            style={{
              paddingBottom: 5,
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <Badge color="primary" variant="dot"></Badge>
              </Grid>
              <Grid item>
                <Typography variant="caption" className={classes.textBody}>
                  <b>Payment Term :</b> End of the Following Month
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            style={{
              height: 40,
            }}
          ></Box>

          <Divider className={classes.divider}></Divider>

          <Grid container xs={12} display="flex" justify="space-between">
            <Grid item>
              <Typography variant="caption" className={classes.textBody}>
                <b>Phone :</b> +2519 1234 56 77
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" className={classes.textBody}>
                <b>Website :</b> EastAfrican.com
              </Typography>
            </Grid>{" "}
            <Grid item>
              <Typography variant="caption" className={classes.textBody}>
                <b>Email :</b> EastAfrican@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  invoices: state.invoiceReducer.invoices,
  invoice_item: state.invoiceReducer.invoice_item,
  errors: state.errorsReducer.errors,
});

export default connect(mapStateToProps, { getInvoice })(
  withStyles(styles)(Invoice)
);
