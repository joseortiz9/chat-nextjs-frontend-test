import React from "react";
import {Box, Card, CardContent, Container, Grid, makeStyles} from "@material-ui/core";
import {WelcomeBox} from "../../components";
import {AuthLayoutStyles} from "./styles";

const AuthLayout = ({ children }) => {
    const classes = makeStyles(theme => AuthLayoutStyles(theme))();
    return(
        <Box clone height="100%" className="d-flex" alignItems="center">
            <Container>
                <Grid container spacing={5}>
                    <Box clone order={{ xs: 2, sm: 1 }} display="flex" justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.authCard}>
                                <CardContent>
                                    {children}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Box>
                    <Box clone order={{ xs: 1, sm: 2 }} display="flex" justifyContent={{ xs: "flex-start", sm: "center" }}>
                        <Grid item xs={12} sm={6}>
                            <WelcomeBox />
                        </Grid>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default AuthLayout;