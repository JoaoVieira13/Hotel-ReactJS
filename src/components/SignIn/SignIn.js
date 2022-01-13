import React, { useContext } from "react";
import "./SignIn.scss"
import Room from '../../Assets/Images/room.jpg'
import FeatherIcon from 'feather-icons-react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import api from "../../Services/api";
import { Context } from "../../Context/AuthContext";

function SignIn() {

    let Navigate = useNavigate();
    const { isAuthenticated } = useContext(Context)

    async function handleSignIn(data) {

        const cookies = new Cookies();

        try {
            const body = {
                email: data.email,
                password: data.password
            }

            api.post('/auth/login', body, {

            }).then((response) => {
                cookies.set('hotel', response.data.token, {
                    maxAge: 60 * 60 * 1,
                })
                Navigate("/")
                if (typeof (window) !== 'undefined') {
                    window.location.reload(false);
                }

            })
        } catch (err) {
            console.log(err)
        }

    }

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
            <div className="signInAltsCenter">
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
                        <form onSubmit={handleSubmit(handleSignIn)} method="POST" className="form">
                            <span>Email</span>
                            <input placeholder="@gmail.com" className="input" {...register("email", { required: true })} />
                            <span className="invalid-feedback">{errors.email?.message}</span>
                            <span>Password</span>
                            <input placeholder="Password" name="password" type="password" {...register('password')} className={`input ${errors.password ? 'is-invalid' : ''}`} />
                            <span className="invalid-feedback">{errors.password?.message}</span>
                            <div className="buttons">
                                <button type="submit" className="submit">Login</button>
                                {!isAuthenticated && (
                                    <>
                                        <p>or</p>
                                        <button className="submit"><Link to="/register">Register</Link></button>
                                    </>
                                )
                                }
                            </div>
                        </form>
                        <ForgotPassword />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;