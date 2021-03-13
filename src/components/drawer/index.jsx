import React from "react";
import {Drawer, makeStyles, Box} from "@material-ui/core";

const useStyles = ({open, isRightSide}) => makeStyles( theme => ({
    drawerRight: {
        width: open ? theme.custom.drawerSize : 0,
        flexShrink: open && 0,
    },
    drawerLeft: {
    },
    drawerPaper: {
        position: "absolute",
        width: isRightSide ? theme.custom.drawerSize : "100%",
        border: "none",
        backgroundColor: "white",
    },
    drawerModal: {
        position: "absolute"
    },
    colorWrapper: {
        backgroundColor: theme.palette.background.container,
        [theme.breakpoints.up('sm')]: {
            backgroundColor: "white",
        },
    }
}));

const ChatDrawer = ({open, close, side, children}) => {
    const isRightSide = side === "right";
    const classes = useStyles({open, isRightSide})();
    return(
        <Drawer
            anchor={side}
            variant="persistent"
            open={open}
            onClose={close}
            elevation={5}
            className={isRightSide ? classes.drawerRight : classes.drawerLeft}
            classes={{
                paper: classes.drawerPaper,
                modal: classes.drawerModal
            }}
        >
            <Box height="100%" className={classes.colorWrapper}>
                {children}
            </Box>
        </Drawer>
    );
};

export default ChatDrawer;