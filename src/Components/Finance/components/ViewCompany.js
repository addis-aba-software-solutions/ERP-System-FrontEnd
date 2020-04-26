import React, { Component } from "react";
import {
  Button,
  Divider,
  Typography,
  Grid,
  withStyles,
  Paper,
} from "@material-ui/core";
import SearchBar from "../../SearchBar/SearchBar";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { getCompany, deleteCompany } from "../../../store/company/action";
import { connect } from "react-redux";

const styles = (theme) => ({
  table: {
    // minWidth: 650,
    padding: 20,
  },
  tableRow: {
    // minWidth: 650,
    padding: 15,
  },
  container: {
    padding: 20,
  },
  paper: {
    padding: 40,
    height: "auto",
    bitemRadius: 20,
  },
  spacer: {
    margin: 20,
  },
  recentitems: {
    padding: 20,
    paddingBottom: 20,
  },
  header: {
    marginLeft: 100,
  },
});

class ViewCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campanys: [],
      search: "",
    };
  }

  componentDidMount() {
    this.props.getCompany();
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.container}>
          <Grid
            container
            display="flex"
            justify="space-between"
            xs={12}
            style={{
              padding: 20,
              paddingBottom: 20,
            }}
          >
            <Grid item className={classes.header}>
              <Typography variant="h5" color="textSecondary">
                <b>Warehouse Name</b> : GurdSholla Warehouse
              </Typography>
              <Typography variant="h5" color="textSecondary">
                <b>Warehouse ID</b> : YTFHGFTY556HHG
              </Typography>
              <Typography
                style={{
                  marginRight: 100,
                }}
                variant="h5"
                color="textSecondary"
              >
                <b>Category</b> : Edibles
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                justify: "flex-end",
              }}
            >
              <SearchBar />
            </Grid>
          </Grid>
          <div></div>
          <Divider className={classes.spacer}></Divider>
          <Paper className={classes.paper}>
            <TableContainer>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
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
                  {this.props.companys.map((company) => (
                    <TableRow key={company.companyId}>
                      <TableCell align="right">{company.companyId}</TableCell>
                      <TableCell align="right">{company.companyName}</TableCell>
                      <TableCell align="right">
                        {company.generalManger}
                      </TableCell>
                      <TableCell align="right">
                        {company.contactPerson}
                      </TableCell>
                      <TableCell align="right">
                        {company.workingField}
                      </TableCell>
                      <TableCell align="right">
                        {company.paymentOption}
                      </TableCell>
                      <TableCell align="right">{company.email}</TableCell>
                      <TableCell align="right">{company.tinNumber}</TableCell>
                      <Button
                        align="right"
                        variant="contained"
                        color="primary"
                        onClick={this.props.deleteCompany.bind(
                          this,
                          company.companyId
                        )}
                        className={classes.button}
                      >
                        Delete
                      </Button>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  companys: state.companyReducer.companys,
  errors: state.errorsReducer.errors,
});

export default connect(mapStateToProps, { getCompany, deleteCompany })(
  withStyles(styles)(ViewCompany)
);
