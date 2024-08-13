import React from 'react';
import { useLocation } from 'react-router-dom';
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
    description: "Budapest"
  },
  {
    position: [18.2871, 147.6992],
    image: "https://via.placeholder.com/150",
    description: "Great Barrier Reef, Ausztrália"
  },
  {
    position: [17.3156, 87.5344],
    image: "https://via.placeholder.com/150",
    description: "Blue Hole, Belize"
  },
  {
    position: [0.2346, 130.5070],
    image: "https://via.placeholder.com/150",
    description: "Raja Ampat, Indonézia"
  },
  {
    position: [7.5149, 134.5825],
    image: "https://via.placeholder.com/150",
    description: "Palau"
  },
  {
    position: [0.9538, 90.9656],
    image: "https://via.placeholder.com/150",
    description: "Galápagos-szigetek, Ecuador"
  },
  {
    position: [11.3333, 124.1167],
    image: "https://via.placeholder.com/150",
    description: "Malapascua, Fülöp-szigetek"
  },
  {
    position: [5.5250, 87.0683],
    image: "https://via.placeholder.com/150",
    description: "Cocos Island, Costa Rica"
  },
  {
    position: [4.1142, 118.6284],
    image: "https://via.placeholder.com/150",
    description: "Sipadan, Malajzia"
  },
  {
    position: [27.2579, 33.8116],
    image: "https://via.placeholder.com/150",
    description: "Red Sea, Egyiptom (Hurgada környéke)"
  },
  {
    position: [8.5662, 119.4880],
    image: "https://via.placeholder.com/150",
    description: "Komodo National Park, Indonézia"
  },
];

export const MapPage = () => {
  const location = useLocation();
  const { markerPosition } = location.state || {};

  return (
    <MapContainer
      center={markerPosition || [47.4979, 19.0402]}
      zoom={12}
      style={{ height: 'calc(100vh - 56px)', width: '100%' }}
    >
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













































{/*import React from 'react';
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
};*/}




