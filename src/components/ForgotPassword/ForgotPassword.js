import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ForgotPassword.scss'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import api from "../../Services/api";
import { toast, ToastContainer } from "react-toastify"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 480,
    bgcolor: '#E2E9F3',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    border: 'none',
};

function ForgotPassword() {

    const onSubmit = (data) => {
        const sendEmail = {
            email: data.email,
        }

        api
            .post("/auth/passwordReset", sendEmail)
            .then(function () {
                toast.success("Email Sent Successfuly!")
                setTimeout(() => window.location.pathname = "/login", 3000);
            })

            .catch(function (err) {
                toast.error("This Email Does Not Exists!")
            })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('❌ Email is required')
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
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
            <div className="forgotPasswordTxt">
                <p className="click" onClick={handleOpen}>Forgot Password?</p>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="passF">
                            Forgot your password?
                        </div>
                        <div className="passReset">
                            To reset your password enter your email address in the field below.
                            After sending, check your inbox.
                        </div>
                        <Typography id="modal-modal-description">
                            <form onSubmit={handleSubmit(onSubmit)} className="form2" method="POST">
                                <input placeholder="@gmail.com" className="input" placeholder="@gmail.com" {...register("email", { required: true })} />
                                <span className="invalid-feedback">{errors.email?.message}</span>
                                <button className="send">Send</button>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default ForgotPassword