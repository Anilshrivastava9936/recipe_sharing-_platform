import React from 'react';
import RecipeList from './RecipeList';
import './App.css'; // You can style your app here

const App = () => {
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeList />
    </div>
  );
};

export default App;
