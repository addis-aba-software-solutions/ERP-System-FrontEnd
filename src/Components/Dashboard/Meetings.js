import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import AlarmIcon from '@material-ui/icons/Alarm';




const useStyles = makeStyles({
    notificationContext: {
        flex: 1,
    },
    notificationText: {
        fontSize: 10
    }
});

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function Meetings() {
    const classes = useStyles();
    const [dense] = React.useState(true);
    return (

        <
        React.Fragment >

        <
        Title >
        Upcoming Meetings < /Title> <
        Grid item xs = { 12 }
        md = { 12 } >
        <
        div className = { classes.notificationText } >
        <
        List dense = { dense } > {
            generate( <
                >
                <
                ListItem >
                <
                ListItemAvatar >
                <
                Avatar style = {
                    {
                        background: '#FFE600',
                        fontSize: 20
                    }
                } >
                <
                AlarmIcon / >
                <
                /Avatar> < /
                ListItemAvatar >

                <
                ListItemText className = { classes.notificationText }
                primary = "Meeting At 3:30"

                secondary = "Today" /
                >
                {
                    /* <ListItemSecondaryAction>
                                                            <IconButton edge="end" aria-label="delete">
                                                                <VisibilityIcon />
                                                            </IconButton>
                                                        </ListItemSecondaryAction> */
                }

                <
                /ListItem> <
                Divider > < /Divider>

                <
                />
            )
        } <
        /List> < /
        div > <
        /Grid> < /
        React.Fragment >
    );
}