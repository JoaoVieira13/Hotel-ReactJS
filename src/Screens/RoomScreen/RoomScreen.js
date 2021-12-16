import React from "react";
import HotelTerms from "../../components/HotelTerms/HotelTerms";
import Navbar from "../../components/Navbar/Navbar";
import Reservation from "../../components/Reservation/Reservation";
import Footer from "../../components/Footer/Footer"

function RoomScreen() {
    return (
        <>
            <Navbar />
            <Reservation />
            <HotelTerms />
            <Footer />
        </>
    );
}

export default RoomScreen;