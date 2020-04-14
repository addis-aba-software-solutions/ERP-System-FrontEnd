import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Divider, Typography, Avatar } from '@material-ui/core';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import MoneyIcon from '@material-ui/icons/Money';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchBar from '../../SearchBar/SearchBar'


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
        width: 460,
        // padding: 20,
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

const Category = props => {
    // const { className, } = props;

    const classes = useStyles();

    return (
        <div>
            <div style={{
                margin: 20
            }}>
                <Grid container display='flex' justify='space-between' className={classes.header}>
                    <Grid item style={{
                        paddingLeft: 50,
                        marginTop: 10
                    }}>
                        <Typography variant='h4' color='textSecondary'>
                            <b>Employees</b>
                        </Typography>
                        <Typography variant='h6' style={{
                            marginLeft: 50
                        }}>
                            Based on Category
                        </Typography>
                    </Grid>
                    <Grid item>
                        <SearchBar />
                    </Grid>
                </Grid>
            </div>

            <Divider style={{
                marginBottom: 20
            }}>
            </Divider>

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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    Finance
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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    Logistics
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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    IT Technicians
            </Typography>

                            </Grid>

                        </Grid>


                    </CardContent>
                </Card>      <Card className={classes.Card}
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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    Procurment
            </Typography>

                            </Grid>

                        </Grid>


                    </CardContent>
                </Card>      <Card className={classes.Card}
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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    Sales
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
                                marginTop: 30,
                                paddingRight: 40
                            }}>
                                <Typography
                                    className={classes.title}
                                    color="textSecondary"
                                    // gutterBottom
                                    variant="h5"

                                >
                                    Writing Materials
            </Typography>

                            </Grid>

                        </Grid>


                    </CardContent>
                </Card>

            </Grid>
        </div>

    );
};

export default Category;
