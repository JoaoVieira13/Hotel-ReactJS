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

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/quarto/:quartoId" element={<RoomScreen />} />
                <Route path="/quartos/:orderBy" element={<RoomsListScreen />} />
                <Route path="/passwordReset/:userId/:token" element={<PasswordResetScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/dashboard/users/:page" element={<DashboardScreen />} />
                <Route path="/dashboard/bedrooms/:page" element={<DashboardBedroomsScreen />} />
                <Route path="/login" element={<SignInScreen />} />
                <Route path="/register" element={<SignUpScreen />} />
                <Route path="/favorites" element={<FavoriteScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;