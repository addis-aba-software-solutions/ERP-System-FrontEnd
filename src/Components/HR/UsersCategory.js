import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import Budget from './Budget/Budget';
// import TotalUsers from '../Dashboard/Budget/TotalUsers';
// import TasksProgress from '../Dashboard/Budget/TasksProgress';
import Level from './components/Level';
import SearchBar from '../SearchBar/SearchBar'


const useStyles = makeStyles(theme => ({
    root: {
        padding: 10
    },
    content: {
        marginTop: 10
    },
    budgetTracking: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        width: 250,
        borderRadius: 20
    },
}));

const UsersCategory = () => {
    const classes = useStyles();

    const [users] = useState(mockData);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <SearchBar />

                <Grid container
                // justify="center"
                    // justify="space-between"
                    spacing={4} style={{
                        // marginLeft: 20,
                        padding: 10,
                    }}>
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>   
                    <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>                       <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>                       <Grid item>
                        <Paper className={classes.budgetTracking}>
                            <Level />
                        </Paper>
                    </Grid>    
                </Grid>
                {/* <SearchBar /> */}

                <UsersToolbar />

                <UsersTable users={users} />
            </div>
        </div>
    );
};

export default UsersCategory;
