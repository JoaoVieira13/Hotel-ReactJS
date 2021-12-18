import React, { useContext, useState, useEffect } from "react";
import "./SignIn.scss"
import Room from '../../Assets/Images/room.jpg'
import FeatherIcon from 'feather-icons-react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from "../../contexts/AuthContext";
import api from "../../Services/api";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function SignIn() {

    const onSubmit = (data) => {
        const findUser = {
            email: data.email,
            password: data.password,
        }

        api
            .post("/auth/login", findUser)
            .then(function () {
                alert("Authenticated With Success!")
                window.location.pathname = "/";
            })

            .catch(function (error) {
                console.log(error);
                alert("Wrong Password, Try Again!");
            })
    }

    setTimeout(() => {
        alert('Timeout')
    }, 3000);

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
                    <input placeholder="@gmail.com" className="input" placeholder="@gmail.com" {...register("email", { required: true })} />
                    <span className="invalid-feedback">{errors.email?.message}</span>
                    <span>Password</span>
                    <input placeholder="Password" name="password" type="password" {...register('password')} className={`input ${errors.password ? 'is-invalid' : ''}`} />
                    <span className="invalid-feedback">{errors.password?.message}</span>
                    <ForgotPassword />
                    <div className="buttons">
                        <button type="submit" className="submit">Login</button>
                        <p>or</p>
                        <button className="submit"><a href="/auth/register">Register</a></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignIn;