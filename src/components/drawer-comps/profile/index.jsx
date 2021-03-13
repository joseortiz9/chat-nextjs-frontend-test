import React from "react";
import {useAuth} from "../../../contexts/auth";
import ChatCompHeaderWrapper from "../../chat-comp-header";
import {
    Avatar,
    Box, Hidden,
    IconButton,
    List, Typography,
} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import {useConversation} from "../../../contexts/conversation";
import UserDataItem from "../user-data-item";

const Profile = () => {
    const { auth } = useAuth();
    const { setOpenProfileDrawer } = useConversation();

    return(
        <>
            <ChatCompHeaderWrapper withUpperSpace>
                <Hidden xsDown={true}><Box height="40px" /></Hidden>
                <Box alignSelf="start">
                    <IconButton aria-label="close profile drawer" color="inherit" onClick={() => setOpenProfileDrawer(false)}>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant="h5" component="span">My Profile</Typography>
                </Box>
            </ChatCompHeaderWrapper>
            <Box px={3} py={2}>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Box clone width="150px" height="150px"><Avatar alt={"U"} /></Box>
                </Box>
                <List>
                    <UserDataItem title={"Name"} value={"Test"} addon={"20 words"} />
                    <UserDataItem title={"Información de perfil"} value={"Trabajando..."} addon={"20 words"} />
                </List>
            </Box>
        </>
    );
}

export default Profile;