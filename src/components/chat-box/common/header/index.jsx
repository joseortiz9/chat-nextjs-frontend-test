import React, {useState} from "react";
import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography, useMediaQuery,
} from "@material-ui/core";
import moment from "moment";
import {MoreVert, Search, ArrowBack} from "@material-ui/icons";
import {useConversation} from "../../../../contexts/conversation";
import ChatCompHeaderWrapper from "../../../chat-comp-header";
import {useMenuToggle} from "../../../../hooks/useMenuToggle";


const ChatBoxHeader = ({classes}) => {
    const { contactSelected, setOpenSearchDrawer, setContactInfoDrawer, setOpenDeleteDiag } = useConversation();
    const { name, lastTime } = contactSelected.contact;
    const { anchorEl, open, handleMenuOpen, handleMenuClose } = useMenuToggle();
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const goBackToChats = (e) => {
        const chatsListStart = document.getElementById("chatsListStart")
        chatsListStart.scrollIntoView();
    }

    return(
        <ChatCompHeaderWrapper extraStyles={classes.header}>
            <Box display="flex" alignItems="center">
                {isDesktop ? (
                    <Box component={Avatar} mr={1} alt={name} />
                ) : (
                    <IconButton aria-label="go back to chats" onClick={goBackToChats} color="inherit">
                        <ArrowBack />
                        <Box component={Avatar} mr={1} alt={name} />
                    </IconButton>
                )}
                <Box display="flex" flexDirection="column">
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h5" className={classes.lastTimeSubTitle}>
                        Was here {moment(lastTime).fromNow()}
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center">
                <IconButton aria-label="search for a chat" aria-controls="chat-box-header" onClick={() => setOpenSearchDrawer(true)} color="inherit">
                    <Search />
                </IconButton>
                <div>
                    <IconButton aria-label="profile of selected contact" aria-controls="options-chat-box" aria-haspopup="true" color="inherit" onClick={handleMenuOpen}>
                        <MoreVert />
                    </IconButton>
                    <Menu id="options-chat-box"
                          anchorEl={anchorEl}
                          getContentAnchorEl={null}
                          open={open}
                          onClose={handleMenuClose}
                          keepMounted
                          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                          transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    >
                        <MenuItem onClick={() => {handleMenuClose(null);setContactInfoDrawer(true)}}>Contact info</MenuItem>
                        <MenuItem onClick={() => {handleMenuClose(null);setOpenDeleteDiag(true)}}>Delete chat</MenuItem>
                    </Menu>
                </div>
            </Box>
        </ChatCompHeaderWrapper>
    );
};

export default ChatBoxHeader;