import React from "react";
import {WelcomeBox} from "../../../components";
import {Box, Button, Container} from "@material-ui/core";
import Link from "next/link";

const LogoutView = () => {
    return(
        <Box height="100%" width="100%" display="flex" alignItems="center" justifyContent="center">
            <Container>
                <WelcomeBox title="Esperamos que vuelvas pronto" alwaysShowContent>
                    <Box mt={2}>
                        <Link href="/"><Button variant="contained" color="primary" fullWidth size="large">Regresar al login</Button></Link>
                    </Box>
                </WelcomeBox>
            </Container>
        </Box>
    );
}

export default LogoutView;