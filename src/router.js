import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import RoomScreen from './Screens/RoomScreen/RoomScreen';
import SignInScreen from './Screens/SignInScreen/SignInScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/auth/login" element={<SignInScreen />} />
                <Route path="/auth/register" element={<SignUpScreen />} />
                <Route path="/quartos/quarto/:quartoId" element={<RoomScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;