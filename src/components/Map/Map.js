import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from "../../utils/mapIcon";
import "leaflet/dist/leaflet.css";;

function Map() {

    const position = [41.2771256, -8.2832425]

    return (
        <MapContainer center={position} zoom={13} style={{ width: '65vh', height: '35vh' }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={mapIcon}>
                <Popup>
                    Pelourinho Hotel
                </Popup>
            </Marker>
        </MapContainer >
    )
}

export default Map;