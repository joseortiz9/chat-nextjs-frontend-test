import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@material-ui/core";
import {ChatSidebar, WelcomeBox, ChatBox} from "../../components";
import {fetchApiAndData} from "../../utils/api";
import {useConversation} from "../../contexts/conversation";
import ChatDrawer from "../../components/drawer";
import {NewChat, Profile, ContactInfo, SearchMsg} from "../../components/drawer-comps";
import DeleteChatDialog from "../../components/chat-box/common/delete-dialog";
import {generateDefaultChat, generateFakeData, Message} from "../../utils/fakerGenerator";

const ChatsView = ({chats}) => {
    const { contactSelected, setContactSelected, openProfileDrawer, setOpenProfileDrawer,
        openNewChatDrawer, setOpenNewChatDrawer, openSearchDrawer, setOpenSearchDrawer,
        contactInfoDrawer, setContactInfoDrawer } = useConversation();
    const [conversations, setConversations] = useState(chats.data);

    const clearChat = () => {
        // const index = conversations.findIndex(x => x.contact.id === contactSelected.contact.id);
        // setConversations({...conversations, [index]: { contact: contactSelected.contact, messages: [] }});
        const noMsg = {
            contact: contactSelected.contact,
            messages: [],
        };
        setContactSelected(noMsg);
    };
    const pushMsg = (msg) => {
        // const index = conversations.findIndex(x => x.contact.id === contactSelected.contact.id);
        // const withNewData = {...conversations};
        // withNewData[index] = {
        //     contact: contactSelected.contact,
        //     messages: [...conversations[index].messages, new Message(true, msg, new Date())],
        // };
        // setConversations(withNewData);
        //console.log(msg,withNewData[index], conversations[index]);
        const newMsg = {
                contact: contactSelected.contact,
                messages: [...contactSelected.messages, new Message(true, msg, new Date())],
            };
        setContactSelected(newMsg);
    };



    useEffect(() => {
        setOpenSearchDrawer(false);
        setContactInfoDrawer(false);
    }, [contactSelected]);

    return (
        <>
            <Box component={Grid} container spacing={0} position="relative" width="100%" height="100%">
                <Box clone height="100%" maxHeight="100%" position="relative">
                    <Grid item xs={12} sm={4} md={4}>
                        <ChatSidebar data={conversations} />
                        <ChatDrawer side="left" open={openProfileDrawer} close={()=>setOpenProfileDrawer(false)}><Profile/></ChatDrawer>
                        <ChatDrawer side="left" open={openNewChatDrawer} close={()=>setOpenNewChatDrawer(false)}><NewChat/></ChatDrawer>
                    </Grid>
                </Box>
                <Box clone height="100%" maxHeight="100%" display="flex" justifyContent="center" position="relative">
                    <Grid item xs={12} sm={8} md={8}>
                        {contactSelected && contactSelected.contact.id ?
                            (<ChatBox handlePushMsg={pushMsg} />) :
                            (<Box height="100%" display="flex" alignItems="center" justifyContent="center">
                                <WelcomeBox />
                            </Box>)
                        }
                        <ChatDrawer side="right" open={contactInfoDrawer} close={()=>setContactInfoDrawer(false)}><ContactInfo/></ChatDrawer>
                        <ChatDrawer side="right" open={openSearchDrawer} close={()=>setOpenSearchDrawer(false)}><SearchMsg/></ChatDrawer>
                    </Grid>
                </Box>
            </Box>
            <DeleteChatDialog handleDeleteMessages={clearChat} />
        </>
    );
};

ChatsView.getInitialProps = async (ctx) => {
    //const url = baseConfig.rootDomain+'/api/chats';
    let chats = ""//await fetchApiAndData('http://localhostasd:3000/api/chats', "GET");
    if (chats === undefined || chats === null || chats === "") {
        const fakeData = generateFakeData(15);
        chats = {
            data: (fakeData.length > 0) ? fakeData : generateDefaultChat()
        }
    }
    return {chats};
}

export default ChatsView;