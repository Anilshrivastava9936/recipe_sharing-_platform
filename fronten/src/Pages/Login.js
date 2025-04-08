import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://recipe-sharing-platform-backend-0hza.onrender.com/auth/login", form);
      console.log("user data",res.data)
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      console.log("token",token)
      localStorage.setItem("user", JSON.stringify(user));
      setMessage(res.data.message);
     
      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light p-4">
      <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-success mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
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
              name="password"
              id="password"
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-3 text-center text-muted">{message}</p>
        )}

        <p className="text-center mt-3">
          New user?{" "}
          <Link to="/register" className="text-success">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
