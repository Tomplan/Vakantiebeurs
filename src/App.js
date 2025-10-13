import React, { useState } from "react";
import standholders from "./data/standholders.json";
import StandInfoModal from "./StandInfoModal";
import "./App.css";

function App() {
  const [selectedStand, setSelectedStand] = useState(null);

  return (
    <div className="App">
      <h1>Vakantiebeurs Event Map</h1>
      <div className="map-container">
        {/* Example SVG map */}
        <svg viewBox="0 0 4000 2000" style={{ width: "100%", height: "auto" }}>
          {standholders.map((stand) => (
            <circle
              key={stand.id}
              cx={stand.location.x}
              cy={stand.location.y}
              r={100}
              fill="#2196f3"
              stroke="#fff"
              strokeWidth={2}
              onClick={() => setSelectedStand(stand)}
              style={{ cursor: "pointer" }}
            />
          ))}
          {standholders.map((stand) => (
            <text
              key={stand.id + "-label"}
              x={stand.location.x}
              y={stand.location.y + 5}
              fontSize="12"
              textAnchor="middle"
              fill="#fff"
              pointerEvents="none"
            >
              {stand.stand}
            </text>
          ))}
        </svg>
      </div>
      <StandInfoModal
        stand={selectedStand}
        onClose={() => setSelectedStand(null)}
      />
    </div>
  );
}

export default App;
