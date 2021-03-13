import React from "react";
import { withLayout } from '@moxy/next-layout';
import {
    Box,
    Button, Divider, Link as MUILink,
    TextField,
    Typography
} from "@material-ui/core";
import Link from "next/link";
import {AuthLayout} from "../../../layouts";
import {PasswordInput} from "../../../components/forms";

const RecoverPasswordForm = () => {
    return(
        <>
            <Typography variant="h4">Registro</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Nombre completo" placeholder="Nombre" type="text" />
                <TextField label="Correo" placeholder="Correo" type="email" />
                <TextField label="Teléfono" placeholder="Teléfono" type="phone" />
                <PasswordInput name="password" />
                <PasswordInput name="repeatedPassword" />
                {/*MeanWhile link, todo: make validation of form and router.push*/}
                <Link href="/"><Button variant="contained" color="primary" fullWidth size="large">Registrarse</Button></Link>
            </form>
            <Divider variant="fullWidth" />
            <Box display="flex" justifyContent="flex-start">
                <Link href="/"><MUILink>Ya tengo una cuenta</MUILink></Link>
            </Box>
        </>
    );
};

export default withLayout(<AuthLayout />)(RecoverPasswordForm);