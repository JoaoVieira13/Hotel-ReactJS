import React from "react";
import "./AboutUs.scss";
import Vieira from "../../Assets/Images/Vieira.jpg";
import Rui from "../../Assets/Images/Rui.jpg"
import Rafinha from "../../Assets/Images/Rafinha.png"
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
                    <div class="container">
                        <h2>João Vieira</h2>
                        <p class="title">Founder & Owner</p>
                        <p>He tends to tell others to do things and sit around doing nothing, but when is needed he does everything.</p>
                        <p>joaopintovieira13@gmail.com</p>
                        <Link to="/contact"><button class="buttonAbout">Contact</button></Link>
                    </div>
                </div>

                <div class="cardmid">
                    <img className="imgAbout" src={Rui} alt="Rui" />
                    <div class="container">
                        <h2>Rui Costa</h2>
                        <p class="title">Founder & Owner</p>
                        <p>He tends to take João's position when he's not present. He is the officer manager because he likes to talk a lot.</p>
                        <p>ruizinhoFreamunde@gmail.com</p>
                        <Link to="/contact"><button class="buttonAbout">Contact</button></Link>
                    </div>
                </div>

                <div class="cards">
                    <img className="imgAbout" src={Rafinha} alt="Rafa" />
                    <div class="container">
                        <h2>Rafael Ferrás</h2>
                        <p class="title">Employer</p>
                        <p>He usually stays at the PelourinhoBar eating panikes all day long. (He was not from our group, we just needed someone to fill the screen)</p>
                        <p>RafaelFerrás@Panikes.com</p>
                        <Link to="/contact"><button class="buttonAbout">Contact</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;