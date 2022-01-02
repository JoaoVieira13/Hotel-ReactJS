import React from 'react';
import "./CreateUser.scss";
import { useForm } from "react-hook-form";
import api from "../../Services/api";

function CreateUser() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const createUser = {
            email: data.email,
            password: data.password,
            userType: data.userType,
        }

        api
            .post(`/auth/register`, createUser)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <div className='createUsertest'>
            <form className='createUserF' onSubmit={handleSubmit(onSubmit)}>
                <p className='textCreateUser'>Create User!</p>
                <input className='userField' placeholder='Email' {...register("email", { required: true })} />
                <input className='userField' placeholder='Password' {...register("password", { required: true })} />
                <input className='userField' placeholder='User Type' {...register("userType", { required: true })} />
                <button className='createUserB' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateUser
