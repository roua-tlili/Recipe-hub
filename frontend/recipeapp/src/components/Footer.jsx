import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

function Footer() {
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer 
      className="p-4 mt-5" 
      style={{
        background: "rgba(255, 243, 230, 0.15)",
        backdropFilter: "blur(12px)",
        borderRadius: "12px 12px 0 0",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.25)",
        color: "#fff"
      }}
    >
      <div className="container">
        <div className="row align-items-start">
         
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3" style={{ color: "#ff9560", textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}>
              <i className="bi bi-journal-bookmark-fill me-2"></i>RecipeShare
            </h3>
           
          </div>

          <div className="col-md-6">
            <h5 className="mb-3" style={{ color: "#ff9560" }}>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column flex-sm-row gap-3 gap-sm-4">
              <li>
                <a href="/" className="text-white text-decoration-none d-flex align-items-center hover-effect">
                  <i className="bi bi-house-door-fill me-1"></i> Home
                </a>
              </li>
              <li>
                <a href="/Myrecipes" className="text-white text-decoration-none d-flex align-items-center hover-effect">
                  <i className="bi bi-bookmark-heart-fill me-1"></i> My Recipes
                </a>
              </li>
              <li>
                <a href="/Myfavrecipes" className="text-white text-decoration-none d-flex align-items-center hover-effect">
                  <i className="bi bi-heart-fill me-1"></i> Favourite
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none d-flex align-items-center hover-effect">
                  <i className="bi bi-envelope-fill me-1"></i> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

        {/* Bottom section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0" style={{ color: "rgba(255,255,255,0.8)" }}>
            {dateString} &copy; 2025 RecipeShare. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white fs-5 hover-effect">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white fs-5 hover-effect">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white fs-5 hover-effect">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .hover-effect:hover {
          color: #ffb347 !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
