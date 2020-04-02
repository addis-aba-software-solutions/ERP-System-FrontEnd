import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Badge } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
    notificationContext: {
        flex: 1,
    },
    notificationText: {
        fontSize: 10
    }
});

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,23 ,23 ,23].map((value) =>
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



            <Grid item xs={12} md={12}>
                <div className={classes.notificationText}>
                    <List dense={dense}>
                        {generate(
                            <>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Badge color="secondary" variant="dot" >
                                            <Avatar style={{
                                                background: '#11669F',
                                                fontSize: 20
                                            }}>
                                                <NotificationsIcon />
                                            </Avatar>
                                        </Badge>
                                    </ListItemAvatar>
                                    
                                    <ListItemText className={classes.notificationText}
                                        primary="Some Notification Goes Here"
                                        
                                        secondary="Description Goes Here"
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <VisibilityIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>

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