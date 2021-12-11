import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SignInScreen from './Screens/SignInScreen/SignInScreen';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<SignInScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;