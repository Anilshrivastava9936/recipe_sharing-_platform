// Importing all required external modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Authenticate from './routes/Authenticate.js'; // Make sure to add .js if you're using ES modules
import RecipeRoutes from './routes/recipeRoutes.js';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002 || "https://recipe-sharing-platform-backend-0hza.onrender.com";
app.use(express.json());

app.use(
    cors({
        origin: "https://recipe-sharing-platform-wine.vercel.app/", // ✅ Allow requests from React frontend
        credentials: true,
    })
);

// Connecting to DB Atlas
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successfully..."))
  .catch((err) => console.log(err));

// API landing page http://localhost:3000/
app.get('/', async (req, res) => {
  try {
    res.send("<h2 style='color:red;text-align:center'>Welcome to the MERN Stack | Week 2 | Backend</h2>");
  } catch (err) {
    console.log(err);
  }
});

app.use("/auth", Authenticate);
app.use("/add", RecipeRoutes);

// Server connection and testing
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running on port :" + PORT);
});























// // Imporiting all required exterl modules

// const express=require('express')
// const mongoose=require('mongoose')
// // const User=require('./models/User')
// // const bcrypt=require('bcryptjs')
// const Authenticate = require('./routes/Authenticate');
// require('dotenv').config()
// const app=express()
// const PORT=3000
// app.use(express.json());

// //Connecting to DB Atlas
// mongoose.connect(process.env.MONGO_URL).then(
//     ()=>console.log("DB connected successfully...")
// ).catch(
//     (err)=>console.log(err)
// )

// //API landing page http://localhost:3000/



// app.get('/',async(req,res)=>{
//     try{
//         res.send("<h2 style='color:red;text-align:center'>Welcome to the MERN Stack | Week 2 | Backend</h2>")
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// })

// app.use("/authenticat",Authenticate);

// //Server connection and testing
// app.listen(PORT,(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     console.log("Server is running on port :"+PORT)
// })