import React, {useEffect, useRef, useState} from "react";
import {Typography} from "@material-ui/core";
import moment from "moment";
import ChatMessage from "../message";
import {useConversation} from "../../../../contexts/conversation";

const MessagesWrapper = () => {
    const { contactSelected } = useConversation();
    const [chatMessages, setChatMessages] = useState(contactSelected.messages || []);
    let lastDay = moment(new Date()).date();
    let displayDate = false;
    const chatStart = useRef(null);

    useEffect(() => {
        setChatMessages(contactSelected.messages || [])
        chatStart.current.scrollIntoView()
    }, [contactSelected.messages]);

    return(
        <>
            {
                chatMessages.length > 0 ?
                chatMessages.map(msg => {
                    const msgDate = moment(msg.date);
                    displayDate = msgDate.date() !== lastDay;
                    lastDay = msgDate.date();
                    return(
                        <React.Fragment key={msg.id}>
                            {displayDate && <Typography variant="body2" component="h5" className="date-divider">{msgDate.format("MMM D, YYYY hh:mm a")}</Typography>}
                            <ChatMessage key={msg.id} {...msg} avatar={contactSelected.avatar} />
                        </React.Fragment>
                    );
                }) : (<Typography variant="body2" component="h5" className="date-divider">NO MESSAGES FOUND</Typography>)
            }
            <div style={{ float: 'right', clear: 'both' }} ref={chatStart} />
        </>
    );
};

export default MessagesWrapper;