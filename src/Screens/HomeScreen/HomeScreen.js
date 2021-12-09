import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage"
import Cards from "../../components/Cards/Cards";


function HomeScreen() {
    return (
      <div className="HomeScreen">
        <Navbar />
        <BackgroundImage />
        <Cards />
      </div>
    );
  }
  
  export default HomeScreen;