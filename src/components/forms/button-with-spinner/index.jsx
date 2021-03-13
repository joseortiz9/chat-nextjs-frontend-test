import React, {useState} from "react";
import {
    Button,
    CircularProgress,
    createStyles,
    IconButton,
    InputAdornment,
    makeStyles,
    TextField
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            position: 'relative',
        },
        buttonProgress: {
            color: theme.palette.primary.main,
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }),
);

const ButtonWithLoading = (props) => {
    const classes = useStyles();
    const load = !!props.loading;
    return(
        <div className={classes.wrapper}>
            <Button {...props} disabled={load}>{props.children}</Button>
            {load && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
    );
};

export default ButtonWithLoading;