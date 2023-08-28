import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from "victory";
import "./StressDisplay.css";

const StressDisplay = ({ allStress }) => {
    // Define a color palette for different stress levels
    const colorPalette = {
        "Very low": "#C4D7B2",
        "Low": "#FBD85D",
        "Medium": "#F2BE22",
        "High": "#F29727",
        "Very high": "#F24C3D",
        "No data": "#E5DCC3",
    };

    // Count the occurrences of each stress level
    const stressCounts = allStress.reduce((counts, stressLevel) => {
        counts[stressLevel.stressLevel] = (counts[stressLevel.stressLevel] || 0) + 1;
        return counts;
    }, {});

    // Generate data for the VictoryBar chart
    const data = allStress.length > 0
        ? Object.keys(stressCounts).map((stressLevel) => ({
            x: stressLevel,
            y: stressCounts[stressLevel],
            label: `${((stressCounts[stressLevel] / allStress.length) * 100).toFixed(1)}%`,
            style: { fill: colorPalette[stressLevel] || "#CFB784" },
        }))
        : [{ x: "No data", y: 1, label: "No data 100%" }];

    // Get all possible stress levels as tick values for the x-axis
    const possibleStressLevels = Object.keys(colorPalette);

    return (
        <div className="stressDisplay">
            <h2 className="stressDistHeader">Stress Level Distribution</h2>
            <div className="chartContainer">
                {/* Create a VictoryChart to display the data */}
                <VictoryChart
                    domainPadding={{ x: 20 }}
                    height={500}
                    width={500}
                >
                    {/* Use VictoryBar to create a bar chart */}
                    <VictoryBar
                        data={data}
                        barWidth={45}
                        labels={({ datum }) => datum.label} // Display the percentage label
                        labelComponent={<VictoryTooltip />} // Use VictoryTooltip for custom labels
                        style={{
                            labels: { fill: "black", fontWeight: "bold" },
                            data: { fill: ({ datum }) => colorPalette[datum.x] || "#E5DCC3" },
                        }}
                        x="x"
                        y="y"
                    />
                    {/* Define tick values for the x-axis using VictoryAxis */}
                    <VictoryAxis tickValues={possibleStressLevels} />
                </VictoryChart>
            </div>
        </div>
    );
};

export default StressDisplay;
