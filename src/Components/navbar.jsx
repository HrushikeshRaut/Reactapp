import React from "react";
import { useNavigate } from "react-router-dom";
// import Components from "../Components/navbar"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" onClick={()=>navigate("/")}>
              Login<span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" onClick={()=>navigate("/home")}>
              Home
            </a>
            <a className="nav-item nav-link" onClick={()=>navigate("/form")}>
              Form
            </a>
            {/* <a className="nav-item nav-link" href="#">Pricing</a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
