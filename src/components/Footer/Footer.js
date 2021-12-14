import React from "react";
import "./Footer.scss"
import FeatherIcon from 'feather-icons-react';
import Map from "../Map/Map";

function Footer() {

    return (
        <div className="footer">
            <div className="pin">
                <FeatherIcon icon="map-pin" size="24" />
                <span className="pintext">Our Location:</span>
            </div>
            <div className="itemsloc">
                <Map />
                <div className="contacts">
                    <span className="headquarter">Lousada Headquarters</span>
                    <span>Largo do Pelourinho - 4620-667</span>
                    <span>Lousada, Porto, Portugal</span>
                    <span className="gps">GPS: 41.277019, -8.280888</span>
                    <a href="https://wa.me/+351937992476"><FeatherIcon icon="phone" size="18" />937 992 476</a>
                </div>
                <div className="social">
                    <span className="head">Follow Us on Social Networks</span>
                    <div className="social2">
                        <FeatherIcon icon="instagram" size="24" className="facebook" />
                        <span><a href="https://www.instagram.com/hotel/">Instagram.com/PelourinhoHotel</a></span>
                    </div>
                    <div className="social2">
                        <FeatherIcon icon="facebook" size="24" className="facebook" />
                        <span><a href="https://www.facebook.com/luxuryhotel/">Facebook.com/PelourinhoHotel</a></span>
                    </div>
                    <div className="social2">
                        <FeatherIcon icon="twitter" size="24" className="facebook" />
                        <span><a href="https://twitter.com/SLHLuxuryHotels">Twitter.com/PelourinhoHotel</a></span>
                    </div>
                </div>
            </div>
            <a href="/"><p className="pelourinho">© Copyright Pelourinho</p></a>
        </div>
    );
}

export default Footer;