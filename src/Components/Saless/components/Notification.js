import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Badge } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    notificationContext: {
        flex: 1,
    },
    notificationText: {
        fontSize: 5
    }
});
function generate(element) {
    return [0, 1, 2, 3, 4,7].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function Notification() {
    const classes = useStyles();
    const [dense] = React.useState(true);
    return (

        <React.Fragment>
            <Title
            > Urgent Notifications  </Title>
            <Grid item xs={12} md={12} >
                <div className={classes.notificationText}>
                    <List dense={dense}>
                        {generate(
                            <>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Badge color="secondary" variant="dot" >
                                            <Avatar style={{
                                                background: '#11669F',
                                                fontSize: 15
                                            }}>
                                                <NotificationsIcon />
                                            </Avatar>
                                        </Badge>
                                    </ListItemAvatar>

                                    <ListItemText className={classes.notificationText}
                                        primary="Notification Goes Here"
                                    />

                                </ListItem>
                                <Divider></Divider>

                            </>
                        )}
                    </List>
                </div>
            </Grid>
        </React.Fragment>
    );
}