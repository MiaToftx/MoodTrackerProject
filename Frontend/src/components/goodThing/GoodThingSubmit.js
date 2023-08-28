import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./GoodThingSubmit.css"; // Import the associated stylesheet

// Define the GoodThingSubmit component
const GoodThingSubmit = ({ submitNewGoodThing }) => {
    // State to track the input value
    const [goodThing, setGoodThing] = useState("");

    // Function to handle the submission of a new good thing
    const handleGoodThingClick = () => {
        if (goodThing) { // Check if there's a value in the input
            submitNewGoodThing(goodThing); // Call the prop function to submit the new good thing
            setGoodThing(""); // Clear the input field after submission
        } else {
            window.alert("You have to write one good thing in the input field");
        }
    };
    
    return (
        <div className="goodThingSubmit">
            <div className="inputContainer">
                {/* Textarea for entering the good thing */}
                <textarea
                    id="goodThingInput"
                    type="text"
                    placeholder="Write one good thing about today..."
                    value={goodThing}
                    onChange={(e) => setGoodThing(e.target.value)} // Update the input value on change
                />
            </div>
            <div className="goodThingBtnContainer">
                {/* Button to submit the good thing */}
                <Button className="goodThingBtn" onClick={handleGoodThingClick}>Submit</Button>
            </div>
        </div>
    );
}

export default GoodThingSubmit; // Export the GoodThingSubmit component
