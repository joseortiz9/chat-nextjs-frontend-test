import React, {useEffect, useRef, useState} from 'react';
import {
    Avatar,
    Box, Drawer, Hidden, IconButton,
    List,
    makeStyles, Menu, MenuItem,
    Typography
} from "@material-ui/core";
import {ChatBubbleOutline, MoreVert, Search} from '@material-ui/icons';
import {SearchInput} from "../forms";
import ContactItem from "./common/contact-item";
import {ChatSidebarStyles} from "./styles";
import {useConversation} from "../../contexts/conversation";
import {useAuth} from "../../contexts/auth";
import ChatCompHeaderWrapper from "../chat-comp-header";
import {useInputValue} from "../../hooks/useInputValue";
import {useMenuToggle} from "../../hooks/useMenuToggle";
import Link from "next/link";

const ChatSidebar = ({data}) => {
    const classes = makeStyles(theme => ChatSidebarStyles(theme))();
    const { contactSelected, setContactSelected, setOpenNewChatDrawer, setOpenProfileDrawer } = useConversation();
    const { auth } = useAuth();
    const chatsListStart = useRef(null);
    const searchTextInput = useInputValue('');
    const { anchorEl, open, handleMenuOpen, handleMenuClose } = useMenuToggle();
    const [filteredContacts, setFilterContacts] = useState([]);

    useEffect(() => {
        filterContacts(data, searchTextInput.value);
    }, [searchTextInput.value]);

    function filterContacts(data, search) {
        const result = data.filter(({ contact }) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilterContacts(result);
    }

    return (
        <aside className={classes.paneSidebar}>
            <div style={{ float: 'right', clear: 'both' }} ref={chatsListStart} id="chatsListStart" />
            <div>
                <ChatCompHeaderWrapper extraStyles={classes.header}>
                    <Box display="flex" alignItems="center">
                        <Box component={Avatar} mr={1} alt={/*auth.user.avatar*/"U"} />
                        <Typography variant="h5">Chats</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton aria-label="start new chat" onClick={() => setOpenNewChatDrawer(true)} color="inherit">
                            <ChatBubbleOutline />
                        </IconButton>
                        <div>
                            <IconButton aria-label="my profile" aria-controls="options-profile-box" aria-haspopup="true" color="inherit" onClick={handleMenuOpen}>
                                <MoreVert />
                            </IconButton>
                            <Menu id="options-profile-box"
                                  anchorEl={anchorEl}
                                  getContentAnchorEl={null}
                                  open={open}
                                  onClose={handleMenuClose}
                                  keepMounted
                                  anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                  transformOrigin={{vertical: 'top', horizontal: 'right'}}
                            >
                                <MenuItem onClick={() => {handleMenuClose(null); setOpenProfileDrawer(true);}}>My profile</MenuItem>
                                <Link href="/auth/log-out"><MenuItem>Log out</MenuItem></Link>
                            </Menu>
                        </div>
                    </Box>
                </ChatCompHeaderWrapper>
                <Hidden xsDown={true}>
                    <SearchInput {...searchTextInput} className={classes.searchField} />
                </Hidden>
            </div>

            <List className={classes.contactsPane}>
                {
                    filteredContacts.map(item =>
                        <ContactItem
                            key={item.contact.name}
                            contact={item}
                            lastMsg={item.messages[0]}
                            setContactSelected={setContactSelected}
                            active={contactSelected && contactSelected.contact.id === item.contact.id}
                        />)
                }
            </List>
        </aside>
    );
};

export default ChatSidebar;