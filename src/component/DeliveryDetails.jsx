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
        alert("Order Placed Successfully");
        navigate('/products');
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <div className="card text-bg-dark text-white border-0" >
                    <img src="https://images.unsplash.com/photo-1659007747399-c1eb7acec11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                             className="card-img" alt="Background" height="1000px" style={{width:"1800px"}} />
                        <div className="card-img-overlay d-flex flex-column" >
                            <div className="container">
                            <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <center><h1>Place Order</h1></center>
                                <br></br>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" class="form-control" {...register("name")} id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Name*"required /><br></br>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" {...register("emailHelp")} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email*" required />                                    </div>
                                    <br></br>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Address</label>
                                        <input type="text" class="form-control" {...register("address")} id="exampleInputAddress" placeholder="Enter Address*" required />
                                    </div><br></br>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Pincode</label>
                                        <input type="number" class="form-control" {...register("pincode")} id="exampleInputPincode" placeholder="Enter Pincode*" required />
                                    </div><br></br>
                                    <center><button type="submit" class="btn btn-outline-dark px-4 py-3" >Place Order</button></center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
