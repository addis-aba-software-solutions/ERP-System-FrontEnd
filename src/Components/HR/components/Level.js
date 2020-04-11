import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



const useStyles = makeStyles(theme => ({
    root: {
        // height: '100%',
        padding: 10

    },
    content: {
        alignItems: 'center',
        display: 'flex',
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        fontWeight: 400
    },
    avatar: {
        marginTop: 10,
        padding: 10,
        marginLeft: 10,
        backgroundColor: '#11669F',
        height: 70,
        width: 70
    },
    icon: {
        height: 32,
        width: 32
    },
    Card: {
        borderRadius: 15,
        width: 340,
        padding: 10,
        display: 'flex',
        justify: 'center',
        marginLeft: 30,
        marginBottom: 10
    },
    title: {
        marginLeft: 20,
        paddingBottom: 10
    },
    subtitle: {
        marginLeft: 80
    }

}));



const Level = props => {
    const classes = useStyles();

    return (
        <Grid container className={classes.content}>
            <Card className={classes.Card}
                onClick={() => alert('Finance')}
            >
                <CardContent>
                    <Grid
                        container
                        display='flex'
                        justify="space-between"
                    >
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <PeopleAltIcon className={classes.icon} />
                            </Avatar>
                        </Grid>
                        <Grid item style={{
                            marginTop: 20,
                            paddingRight: 40
                        }}>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                // gutterBottom
                                variant="h4"
                            >
                                Junior
            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card className={classes.Card}
            >
                <CardContent>

                    <Grid
                        container
                        display='flex'
                        justify="space-between"
                    >
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <PeopleAltIcon className={classes.icon} />
                            </Avatar>
                        </Grid>
                        <Grid item style={{
                            marginTop: 20,
                            paddingRight: 40
                        }}>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                // gutterBottom
                                variant="h4"
                            >
                                Senior
            </Typography>

                        </Grid>

                    </Grid>


                </CardContent>
            </Card>

            <Card className={classes.Card}
            >
                <CardContent>

                    <Grid
                        container
                        display='flex'
                        justify="space-between"
                    >
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <PeopleAltIcon className={classes.icon} />
                            </Avatar>
                        </Grid>
                        <Grid item style={{
                            marginTop: 20,
                            paddingRight: 40
                        }}>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                // gutterBottom
                                variant="h4"
                            >
                                Someth
            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Card className={classes.Card}
            >
                <CardContent>
                    <Grid
                        container
                        display='flex'
                        justify="space-between"
                    >
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <PeopleAltIcon className={classes.icon} />
                            </Avatar>
                        </Grid>
                        <Grid item style={{
                            marginTop: 20,
                            paddingRight: 40
                        }}>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                // gutterBottom
                                variant="h4"
                            >
                                Someth
                             </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Level;
