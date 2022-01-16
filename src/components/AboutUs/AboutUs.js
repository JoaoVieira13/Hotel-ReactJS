import React from "react";
import "./AboutUs.scss";
import Vieira from "../../Assets/Images/Joao.jpeg";
import Rui from "../../Assets/Images/Rui.jpeg"
import Rafinha from "../../Assets/Images/Rafinha.jpg"
import { Link } from "react-router-dom"

function AboutUs() {
    return (
        <>
            <div class="about-section">
                <h1>About Us</h1>
                <p>We are a Hotel company working together to make people feel confortable</p>
                <p>We are located in Lousada and our hotel is rated with 5 starts.</p>
            </div>

            <h2 className="ourTeam">Our Team</h2>
            <div class="row">
                <div class="cards">
                    <img className="imgAbout" src={Vieira} alt="Vieira" />
                    <div class="containerAbout">
                        <h2>João Vieira</h2>
                        <p class="title">Founder & Owner</p>
                        <p className="devDesc">He tends to tell others to do things and sit around doing nothing, but when is needed he does everything.</p>
                        <p>joaopintovieira13@gmail.com</p>
                        <a href="https://github.com/JoaoVieira13"><button class="buttonAbout">Contact</button></a>
                    </div>
                </div>

                <div class="cardmid">
                    <img className="imgAbout" src={Rui} alt="Rui" />
                    <div class="containerAbout">
                        <h2>Rui Costa</h2>
                        <p class="title">Founder & Owner</p>
                        <p className="devDesc">He tends to take João's position when he's not present. He is the officer manager because he likes to talk a lot.</p>
                        <p>ruizinhoFreamunde@gmail.com</p>
                        <a href="https://github.com/ruicosta1933"><button class="buttonAbout">Contact</button></a>
                    </div>
                </div>

                <div class="cards">
                    <img className="imgAbout" src={Rafinha} alt="Rafa" />
                    <div class="containerAbout">
                        <h2>Afonso Campos</h2>
                        <p class="title">AeroSpace Founder</p>
                        <p className="devDesc">He usually stays driving airplanes at Pelourinho AeroSpace Flights. (He was part of this project but unfortunately he left!)</p>
                        <p>AfonsoCampas@Aerospace.com</p>
                        <Link to="/contact"><button class="buttonAbout">Contact</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;