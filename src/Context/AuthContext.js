import React, { createContext } from "react";
import api from "../Services/api";

const Context = createContext();

function AuthProvider({ children }) {
    const isAuthenticated = false;

    async function Login() {

    }

    return (
        <Context.Provider value={{ isAuthenticated }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }