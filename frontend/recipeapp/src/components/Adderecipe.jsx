import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

function Adderecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

 
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title || !ingredients || !instructions) {
      setError("Please fill all fields!");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        imageUrl = await toBase64(image); // for demo, store Base64
      }

      const response = await fetch("http://localhost:5000/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          ingredients,
          instructions,
          coverImage: imageUrl,
        }),
      });

      if (!response.ok) throw new Error("Failed to add recipe");

      setSuccess("Recipe added successfully!");
      setTitle(""); setIngredients(""); setInstructions(""); setImage(null);

    } catch (err) {
      console.error(err);
      setError("Error adding recipe!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" 
      style={{
        background: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80') no-repeat center/cover",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="add-recipe-container p-5 rounded-4 shadow-lg"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.1)",
          border: "2px solid rgba(255,255,255,0.3)",
          maxWidth: "550px",
          width: "100%",
        }}
      >
        <h2 className="text-center mb-4 text-warning" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}>
          <i className="bi bi-journal-plus"></i> Add Your Recipe
        </h2>

        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">

       
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-gradient-warning text-dark">
              <i className="bi bi-journal-text"></i>
            </span>
            <input
              type="text"
              placeholder="Recipe Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control bg-white bg-opacity-10 text-white border-0 px-3 py-2"
            />
          </div>

       
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-gradient-warning text-dark">
              <i className="bi bi-list-ul"></i>
            </span>
            <textarea
              placeholder="Ingredients..."
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
              rows={3}
              className="form-control bg-white bg-opacity-10 text-white border-0 px-3 py-2"
            />
          </div>

         
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-gradient-warning text-dark">
              <i className="bi bi-pencil-square"></i>
            </span>
            <textarea
              placeholder="Cooking Instructions..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
              rows={4}
              className="form-control bg-white bg-opacity-10 text-white border-0 px-3 py-2"
            />
          </div>

          
          <div className="input-group rounded-3 overflow-hidden shadow-sm">
            <span className="input-group-text bg-gradient-warning text-dark">
              <i className="bi bi-card-image"></i>
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control bg-white bg-opacity-10 text-white border-0"
            />
          </div>

          {image && (
            <div className="text-center mt-2">
              <p className="text-white">Selected image: {image.name}</p>
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
          )}

       
          <button
            type="submit"
            className="btn btn-lg fw-bold text-white d-flex align-items-center justify-content-center gap-2"
            style={{
              background: "linear-gradient(90deg, #ff7a30, #ffb347)",
              borderRadius: "50px",
              padding: "12px 25px",
              boxShadow: "0 8px 20px rgba(255,123,48,0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <i className="bi bi-plus-circle-fill"></i> Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adderecipe;
