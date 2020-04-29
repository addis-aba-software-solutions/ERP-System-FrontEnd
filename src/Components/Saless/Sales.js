import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeNavBar from '../Dashboard/HomeNavBar';
import { Paper, Card ,Grid } from '@material-ui/core'
import Notification from './components/Notification';
import Meetings from './components/Meetings';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#EBEBEB'
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },


}));

export default function Sales() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2} >
                <Grid item xs={9}>
                    <HomeNavBar />
                </Grid>
                <Grid item xs={3}>
                    <Card style={{
                        height: 100,
                        borderRadius: 20,
                        marginBottom: 10
                    }}>

                    </Card>
                    <Paper style={{
                        borderRadius: 20,
                        padding: 20
                    }}>
                        <Notification />
                    </Paper>
                    <Paper style={{
                        borderRadius: 20,
                        marginTop: 10,
                        padding: 20
                    }}>
                        <Meetings />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}