import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = ({ userLogin }) => {
  // State variables to hold username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle the login button click
  const handleLoginClick = () => {
    if (username && password) {
      // Attempt to log in using provided credentials
      let loginSuccessful = userLogin(username, password);

      if (loginSuccessful) {
        // If login is successful, clear inputs and navigate to the home page
        setPassword("");
        setUsername("");
        navigate('/'); // Navigate to the home page
      } else {
        // If login fails, show an alert and clear inputs
        window.alert("Wrong username or password. Try again");
        setUsername("");
        setPassword("");
      }
    }
    else {
      // If username or password is missing, show an alert
      window.alert("You have to enter a username and password. Try again");
    }
  };

  return (
    <div className="loginContainer">
      <div className="header">Login to Account</div>
      <form id="inputForm">
        <div className="label-input-container">
          <label id="usernameLabelLogin">Username:</label>
          <input
            id="usernameInputLogin"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="label-input-container">
          <label id="passwordLabelLogin">Password:</label>
          <input
            id="passwordInputLogin"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="login">
        {/* Login button with click event */}
        <button id="loginBtn" type="button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
