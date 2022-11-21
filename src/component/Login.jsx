import React, { useState } from "react";
//import "../css/UserLogin.css";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function Login() {
    const navigate = useNavigate();
    const { signup, setsignUp } = useState([]);
    const { register, handleSubmit } = useForm();
    const { login, handleClick } = useNavigate();
    const onSubmit = data => {
        const list = [];
        alert("register successfully");
    }



    const ProductPage = () => {
        navigate('/products');
    };


    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card text-bg-dark text-white border-0" >
                        <img src="https://images.unsplash.com/photo-1659007747399-c1eb7acec11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                              className="card-img" alt="Background" height="1000px" style={{width:"1800px"}}/>
                        <div className="card-img-overlay d-flex flex-column" >
                            <div className="container">
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <center> <h1>Login</h1></center>
                                <br></br>
                                <form onSubmit={ProductPage}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" {...register("email")} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email*" required />
                                    </div>
                                    <br></br>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Enter Password</label>
                                        <input type="password" class="form-control" {...register("password")} id="exampleInputPassword1" placeholder="Password*" required />
                                    </div>
                                    <br></br>

                                    <br></br>
                                    <center><button type="submit" class="btn btn-outline-dark px-4 py-2">Login</button></center>
                                </form>
                            </div></div>
                    </div>

                </div>
            </div>

        </>
    );
}
