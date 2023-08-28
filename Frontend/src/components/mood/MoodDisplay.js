import React from "react";
import { VictoryPie } from "victory";
import "./MoodDisplay.css";

const MoodDisplay = ({ allMoods }) => {
  // Calculate mood counts from allMoods array
  const moodCounts = allMoods.reduce((counts, mood) => {
    counts[mood.mood] = (counts[mood.mood] || 0) + 1;
    return counts;
  }, {});

  // Create data array for VictoryPie chart
  const data = allMoods.length > 0
    ? Object.keys(moodCounts).map(mood => ({
        x: mood,
        y: moodCounts[mood],
        label: `${mood}\n${((moodCounts[mood] / allMoods.length) * 100).toFixed(1)}%`,
      }))
    : [
        {
          x: "No data submitted",
          y: 1,
          label: "No data submitted 100%",
        },
      ];

  // Define a color palette for different mood labels
  const colorPalette = {
    "Happy": "#F29727",
    "Sad": "#3C6255",
    "Excited": "#F24C3D",
    "Anxious": "#61876E",
    "Empty": "#F2BE22",
    "Irritable": "#A3BB98",
    "Angry": "#FBD85D",
    "Neutral": "#C4D7B2",
    "No data submitted": "#EADBC8",
  };

  // Function to format labels with percentage information
  const labelFormat = (datum) => `${datum.x}\n${((datum.y / data.reduce((acc, d) => acc + d.y, 0)) * 100).toFixed(1)}%`;

  // Create an array of color values based on mood labels in colorPalette
  const colorScale = data.map(datum => colorPalette[datum.x]);

  return (
    <div className="moodDisplay">
      <h2 className="moodDistHeader">Mood Distribution</h2>
      <div className="chartContainer">
        {/* Render the VictoryPie chart */}
        <VictoryPie
          data={data}
          labels={({ datum }) => labelFormat(datum)}
          labelRadius={({ innerRadius }) => innerRadius + 190}
          style={{
            labels: { fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: "bold" },
          }}
          colorScale={colorScale}
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default MoodDisplay;


