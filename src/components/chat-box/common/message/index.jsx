import React from "react";
import {Avatar, Box, Paper, Typography} from "@material-ui/core";
import moment from "moment";

const ChatMessage = ({ id, msg, isMainUser, date, avatar }) => {
    return(
        <Box display="flex" justifyContent={isMainUser ? 'flex-start' : 'flex-end'} my={3}>
            <Box display="flex"
                 maxWidth="70%"
                 className={`chat-message ${isMainUser ? 'owner' : 'other'}`}
            >
                {isMainUser &&
                    <Box component={Avatar}
                         alt={avatar}
                         src={avatar}
                         mr={1} width="28px" height="28px"
                    />
                }
                <Box component={Paper} position="relative" borderRadius={12} p={1}>
                    {msg}
                    <Typography variant="body2" component="h5">{moment(date).format("hh:mm a")}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ChatMessage;