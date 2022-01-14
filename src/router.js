import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import RoomScreen from './Screens/RoomScreen/RoomScreen';
import SignInScreen from './Screens/SignInScreen/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen'
import RoomsListScreen from './Screens/RoomsListScreen/RoomsListScreen';
import PasswordResetScreen from './Screens/PasswordResetScreen/PasswordResetScreen';
import AboutScreen from './Screens/AboutScreen/About';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import DashboardScreen from './Screens/DashboardScreen/DashboardScreen';
import DashboardBedroomsScreen from './Screens/DashboardBedroomsScreen/DashboardBedroomsScreen';
import FavoriteScreen from './Screens/FavoriteScreen/FavoriteScreen';
import { Context } from "./Context/AuthContext";

function Router() {

    const { user, isAuthenticated } = useContext(Context)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                {
                    !isAuthenticated && (
                        <>
                            <Route path="/register" element={<SignUpScreen />} />
                            <Route path="/login" element={<SignInScreen />} />
                        </>
                    )
                }
                <Route path="/quarto/:quartoId" element={<RoomScreen />} />
                <Route path="/quartos/:page" element={<RoomsListScreen />} />
                <Route path="/passwordReset/:userId/:token" element={<PasswordResetScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/dashboard/users" element={<DashboardScreen />} />
                <Route path="/dashboard/bedrooms" element={<DashboardBedroomsScreen />} />
                {/* {
                    user?.userType[0] === "ADMIN" && (
                        <>
                            <Route path="/dashboard/users" element={<DashboardScreen />} />
                            <Route path="/dashboard/bedrooms" element={<DashboardBedroomsScreen />} />
                        </>
                    )
                } */}
                {
                    isAuthenticated && (
                        <Route path="/favorites" element={<FavoriteScreen />} />
                    )
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Router;