// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component
// import ForgotPassword from "./ForgotPassword"; // Import the ForgotPassword component

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   // Perform authentication logic here (connect to the backend)
  //   // For demo purposes, just log the entered username and password
  //   console.log("Username:", username);
  //   console.log("Password:", password);

  //   // Reset form fields
  //   setUsername("");
  //   setPassword("");
  // };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Simulating a login check (Replace with actual authentication logic)
    if (username === "user@example.com" && password === "password") {
      console.log("Login successful");
      setError("");
      // Add logic to redirect to the next page or perform other actions upon successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className=" shadow p-5">
            <h2 className="text-center mb-4">Welcome Back JKSSBL</h2>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username/Mail/Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={handleShowPasswordToggle}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
