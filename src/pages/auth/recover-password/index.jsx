import React, {useState} from "react";
import { withLayout } from '@moxy/next-layout';
import {
    Button, createStyles,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import Link from "next/link";
import {AuthLayout} from "../../../layouts";

const useStyles = makeStyles((theme) =>
    createStyles({
        loginForm: {
            marginTop: theme.spacing(3),
            '& > *:not(:first-child)': {
                marginTop: theme.spacing(4),
                '&.MuiButton-root': {
                    marginTop: theme.spacing(3),
                }
            },
        },
        cardDivider: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2)
        }
    }),
);

const RecoverPasswordForm = () => {
    const classes = useStyles();
    return(
        <>
            <Typography variant="h4">Recuperar contraseña</Typography>
            <Typography variant="body2">Te enviaremos las instrucciones por correo electrónico, revisa tu bandeja de entrada para continuar con el proceso.</Typography>
            <form noValidate autoComplete="off" className={classes.loginForm}>
                <TextField label="Correo" placeholder="Correo" type="email" />
                {/*MeanWhile link, todo: make validation of form and router.push*/}
                <Link href="/"><Button variant="contained" color="primary" fullWidth size="large">Recuperar contraseña</Button></Link>
            </form>
        </>
    );
};

export default withLayout(<AuthLayout />)(RecoverPasswordForm);