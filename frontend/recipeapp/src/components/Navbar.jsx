import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/frontend_assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const isLoggedIn = !!user;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-25 backdrop-blur shadow-sm rounded px-4 py-3 sticky-top">
      
      <Link className="navbar-brand d-flex align-items-center text-warning fw-bold" to="/">
        <img src={logo} alt="Logo" style={{ width: "50px", marginRight: "10px" }} />
        <span className="fs-4">CookMaster</span>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">
          <li className="nav-item">
            <Link className="nav-link text-warning fw-bold d-flex align-items-center" to="/">
              <i className="bi bi-house-door-fill me-1"></i> Home
            </Link>
          </li>

          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold d-flex align-items-center" to="/Myrecipes">
                  <i className="bi bi-journal-bookmark-fill me-1"></i> My Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold d-flex align-items-center" to="/Myfavrecipes">
                  <i className="bi bi-heart-fill me-1"></i> Favourite
                </Link>
              </li>
            </>
          )}

          <li className="nav-item">
            <Link className="nav-link text-warning fw-bold d-flex align-items-center" to="/contact">
              <i className="bi bi-envelope-fill me-1"></i> Contact
            </Link>
          </li>

          {!isLoggedIn ? (
            <li className="nav-item ms-2">
              <button className="btn btn-outline-warning d-flex align-items-center" onClick={() => navigate("/login")}>
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item d-flex align-items-center ms-3 text-warning">
                <i className="bi bi-person-circle me-1"></i> Hi, {user.name || user.email}
              </li>
              <li className="nav-item ms-2">
                <button className="btn btn-outline-danger d-flex align-items-center" onClick={onLogout}>
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Hover effect*/}
      <style>
        {`
          .navbar-nav .nav-link:hover {
            color: white !important;
            text-shadow: 0 0 10px #ff7a30, 0 0 15px #ff9560;
            transform: scale(1.1);
            transition: all 0.3s ease;
          }
          .btn-outline-warning:hover {
            color: #fff !important;
            background-color: #ff7a30 !important;
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255,122,48,0.6);
          }
          .btn-outline-danger:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(255,0,0,0.6);
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
