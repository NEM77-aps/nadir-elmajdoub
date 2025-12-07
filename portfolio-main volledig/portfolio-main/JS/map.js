
document.addEventListener('DOMContentLoaded', function () {

  const mapElement = document.getElementById('apMap');
  if (!mapElement) {
    console.error('Element met id "apMap" niet gevonden.');
    return;
  }

  
  const leCroissantLat = 51.2189;
  const leCroissantLng = 4.4605;


  const map = L.map('apMap').setView([leCroissantLat, leCroissantLng], 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

 
  const bounds = [
    [leCroissantLat + 0.0005, leCroissantLng - 0.001],
    [leCroissantLat - 0.0005, leCroissantLng + 0.001]
  ];
  L.rectangle(bounds, { color: '#e60005', weight: 1 }).addTo(map);

  
  const leCroissantMarker = L.marker([leCroissantLat, leCroissantLng]).addTo(map);
  leCroissantMarker
    .bindPopup('<b>Le Croissant</b><br>Herentalsebaan 275')
    .openPopup();
});
