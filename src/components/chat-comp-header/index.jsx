import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles( theme => ({
    header: {
        backgroundColor: theme.palette.primary.light,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
        color: "white",//theme.palette.secondary.light,
    },
    header2: {
        [theme.breakpoints.up('sm')]: {
            height: "auto",
            flexDirection: "column",
            justifyContent: "inherit"
        },
    }
}));

const ChatCompHeaderWrapper = ({extraStyles, children, withUpperSpace}) => {
    const { header, header2 } = useStyles();
    return(
        <Box clone height="60px" py="10px" px="16px" display="flex" justifyContent="space-between" alignItems="center">
            <header className={[header, withUpperSpace && header2, extraStyles].join(" ")}>
                {children}
            </header>
        </Box>
    );
};

export default ChatCompHeaderWrapper;