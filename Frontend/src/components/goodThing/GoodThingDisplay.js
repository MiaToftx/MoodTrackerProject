import React from "react";
import "./GoodThingDisplay.css"; // Import the associated stylesheet

// Define the GoodThingDisplay component
const GoodThingDisplay = ({ allGoodThings }) => {
    return (
        <div className="goodThingsDisplay">
            <div className="scrollableListContainer"> 
                <div className="scrollableList"> 
                    {allGoodThings.length > 0 ? (  // Check if there are good things to display
                        allGoodThings.map((item, index) => (  // Map over the "allGoodThings" array and display each item
                            <p id="goodThingItem" key={index}>{item.goodThing}</p>
                        ))
                    ) : (
                        <p>No data</p> // Display if there are no good things
                    )}
                </div> 
            </div>
        </div>
    );
};

export default GoodThingDisplay; // Export the GoodThingDisplay component


