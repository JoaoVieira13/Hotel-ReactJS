import React from 'react';
import "./CreateBedrooms.scss";
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { ref, storage, uploadBytesResumable, getDownloadURL } from "../../Services/firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateBedrooms() {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {

        const storageRef = ref(storage, "images/" + data.images[0].name);
        await uploadBytesResumable(storageRef, data.images[0]);

        await getDownloadURL(storageRef).then(async (res) => {

            const createBedroom = {
                number: parseInt(data.number),
                type: data.type,
                bedroomsNumber: parseInt(data.bedroomsNumber),
                capacity: parseInt(data.capacity),
                information: data.information,
                valueNight: parseInt(data.valueNight),
                image: res,
                service: data.service,
            }
            api
                .post(`/quartos/add`, createBedroom)
                .then(function (response) {
                    toast.success("Bedroom Created!")
                    setTimeout(() => window.location.pathname = "/dashboard/bedrooms", 3000);
                })
                .catch(function (err) {
                    toast.error("Error Creating Bedroom!")
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
            <div className='createBedroomBox'>
                <p className='createBedroomTxt'>Create Bedroom!</p>
                <form className='createBedroomF' onSubmit={handleSubmit(onSubmit)}>
                    <input className='bedroommField' placeholder='Number' {...register("number", { required: true })} />
                    <select className='bedroommSelect' {...register("type", { required: true })}>
                        <option disabled selected>Type</option>
                        <option value="Single">Single</option>
                        <option value="Couple">Couple</option>
                        <option value="Familiar">Familiar</option>
                    </select>
                    <input className='bedroommField' placeholder='Bed Number' {...register("bedroomsNumber", { required: true })} />
                    <input className='bedroommField' placeholder='Capacity' {...register("capacity", { required: true })} />
                    <input className='bedroommField' placeholder='Information' {...register("information", { required: true })} />
                    <input className='bedroommField' placeholder='Price' {...register("valueNight", { required: true })} />
                    <select className='bedroommSelect' {...register("service", { required: true })}>
                        <option disabled selected>Service</option>
                        <option value="In-Room Meals">In-Room Meals</option>
                        <option value="None">None</option>
                    </select>
                    <input className='bedroommField' type="file" placeholder='Image' {...register("images", { required: true })} />
                    <button className='createBedroomB' type='submit'>Create</button>
                </form>
            </div>
        </>
    )
}

export default CreateBedrooms
