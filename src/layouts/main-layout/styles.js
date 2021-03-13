import React from "react";

const makeFullScreen = {
    height: "100%", width: "100%", overflow: "hidden"
};

const MainLayoutStyles = theme => ({
    app: {
        ...makeFullScreen,
        backgroundColor: theme.palette.background.default
    },
    backgroundWrapper: {
        ...makeFullScreen,
        '&:after': {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100%",
            height: "130px",
            backgroundColor: theme.palette.background.upper
        }
    },
    wrapper: {
        backgroundColor: "white",
        height: "100%",
        '& > div': {
            height: "100%",
            backgroundColor: theme.palette.background.container,
        }
    }
});

export {MainLayoutStyles};