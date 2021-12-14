import L from 'leaflet'

import mapMarkerImg from '../Assets/Images/iconLocation.png'

const mapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [28, 28],
    iconAnchor: [15, 38],
    popupAnchor: [0, -40]
})

export default mapIcon
