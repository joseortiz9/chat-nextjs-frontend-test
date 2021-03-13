import React, {useState} from "react";
import {Box, IconButton, InputBase} from "@material-ui/core";
import {EmojiEmotionsOutlined, Send} from "@material-ui/icons";
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import {useInputValueWithSet} from "../../../../hooks/useInputValue";

const MessageInputs = ({handlePushMsg}) => {
    const { value, setValue, onChange } = useInputValueWithSet('');
    const [ showPicker, setShowPicker ] = useState(false);
    const handleEmojiClick = (emojiObject, event) => {
        setValue(value + emojiObject.native);
    };
    const handleSendClick = (e) => {
        handlePushMsg(value);
        setValue('');
        setShowPicker(false);
    };

    return(
        <>
            <Box>
                {showPicker &&
                <Box position="absolute" bottom="63px" left="0">
                    <Picker onClick={handleEmojiClick} style={{ width: "100%"}} />
                </Box>}
                <IconButton aria-label="send message" color="inherit" onClick={()=>setShowPicker(!showPicker)}>
                    <EmojiEmotionsOutlined />
                </IconButton>
            </Box>
            <InputBase
                placeholder="Escribe un mensaje aquí"
                fullWidth
                value={value}
                onChange={onChange}
                onKeyDown={e => e.key === 'Enter' ? handleSendClick() : {}}
            />
            <IconButton aria-label="send message" color="inherit" onClick={handleSendClick}>
                <Send />
            </IconButton>
        </>
    );
};

export default MessageInputs;