import React from 'react';
import "./DeleteChangeBedrooms.scss";
import api from "../../Services/api";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: '#252C4A',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
};

function DeleteChangeBedrooms({ bedroomId }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit } = useForm();

    const onClick = (data) => {
        const changeBedroom = {
            number: data.number,
            type: data.type,
            bedroomsNumber: data.bedroomsNumber,
            capacity: data.capacity,
            information: data.information,
            valueNight: data.valueNight,
            service: data.service,
        }

        api
            .put(`/quartos/change/${bedroomId}`, changeBedroom)
            .then(function (response) {
                console.log(response.data)
                toast.success("Bedroom Changed!")
                setTimeout(() => window.location.pathname = "/dashboard/bedrooms/page=1", 3000);
            })
            .catch(function (err) {
                console.log(err)
                toast.error("Error Changing Bedroom!")
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
            <div className='doubleButton'>
                <form>
                    <button className='deleteBedroom' type='submit' onClick={(() => api.delete(`/quartos/quarto/${bedroomId}`))} >Delete</button>
                </form>
                <button className='changeBedroom' onClick={handleOpen}>Change</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="bedroomData">
                            Do you really want to change <br /> bedroom data?
                        </div>
                        <Typography id="modal-modal-description">
                            <form className="changeberoomdata" method='PUT' onSubmit={handleSubmit(onClick)}>
                                <div className='marginTopf'>
                                    <input className="bedroomInput" placeholder='Number' {...register("number", { required: true })} />
                                    <select className='bedroomSelect' {...register("type", { required: true })}>
                                        <option disabled selected>Type</option>
                                        <option value="Single">Single</option>
                                        <option value="Couple">Couple</option>
                                        <option value="Familiar">Familiar</option>
                                    </select>
                                    <input className="bedroomInput" placeholder='Number' {...register("bedroomsNumber", { required: true })} />
                                    <input className="bedroomInput" placeholder='Capacity' {...register("capacity", { required: true })} />
                                    <input className="bedroomInput" placeholder='Information' {...register("information", { required: true })} />
                                    <input className="bedroomInput" placeholder='Price Night' {...register("valueNight", { required: true })} />
                                    <select className='bedroomSelect' {...register("service", { required: true })}>
                                        <option disabled selected>Service</option>
                                        <option value="In-Room Meals">In-Room Meals</option>
                                        <option value="None">None</option>
                                    </select>
                                    <button type="submit" className='updateBedroomData'>Change</button>
                                </div>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default DeleteChangeBedrooms
