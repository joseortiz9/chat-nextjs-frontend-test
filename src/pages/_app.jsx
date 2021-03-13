import React, {useEffect} from 'react';
import Head from "next/head";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "../styles/theme";
import baseConfig from "../../base.config";
import {MainLayout} from "../layouts";
import {LayoutTree} from '@moxy/next-layout';
import {AuthProvider, useAuth} from "../contexts/auth";
import {ConversationProvider} from "../contexts/conversation";
import {TopProgressbar} from "../components";
import "../styles/global.css";


const MainApp = (props) => {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <title>{baseConfig.defaultTitle}</title>
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainLayout>
                    <TopProgressbar />
                    <AuthProvider>
                        <ConversationProvider>
                            <LayoutTree
                                Component={ Component }
                                pageProps={ pageProps } />
                        </ConversationProvider>
                    </AuthProvider>
                </MainLayout>
            </ThemeProvider>
        </>
    );
};

export default MainApp;

