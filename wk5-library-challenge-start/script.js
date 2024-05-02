(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([38.546719, -121.744339], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([38.546740, -121.761501]).addTo(map);

    var circle = L.circle([38.540298, -121.752228], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 600
    }).addTo(map);

    var polygon = L.polygon([
        [38.546485, -121.745506],
        [38.541295, -121.743961],
        [38.542485, -121.737490],
        [38.547587, -121.738864]
    ]).addTo(map);

    marker.bindPopup("Trader Joe's").openPopup();
    circle.bindPopup("UC Davis");
    polygon.bindPopup("Downtown Davis");

    var popup = L.popup()
    .setLatLng([38.546719, -121.744339])
    .setContent("Davis, CA")
    .openOn(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);

    
}());