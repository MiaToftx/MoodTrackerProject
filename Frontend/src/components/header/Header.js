import "./Header.css"; // Import the associated stylesheet
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// Define the Header component
const Header = ({ userLogout }) => {
    return (
        <Navbar> {/* Create the navigation bar */}
            <Container fluid> {/* Use a fluid container for responsiveness */}
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        {/* Link to the home page */}
                        <FontAwesomeIcon className="icon" icon={faCloudSunRain} /> MoodTracker
                    </Link>
                </Navbar.Brand>
                <Navbar id="navBarScroll">
                    <Link to="/register"> {/* Link to the registration page */}
                        <Button className="custom-button ml-3 registerBtn">Register</Button>
                    </Link>
                    <Link to="/login"> {/* Link to the login page */}
                        <Button className="custom-button loginBtn mx-3">Login</Button>
                    </Link>
                </Navbar>
            </Container>
        </Navbar>
    );
};

export default Header; // Export the Header component


