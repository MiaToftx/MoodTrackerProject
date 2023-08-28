import React, { useEffect } from "react";
import "../home/Home.css";
import MoodSubmit from "../mood/MoodSubmit";
import MoodDisplay from "../mood/MoodDisplay";
import StressSubmit from "../stress/StressSubmit";
import StressDisplay from "../stress/StressDisplay";
import GoodThingSubmit from "../goodThing/GoodThingSubmit";
import GoodThingDisplay from "../goodThing/GoodThingDisplay";

// Define the Home component
const Home = ({ submitNewMood, allMoods, submitNewStress, allStress, submitNewGoodThing, allGoodThings }) => {
    useEffect(() => {
        const segments = ["moodContainer", "stressContainer", "oneGoodThingContainer"];

        const handleScroll = () => {
            const currentPosition = window.scrollY + window.innerHeight / 2;

            // Determine which segment is currently in view
            for (let i = 0; i < segments.length; i++) {
                const segment = document.getElementById(segments[i]);
                const segmentTop = segment.offsetTop;
                const segmentBottom = segmentTop + segment.offsetHeight;

                // Highlight the corresponding point in the tracker bar
                if (currentPosition >= segmentTop && currentPosition < segmentBottom) {
                    const points = document.querySelectorAll("#tracker-bar .point");
                    points.forEach((point, index) => {
                        point.style.backgroundColor = index === i ? "#FF6347" : "#FFF";
                    });
                    break;
                }
            }
        };

        // Attach the scroll event listener
        document.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []); // Run this effect once on component mount

    // Render the Home component
    return (
        <div className="outerContainer">
            <div className="trackerContainer">
                <div id="tracker-bar">
                    <div className="point"></div>
                    <div className="point"></div>
                    <div className="point"></div>
                </div>
            </div>
            <div className="innerContainer">
                <div id="moodContainer">
                    <MoodSubmit submitNewMood={submitNewMood} />
                    {allMoods && <MoodDisplay allMoods={allMoods} />} {/* Render MoodDisplay if allMoods is truthy */}
                </div>
                <div id="stressContainer">
                    <StressSubmit submitNewStress={submitNewStress} />
                    {allStress && <StressDisplay allStress={allStress} />} {/* Render StressDisplay if allStress is truthy */}
                </div>
                <div>
                    <h2 className="goodThingsHeader">The Good Things</h2>
                </div>
                <div id="oneGoodThingContainer">
                    <GoodThingSubmit submitNewGoodThing={submitNewGoodThing} />
                    {allGoodThings && <GoodThingDisplay allGoodThings={allGoodThings} />} {/* Render GoodThingDisplay if allGoodThings is truthy */}
                </div>
            </div>
        </div>
    );
};

export default Home; // Export the Home component

