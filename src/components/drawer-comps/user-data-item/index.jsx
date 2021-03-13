import React from "react";
import {Divider, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    item: {
        '& .MuiListItemText-primary': {
            ...theme.typography.h5,
            color: theme.palette.primary.light,
            fontSize: "12px"
        },
        '& .MuiListItemText-secondary': {
            ...theme.typography.h4,
            fontSize: "15px"
        },
    },
}));

const UserDataItem = (props) => {
    const classes = useStyles();
    return(
        <>
            <ListItem alignItems="flex-start" className={classes.item}>
                <ListItemText
                    primary={props.title}
                    secondary={props.value}
                />
                {props.addon &&
                <ListItemSecondaryAction>
                    <Typography variant="body2" component="span">{props.addon}</Typography>
                </ListItemSecondaryAction>}
            </ListItem>
            <Divider variant="fullWidth" component={"li"} />
        </>
    )
};

export default UserDataItem;