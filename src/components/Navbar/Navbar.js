import React from "react";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="right">
            <a className="name" href="/">PelourinhoHotel</a>
            <div className="options">
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Rooms</a>
                <a href="#">Contact</a>
                <a href="/login">SignIn</a>
            </div>
        </div>
    );
};
export default Navbar;
