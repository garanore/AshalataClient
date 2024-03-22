// Signup.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import axios from "axios";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rank, setRank] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const API_URL = "http://localhost:9000/signup";

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Check if passwords match when the password is updated
    setPasswordMatchError(e.target.value !== confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match when the confirm password is updated
    setPasswordMatchError(e.target.value !== password);
  };

  const handleRankChange = (e) => {
    setRank(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");

    // Check if passwords match before submitting the form
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      console.log("After form submission logic");
      return;
    }
    try {
      // Make a POST request to your Express server using the API_URL constant
      const response = await axios.post(API_URL, {
        phoneNumber,
        username,
        password,
        rank,
      });
      console.log("Response:", response.data);
      console.log("Phone Number:", phoneNumber);
      console.log("Username:", username);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      console.log("Rank:", rank);

      // Reset form fields
      setPhoneNumber("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setRank("");
      setPasswordMatchError(false);
    } catch (error) {
      console.error("Error submitting the form:", error.response.data);
      // Handle error, show a message to the user, etc.
    }
    // Perform signup logic here (connect to the backend)
    // For demo purposes, log the entered data
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-5">
            <h2 className="text-center mb-4">Account Create</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Phone Number"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Unique user name"
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
                    className={`form-control ${
                      passwordMatchError ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="mini 8 character"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength="8"
                    required
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {passwordMatchError && (
                  <div className="invalid-feedback">
                    Passwords do not match.
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className={`form-control ${
                      passwordMatchError ? "is-invalid" : ""
                    }`}
                    id="confirmPassword"
                    placeholder="must be same password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    minLength="8"
                    required
                  />
                  <button
                    className="btn  btn-outline-secondary"
                    type="button"
                    onClick={toggleShowConfirmPassword}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {passwordMatchError && (
                  <div className="invalid-feedback">
                    Passwords do not match.
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="rank" className="form-label">
                  পদ নির্বাচন করুণ
                </label>
                <select
                  className="form-select"
                  id="rank"
                  value={rank}
                  onChange={handleRankChange}
                  required
                >
                  <option value="" disabled>
                    Select Rank
                  </option>
                  <option value="Captain">Captain</option>
                  <option value="Lieutenant">Lieutenant</option>
                  <option value="Sergeant">Sergeant</option>
                </select>
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

export default Signup;
