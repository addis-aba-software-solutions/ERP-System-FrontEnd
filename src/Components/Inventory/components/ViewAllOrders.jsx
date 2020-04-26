import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import SearchBar from "../../SearchBar/SearchBar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PrintIcon from "@material-ui/icons/Print";
import SIV from "./SIV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const styles = {
  table: {
    padding: 20,
    borderRadius: 20,
  },
  paper: {
    padding: 30,
    borderRadius: 20,
  },
};

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(1, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(1, "Eclair", 262, 16.0, 24, 6.0),
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(1, "Gingerbread", 356, 16.0, 49, 3.9),
];

class ViewAllOrders extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <SearchBar />
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead
              style={{
                padding: 30,
              }}
            >
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>
                  <b>Order Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>Order Number</b>
                </TableCell>
                <TableCell align="center">
                  <b>Company</b>
                </TableCell>
                <TableCell align="center">
                  <b>Sales Person</b>
                </TableCell>
                <TableCell align="center">
                  <b>Order Date</b>
                </TableCell>
                <TableCell align="center">
                  <b>Status</b>
                </TableCell>
                <TableCell align="center">
                  <b>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>#</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <Grid container spacing={2}>
                        <Grid item>
                          {/* <PDFDownloadLink
                            document={<SIV />}
                            fileName="Invoice.pdf"
                            style={{
                              textDecoration: "none",
                              padding: "10px",
                              color: "#4a4a4a",
                              // backgroundColor: "#f2f2f2",
                              // border: "1px solid #4a4a4a",
                            }}
                          >
                            {({ loading }) =>
                              loading ? <AutorenewIcon /> : <PrintIcon />
                            }
                          </PDFDownloadLink> */}
                        </Grid>
                        <Grid item>
                          <Typography>Generate SIV</Typography>
                        </Grid>
                      </Grid>
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
}
export default withStyles(styles)(ViewAllOrders);
