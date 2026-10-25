# NEXITA: Jelajah Tata Surya

Platform belajar tata surya interaktif dwibahasa (HTML, CSS, JavaScript murni, tanpa framework).

## Struktur
```
nexita/
├── index.html      struktur halaman (semua halaman ada di sini, ditampilkan lewat hash: #belajar, #orbit, dst.)
├── css/style.css   seluruh tampilan, tema, dan animasi
├── js/app.js       seluruh logika: planet 3D, orbit, kuis, game, akun lokal, welcome screen
└── README.md
```

## Menjalankan
- Cara cepat: buka `index.html` di browser (butuh internet untuk Three.js dan Google Fonts).
- Disarankan memakai server lokal, misalnya ekstensi Live Server di VS Code, atau `python3 -m http.server` lalu buka `http://localhost:8000`.

## Dependensi eksternal (dimuat dari CDN)
- Three.js r128 (cdnjs.cloudflare.com), untuk planet 3D. Jika gagal dimuat, tampilan otomatis memakai planet 2D.
- Google Fonts: Gloock dan Schibsted Grotesk.

## Catatan
- Akun, XP, streak, dan progres tersimpan di localStorage browser (bukan di server).
- Tab "Online" di halaman Peringkat hanya berfungsi di lingkungan claude.ai. Di hosting sendiri, tab ini menampilkan pesan "tidak tersedia". Papan peringkat global membutuhkan backend sendiri (misalnya Firebase atau Supabase).
- Data planet mengacu pada NASA Planetary Fact Sheet; daftar sumber lengkap ada di halaman Tentang.
