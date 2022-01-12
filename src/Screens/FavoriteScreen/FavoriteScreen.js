import React from 'react';
import FavoriteBedroom from '../../components/FavoriteBedroom/FavoriteBedroom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function FavoriteScreen() {
    return (
        <>
            <Navbar />
            <FavoriteBedroom />
            <Footer />
        </>
    )
}

export default FavoriteScreen;
