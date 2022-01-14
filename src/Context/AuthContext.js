import React, { createContext, useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import api from "../Services/api";

export const Context = createContext();

export function AuthProvider({ children }) {

    const cookies = new Cookies();
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isloading, setIsloading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (cookies.get("hotel") !== undefined) {
            api.get('/auth/me', {
                headers: {
                    'x-access-token': cookies.get("hotel")
                }
            }).then(response => {
                setIsAuthenticated(true)
                setIsloading(false)
                setUser(response.data.decoded)
            }).catch((err) => console.log(err))
        } else setIsloading(false)
    }, [])



    function signOut() {
        cookies.remove('hotel')
        setIsAuthenticated(false)
    }

    if (isloading == true) {
        return null
    }

    return (
        <Context.Provider value={{ signOut, isAuthenticated, user }}>
            {children}
        </Context.Provider>
    )
}