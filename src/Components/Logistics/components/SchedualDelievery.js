import React from 'react'
import { withStyles, makeStyles ,Grid, Badge, Typography } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';

const styles = makeStyles ((theme) =>({
    container: {
        padding: 20
    },
    shape: {
        backgroundColor: theme.palette.primary.main,
        width: 80,
        height: 80,
      },
      shapeCircle: {
        borderRadius: '50%',
      },

})
)

class SchedualDelievery extends React.Component {
    render() {
        const { classes } = this.props

const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

        return (
            <div className={classes.container}>

                <Typography variant="h5" color="textSecondary">
                    <b>Your Order's Status</b>
                </Typography>


                <Badge color="primary" overlap="circle" badgeContent=" ">
                    {circle}
                </Badge>
            </div>

        );
    }
}

export default withStyles(styles)(SchedualDelievery);
