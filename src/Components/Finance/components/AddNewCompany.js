import React, { Component } from "react";
import {
  Button,
  Divider,
  Typography,
  Grid,
  withStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import Error from "../../../error/error";
import API from "../../../api/API";
import { addCompany, getCompany } from "../../../store/company/action";

const styles = (theme) => ({
  container: {
    paddingLeft: 20,
    // marginRight: 200,
    paddingTop: 40,
    // paddingBottom: 40,
    height: "auto",
  },
  paper: {
    padding: 60,
    height: "auto",
    borderRadius: 20,
    // minWidth: 400
  },
  spacer: {
    margin: 20,
  },
  recentOrders: {
    padding: 20,
  },
  topOrders: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 22,

    borderRadius: 20,
    width: "auto",
  },
});

class AddNewCompany extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      generalManger: "",
      contactPerson: "",
      workingField: "",
      paymentOption: "",
      email: "",
      tinNumber: "",
      companys: [],
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.paymentOptionDropDown = this.paymentOptionDropDown.bind(this);
  }

  componentDidMount() {
    this.props.getCompany();
  }
  paymentOptionDropDown(e) {
    this.setState({
      paymentOption: e.target.value,
    });
  }
  submit = (e) => {
    e.preventDefault();
    const newCompany = {
      companyName: this.state.companyName,
      generalManger: this.state.generalManger,
      contactPerson: this.state.contactPerson,
      workingField: this.state.workingField,
      paymentOption: this.state.paymentOption,
      email: this.state.email,
      tinNumber: this.state.tinNumber,
    };
    this.props.addCompany(newCompany);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      companyName,
      generalManger,
      contactPerson,
      workingField,
      paymentOption,
      email,
      tinNumber,
    } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.recentOrders}>
        <React.Fragment>
          <Grid container xs={12}>
            <Grid item xs={6}>
            <div className={classes.container}>
            <Paper className={classes.paper}>
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  display: "flex",
                  justify: "flex-start",
                }}
              >
                <b>Add New Company To Work With</b>
              </Typography>
              <Divider className={classes.spacer} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="companyName"
                    name="companyName"
                    label="Company Name"
                    fullWidth
                    autoComplete="companyName"
                    value={companyName}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.companyName
                        ? this.props.errors.companyName
                        : null
                    }
                  />
                </Grid>


                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="generalManger"
                    name="generalManger"
                    label="General Manger"
                    fullWidth
                    autoComplete="generalManger"
                    value={generalManger}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.generalManger
                        ? this.props.errors.generalManger
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="contactPerson"
                    name="contactPerson"
                    label="Contact Person"
                    fullWidth
                    autoComplete="contactPerson"
                    value={contactPerson}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.contactPerson
                        ? this.props.errors.contactPerson
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    id="workingField"
                    name="workingField"
                    label="Working Field"
                    fullWidth
                    autoComplete="workingField"
                    value={workingField}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.workingField
                        ? this.props.errors.workingField
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    required
                    id="paymentOption"
                    name="paymentOption"
                    label="Payment Option"
                    fullWidth
                    value={paymentOption}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.paymentOption
                        ? this.props.errors.paymentOption
                        : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Company Email"
                    fullWidth
                    value={email}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.email ? this.props.errors.email : null
                    }
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="tinNumber"
                    name="tinNumber"
                    label="Tin Number"
                    fullWidth
                    value={tinNumber}
                    onChange={this.handleChange}
                  />
                  <Error
                    error={
                      this.props.errors.tinNumber
                        ? this.props.errors.tinNumber
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submit}
                    className={classes.button}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>



            </Grid>


          </Grid>




          <div className={classes.recentOrders}>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                display: "flex",
              }}
            >
              Recent Imports
            </Typography>
            {/* <RecentOrders /> */}
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                // size="small"
                // aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow className={classes.table}>
                      <TableCell className={classes.table}>
                        <b>ID</b>
                      </TableCell>
                      <TableCell className={classes.table}>
                        <b>Company Name</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>General Manger</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Contact Person</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Working Field</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Payment Option</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Email</b>
                      </TableCell>
                      <TableCell align="right">
                        <b>Tin Number</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.companys
                      .slice(0)
                      .reverse()
                      .map((company) => (
                        <TableRow key={company.companyId}>
                          <TableCell>
                            {company.companyId}
                          </TableCell>
                          <TableCell >
                            {company.companyName}
                          </TableCell>
                          <TableCell align="right">
                            {company.generalManger}
                          </TableCell>
                          <TableCell align='center'>
                            {company.contactPerson}
                          </TableCell>
                          <TableCell align="right">
                            {company.workingField}
                          </TableCell>
                          <TableCell align="right">
                            {company.paymentOption}
                          </TableCell>
                          <TableCell align="right">{company.email}</TableCell>
                          <TableCell align="right">
                            {company.tinNumber}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  companys: state.companyReducer.companys,
  errors: state.errorsReducer.errors,
});

export default connect(mapStateToProps, { addCompany, getCompany })(
  withStyles(styles)(AddNewCompany)
);
