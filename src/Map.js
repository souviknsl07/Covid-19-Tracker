import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataonMap } from "./utl";

// function ChangeMap({ center, zoom }) {
//   const map = useMap();
//   map.setView(center, zoom);
//   return null;
// }

function Map({ caseType, countries, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} scrollWheelZoom={false}>
        {/* <ChangeMap center={center} zoom={zoom} /> */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataonMap(countries, caseType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
