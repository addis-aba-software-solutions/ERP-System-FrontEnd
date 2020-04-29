import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/login/action";
import classes from "../../layout_resource/layout_resource";
import SpinerLoader from "../../loader/loader";
import { red } from "@material-ui/core/colors";
import Error from "../../error/error";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.setState({ submitted: true });
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    console.log("cccccccccccccccccccccccc");
    console.log(this.props.isLogin);

    if (this.props.isLogin) return <Redirect to="/" />;

    return (
      <div>
        <div style={classes.main}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              style={{
                height: 300,
              }}
            ></Box>
            <Card style={classes.paper}>
              <Avatar style={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h3" variant="h5">
                Sign in
              </Typography>
              <div style={classes.form}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  onChange={this.handleChange}
                />
                <Error
                  error={
                    this.props.errors.username
                      ? this.props.errors.username
                      : null
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
                <Error
                  error={
                    this.props.errors.password
                      ? this.props.errors.password
                      : null
                  }
                />
                <Error
                  error={
                    this.props.errors.Unauthorized
                      ? this.props.errors.Unauthorized
                      : null
                  }
                />
                {/* {this.errorMessage } */}
                {this.props.loading ? (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={classes.submit}
                  >
                    <SpinerLoader />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={classes.submit}
                    onClick={() => this.handleSubmit()}
                  >
                    Sign In
                  </Button>
                )}

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Container>{" "}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loginReducer.loading,
    users: state.loginReducer.users,
    errors: state.loginReducer.errors,
    isLogin: state.loginReducer.isLogin,
  };
}
const mapDispatchToProps = {
  login: actions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
