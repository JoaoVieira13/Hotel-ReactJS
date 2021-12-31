import React, { useState, useEffect } from "react";
import "./SignIn.scss"
import Room from '../../Assets/Images/room.jpg'
import FeatherIcon from 'feather-icons-react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../Services/api";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function SignIn() {

    const [login, setLogin] = useState(false);

    const onSubmit = (data) => {
        const findUser = {
            email: data.email,
            password: data.password,
        }

        api
            .post("/auth/login", findUser)
            .then(function () {
                toast.success("Authentication Successfuly!");
                setTimeout(() => window.location.pathname = "/", 3000);
                setLogin(true);
            })

            .catch(function (error) {
                setLogin(false);
                console.log(error);
                toast.error("An Error Occurred!")
            })
    }

    // useEffect(() => {
    //     if (('jwt') !== undefined) {

    //         api
    //             .get("/auth/me", {
    //                 headers: {
    //                     "x-access-token": 
    //                 }
    //             })
    //             .then(function (response) {
    //                 setLogin(response.data.auth);
    //                 setLoading(false)
    //             })
    //             .catch(function (error) {
    //                 setLogin(false);
    //                 setLoading(false)
    //                 console.log(error)
    //             })
    //     } else setLoading(false)

    //     return () => {
    //         setLogin(false)
    //     }
    // }, [])

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('❌ Password is required'),
        email: Yup.string()
            .required('❌ Email is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

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
            <div className="alts">
                <img src={Room} alt="Room"
                    height={560} className="img" />
                <div className="tudo">
                    <div class="texto">
                        <div className="login">Login to Pelourinho</div>
                        <div className="box">
                            <div className="icons">
                                <div className="icon"><FeatherIcon icon="mail" size="25" /></div>
                            </div>
                            <div className="icons">
                                <div className="icon"><FeatherIcon icon="twitter" size="25" /></div>
                            </div>
                            <div className="icons">
                                <div className="icon"><FeatherIcon icon="facebook" size="25" /></div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" className="form">
                        <span>Email</span>
                        <input placeholder="@gmail.com" className="input" {...register("email", { required: true })} />
                        <span className="invalid-feedback">{errors.email?.message}</span>
                        <span>Password</span>
                        <input placeholder="Password" name="password" type="password" {...register('password')} className={`input ${errors.password ? 'is-invalid' : ''}`} />
                        <span className="invalid-feedback">{errors.password?.message}</span>
                        <ForgotPassword />
                        <div className="buttons">
                            <button type="submit" className="submit">Login</button>
                            <p>or</p>
                            <button type="submit" className="submit"><Link to="/register">Register</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;