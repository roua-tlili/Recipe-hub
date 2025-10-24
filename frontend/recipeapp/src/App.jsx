import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Allrecipes from "./components/Allrecipes";
import Myfavrecipes from "./components/Myfavrecipes";
import Myrecipes from "./components/Myrecipes";
import Adderecipe from "./components/Adderecipe";
import Editrecipie from "./pages/Editrecipie";
import Modal from "./components/modal"; // 🧩 your login modal

export default function App() {
  // store user and token globally (in App state)
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // called after login or signup
  const handleLogin = ({ user: newUser, token: newToken }) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("token", newToken);
    setUser(newUser);
    setToken(newToken);
  };

  // called when user logs out
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <BrowserRouter>
      {/* ✅ pass user + logout to Navbar */}
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* home page */}
        <Route path="/" element={<Home onLogin={handleLogin} />} />

        {/* login modal (optional separate route) */}
        <Route path="/login" element={<Modal onLogin={handleLogin} />} />

        {/* protected pages */}
        <Route path="/Myrecipes" element={<Myrecipes user={user} />} />
        <Route path="/Myfavrecipes" element={<Myfavrecipes user={user} />} />
        <Route path="/Adderecipe" element={<Adderecipe user={user} />} />
        <Route path="/Editrecipie" element={<Editrecipie user={user} />} />

        {/* you can also keep Allrecipes if you have a route for it */}
        <Route path="/Allrecipes" element={<Allrecipes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
