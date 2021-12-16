import { createContext, useState } from "react";
import api from "../Services/api";
import { setCookie } from "nookies"

const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState < User | null > (null)
    const isAuthenticated = !!user;

    async function sign({ email, password }) {

        try {
            const response = await
                api
                    .post('auth/login', {
                        email: email,
                        password: password,
                    })

            const { token, user } = response.data

            setCookie(undefined, 'hotel.token', token, {
                maxAge: 60 * 60 * 1, //1 hour
            })

            setUser(user)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, sign }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

