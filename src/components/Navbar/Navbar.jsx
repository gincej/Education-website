import React from "react";
import "./navbar.css";
import Logo from "../Images/logoipsum-217.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md" id="override-bootstrap">
      <div className="container-fluid">
        <a className="navbar-brand me-md-4" href="/">
          <img className="logo" src={Logo} alt="Website" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form w-100 me-4 my-3 my-md-0" role="search">
            <input
              className="form-control ps-2"
              type="search"
              placeholder="Search our courses..."
              aria-label="Search"
            />
          </form>
          <ul className="navbar-nav w-100 d-flex justify-content-end align-items-center gap-2 gap-md-5">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/Courses/Programming"
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/Contacts"
              >
                Contacts
              </a>
            </li>
            <ul className="buttons list-unstyled d-flex gap-3">
              <li className="nav-item">
                <button type="button" className="btn btn--secondary ">
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn--primary">
                  Sign up
                </button>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
