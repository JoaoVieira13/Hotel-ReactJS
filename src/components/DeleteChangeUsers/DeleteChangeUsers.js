import React from 'react';
import api from "../../Services/api";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import "./DeleteChangeUsers.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: '#252C4A',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
};

function DeleteChangeUsers({ userId }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const deleteUser = {
            _id: data._id,
            email: data.email,
            password: data.password,
            userType: data.userType,
            reserve: data.reserve,
        }

        api
            .delete(`/auth/login/${userId}`, deleteUser)
            .then(function () {
                console.log("apagado com sucesso!")
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    const onClick = (data) => {
        const changeUser = {
            email: data.email,
            password: data.password,
            userType: data.userType,
        }

        api
            .put(`/auth/login/${userId}`, changeUser)
            .then(function () {
                console.log("User alterado com sucesso!")
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    return (
        <div className='doubleButton'>
            <form>
                <button className='deleteUser' type='submit' onClick={(() => api.delete(`/auth/login/${userId}`))} >Delete</button>
            </form>
            <button className='changeUser' onClick={handleOpen}>Change</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="userData">
                        Do you really want to change <br /> user data?
                    </div>
                    <Typography id="modal-modal-description">
                        <form className="changedata" method='PUT' onSubmit={handleSubmit(onClick)}>
                            <div className='marginTopform'>
                                <input className="userInput" placeholder='Email' {...register("email", { required: true })} />
                                <input className="userInput" type="password" placeholder='Password' {...register("password", { required: true })} />
                                <input className="userInput" placeholder='User Type' {...register("userType", { required: true })} />
                                <button type="submit" className='updateUserData'>Change</button>
                            </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default DeleteChangeUsers
