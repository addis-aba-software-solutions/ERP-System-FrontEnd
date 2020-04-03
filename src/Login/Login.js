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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cover from '../Assets/Trial.jpg';
import Card from '@material-ui/core/Card';

function LoginForm() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
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
                        // fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
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

        </Container>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 1
    },
    loginForm: {
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,


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
        margin: theme.spacing(1),
        backgroundColor: '#11669F',
    },
    form: {
        padding: 10,
        paddingTop: 10,
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: '#11669F',
        alignItems: 'center',
        marginLeft: 115,
        width: 100,
        flex: 1,
        // marginBottom: 10
    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.main} >
                <Box style={{
                    height: 250
                }}>
                </Box>
                <LoginForm />
            </div>
        </>

    );
}