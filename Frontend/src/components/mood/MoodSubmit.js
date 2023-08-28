import React from "react";
import { Button } from "react-bootstrap";
import "./MoodSubmit.css";

const MoodSubmit = ({ submitNewMood }) => {
    // Function to handle mood button click
    const handleMoodClick = (mood) => {
        submitNewMood(mood); // Call the submitNewMood function with the selected mood
    };
    
    return (
        <div className="moodSubmit">
            {/* Render a set of mood buttons */}
            <div className="moodBtnContainer"><Button className="moodBtn" id="excitedBtn" onClick={() => handleMoodClick("Excited")}>Excited</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="sadBtn" onClick={() => handleMoodClick("Sad")}>Sad</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="happyBtn" onClick={() => handleMoodClick("Happy")}>Happy</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="anxiousBtn" onClick={() => handleMoodClick("Anxious")}>Anxious</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="emptyBtn" onClick={() => handleMoodClick("Empty")}>Empty</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="irritableBtn" onClick={() => handleMoodClick("Irritable")}>Irritable</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="angryBtn" onClick={() => handleMoodClick("Angry")}>Angry</Button></div>
            <div className="moodBtnContainer"><Button className="moodBtn" id="neutralBtn" onClick={() => handleMoodClick("Neutral")}>Neutral</Button></div>  
        </div>
    )
}

export default MoodSubmit;
