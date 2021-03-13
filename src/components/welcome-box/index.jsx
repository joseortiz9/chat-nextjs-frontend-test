import React from "react";
import {Box, Button, CardMedia, Hidden, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2)
    },
    logo: {
        maxWidth: "125px",
        [theme.breakpoints.up('sm')]: {
            maxWidth: "250px"
        }
    }
}));

const WelcomeBox = ({title, content, children, alwaysShowContent = false}) => {
    const classes = useStyles();
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <CardMedia component="img" src="/assets/images/logo.svg" alt="logo-img" className={classes.logo} />
            <Hidden smUp={alwaysShowContent}>
                <Box textAlign="center" maxWidth="400px">
                    <Typography variant="h3" className={classes.title}>{title || "Bienvenidos al chat"}</Typography>
                    <Typography variant="body2">
                        {content || "Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte."}
                    </Typography>
                </Box>
            </Hidden>
            {children ? children : (<></>)}
        </Box>
    );
}

export default WelcomeBox;