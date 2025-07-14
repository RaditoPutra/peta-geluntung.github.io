const pusatDesaGeluntung = [-8.45688550301095, 115.17126125700298];
const tingkatZoomAwal = 14;

// --- INISIALISASI PETA ---
const mymap = L.map('mapid').setView(pusatDesaGeluntung, tingkatZoomAwal);

// --- TAMBAHKAN TILE LAYER (Dasar Peta) ---
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// --- TAMBAHKAN MARKER (Penanda Lokasi) ---
const koordinatKantorDesa = [-8.45688550301095, 115.17126125700298];
L.marker(koordinatKantorDesa)
    .addTo(mymap)
    .bindPopup('<b>Kantor Perbekel Desa Geluntung</b><br>Pusat Pemerintahan Desa.')
    .openPopup();

// --- MENAMBAHKAN POLYGON ---
// Koordinat diurutkan ulang untuk membentuk poligon yang benar
const koordinatPolygonSawah = [
    [-8.454654, 115.167012], // Titik 1 (Tetap)
    [-8.464129, 115.169771], // Titik 4 dari kode lama, sekarang jadi Titik 2
    [-8.464189, 115.176642], // Titik 2 dari kode lama, sekarang jadi Titik 3
    [-8.452759, 115.173852]  // Titik 3 dari kode lama, sekarang jadi Titik 4
];
L.polygon(koordinatPolygonSawah, {
    color: 'green',
    fillColor: '#0f0',
    fillOpacity: 0.3
}).addTo(mymap).bindPopup('Area Persawahan');
