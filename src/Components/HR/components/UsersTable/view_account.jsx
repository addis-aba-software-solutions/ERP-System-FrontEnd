import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { withStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@material-ui/core";
import SearchBar from "../../../SearchBar/SearchBar";
import actions from "./../../../../store/hr/action";
import { connect } from "react-redux";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const styles = (theme) => ({
  root: {
    padding: 10,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 15,
  },
  actions: {
    justifyContent: "flex-end",
  },
});

class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeInfo: [],
      search: "",
    };
  }

  componentWillMount() {
    this.props.getEmploye();
  }

  createAccountFun(employe) {
    var data = {
      username: employe.email,
      password: employe.email,
      email: employe.email,
      employe: employe.employeId,
      department: employe.department.departmentId,
      role: employe.roles.roleId,
      claim: employe.level.levelId,
    };
    this.props.addAccount(data);
  }

  deleteFun(email) {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be deleted permamently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        this.props.deleteAccount(email);
      }
    });
  }
  updateSearch(e) {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <>
          <SearchBar />
          <Card className={classes.root}>
            <CardContent className={classes.content}>
              <PerfectScrollbar>
                <div className={classes.inner}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <b>Id</b>
                        </TableCell>
                        <TableCell>
                          <b>First Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Last Name</b>
                        </TableCell>
                        <TableCell>
                          <b>Phone Number</b>
                        </TableCell>
                        <TableCell>
                          <b>Email Address</b>
                        </TableCell>
                        <TableCell>
                          <b>Department</b>
                        </TableCell>
                        <TableCell>
                          <b>Role</b>
                        </TableCell>
                        <TableCell>
                          <b>Claim</b>
                        </TableCell>
                        <TableCell align="center">
                          <b>Actions</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.employees.map((employeeInfos) => (
                        <TableRow key={employeeInfos.employeId}>
                          <TableCell>{employeeInfos.employeId}</TableCell>
                          <TableCell>{employeeInfos.firstName}</TableCell>
                          <TableCell>{employeeInfos.lastName}</TableCell>
                          <TableCell>{employeeInfos.telephone}</TableCell>
                          <TableCell>{employeeInfos.email}</TableCell>
                          <TableCell>
                            {employeeInfos.department.departmentName}
                          </TableCell>
                          <TableCell>{employeeInfos.roles.role}</TableCell>
                          <TableCell>{employeeInfos.level.level}</TableCell>
                          {!employeeInfos.has_account ? (
                            <TableCell align="center">
                              <IconButton
                                onClick={() =>
                                  this.createAccountFun(employeeInfos)
                                }
                              >
                                <PersonAddIcon fontSize="large" />
                              </IconButton>
                            </TableCell>
                          ) : (
                            <TableCell align="center">
                              <IconButton
                                onClick={() =>
                                  this.deleteFun(employeeInfos.email)
                                }
                              >
                                <RemoveCircleOutlineIcon
                                  color="secondary"
                                  fontSize="large"
                                />
                              </IconButton>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardContent>
          </Card>
        </>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    loading: state.hrReducer.loading,
    users: state.hrReducer.users,
    employees: state.hrReducer.employees,
    errors: state.hrReducer.errors,
  };
}
const mapDispatchToProps = {
  addAccount: actions.addAccount,
  getEmploye: actions.getEmploye,
  deleteAccount: actions.deleteAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UsersTable));
