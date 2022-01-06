import React, { createContext, useState, useEffect } from "react";
import Cookies from 'universal-cookie';
import api from "../Services/api";

export const Context = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const isAuthenticated = !!user;
    const cookies = new Cookies();

    useEffect(() => {

        const { 'hotel': token } = cookies

        if (token) {
            api.get('/auth/me', {
                headers: {
                    'x-access-token': token
                }
            }).then(response => {
                const { id, email, image, userType } = response.data.decoded
                setUser({ id, email, image, userType })
            })
        }
    }, [])


    async function login({ email, password }) {
        try {
            const response = await api.post('/auth/login', {
                email: email,
                password: password
            })
            cookies.set('hotel', response.data.token, {
                maxAge: 60 * 60 * 1,
            })

            api.get('/auth/me', {
                headers: {
                    'authorization': response.data.token
                }
            }).then(response => {
                const { _id, email, image, userType } = response.data.decoded
                setUser({ _id, email, image, userType })
            })
        } catch (err) {
            console.log(err)
        }
    }

    function signOut() {
        cookies.remove(undefined, 'hotel')
        window.location.reload();
    }

    return (
        <Context.Provider value={{ isAuthenticated, login, signOut }}>
            {children}
        </Context.Provider>
    )
}