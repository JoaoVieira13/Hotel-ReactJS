import React from 'react';
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

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<SignInScreen />} />
                <Route path="/register" element={<SignUpScreen />} />
                <Route path="/quarto/:quartoId" element={<RoomScreen />} />
                <Route path="/quartos/:page" element={<RoomsListScreen />} />
                <Route path="/passwordReset" element={<PasswordResetScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/dashboard/users" element={<DashboardScreen />} />
                <Route path="/dashboard/bedrooms" element={<DashboardBedroomsScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;