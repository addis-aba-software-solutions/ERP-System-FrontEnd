import React from 'react';
import {
  withStyles,
  Box,
  Paper,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import Logo from '../../../Assets/NAZO.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { getSiv, updateSiv } from '../../../store/Siv/action';
import SIVPdf from './Printable_SIV';
import PrintIcon from '@material-ui/icons/Print';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const styles = {

  pdf: {
    width: '792px',
    height: '450px',
    backgroundColor: '#FFFFFF',
    marginLeft: 100,
    padding: 5,
  },
  Paper: {
    backgroundColor: '#4083B0',
    height: 130,
    borderRadius: 0,
    padding: 10,
  },
  text: {
    color: '#FFFFFF',
  },
  Header: {
    padding: 30,
  },
  logo: {
    height: 50,
    width: 80,
    marginTop: 10,
  },
  SIVStyling: {
    padding: 30,
  },
  table: {
    padding: 10,
  },
  textBody: {
    color: '#686868',
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: '#686868',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    // margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderColor: '#686868',
    borderBottomColor: '#000',
    backgroundColor: '#11669F',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderColor: '#686868',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  tableCellHeader: {
    margin: "auto",
    fontSize: 12,
    color: '#FFFFFF'
  },
  tableCell: {
    margin: "auto",
    color: '#686868',
    fontSize: 12
  },
};
class SIV extends React.Component {
  componentDidMount() {

    this.props.getSiv(this.props.location.state.order);

  }
  submit(e) {
    e.preventDefault();
  }


  render() {
    const { classes } = this.props;
    return (
      this.props.sivs ? [this.props.sivs].map(item => (
        < div >
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
                      NAZO
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    gutterBottom
                  >
                    <b>SIV Status : </b> {item.sivStatus}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    gutterBottom
                  >
                    <b>Warehouse Name : </b> {item.warehouseName}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    gutterBottom
                  >
                    <b>Issued By :</b> {localStorage.getItem('username')}
                  </Typography>
                  <Typography
                    className={classes.text}
                    variant="body2"
                    gutterBottom
                  >
                    <b>SIV Date :</b> {item.sivDate}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
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
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.siv_item
                    ? this.props.siv_item.map((item) => (
                      <TableRow key={item.sivId}>
                        <TableCell component="th" scope="row">
                          {item.itemName}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                      </TableRow>
                    ))
                    : null}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingTop: 10,
              }}
            >
            </Box>
            <div
              style={{
                paddingLeft: 20,
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography
                  className={classes.textBody}
                  variant="body2"
                  color=""
                >
                  <b>Recipient Name :</b> _______________________
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingTop: 15,
                }}
              >
                <Typography
                  className={classes.textBody}
                  variant="body2"
                  color=""
                >
                  <b>Recipient Signature :</b> _______________________
                </Typography>
              </Box>
            </div>

          </div>
          <div style={{
            marginLeft: 400,
            paddingTop: 20
          }}>
            {

              this.props.success ? (<PDFDownloadLink
                document={
                  <SIVPdf siv_item={item ? item.siv_item : null} sivs={item ? item : null} />
                }
                fileName={"SIV_" + item.sivId + ".pdf"}
                style={{
                  textDecoration: 'none',

                }}
              >
                {({ loading }) => (loading ?
                  <AutorenewIcon fontSize='large' /> :
                  <Grid >
                    <PrintIcon style={{
                      marginLeft: 8,
                      color: '#11669F'

                    }} fontSize='large' />
                    <Typography style={{
                      color: '#818181'

                    }}
                    >
                      Print SIV
</Typography>
                  </Grid>
                )}
              </PDFDownloadLink>) : null





            }

            <Grid item style={{
              marginLeft: 60,
              paddingTop: 10,
            }}>
            </Grid>
          </div>

        </div >

      )
      ) : null

    );
  }
}

function mapStateToProps(state) {
  return {
    sivs: state.sivReducer.sivs,
    siv_item: state.sivReducer.siv_item,
    success: state.sivReducer.success,

  };
}

export default connect(mapStateToProps, { getSiv })(
  withStyles(styles)(SIV)
);
