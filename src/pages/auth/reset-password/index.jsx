import React, {useState} from "react";
import { withLayout } from '@moxy/next-layout';
import {
    Button, createStyles, IconButton, InputAdornment,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import Link from "next/link";
import {AuthLayout} from "../../../layouts";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {PasswordInput} from "../../../components/forms";

const ResetPasswordForm = () => {
    return(
        <>
            <Typography variant="h4">Nueva contraseña</Typography>
            <form noValidate autoComplete="off">
                <PasswordInput name="oldPass" />
                <PasswordInput name="newPass" />
                {/*MeanWhile link, todo: make validation of form and router.push*/}
                <Link href="/"><Button variant="contained" color="primary" fullWidth size="large">Actualizar contraseña</Button></Link>
            </form>
        </>
    );
};

export default withLayout(<AuthLayout />)(ResetPasswordForm);