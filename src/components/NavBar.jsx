import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid fw-bolder">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdZDX6QEWxKPLwUMaSvNSXZst-aWFOVcCVA&usqp=CAU"
            alt=""
            width="30"
            // height="24"
            className="d-inline-block align-text-top m-2"
            srcset=""
          />
          <Link className="navbar-brand m-2" to="/">
            Braking Bad
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-2">
                {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"> */}

                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/cast">
                  Cast
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link" to="/quotes">
                  Quotes
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link disabled" to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
