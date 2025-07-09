const pusatDesaGeluntung = [-8.4230, 115.1872]; // Ini adalah contoh koordinat di Bali. MOHON GANTI DENGAN YANG AKURAT!
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
const koordinatBalaiDesa = [-8.4230, 115.1872]; // Contoh: Balai Desa Geluntung
L.marker(koordinatBalaiDesa)
    .addTo(mymap)
    .bindPopup('<b>Balai Desa Geluntung</b><br>Pusat Pemerintahan Desa.')
    .openPopup(); // Marker akan otomatis menampilkan popup saat peta dimuat

// Contoh marker lain
const koordinatSekolah = [-8.4200, 115.1850]; // Contoh: Sekolah Dasar
L.marker(koordinatSekolah)
    .addTo(mymap)
    .bindPopup('Sekolah Dasar Geluntung');

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
