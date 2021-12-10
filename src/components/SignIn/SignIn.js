import React from "react";
import "./SignIn.scss"
import Room from '../../Assets/Images/room.jpg'
import FeatherIcon from 'feather-icons-react';
import { useForm } from "react-hook-form";

function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <span>Email</span>
                    <input className="input" placeholder="  @gmail.com" {...register("Email", { required: true })} />
                    <span>Password</span>
                    <input className="input" placeholder="  Password" {...register("Password", { required: true })} />
                    {errors.exampleRequired && <p>This field is required</p>}
                    <span class="forgot">Forgot Password?</span>
                    <div className="buttons">
                        <button type="submit" className="submit">Login</button>
                        <p>or</p>
                        <button type="submit" className="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignIn;