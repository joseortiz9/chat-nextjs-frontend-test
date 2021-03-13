import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, useTheme} from "@material-ui/core";
import {useConversation} from "../../../../contexts/conversation";

const DeleteChatDialog = ({handleDeleteMessages}) => {
    const { openDeleteDiag, setOpenDeleteDiag, contactSelected, deleteMessages } = useConversation();
    return(
    <Dialog open={openDeleteDiag} onClose={()=>setOpenDeleteDiag(false)}>
        {!!contactSelected ? (
            <>
                <DialogTitle>Delete chat with</DialogTitle>
                <DialogContent>{contactSelected.contact.name}</DialogContent>
            </>
        ): (<DialogTitle>Please select a contact to continue</DialogTitle>)}
        <DialogActions>
            <Button autoFocus onClick={()=>setOpenDeleteDiag(false)} variant="outlined">Cancel</Button>
            <Button onClick={()=>{handleDeleteMessages();setOpenDeleteDiag(false)}}
                    variant="contained"
                    color="secondary"
                    disabled={!!!contactSelected}
            >
                Delete
            </Button>
        </DialogActions>
    </Dialog>
    );
};

export default DeleteChatDialog;