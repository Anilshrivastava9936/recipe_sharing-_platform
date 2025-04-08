import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Recipe from './Pages/Recipe'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import './index.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={ <Home /> } />
        <Route path="/recipe" element={ <Recipe /> } />
      </Routes>
    </Router>
  )
}

export default App