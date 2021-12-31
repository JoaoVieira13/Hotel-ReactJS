import React, { useEffect } from 'react';
import './DeleteUserButton.scss'
import api from "../../Services/api";
import { useForm } from "react-hook-form";

function DeleteUserButton() {

    const { handleSubmit } = useForm();

    const onSubmit = (data) => {
        const deleteUser = {
            _id: data._id,
            email: data.email,
            password: data.password,
            userType: data.userType,
            reserve: data.reserve,
        }

        api
            .delete(`/auth/login/:userId`, deleteUser)
            .then(function () {
                console.log("apagado com sucesso!")
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    return (
        <>
            <div className='doubleButton'>
                <form method='DELETE' onSubmit={handleSubmit(onSubmit)}>
                    <button className='deleteUser' type='submit'>Delete</button>
                </form>
                <form method='PUT' onSubmit={handleSubmit()}>
                    <button className='changeUser' type='submit'>Change</button>
                </form>
            </div>
        </>
    )
}

export default DeleteUserButton;
