import React, { useState } from "react";


function EditRecipe({ recipe, closeModal, updateRecipeInList }) {
  const [formData, setFormData] = useState({
    title: recipe.title,
    ingredients: recipe.ingredients,
    image: recipe.image,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/recipes/${recipe._id}`, formData);
      // Met à jour la recette dans la liste principale
      updateRecipeInList({ ...recipe, ...formData });
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Recipe</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Ingredients"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <div className="modal-buttons">
            <button type="submit">Update</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecipe;

