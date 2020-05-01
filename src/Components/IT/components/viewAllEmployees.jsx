import React from "react";
import { IconButton } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "../../SearchBar/SearchBar";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, Grid, Box } from "@material-ui/core";

function createData(id, name, Department, Level, Salary, Role, Account) {
  return { id, name, Department, Level, Salary, Role, Account };
}

const rows = [
  createData(
    "HHGY665",
    "Samuel Kassa",
    "Logistics",
    "Junior",
    "12000",
    "12/10/2020",
    <IconButton disabled>
      <CheckCircleRoundedIcon
        fontSize="large"
        style={{
          color: "#00970F",
        }}
      />
    </IconButton>
  ),
  createData(
    "UGF776",
    "Yelekal Solomon",
    "Logistics",
    "Senior",
    "12000",
    "12/10/2015",
    <IconButton disabled>
      <CheckCircleRoundedIcon
        fontSize="large"
        style={{
          color: "#00970F",
        }}
      />
    </IconButton>
  ),
  createData(
    "UHYG66",
    "Endalk Belachew",
    "Logistics",
    "Junior",
    "12000",
    "12/10/2013",
    <IconButton>
      <PersonAddIcon fontSize="large" />
    </IconButton>
  ),
  createData(
    "UHYG66",
    "Endalk Belachew",
    "Logistics",
    "Junior",
    "12000",
    "12/10/2013",
    <IconButton>
      <PersonAddIcon fontSize="large" />
    </IconButton>
  ),
  createData(
    "UGF776",
    "Yelekal Solomon",
    "Logistics",
    "Senior",
    "12000",
    "12/10/2015",
    <IconButton disabled>
      <CheckCircleRoundedIcon
        fontSize="large"
        style={{
          color: "#00970F",
        }}
      />
    </IconButton>
  ),
  createData(
    "UHYG66",
    "Endalk Belachew",
    "Logistics",
    "Junior",
    "12000",
    "12/10/2013",
    <IconButton>
      <PersonAddIcon fontSize="large" />
    </IconButton>
  ),
];

const handlePopUp = () => {
  let value = this.state.setOpen;
  this.setState({ setOpen: !value });
};

class viewAllEmployees extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      setOpen: false,
      redirect: false,
    };
  }
  handleClickOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleClose = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handlePopUp() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <>
        <Grid container xs={12} display="flex" justify="space-between">
          <Grid item xs={6}>
            <Typography
              variant="h4"
              style={{
                marginTop: 30,
                marginLeft: 30,
              }}
            >
              List Of Companies
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SearchBar search={this.search} updateSearch={this.updateSearch} />
          </Grid>
        </Grid>
        <div
          style={{
            padding: 40,
          }}
        >
          <SearchBar />
          <Paper
            style={{
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Table aria-label="caption table">
              <caption>A basic table example with a caption</caption>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Employee ID</b>
                  </TableCell>
                  <TableCell>
                    <b>Employee Name</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Department</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Level</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Salary</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Role</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Account</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell scope="row">{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.Department}</TableCell>
                    <TableCell align="center">{row.Level}</TableCell>
                    <TableCell align="center">{row.Salary}</TableCell>
                    <TableCell align="center">{row.Role}</TableCell>
                    <TableCell align="center">
                      <div onClick={() => this.handlePopUp()}>
                        {row.Account}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Account Creation</DialogTitle>
            <DialogContent
              style={{
                minwidth: 800,
                paddingLeft: 100,
                paddingRight: 100,
              }}
            >
              <DialogContentText>
                Create An Account For <b>UserName</b>
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="User Name"
                type="email"
                fullWidth
              />
              <Box
                style={{
                  height: 10,
                }}
              ></Box>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="email"
                fullWidth
              />

              <Box
                style={{
                  height: 10,
                }}
              ></Box>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Confirm Password"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Grid display="flex" justify="center" spacing={14}>
                <Button
                  variant="contained"
                  onClick={this.handleClose}
                  color="secondary"
                >
                  Create Account
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
              </Grid>
            </DialogActions>
          </Dialog>
        </div>
      </>
    );
  }
}

export default viewAllEmployees;
