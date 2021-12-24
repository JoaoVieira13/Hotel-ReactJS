import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import RoomScreen from './Screens/RoomScreen/RoomScreen';
import SignInScreen from './Screens/SignInScreen/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen'
import RoomsListScreen from './Screens/RoomsListScreen/RoomsListScreen';
import PasswordResetScreen from './Screens/PasswordResetScreen/PasswordResetScreen';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/auth/login" element={<SignInScreen />} />
                <Route path="/auth/register" element={<SignUpScreen />} />
                <Route path="/quartos/quarto/:quartoId" element={<RoomScreen />} />
                <Route path="/quartos" element={<RoomsListScreen />} />
                <Route path="/passwordReset" element={<PasswordResetScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;