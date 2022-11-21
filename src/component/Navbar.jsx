import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({setShow}) => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm" >
                <div className="container" >
                    <Link className="navbar-brand fw-bold fs-4" to="#" onClick={()=>setShow(true)}>COLLECTION</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products </Link>
                            </li>
                         
                         
                               
                        </ul>
                       <div className="buttons">
                         <Link to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in me-1"></i>Login
                         </Link>
                         <Link to="/register" className="btn btn-outline-dark ms-2">
                            <i className="fa fa-sign-in me-1"></i>Register
                         </Link>
                         <Link to="/cart" className="btn btn-outline-dark ms-2" onClick={()=>setShow(false)}>
                            <i className="fa fa-sign-in me-1"></i>Cart (0)
                         </Link>
                       </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;