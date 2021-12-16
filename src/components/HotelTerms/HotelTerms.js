import React from "react";
import './HotelTerms.scss'

function HotelTerms() {
    return (
        <div className="terms">
            <p className="overview">Bedroom Overview</p>
            <div className="apiInfo">
                <p>Information: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    Information: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.  </p>
            </div>
            <div className="termsCovid">
                <p className="healthy">Healthy Stays Certified</p>
                <p>To help you sleep easier, this hotel has received a performance-based
                    accreditation from a respected public or private sector health and safety
                    authority, to certify its comprehensive cleaning, disinfection, and
                    mitigation protocols. Certifications may include: GBAC Star from the Global
                    Biorisk Advisory Council; Sharecare VERIFIED™ with Forbes Travel Guide;
                    Clean & Safe Protocol from HRS and SGS; SafeTravels from the World Travel
                    & Tourism Council; SafeGuard from Bureau Veritas; or other local government certifications.
                    To learn more about this hotel’s specific health and safety certification status,
                    please visit their website</p>
            </div>
        </div>
    )
}

export default HotelTerms;