import React from "react";
import {Box, Container, makeStyles} from "@material-ui/core";
import {ChatBoxStyles} from "./styles";
import MessagesWrapper from "./common/messages-box";
import ChatBoxHeader from "./common/header";
import MessageInputs from "./common/message-input";
import {useConversation} from "../../contexts/conversation";

const ChatBox = ({handlePushMsg}) => {
    const classes = makeStyles(theme => ChatBoxStyles(theme))();
    const { openSearchDrawer, contactInfoDrawer } = useConversation();
    return(
        <Box className={classes.main + (openSearchDrawer || contactInfoDrawer ? " with-drawer": "")}>
            <main>
                <ChatBoxHeader classes={classes} />
                <Container className={classes.messagesContainer}>
                    <MessagesWrapper />
                </Container>
                <Box py={1} px={2} display="flex" alignItems="center" position="absolute" bottom="0" left="0" width="100%" className={classes.InputContainer}>
                    <MessageInputs handlePushMsg={handlePushMsg} />
                </Box>
            </main>
        </Box>
    );
};

export default ChatBox;