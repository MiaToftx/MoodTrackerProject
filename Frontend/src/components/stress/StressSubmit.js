import React from "react";
import { Button } from "react-bootstrap";
import "./StressSubmit.css";

const StressSubmit = ({ submitNewStress }) => {
    // Function to handle stress level button click
    const handleStressClick = (stressLevel) => {
        submitNewStress(stressLevel); // Call the parent component's function to submit new stress level
    };
    
    return (
        <div className="stressSubmit">
            {/* Create stress level buttons with corresponding click handlers */}
            <div className="stressBtnContainer"><Button className="stressBtn" id="level5" onClick={() => handleStressClick("Very high")}>Very high</Button></div>
            <div className="stressBtnContainer"><Button className="stressBtn" id="level4" onClick={() => handleStressClick("High")}>High</Button></div>
            <div className="stressBtnContainer"><Button className="stressBtn" id="level3" onClick={() => handleStressClick("Medium")}>Medium</Button></div>
            <div className="stressBtnContainer"><Button className="stressBtn" id="level2" onClick={() => handleStressClick("Low")}>Low</Button></div>
            <div className="stressBtnContainer"><Button className="stressBtn" id="level1" onClick={() => handleStressClick("Very low")}>Very low</Button></div>
        </div>
    );
}

export default StressSubmit;
