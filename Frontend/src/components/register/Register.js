import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const Register = ({ registerNewUser }) => {
    // State variables to store user input
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    // Initialize the navigate function from react-router-dom
    const navigate = useNavigate();

    // Function to handle register button click
    const handleRegisterNewClick = () => {
        if (username && password && passwordRepeat) {
            if (password === passwordRepeat) { // Check if passwords match
                registerNewUser(username, password); // Call the registerNewUser function
                setPassword("");
                setPasswordRepeat("");
                setUsername("");
                navigate('/'); // Navigate to the home page
            } else {
                window.alert("You have entered two different passwords. Try again");
                setPassword("");
                setPasswordRepeat("");
            }
        } else {
            // If username or password is missing, show an alert
            window.alert("You have to enter a username and password. Try again");
        }
    };

    return (
        <div className="registerContainer">
            <div className="header">Create your Account</div>
            <form id="inputForm">
                {/* Input fields for username, password, and password repeat */}
                <div className="label-input-container">
                    <label id="usernameLabel">Username:</label>
                    <input
                        id="usernameInput"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="label-input-container">
                    <label id="passwordLabel">Password:</label>
                    <input
                        id="passwordInput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="label-input-container">
                    <label id="passwordRepeatLabel">Repeat Password:</label>
                    <input
                        id="passwordRepeatInput"
                        type="password"
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                </div>
            </form>
            {/* Register button */}
            <div className="submit">
                <button id="registerBtn" type="button" onClick={handleRegisterNewClick}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
