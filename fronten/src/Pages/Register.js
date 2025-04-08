import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://recipe-sharing-platform-backend-0hza.onrender.com/auth/register", form);
      setMessage(res.data.message);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      console.log("token-register",token)
      localStorage.setItem("user", JSON.stringify(user));
       navigate('/');
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  // Generate random stars in the background
  useEffect(() => {
    const starContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Add glowing class to some stars
      if (Math.random() > 0.8) {
        star.classList.add('glowing');
      }

      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="bg-animated d-flex justify-content-center align-items-center min-vh-100 p-4">
      {/* Stars container */}
      <div className="stars"></div>

      <div className="form-container card shadow-sm p-4">
        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>

        {message && <p className="mt-3 text-center text-muted">{message}</p>}

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-success">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
