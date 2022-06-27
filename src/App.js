import React from 'react';
import './App.css';
import Logo from './components/img/aiko.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Equipments from './components/Equipments';
import StateHistory from './components/StateHistory';
import positionData from './data/equipmentPositionHistory.json';


function App() {
  return (
    <div>
      <figure className='logo'>
        <img src={Logo} alt='Logo da Aiko'/>
      </figure>
      <Equipments/>
      <MapContainer className='leaflet-container' center={[-19.126536, -45.947756]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        {positionData.map(p => (
          <Marker
          key={p.equipmentId}
          position={[p.positions[0].lat, p.positions[0].lon]}>
            <Popup>
              {"Id do Equipamento: " + p.equipmentId} <br></br>
              {"Latitude: " + p.positions[0].lat + " Longitude: " + p.positions[0].lon}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <StateHistory/>
    </div>
  );
}

export default App;
