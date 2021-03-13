import React from "react";
import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import moment from "moment";

const ContactItem = ({contact, lastMsg, setContactSelected, active}) => {
    const {id, name, avatar } = contact.contact;
    return(
        <>
            <ListItem alignItems="flex-start"
                      className={active ? "active" : ""}
                      onClick={() => setContactSelected(contact)}
            >
                <ListItemAvatar>
                    <Avatar alt={name} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={lastMsg.msg}
                />
                <ListItemSecondaryAction>
                    <Typography variant="body2" component="span">{moment(lastMsg.date).format("hh:mm a")}</Typography>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component={"li"} />
        </>
    );
};

export default ContactItem;