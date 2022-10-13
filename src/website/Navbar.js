import React from "react";
import cart from "../photos/navbar/search/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar position-fixed container-fluid  navbar-expand-lg bg-light navy">
        <div class="container-fluid nave">
          <Link class="navbar-brand" to="/">
            NorthStar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="#">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link " to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
            <Link to="/cart">
              {" "}
              <img src={cart} alt="" />{" "}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
