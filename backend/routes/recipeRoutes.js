import Recipe from '../models/RecipeModel.js'
import express from 'express';

// dotenv.config();
const router = express.Router();

router.post('/recipe', async (req, res) => {
    const { title, ingredients, instructions, image,  category, type } = req.body;
  
    // Basic validation to check if all required fields are present
    if (!title || !ingredients || !instructions || !category || !type ) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate the ingredients format (make sure it's an array)
    if (!Array.isArray(ingredients)) {
        return res.status(400).json({ message: 'Ingredients must be an array' });
    }

    // If everything is valid, proceed with creating the recipe
    try {
      const newRecipe = new Recipe({
        title,
        ingredients,
        instructions,
        image,
        // createdBy,
        category,
        type, // Veg or Non-Veg
      });

      console.log("try")
  
      const savedRecipe = await newRecipe.save();
      console.log("try catch")
      res.status(201).json(savedRecipe);
    } catch (err) {
      res.status(400).json({ message: 'Error adding recipe', error: err.message });
    }
  });

// Get all recipes
router.get('/recipe', async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching recipes', error: err.message });
    }
});

export default router;
