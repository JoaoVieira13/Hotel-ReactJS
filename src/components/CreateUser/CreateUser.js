import React from 'react';
import "./CreateUser.scss";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ref, storage, uploadBytesResumable, getDownloadURL } from "../../Services/firebase";

function CreateUser() {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const storageRef = ref(storage, "images/" + data.images[0].name);
        await uploadBytesResumable(storageRef, data.images[0]);

        await getDownloadURL(storageRef).then(async (res) => {

            const createUser = {
                email: data.email,
                password: data.password,
                userType: data.userType,
                image: res,
            }

            api
                .post(`/auth/register`, createUser)
                .then(function (response) {
                    console.log(response.data)
                    toast.success("User Created!")
                    setTimeout(() => window.location.pathname = "/dashboard/users", 3000);
                })
                .catch(function (err) {
                    console.log(err)
                    toast.error("Error Creating User!")
                })
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
            <div className='createUsertest'>
                <form className='createUserF' onSubmit={handleSubmit(onSubmit)}>
                    <p className='textCreateUser'>Create User!</p>
                    <input className='userField' placeholder='Email' {...register("email", { required: true, unique: true })} />
                    <input className='userField' type="password" placeholder='Password' {...register("password", { required: true })} />
                    <select className='useSelect' {...register("userType", { required: true })}>
                        <option disabled selected>User Type</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="DEFAULT">DEFAULT</option>
                    </select>
                    <input className="file" type="file" {...register("images", { required: true })} />
                    <button className='createUserB' type='submit'>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreateUser
