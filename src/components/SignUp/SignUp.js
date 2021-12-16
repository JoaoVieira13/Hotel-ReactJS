import React from "react";
import "./SignUp.scss"
import Hotel from '../../Assets/Images/hotel.jpg'
import FeatherIcon from 'feather-icons-react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../Services/api";

function SignUp() {

    const onSubmit = (data) => {
        const newUser = {
            email: data.email,
            password: data.password,
        }
        api
            .post("/auth/register", newUser)
            .catch((err) => {
                console.error("This email already exists!" + err);
            });
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('❌ Password is required')
            .min(6, ' Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('❌ Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        email: Yup.string()
            .required('❌ Email is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    return (
        <div className="alts">
            <img src={Hotel} alt="Room"
                height={610} className="image" />
            <div className="tudo">
                <div class="texto">
                    <div className="login">SignUp to Pelourinho</div>
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
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <span>Email</span>
                    <input placeholder="@gmail.com" className="input" placeholder="@gmail.com" {...register("email", { required: true, unique: true })} />
                    <span className="invalid-feedback">{errors.email?.message}</span>
                    <span>Password</span>
                    <input placeholder="Password" name="password" type="password" {...register('password')} className={`input ${errors.password ? 'is-invalid' : ''}`} />
                    <span className="invalid-feedback">{errors.password?.message}</span>
                    <span>Repeat Password</span>
                    <input placeholder="Password" name="confirmPassword" type="password" {...register('confirmPassword')} className={`input ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                    <span className="invalid-feedback">{errors.confirmPassword?.message}</span>
                    <span className="forget"><a href="/auth/login">You already have account?</a></span>
                    <a href="/auth/register"><button className="register">Register</button></a>
                </form>
            </div>
        </div >
    );
}
export default SignUp;