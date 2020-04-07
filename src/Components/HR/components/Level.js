import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',

  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
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
}));

const Level = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleAltIcon className={classes.icon} />
            </Avatar>
          </Grid>
          <Grid item style={{
            marginRight: 20
          }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              FINANCE
            </Typography>
            <Typography variant="h3">45</Typography>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};

export default Level;
