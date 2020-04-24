import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Swal from "sweetalert2";
import history from "../../../../Routes/history";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import API from "../../../../api/API";
import { connect } from "react-redux";
import actions from "../../../../store/hr/action";
import Error from "../../../../error/error";

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      depValue: "",
      rolValue: "",
      levValue: "",
      deps: [],
      rol: [],
      lev: [],
      username: "",
      password: "",
    };
    this.submit = this.submit.bind(this);
    this.departmentDropDown = this.departmentDropDown.bind(this);
    this.levelDropDown = this.levelDropDown.bind(this);
    this.roleDropDown = this.roleDropDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getDepartment();
  }

  submit = () => {
    this.props.addNewEmployee(this.state);
  };

  departmentDropDown(e) {
    this.setState({
      depValue: e.target.value,
    });
    this.props.department.map((value, index) => {
      if (
        value.departmentId == e.target.value &&
        value.department_roles != null
      ) {
        this.setState({
          rol: value.department_roles,
        });
      }
    });
  }
  roleDropDown(e) {
    this.setState({
      rolValue: e.target.value,
    });
    this.state.rol.map((value) => {
      if (value.roleId == e.target.value && value.role_levels != null) {
        console.log(value.role_levels);
        this.setState({
          lev: value.role_levels,
        });
      }
    });
  }

  levelDropDown(e) {
    this.setState({
      levValue: e.target.value,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { error, newEmployeeInfo, deps, rol, lev, empId } = this.state;
    const { classes } = this.props;
    var depValue = this.state.depValue;
    var rolValue = this.state.rolValue;
    var levValue = this.state.levValue;
    var regionValue = this.state.regionValue;
    var cityValue = this.state.cityValue;
    var countryValue = this.state.countryValue;
    var termofEmploymentValue = this.state.termofEmploymentValue;
    var telephoneValue = this.state.telephoneValue;
    var emailValue = this.state.emailValue;
    var lastValue = this.state.lastValue;
    var firstValue = this.state.firstValue;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Employee Registration
              </Typography>

              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  Employee Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="fname"
                      onChange={this.handleChange}
                      value={firstValue}
                    />

                    <Error
                      error={
                        this.props.errors.firstName
                          ? this.props.errors.firstName
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="lname"
                      onChange={this.handleChange}
                      value={lastValue}
                    />
                    <Error
                      error={
                        this.props.errors.lastName
                          ? this.props.errors.lastName
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      autoComplete="Email"
                      onChange={this.handleChange}
                      value={emailValue}
                    />
                    <Error
                      error={
                        this.props.errors.email ? this.props.errors.email : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="telephone"
                      name="telephone"
                      label="Phone Number"
                      fullWidth
                      autoComplete="PhoneNumber"
                      onChange={this.handleChange}
                      value={telephoneValue}
                    />

                    <Error
                      error={
                        this.props.errors.telephone
                          ? this.props.errors.telephone
                          : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">
                        Term Of Employment
                      </InputLabel>
                      <Select
                        native
                        defaultValue=""
                        id="grouped-native-select"
                        name="termOfEmployment"
                        onChange={this.handleChange}
                        value={termofEmploymentValue}
                      >
                        <option aria-label="None" value="" />
                        <option>Permanent</option>
                        <option>Contract</option>
                        <option>Hourly</option>
                      </Select>

                      <Error
                        error={
                          this.props.errors.termOfEmployment
                            ? this.props.errors.termOfEmployment
                            : null
                        }
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="country"
                      onChange={this.handleChange}
                      value={countryValue}
                    />

                    <Error
                      error={
                        this.props.errors.country
                          ? this.props.errors.country
                          : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">
                        Department
                      </InputLabel>
                      <Select
                        onChange={this.departmentDropDown}
                        value={depValue}
                        native
                        id="grouped-native-select"
                      >
                        <option aria-label="None" value="" />
                        {deps.map((dep) => (
                          <option value={dep.departmentId}>
                            {dep.departmentName}
                          </option>
                        ))}
                      </Select>

                      <Error
                        error={
                          this.props.errors.department
                            ? this.props.errors.department
                            : null
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">
                        Role
                      </InputLabel>
                      <Select
                        onChange={this.roleDropDown}
                        value={rolValue}
                        native
                        id="grouped-native-select"
                      >
                        <option aria-label="None" value="" />
                        {this.state.rol.map((rols) => (
                          <option value={rols.roleId} key={rols.roleId}>
                            {rols.role}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <Error
                      error={
                        this.props.errors.roles ? this.props.errors.roles : null
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="grouped-native-select">
                        Level
                      </InputLabel>
                      <Select
                        onChange={this.levelDropDown}
                        value={levValue}
                        native
                        id="grouped-native-select"
                      >
                        <option aria-label="None" value="" />
                        {this.state.lev.map((levs) => (
                          <option value={levs.levelId} key={levs.levelId}>
                            {levs.level}
                          </option>
                        ))}
                      </Select>
                    </FormControl>

                    <Error
                      error={
                        this.props.errors.level ? this.props.errors.level : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="city"
                      onChange={this.handleChange}
                      value={cityValue}
                    />

                    <Error
                      error={
                        this.props.errors.city ? this.props.errors.city : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="region"
                      name="region"
                      label="Region"
                      fullWidth
                      autoComplete="region"
                      onChange={this.handleChange}
                      value={regionValue}
                    />

                    <Error
                      error={
                        this.props.errors.region
                          ? this.props.errors.region
                          : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <form className={classes.container} noValidate>
                      <TextField
                        fullWidth
                        id="date"
                        name="birthDate"
                        label="BirthDate"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleChange}
                      />
                    </form>

                    <Error
                      error={
                        this.props.errors.birthDate
                          ? this.props.errors.birthDate
                          : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <form className={classes.container} noValidate>
                      <TextField
                        fullWidth
                        id="date"
                        label="Hired Date"
                        name="hiredDate"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleChange}
                      />
                    </form>

                    <Error
                      error={
                        this.props.errors.hiredDate
                          ? this.props.errors.hiredDate
                          : null
                      }
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  Register
                </Button>
              </React.Fragment>
            </Paper>
          </MuiPickersUtilsProvider>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.hrReducer.loading,
    users: state.hrReducer.users,
    errors: state.hrReducer.errors,
    department: state.hrReducer.department,
  };
}
const mapDispatchToProps = {
  addNewEmployee: actions.addNewEmployee,
  department: actions.getDepartment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserProfile));
