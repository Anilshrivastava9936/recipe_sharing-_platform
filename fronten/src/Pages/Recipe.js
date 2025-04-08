// src/components/AddRecipeForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
    const navigate=useNavigate
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: '',
    category: 'Other',
    type: 'Veg',
    createdBy: '', // Replace this with the logged-in user's ID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert ingredients to an array (if it's a comma-separated string)
    const ingredientsArray = formData.ingredients.split(',').map(ingredient => ingredient.trim());

    const payload = {
      ...formData,
      ingredients: ingredientsArray,
    };

    console.log("Submitting payload:", payload);  // Log payload for debugging

    try {
       
        const response = await axios.post('http://localhost:3002/add/recipe', payload);
        console.log('Recipe added:', response.data);
        navigate('/home');
    } catch (err) {
        console.error('Error adding recipe:', err.response?.data || err.message);
    }
};


  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Recipe</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="ingredients" className="form-label">Ingredients (comma-separated):</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="instructions" className="form-label">Instructions:</label>
                  <textarea
                    className="form-control"
                    id="instructions"
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image URL:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category:</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Snack">Snack</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="type" className="form-label">Type:</label>
                  <select
                    className="form-select"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Recipe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;
