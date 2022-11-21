import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div c classNameName="hero">

            <div className="card text-bg-dark text-white border-0" >
                <img src="/assests/stock-photo-festive-wrapped-presents-shopping-cart.jpeg" className="card-img" alt="Background" height="350px" />
                <div className="card-img-overlay d-flex flex-column" >
                    <div classNameName="container">

                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASONAL ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>

                    </div>
                </div>
            </div>
          {/* <Products/> */}
        </div>
    );
}

export default Home;