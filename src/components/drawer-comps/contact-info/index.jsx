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
import UserDataItem from "../user-data-item";

const ContactInfo = () => {
    const { contactSelected, setContactInfoDrawer, setOpenDeleteDiag } = useConversation();
    return(
        <>
            <ChatCompHeaderWrapper>
                <Typography variant="h5" component="span">My Profile</Typography>
                <IconButton aria-label="close contact info drawer" color="inherit" onClick={() => setContactInfoDrawer(false)}>
                    <Cancel />
                </IconButton>
            </ChatCompHeaderWrapper>
            <Box px={3} py={2}>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Box clone width="150px" height="150px"><Avatar alt={"U"} /></Box>
                </Box>
                {contactSelected &&
                <List>
                    <UserDataItem title={"Name"} value={contactSelected.contact.name} />
                    <UserDataItem title={"Información de perfil"} value={"Trabajando..."} />
                    <UserDataItem title={"Extra with no sense"} value={contactSelected.contact.id} />
                </List>}
                <Button onClick={()=>setOpenDeleteDiag(true)} variant="contained" color="secondary">Delete chat</Button>
            </Box>
        </>
    );
}

export default ContactInfo;