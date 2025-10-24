import "../App.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

function Allrecipes() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipe')
      .then(response => setRecipes(response.data))
      .catch(error => console.error("Failed to fetch recipes:", error));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className='recipes-container p-4'>
      <h2 className="text-center mb-5" style={{ color: "#ffb347", textShadow: "2px 2px 10px rgba(0,0,0,0.6)" }}>
        All Recipes
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {recipes?.map((recipe) => (
          <div 
            key={recipe._id} 
            className="recipe-card shadow-lg position-relative"
            style={{
              width: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              background: "#fff"
            }}
          >
            
            {recipe.coverImage ? (
              <div style={{ position: "relative" }}>
                <img 
                  src={recipe.coverImage} 
                  alt={recipe.title} 
                  style={{ width: "100%", height: "200px", objectFit: "cover" }} 
                />
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6))"
                  }}
                ></div>
              
                <div 
                  className="position-absolute top-2 end-2 fs-4 p-2"
                  style={{ cursor: "pointer", color: favorites.includes(recipe._id) ? "#ff4d4d" : "#fff" }}
                  onClick={() => toggleFavorite(recipe._id)}
                >
                  {favorites.includes(recipe._id) ? <HiHeart /> : <HiOutlineHeart />}
                </div>
              </div>
            ) : null}

            <div className="p-3">
              <h4 style={{ color: "#ff6f3c", fontWeight: 600 }}>{recipe.title}</h4>
              <p style={{ fontSize: "14px", color: "#333", minHeight: "50px" }}>
                {recipe.ingredients}
              </p>
              <small style={{ color: "#666", display: "block", marginTop: "10px", maxHeight: "60px", overflow: "hidden", textOverflow: "ellipsis" }}>
                {recipe.instructions}
              </small>
            </div>
          </div>
        ))}

        {recipes.length === 0 && (
          <p className="text-center mt-5" style={{ color: "#fff", fontSize: "18px" }}>
            No recipes yet. Be the first to add one!
          </p>
        )}
      </div>
    </div>
  );
}

export default Allrecipes;
