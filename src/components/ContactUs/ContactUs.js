import React from "react";
import "./ContactUs.scss";
import Image from "../../Assets/Images/hotel.jpg"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import api from "../../Services/api";

function ContactUs() {

    const { register, handleSubmit } = useForm();

    const Submit = async (data) => {
        const body = {
            name: data.name,
            email: data.email,
            country: data.country,
            subject: data.subject,
        }

        api
            .post(`/auth/comment`, body)
            .then(function () {
                toast.success("Email Sent Successfuly!")
            })
            .catch(function (err) {
                console.log(err)
                toast.error("Error Sending Email!")
            })
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
                        <form method="POST" onSubmit={handleSubmit(Submit)}>
                            <label for="fname">Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." {...register("name", { required: true })} />
                            <label for="lname">Email</label>
                            <input type="text" id="emailfield" name="email" placeholder="Your email.."  {...register("email", { required: true })} />
                            <label for="country">Country</label>
                            <select className="selectC" id="country" name="country"  {...register("country", { required: true })}>
                                <option value="Portugal">Portugal</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                                <option value="Other">Other</option>
                            </select>
                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."  {...register("subject", { required: true })} />
                            <input type="submit" value="Submit" />
                        </form >
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactUs;