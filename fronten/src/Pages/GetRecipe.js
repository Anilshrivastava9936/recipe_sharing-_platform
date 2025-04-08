import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3002/add/recipe'); // Replace with your backend API URL
        setRecipes(response.data);
      } catch (err) {
        setError('Error fetching recipes');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-left mb-4">Recipe List</h1>
      <div className="row  ">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
          >
            <div
              className=""
              style={{ borderRadius: '15px' }}
            >
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="card-img-top custom-img"
                  style={{ borderRadius: '15px 15px 0 0' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">
                  <strong>Category:</strong> {recipe.category}
                </p>
                <p className="card-text">
                  <strong>Type:</strong> {recipe.type}
                </p>
                <p className="card-text">
                  <strong>Ingredients:</strong>
                </p>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p className="card-text">
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecipeList;
