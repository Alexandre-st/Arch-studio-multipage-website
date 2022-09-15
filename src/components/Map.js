import { MapContainer, TileLayer,
  //  Marker, Popup 
  } from 'react-leaflet';

const Map = () => {

  // const position = [51.505, -0.09];

  return (
    <div className="location">
      <MapContainer 
        center={[51.505, -0.09]} 
        zoom={13} 
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
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  )
};

export default Map;