import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Calendar.scss"
import api from "../../Services/api";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

function Calendar() {

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const { quartoId } = useParams()
    const { handleSubmit, register } = useForm()
    const [checkIn, setCheckIn] = useState(Date())
    const [checkOut, setCheckOut] = useState(Date())
    const [quarto, setQuartos] = useState([]);

    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

    const onSubmit = (data) => {

        const body = {
            checkIn: data.checkIn,
            checkOut: data.checkOut,
        }

        if (Difference_In_Days < 1) {
            toast.error("You Need To Choose At Least 1 Night!")
        } else {
            api
                .put(`/quartos/quarto/${quartoId}`, body)
                .then(function () {
                    toast.success("Bedroom Reserved!")
                    // setTimeout(() => window.location.pathname = "/", 2500)
                })
                .catch(function () {
                    toast.error("Error Doing Reservation!")
                })

            api
                .put(`/auth/users/61cdd56418f58934d937434a`, body)
                .then(function () {
                    console.log("Entrou")
                })
                .catch(function (error) {
                    console.log(error)
                })

        }
    }

    useEffect(() => {
        api
            .get(`/quartos/quarto/${quartoId}`)
            .then(function (response) {
                setQuartos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="dateComponents">
                <form onSubmit={handleSubmit(onSubmit)} className="CheckRoom">
                    <span className="CheckText">Date 1</span>
                    <input className="inputDate" type="date" {...register("checkIn")} onChange={(e) => { setCheckIn(e.target.value) }} min={disablePastDate()} required />
                    <span className="CheckText">Date 2</span>
                    <input className="inputDate" type="date" {...register("checkOut")} onChange={(e) => { setCheckOut(e.target.value) }} min={disablePastDate()} required />
                    <span className="totalDays">Reserve {Difference_In_Days} Nights!</span>
                    <span className="totalDays">Price: {Math.abs(quarto.valueNight * Difference_In_Days)}€</span>
                    <button className="reserveButton" type="submit">Reserve</button>
                </form>
            </div >
        </>
    );
}

export default Calendar;