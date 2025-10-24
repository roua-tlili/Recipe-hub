import React from 'react';
import { useNavigate } from 'react-router-dom';
import Allrecipes from '../components/Allrecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Online high-quality images
const foodImages = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80", // changed second image
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid p-0 position-relative">
      
      {/* Hero Section */}
      <section 
        className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center text-lg-start p-5"
        style={{ minHeight: "80vh" }}
      >
        {/* Left Text */}
        <div className="col-lg-6 text-center text-lg-start text-white mb-5 mb-lg-0">
          <h1 className="display-4 fw-bold text-warning mb-3" style={{ textShadow: "3px 3px 12px rgba(0,0,0,0.7)" }}>
            Cook, Share & Inspire
          </h1>
          <p className="lead text-light mb-4" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)", lineHeight: "1.8" }}>
            Join a vibrant community of food lovers! Share your favorite recipes, explore new ideas, and bring creativity to your kitchen. 
            From mouth-watering desserts to hearty main dishes, discover dishes from around the world and learn tips from fellow chefs. 
            Connect, comment, rate, and save your favorites — make every meal a celebration of taste and creativity. Explore, inspire, and delight in the joy of cooking every day!
          </p>
          <button 
            className="btn btn-gradient btn-lg d-flex align-items-center gap-2"
            onClick={() => navigate("/Adderecipe")}
            style={{
              fontWeight: 600,
              background: "linear-gradient(90deg, #ff7a30, #ffb347)",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "12px 25px",
              boxShadow: "0 6px 15px rgba(255,123,48,0.4)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <i className="bi bi-plus-circle-fill"></i> Share Your Recipe
          </button>
        </div>

        {/* Right Images - collage */}
        <div className="col-lg-6 position-relative d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
          {foodImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded shadow-lg overflow-hidden"
              style={{
                width: "220px",  // slightly bigger
                height: "160px",
                position: "absolute",
                top: `${idx * 60}px`, // more space between images
                right: `${idx * 50}px`,
                transform: `rotate(${idx * 5 - 5}deg)`,
                border: "3px solid rgba(255,255,255,0.3)",
                transition: "transform 0.3s, box-shadow 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = `scale(1.05) rotate(${idx * 5 - 5}deg)` }
              onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${idx * 5 - 5}deg)` }
            >
              <img 
                src={img} 
                alt={`Delicious food ${idx+1}`} 
                className="img-fluid h-100 w-100" 
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Recipes Section */}
      <section className="recipes-container p-4">
        <Allrecipes />
      </section>
    </div>
  );
}

export default Home;
