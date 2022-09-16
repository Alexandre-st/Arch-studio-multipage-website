import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {

  const firstPosition = [35.694014, -83.920085];
  const secondPosition = [32.105416, -96.217429];

  return (
    <div className="location">
      <MapContainer 
        center={[35.105416, -90.217429]}
        zoom={window.innerWidth >= 1024 ? 5.5 : 5} 
        scrollWheelZoom={false}
        doubleClickZoom={false}
        zoomControl={false}
        attributionControl={false}
        keyboard={false}
        touchZoom={false}
        dragging={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={firstPosition} />
        <Marker position={secondPosition} />
      </MapContainer>
    </div>
  )
};

export default Map;