const pusatDesaGeluntung = [-8.45688550301095, 115.17126125700298]; // Ini adalah contoh koordinat di Bali. MOHON GANTI DENGAN YANG AKURAT!
const tingkatZoomAwal = 14; // Tingkat zoom awal (semakin besar angka, semakin dekat)

// --- INISIALISASI PETA ---
// Inisialisasi peta di div dengan id "mapid"
const mymap = L.map('mapid').setView(pusatDesaGeluntung, tingkatZoomAwal);

// --- TAMBAHKAN TILE LAYER (Dasar Peta) ---
// Menggunakan OpenStreetMap sebagai dasar peta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// --- TAMBAHKAN MARKER (Penanda Lokasi) ---
// Contoh menambahkan marker untuk lokasi tertentu di desa
// Ganti koordinat dan teks popup sesuai kebutuhan Anda
const koordinatKantorDesa = [-8.45688550301095, 115.17126125700298];
L.marker(koordinatKantorDesa)
    .addTo(mymap)
    .bindPopup('<b>Kantor Perbekel Desa Geluntung</b><br>Pusat Pemerintahan Desa.')
    .openPopup();

// Contoh marker lain
const koordinatSDN1Geluntung = [-8.4230, 115.1872];
L.marker(koordinatSDN1Geluntung)
    .addTo(mymap)
    .bindPopup('<b>SD NEGERI 1 GELUNTUNG</b><br>Sekolah Dasar di Desa Geluntung.');

// --- MENAMBAHKAN LINGKARAN (Opsional) ---
// Contoh menambahkan lingkaran untuk area tertentu
L.circle([-8.4250, 115.1890], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200 // dalam meter
}).addTo(mymap).bindPopup('Area Pasar Desa');

// --- MENAMBAHKAN POLYGON (Opsional) ---
// Contoh menambahkan poligon untuk area persawahan atau batas RT/RW
const koordinatPolygonSawah = [
    [-8.4260, 115.1800],
    [-8.4250, 115.1820],
    [-8.4240, 115.1810],
    [-8.4255, 115.1790]
];
L.polygon(koordinatPolygonSawah, {
    color: 'green',
    fillColor: '#0f0',
    fillOpacity: 0.3
}).addTo(mymap).bindPopup('Area Persawahan');
