// src/components/LoginPage.jsx
import React, { useState } from "react";
import axios from "axios";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/user/signin", {
        email,
        password,
      });
      onLogin({ user: response.data.user, token: response.data.token });
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpError("");
    try {
      const response = await axios.post("http://localhost:5000/user/register", {
        name,
        email: signUpEmail,
        password: signUpPassword,
      });
      onLogin({ user: response.data.user, token: response.data.token });
      setIsSignUp(false);
    } catch (err) {
      setSignUpError(err?.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat fixed',
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="card p-5 shadow-lg rounded-4"
        style={{
          maxWidth: "400px",
          width: "90%",
          background: "rgba(255,255,255,0.1)",
          border: "2px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(15px)",
        }}
      >
        {!isSignUp ? (
          <>
            <h2 className="text-center mb-4 text-white fw-bold">
              <i className="bi bi-box-arrow-in-right me-2"></i> Login
            </h2>

            <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
              <div className="input-group rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white bg-opacity-20 text-dark">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control border-0 px-3 py-2 text-white bg-transparent"
                />
              </div>

              <div className="input-group rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white bg-opacity-20 text-dark">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control border-0 px-3 py-2 text-white bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg fw-bold d-flex align-items-center justify-content-center gap-2 mt-2 text-white"
                style={{
                  background: "linear-gradient(90deg, #ff7a30, #ffb347)", // Orange
                  borderRadius: "50px",
                  padding: "12px 25px",
                  boxShadow: "0 8px 20px rgba(255,123,48,0.5)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <i className="bi bi-box-arrow-in-right"></i> Login
              </button>

              {error && <p className="text-danger text-center mt-2">{error}</p>}

              <p className="text-center mt-3 text-white">
                Don’t have an account?{" "}
                <span
                  className="text-warning fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-center mb-4 text-white fw-bold">
              <i className="bi bi-person-plus-fill me-2"></i> Sign Up
            </h2>

            <form onSubmit={handleSignUp} className="d-flex flex-column gap-3">
              <div className="input-group rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white bg-opacity-20 text-dark">
                  <i className="bi bi-person-fill"></i>
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control border-0 px-3 py-2 text-white bg-transparent"
                />
              </div>

              <div className="input-group rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white bg-opacity-20 text-dark">
                  <i className="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                  className="form-control border-0 px-3 py-2 text-white bg-transparent"
                />
              </div>

              <div className="input-group rounded-3 overflow-hidden shadow-sm">
                <span className="input-group-text bg-white bg-opacity-20 text-dark">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                  className="form-control border-0 px-3 py-2 text-white bg-transparent"
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg fw-bold d-flex align-items-center justify-content-center gap-2 mt-2 text-white"
                style={{
                  background: "linear-gradient(90deg, #ff7a30, #ffb347)", // Orange
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

              {signUpError && <p className="text-danger text-center mt-2">{signUpError}</p>}

              <p className="text-center mt-3 text-white">
                Already have an account?{" "}
                <span
                  className="text-warning fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsSignUp(false)}
                >
                  Login
                </span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
