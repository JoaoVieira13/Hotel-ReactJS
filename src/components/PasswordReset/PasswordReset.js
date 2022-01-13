import React from "react";
import "./PasswordReset.scss";
import { useForm } from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function PasswordReset() {

    const { userId, token } = useParams();

    const onSubmit = (data) => {
        const newPassword = {
            password: data.password
        }

        api
            .post(`/auth/passwordReset/${userId}/${token}`, newPassword)
            .then(function (response) {
                console.log(response.data)
                toast.success("Password Sucessfuly Reseted!")
                setTimeout(() => window.location.pathname = "/login", 3000)
            })
            .catch(function (err) {
                console.log(err)
                toast.error("Error, Please Try Again!")
            })

    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('❌ Password is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions)
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
            <div className="centerResetP">
                <form className="formResetP" method="PUT" onSubmit={handleSubmit(onSubmit)}>
                    <p className="resetPtext">Reset Your Password Here</p>
                    <input className="inputR" type="password" placeholder="New Password" {...register("password", { required: true })} />
                    <span className="invalid-feedback">{errors.password?.message}</span>
                    <button className="submitR" type="submit">Change</button>
                </form>
            </div>
        </>
    );
}

export default PasswordReset;
