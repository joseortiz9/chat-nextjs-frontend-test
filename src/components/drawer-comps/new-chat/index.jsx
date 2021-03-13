import React from "react";
import ChatCompHeaderWrapper from "../../chat-comp-header";
import {
    Avatar,
    Box, Hidden,
    IconButton,
    List, Typography,
} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import {useConversation} from "../../../contexts/conversation";
import {SearchInput} from "../../forms";
import {useInputValue} from "../../../hooks/useInputValue";

const NewChat = () => {
    const { setOpenNewChatDrawer } = useConversation();
    const searchTextInput = useInputValue('');

    return(
        <>
            <ChatCompHeaderWrapper withUpperSpace>
                <Hidden xsDown={true}><Box height="40px" /></Hidden>
                <Box alignSelf="start">
                    <IconButton aria-label="close profile drawer" color="inherit" onClick={() => setOpenNewChatDrawer(false)}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h5" component="span">New Chat</Typography>
                </Box>
            </ChatCompHeaderWrapper>
            <Box px={3} py={2}>
                <SearchInput {...searchTextInput} />
                <List>

                </List>
            </Box>
        </>
    );
}

export default NewChat;