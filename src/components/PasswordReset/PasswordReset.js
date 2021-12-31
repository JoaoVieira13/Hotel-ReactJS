import React from "react";
import "./PasswordReset.scss";
import { useForm } from "react-hook-form"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../Services/api";

function PasswordReset() {

    const onSubmit = (data) => {
        const newPassword = {
            password: data.passowrd
        }

        api
            .put(`/auth/login/:userId`, newPassword)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (err) {
                console.log(err)
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
        <div>
            <form method="PUT" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="New Password" {...register("password", { required: true })} />
                <span className="invalid-feedback">{errors.email?.message}</span>
                <button type="submit">Change</button>
            </form>
        </div>
    );
}

export default PasswordReset;
