import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Cover from '../../Assets/Trial.jpg';
import Card from '@material-ui/core/Card';
import history from '../../Routes/history';


const classes = ({
    root: {
        display: 1
    },
    loginForm: {
    },
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        // width: 200


    },
    main: {
        backgroundColor: '#11669F',
        height: '100vh',
        backgroundImage: `url(${Cover})`,
        // marginTop: 100
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 1,
        backgroundColor: '#11669F',
    },
    form: {
        padding: 10,
        paddingTop: 10,
        width: '100%', // Fix IE 11 issue.
        marginTop: 1

    },
    submit: {
        margin: 10,
        backgroundColor: '#11669F',
        alignItems: 'center',
        marginLeft: 115,
        width: 100,
        flex: 1,
        // marginBottom: 10
    },
});



class SignIn extends React.Component {

    render() {

        return (
            <>

                <div style={classes.main} >
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Card style={classes.paper}>
                            <Avatar style={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h3" variant="h5">
                                Sign in
      </Typography>
                            <form style={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Personal Identification Number"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={classes.submit}
                                    onClick={() => history.push('/UserList')}
                                >
                                    Sign In
                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
            </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>

                    </Container>        </div>
            </>

        );
    }

}

export default SignIn;