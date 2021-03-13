import React from "react";
import ChatCompHeaderWrapper from "../../chat-comp-header";
import {
    Avatar,
    Box, Button,
    IconButton,
    List, Typography,
} from "@material-ui/core";
import {Cancel} from "@material-ui/icons";
import {useConversation} from "../../../contexts/conversation";
import {SearchInput} from "../../forms";
import {useInputValue} from "../../../hooks/useInputValue";

const SearchMsg = () => {
    const { setOpenSearchDrawer, contactSelected } = useConversation();
    const searchTextInput = useInputValue('');
    return(
        <>
            <ChatCompHeaderWrapper>
                <Typography variant="h5" component="span">Search Messages</Typography>
                <IconButton aria-label="close message search drawer" color="inherit" onClick={() => setOpenSearchDrawer(false)}>
                    <Cancel />
                </IconButton>
            </ChatCompHeaderWrapper>
            <Box px={3} py={2}>
                <SearchInput {...searchTextInput} />
                <Box mt={2}>
                    <Box component={Typography} variant="body2" textAlign="center">
                        Buscar mensajes con {contactSelected && contactSelected.contact.name}
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default SearchMsg;