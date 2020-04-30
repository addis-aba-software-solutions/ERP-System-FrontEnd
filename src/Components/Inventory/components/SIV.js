import React from "react";
import { withStyles, Box, Paper, Typography, Grid, Button } from "@material-ui/core";
import Logo from "../../../Assets/Trial.jpg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { getSiv, updateSiv } from "../../../store/Siv/action";
import SIVPdf from "./Printable_SIV";
import PrintIcon from "@material-ui/icons/Print";
import { PDFDownloadLink } from "@react-pdf/renderer"
import AutorenewIcon from "@material-ui/icons/Autorenew";

const styles = {
  root: {
    width: "100vh",
    height: "100vh",
    backgroundColor: "#d1d1d1",
    padding: 10,
  },
  pdf: {
    width: "792px",
    height: "450px",
    backgroundColor: "#FFFFFF",
    marginLeft: 100,
    padding: 5,
  },
  Paper: {
    backgroundColor: "#4083B0",
    height: 130,
    borderRadius: 0,
    padding: 10,
  },
  text: {
    color: "#FFFFFF",
  },
  Header: {
    padding: 30,
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 10,
    borderRadius: 50,
  },
  SIVStyling: {
    padding: 30,
  },
  table: {
    padding: 10,
  },
  textBody: {
    color: "#686868",
  },
};

class SIV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    this.props.getSiv(this.props.location.state.order);
  }
  submit(e) {
    e.preventDefault()



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
          <Paper className={classes.Paper}>
            <Grid
              container
              xs={12}
              display="flex"
              justify="space-between"
              className={classes.Header}
            >
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
                    className={classes.text}
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
              <Grid item>
                <Typography
                  className={classes.text}
                  variant="body2"
                  gutterBottom
                >
                  <b>SIV Status : </b> {this.props.sivs.sivStatus}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  gutterBottom
                >
                  <b>Warehouse Name : </b> {this.props.sivs.warehouseName}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  gutterBottom
                >
                  <b>Issued By :</b> {localStorage.getItem("username")}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  gutterBottom
                >
                  <b>SIV Date :</b> {this.props.sivs.sivDate}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: 20,
            }}
          >
            <Typography className={classes.textBody} variant="body2" color="">
            </Typography>
          </Box>


          <TableContainer>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Item Name</TableCell>
                  <TableCell align="right">Item ID</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.siv_item ? this.props.siv_item.map((item) => (

                  <TableRow key={item.sivId}>

                    <TableCell component="th" scope="row">
                      {item.itemName}
                    </TableCell>
                    <TableCell align="right">5</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                  </TableRow>
                )) : null}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={this.props.updateSiv.bind(
            this,
            this.props.location.state.order,
            {
              sivStatus: "Approved",
            },
          )}>
            Approve

          </Button>

          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: 10,
            }}
          >
            {/* <Typography className={classes.textBody} variant="body2" color="">
              <b>Total :</b> {}
            </Typography> */}
          </Box>
          <div
            style={{
              paddingLeft: 20,
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Typography className={classes.textBody} variant="body2" color="">
                <b>Recipient Name :</b> _______________________
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 15,
              }}
            >
              <Typography className={classes.textBody} variant="body2" color="">
                <b>Recipient Signature :</b> _______________________
              </Typography>
            </Box>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sivs: state.sivReducer.sivs,
    siv_item: state.sivReducer.siv_item,

  };
}


export default connect(mapStateToProps, { getSiv, updateSiv })(withStyles(styles)(SIV));
