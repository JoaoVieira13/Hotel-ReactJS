import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage"
import FindRooms from "../../components/FindRooms/FindRooms";

function HomeScreen() {
    return (
      <div className="App">
        <Navbar />
        <BackgroundImage />
        <FindRooms />
      </div>
    );
  }
  
  export default HomeScreen;