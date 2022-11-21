import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
//import "../css/HomePage.css";
function Home() {

  return (
    <div className="HomeBody">
      <nav className='mainMenu' >
        <ul className='menuOptions'>
          {/* <div className="welcome" ></div>
          <div className="iwelcome">
            <center> <h1>Welcome</h1></center>
          </div> */}
          <div className="card text-bg-dark text-white border-0" >
            <img src="https://images.unsplash.com/photo-1656926208209-a7528af41f02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="card-img" alt="Background" height="1000px" style={{width:"1800px"}}/>
            <div className="card-img-overlay d-flex flex-column" >
              <div classNameName="container">

               <center> <h5 className="card-title display-3 fw-bolder mb-0">WELCOME</h5></center>
                {/* <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p> */}

              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <NavLink className="btn btn-outline-dark px-4 py-2" to="/login" >Login</NavLink>

              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <NavLink className="btn btn-outline-dark px-4 py-2" to="/signup" >SignUp</NavLink>
            </div>


          </div>


        </ul>
      </nav>

    </div>
  );
}
export default Home;