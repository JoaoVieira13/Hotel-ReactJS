import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SignIn from "../../components/SignIn/SignIn"

function SignInScreen() {
    return (
        <>
            <Navbar />
            <SignIn />
            <Footer />
        </>
    );
}

export default SignInScreen;