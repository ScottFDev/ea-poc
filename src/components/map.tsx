import 'leaflet/dist/leaflet.css';
import { ImageOverlay } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'


const MapComponent = ({overlayImage}) => {
    return (
        <MapContainer
        className="h-36"
        center={[51.49, -0.08]}
        zoom={6}
        minZoom={3}
        maxZoom={19}
        maxBounds={[[-85.06, -180], [85.06, 180]]}
        scrollWheelZoom={true}
        style={{height: '500px'}}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {overlayImage && <ImageOverlay bounds={bounds} url={overlayImage} opacity={0.5}/>}
        </MapContainer>
    )
}

export default MapComponent;

