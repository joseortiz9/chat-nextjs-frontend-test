import React from "react";
import {Box, Container, makeStyles, useMediaQuery} from "@material-ui/core";
import {MainLayoutStyles} from "./styles";

const MainLayout = ({ children }) => {
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('sm'));
    const classes = makeStyles(theme => MainLayoutStyles(theme))();
    return(
        <Box position="absolute" top={0} left={0} padding={0} margin={0} className={classes.app}>
            <Box position="relative" display="flex" alignItems="center" zIndex={10} className={classes.backgroundWrapper}>
                <Box component={isDesktop ? Container : "div"} width="100%" height={(isDesktop ? "95" : "100") + "vh"}>
                    <div className={classes.wrapper}>
                        <div>{children}</div>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;