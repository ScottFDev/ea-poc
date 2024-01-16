import { latLngBounds } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ImageOverlay } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'


const MapComponent = ({overlayImage}) => {
  const bounds = latLngBounds([[51.49, -0.08], [51.5, -0.06]]); 
  

    return (
        <MapContainer
        className="h-36"
        center={[51.49, -0.08]}
        zoom={6}
        minZoom={3}
        maxZoom={19}
        maxBounds={[[-85.06, -180], [85.06, 180]]}
        scrollWheelZoom={true}
        style={{height: '1000px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {overlayImage && <ImageOverlay bounds={bounds} url={overlayImage} opacity={0.5}/>}
        </MapContainer>
    )
}

export default MapComponent;

