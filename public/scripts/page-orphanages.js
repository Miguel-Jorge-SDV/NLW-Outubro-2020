// Tipos de dados
// String ""
// Number 01
// Object {}
// Boolean True or false
// Array []

// Create map

const map = L.map('mapid').setView([-27.2114829,-49.6506442], 15);

// Create and add TileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAncor: [29, 68],
    popupAnchor: [170, 2]
})

// Create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidht: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="chose-orphanage"> <img src="./public/images/arrow-white.svg" </a>')

// Create and add marker

L
.marker([-27.2114829,-49.6506442], { icon })
.addTo(map)
.bindPopup(popup)
