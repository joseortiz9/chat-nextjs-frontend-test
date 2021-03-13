import React, {createContext, useContext, useEffect, useState} from "react";

const ConversationContext = createContext({});

const useConversation = () => useContext(ConversationContext);

const ConversationProvider = ({ children }) => {
    const [contactSelected, setContactSelected] = useState();
    const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
    const [contactInfoDrawer, setContactInfoDrawer] = useState(false);
    const [openProfileDrawer, setOpenProfileDrawer] = useState(false);
    const [openNewChatDrawer, setOpenNewChatDrawer] = useState(false);
    const [openDeleteDiag, setOpenDeleteDiag] = useState(false);

    const values = {
        contactSelected, setContactSelected,
        openSearchDrawer, setOpenSearchDrawer,
        contactInfoDrawer, setContactInfoDrawer,
        openProfileDrawer, setOpenProfileDrawer,
        openNewChatDrawer, setOpenNewChatDrawer,
        openDeleteDiag, setOpenDeleteDiag,
    }
    return(
        <ConversationContext.Provider value={values}>{children}</ConversationContext.Provider>
    );
};

export {ConversationProvider, ConversationContext, useConversation};