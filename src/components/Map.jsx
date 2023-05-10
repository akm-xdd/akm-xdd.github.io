import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const Map = () => (
  <div>
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [78.9629, 22.5937],
        scale: 1100,
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.2090, 28.6139]}
        dx={-50}
        dy={-20}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-20" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"I am somewhere here"}
        </text>
      </Annotation>
    </ComposableMap>
  </div>
);

export default Map;
