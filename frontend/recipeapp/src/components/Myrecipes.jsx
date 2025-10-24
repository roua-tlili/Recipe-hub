// src/pages/MyRecipes.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function MyRecipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/recipe"); 
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/recipe/${id}`);
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  return (
    <div className="myrecipes-page container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="title text-warning">My Delicious Recipes</h1>
        <button
          className="btn btn-warning btn-lg"
          onClick={() => navigate("/adderecipe")}
        >
          <i className="bi bi-plus-circle-fill me-2"></i> Add Recipe
        </button>
      </div>
      <p className="subtitle text-white mb-5">
        Your personal creations, freshly made by you!
      </p>

      <div className="recipes-container row g-4">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className="col-md-4">
              <div className="recipe-card shadow-sm rounded-4 overflow-hidden">
                {recipe.coverImage && (
                  <img
                    src={recipe.coverImage}
                    alt={recipe.title}
                    className="recipe-img img-fluid"
                    style={{ height: "200px", objectFit: "cover", width: "100%" }}
                  />
                )}
                <div className="recipe-info p-3">
                  <h3 className="text-warning">{recipe.title}</h3>
                  <p className="text-white">{recipe.ingredients}</p>
                </div>
                <div className="recipe-actions d-flex justify-content-end gap-3 p-2">
                  <FaTrash
                    className="action-icon text-danger"
                    onClick={() => handleDelete(recipe._id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No recipes yet</p>
        )}
      </div>
    </div>
  );
}

export default MyRecipes;
