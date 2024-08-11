
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const markers = [
  {
    position: [47.4979, 19.0402],
    image: "https://via.placeholder.com/150",
    description: "Ez Budapest"
  },
  {
    position: [47.4811, 19.1303],
    image: "https://via.placeholder.com/150",
    description: "Ez egy másik hely"
  }
];

export const MapPage = () => {
  return (
    <MapContainer center={[47.4979, 19.0402]} zoom={12} style={{ height: 'calc(100vh - 56px)', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <img src={marker.image} alt="Sample" width="150" height="150" />
            <br />
            <strong>{marker.description}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};




