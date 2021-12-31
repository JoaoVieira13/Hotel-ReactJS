import React from "react";
import "./ContactUs.scss";
import Image from "../../Assets/Images/hotel.jpg"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

    function continueornot() {
        if (document.getElementById('subject').value) {
            { alert("Message sent!"); return true; }
        }
        else { toast.error("You need to fill all the fields!"); return false; }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div class="container">
                <div>
                    <h2>Contact Us</h2>
                    <p>Swing by for a cup of coffee, or leave us a message:</p>
                </div>
                <div class="row">
                    <div class="column">
                        <img className="contactImg" src={Image} />
                    </div>
                    <div class="column">
                        <form>
                            <label for="fname">Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
                            <label for="lname">Email</label>
                            <input type="text" id="emailfield" name="email" placeholder="Your email.." required />
                            <label for="country">Country</label>
                            <select className="selectC" id="country" name="country">
                                <option value="Portugal">Portugal</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="Other">Other</option>
                            </select>
                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." required />
                            <input type="submit" value="Submit" onClick={() => continueornot()} />
                        </form >
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactUs;