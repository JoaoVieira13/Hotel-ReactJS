import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage"
import Footer from "../../components/Footer/Footer"
import Cards from "../../components/Cards/Cards";


function HomeScreen() {
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <p className="text">Entire rooms of choice</p>
      <Cards />
      <Cards />
      <Footer />
    </>
  );
}

export default HomeScreen;