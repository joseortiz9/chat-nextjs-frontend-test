import React, {createContext, useContext, useEffect, useState} from "react";
import {getLocaleStorage, removeLocaleStorage, setLocalStorage} from "../utils/localStorage";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children, storageKey = "authUser" }) => {
    const [auth, setAuth] = useState(() => getLocaleStorage(storageKey));

    //THIS USE EFFECT IS BEING DONE ON THE SERVER SIDE,
    //GOTTA MAKE IT ON THE BROWSER SIDE
    useEffect(() => {
        setAuth(getLocaleStorage(storageKey));
        //console.log(getLocaleStorage(storageKey));
    }, []);

    const values = {
        auth,
        makeLogIn: (authUser) => {
            setAuth(authUser);
            setLocalStorage(storageKey, authUser);
        },
        makeLogOut: () => {
            removeLocaleStorage(storageKey);
            setAuth(null);
        },
    }
    return(
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext, useAuth};