import React, { useContext } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";
import { Context } from "../../Context/AuthContext";

const Navbar = () => {

    const { isAuthenticated } = useContext(Context)

    return (
        <div className="right">
            <Link to="/" className="name" >PelourinhoHotel</Link>
            <div className="options">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/quartos/page=1">Rooms</Link>
                <Link to="/contact">Contact</Link>
                {
                    isAuthenticated ? (
                        <Link to="/favorites">Favorites</Link>
                    ) : (
                        <Link to="/login">SignIn</Link>
                    )
                }
            </div>
        </div >
    );
};
export default Navbar;
