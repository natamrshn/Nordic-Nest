// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// // import "leaflet/dist/leaflet.css";

// const position: [number, number] = [50.4501, 30.5234];

// const Map = () => {
//   return (
//     <MapContainer
//       center={[51.505, -0.09]}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       {/* <Marker position={position}>
//         <Popup>Це Київ!</Popup>
//       </Marker> */}
//     </MapContainer>
//   );
// };

// export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { button, buttonContainer } from "./map.style";

const MapControls = () => {
  const map = useMap();

  return (
    <div className={buttonContainer}>
      <button className={button} onClick={() => map.setZoom(map.getZoom() + 1)}>+</button>
      <button className={button} onClick={() => map.setZoom(map.getZoom() - 1)}>-</button>
    </div>
  );
};

const MyMap = () => {
  const mapRef = useRef(null);

  return (
    <MapContainer 
      center={[41.4026, 2.2176]} 
      zoom={13} 
      style={{ height: "400px", width: "100%" }}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />
      {/* <TileLayer 
        url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" 
        subdomains={["mt0", "mt1", "mt2", "mt3"]} 
      /> */}
      <Marker position={[41.4026, 2.2176]}>
        <Popup>Це Барселона! Passeig de Garcia Fària, 81</Popup>
      </Marker>
      <MapControls />
    </MapContainer>
  );
};

export default MyMap;
