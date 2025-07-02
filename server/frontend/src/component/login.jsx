import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./constent";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const csrftoken = getCookie("csrftoken");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setUser(data.username); // Set user in App state
        navigate("/");
      } else {
        alert("failed", data.error);
      }
    } catch (err) {
      alert("Network error", err);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center text-white"
      style={{ backgroundColor: "#03454A", padding: "50px" }}
    >
      <div className="card p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-decoration-none">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
