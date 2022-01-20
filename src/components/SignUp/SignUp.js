import React, { useContext } from "react";
import "./SignUp.scss"
import Hotel from '../../Assets/Images/hotel.jpg'
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import { ref, storage, uploadBytesResumable, getDownloadURL } from "../../Services/firebase";
import { Context } from "../../Context/AuthContext";
import ErroPermissions from "../../components/ErroPermissions/ErroPermissions"

function SignUp() {

    const navigate = useNavigate();
    const { isAuthenticated } = useContext(Context);

    const onSubmit = async (data) => {
        const storageRef = ref(storage, "images/" + data.images[0].name);
        await uploadBytesResumable(storageRef, data.images[0]);

        await getDownloadURL(storageRef).then(async (res) => {

            const newUser = {
                email: data.email,
                password: data.password,
                image: res,
            }
            api
                .post("/auth/register", newUser)
                .then(() => {
                    toast.success("Registration Completed Successfully!")
                    setTimeout(() => navigate('/login'), 3000);
                })
                .catch((err) => {
                    console.log(err)
                    toast.error("This Email is Already Registered!");
                });
        })
    }

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('❌ Password is required')
            .min(6, ' Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('❌ Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        email: Yup.string()
            .required('❌ Email is required')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    if (isAuthenticated) {
        return (
            <ErroPermissions />
        )
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
            <div className="altsContain">
                <div className="altsContent">
                    <img src={Hotel} alt="Room"
                        height={610} className="SignUpImg" />
                    <div className="alignSignUp">
                        <div className="SignUpP">SignUp to Pelourinho</div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <span>Email</span>
                            <input className="signUpInputs" placeholder="@gmail.com" placeholder="@gmail.com" {...register("email", { required: true, unique: true })} />
                            <span className="invalid-feedback">{errors.email?.message}</span>
                            <span>Password</span>
                            <input placeholder="Password" name="password" type="password" {...register('password')} className={`signUpInputs ${errors.password ? 'is-invalid' : ''}`} />
                            <span className="invalid-feedback">{errors.password?.message}</span>
                            <span>Repeat Password</span>
                            <input placeholder="Password" name="confirmPassword" type="password" {...register('confirmPassword')} className={`signUpInputs ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <span className="invalid-feedback">{errors.confirmPassword?.message}</span>
                            <input className="signUpFile" type="file" {...register("images", { required: true })} />
                            <span><Link to="/login" data-testid="butt">You already have account?</Link></span>
                            <button className="signUpSubmit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;