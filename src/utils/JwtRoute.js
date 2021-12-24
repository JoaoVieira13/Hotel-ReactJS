import { useState, useEffect } from "react"
import Cookies from 'universal-cookie';
import api from '../Services/api'
import { Navigate } from "react-router-dom"

const JwtRoute = (({ children }) => {
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    const cookies = new Cookies();

    useEffect(() => {
        if (cookies.get('jwt') !== undefined) {

            let token = cookies.get('jwt');

            api.get("auth/me", {
                headers: {
                    "x-access-token": token
                }
            }).then((response) => {
                setLogin(response.data.auth)
                setLoading(false)
            }).catch((error) => {
                setLogin(false)
                setLoading(false)
                alert(error)
            })
        } else setLoading(false)

        return () => {
            setLogin(false)
        }
    }, [])

    if (loading) {
        return null
    }

    return (login ? children : <Navigate to="/auth/login" />)
})

export default JwtRoute;