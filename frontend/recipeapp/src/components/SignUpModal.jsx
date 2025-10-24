// src/components/SignUpModal.jsx
import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function SignUpModal({ onClose, onLogin }) {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        name,
        email,
        password,
      });

      if (onLogin) onLogin({ user: response.data.user, token: response.data.token });
      onClose && onClose();
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content position-relative p-4 rounded-4 shadow-lg"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.15)",
          border: "2px solid rgba(255, 255, 255, 0.3)",
          maxWidth: "400px",
          margin: "50px auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="btn-close position-absolute top-3 end-3"
          style={{ filter: "invert(1)" }}
        ></button>

        <h2 className="text-center mb-4 text-warning fw-bold">
          <i className="bi bi-person-plus-fill"></i> Create Account
        </h2>

        <form onSubmit={handleSignUp} className="d-flex flex-column gap-3">
        
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-warning text-dark">
              <i className="bi bi-person-fill"></i>
            </span>
            <input
              type="text"
              placeholder="Full Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control bg-white bg-opacity-75 text-dark border-0 px-3 py-2"
            />
          </div>

          
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-warning text-dark">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control bg-white bg-opacity-75 text-dark border-0 px-3 py-2"
            />
          </div>

          
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-warning text-dark">
              <i className="bi bi-lock-fill"></i>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control bg-white bg-opacity-75 text-dark border-0 px-3 py-2"
            />
          </div>

          
          <button
            type="submit"
            className="btn btn-lg fw-bold d-flex align-items-center justify-content-center gap-2 mt-2"
            style={{
              background: "linear-gradient(90deg, #ff7a30, #ffb347)",
              color: "white",
              borderRadius: "50px",
              padding: "12px 25px",
              boxShadow: "0 8px 20px rgba(255,123,48,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <i className="bi bi-person-plus-fill"></i> Sign Up
          </button>

          {error && <p className="text-danger text-center mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
