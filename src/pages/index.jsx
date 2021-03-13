import React, {useState} from "react";
import { withLayout } from '@moxy/next-layout';
import {
    Box,
    Button,
    Divider,
    Link as MUILink,
    TextField,
    Typography
} from "@material-ui/core";
import Link from "next/link";
import {AuthLayout} from "../layouts";
import {ButtonWithLoading, PasswordInput} from "../components/forms";
import {Alert} from "@material-ui/lab";
import {useRouter} from "next/router";
import {fetchApi} from "../utils/api";
import {useAuth} from "../contexts/auth";
import {useInputValue} from "../hooks/useInputValue";

const LoginForm = () => {
    const router = useRouter();
    const { makeLogIn } = useAuth();
    const [serverMsg, setServerMsg] = useState();
    const [showAlert, setShowAlert] = useState(true);
    const [loading, setLoading] = useState(false);
    const userInput = useInputValue('');
    const passInput = useInputValue('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        await fetchApi('https://chat-nextjs-frontend-test.vercel.app/api/login', "POST", {username: userInput.value, password: passInput.value})
            .then(res => {
                res.json().then(msg => {
                    if (res.status > 400) {
                        setServerMsg(msg.data);
                        setLoading(false);
                    } else {
                        makeLogIn(msg.data);
                        router.push("/chats");
                    }
                })
            });
    };

    return(
        <>
            <Typography variant="h4">Bienvenido</Typography>
            {(showAlert || serverMsg) &&
            <Alert severity={serverMsg ? "warning" : "info"} onClose={() => {setShowAlert(false); setServerMsg(null)}}>
                {serverMsg || <span><b>User:</b> test, <b>Pass:</b> test</span>}
            </Alert>}
            <form autoComplete="off" onSubmit={handleLogin}>
                <TextField label="Usuario" placeholder="Usuario" name="username"{...userInput} required />
                <PasswordInput name="password" {...passInput} required />
                <ButtonWithLoading type="submit" variant="contained" color="primary" fullWidth size="large" loading={+loading}>
                    Iniciar sesión
                </ButtonWithLoading>
            </form>
            <Divider variant="fullWidth" />
            <Box display="flex" justifyContent="space-between">
                <Link href="/auth/register"><MUILink>No tengo una cuenta</MUILink></Link>
                <Link href="/auth/recover-password"><MUILink>Recuperar contraseña</MUILink></Link>
            </Box>
        </>
    );
};

export default withLayout(<AuthLayout />)(LoginForm);