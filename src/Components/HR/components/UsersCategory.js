import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchBar from '../../SearchBar/SearchBar';
import Level from './Level'
import UsersTable from './UsersListTable'






const useStyles = makeStyles((theme) => ({
    root: {
        padding:20
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
    card: {
        borderRadius: 10
    },
    spacer: {
        margin: 5
    }
}));


export default function UsersCategory() {

    const classes = useStyles();

    return (
        <div >
            <React.Fragment >
                <CssBaseline />
                <div style={{
                    margin:20
                }}>
                <SearchBar />
                </div>

                <Divider className={classes.spacer}></Divider>
                <Level />
                <Divider></Divider>

                        <main className={classes.root}>
                            {/* <div className={classes.appbarShift}></div> */}
                            <UsersTable />

                        </main>
            </React.Fragment>
        </div>

    )
}