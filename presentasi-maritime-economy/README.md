# Maritime Economy - Presentasi Kelompok 2

Deck presentasi 18 slide untuk mata kuliah Maritime Insight (Wawasan Kemaritiman), Sub-CPMK-4: Maritime Economy. Magister Manajemen, Fakultas Ekonomi dan Bisnis, Universitas Halu Oleo.

## Cara membuka

Buka `index.html` langsung di browser, atau kunjungi URL GitHub Pages setelah di-deploy.

Untuk menjalankan lokal lewat server (disarankan supaya semua aset termuat benar):

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Cara navigasi saat presentasi

| Aksi | Cara |
|---|---|
| Slide berikutnya | Panah kanan, spasi, klik area kanan layar, atau geser ke kiri |
| Slide sebelumnya | Panah kiri, klik area kiri layar, atau geser ke kanan |
| Lompat ke slide tertentu | Ubah URL, misalnya `#/7` untuk slide 7 |
| Ke slide pertama | Tombol Home |
| Ke slide terakhir | Tombol End |

Nomor slide ada di URL, jadi kalau browser tertutup atau ter-refresh saat presentasi, membuka ulang URL yang sama akan kembali ke slide yang sedang dibahas.

## Cadangan kalau internet mati

Buka deck lalu cetak ke PDF (Ctrl+P atau Cmd+P). Hasilnya 18 halaman A4 landscape, satu slide per halaman, dengan warna terang yang hemat tinta. Simpan PDF ini di laptop sebelum hari presentasi.

## Cara mengubah isi slide

Semua materi ada di satu file: `assets/js/content.js`. Tidak perlu menyentuh HTML atau CSS.

Tiap slide adalah satu objek di dalam array `SLIDES`. Ubah teksnya, simpan, lalu refresh browser.

Batas yang harus dijaga supaya slide tetap terbaca dari bangku belakang:

- Judul slide maksimal 6 kata
- Maksimal 4 poin kunci, tiap poin maksimal 12 kata
- Slide bukti wajib punya minimal 2 sitasi

Kalau materi melewati batas ini, pecah jadi dua slide. Jangan mengecilkan ukuran font.

## Cara mengubah nama anggota

Ubah array `ANGGOTA` di bagian atas `assets/js/content.js`. Nama presenter di tiap slide diisi manual pada properti `presenter`, jadi kalau ada tukar subtopik, sesuaikan keduanya.

## Struktur file

```
index.html                 kerangka halaman dan lapisan latar
assets/css/styles.css      token desain, layout slide, motion, aturan cetak
assets/js/content.js       isi 18 slide (file ini yang biasanya diedit)
assets/js/deck.js          mesin render dan navigasi
```

## Catatan teknis

- Situs statis murni. Tidak ada build step, tidak ada dependensi npm untuk dijalankan.
- Tema gelap dikunci untuk seluruh halaman.
- Slide konsep memakai gradient funnel, 3D fishbone, modern bento grid, mind map, atau exploded view sesuai isi. Slide bukti memakai bento grid.
- Delapan ilustrasi section tampil sebagai siluet gradien di latar, bukan kartu foto. Lapisan aurora, sonar, dan partikel tetap menjaga tema laut dalam.
- Aksen 3D (bola wireframe berputar) di slide pembuka dan penutup pakai Three.js dari CDN cdnjs. Kalau CDN gagal dimuat atau WebGL dimatikan di perangkat (kebijakan lab kampus, GPU tua), aksennya diam-diam tidak muncul; deck tetap jalan penuh tanpa error.
- Semua animasi (aurora, gelombang, partikel, bola 3D) mati otomatis kalau perangkat mengaktifkan pengaturan "reduce motion". Kartu kaca-buram juga jatuh ke solid polos kalau "reduce transparency" aktif.
- Partikel latar dan render 3D berhenti sendiri saat tab tidak aktif, supaya tidak boros baterai.
- Font dimuat dari Google Fonts, jadi tampilan paling ideal saat online. Kalau offline, browser jatuh ke font serif dan sans bawaan sistem dan tata letaknya tetap utuh.

## Aset visual

Ilustrasi tiap section ada di `assets/img/sections/`. Pemetaan section ke aset berada di `assets/js/content.js`; pewarnaan siluet dan mask gradien berada di `assets/css/styles.css`.

## Data dan sitasi

Angka dan sitasi di deck ini sudah dicek silang ke sumber primer (LKIP Kemenhub 2024, KKP, BPS, ILO-BRIN, Bank Dunia, Bappenas, dan jurnal Frontiers in Marine Science). Materi lengkapnya ada di `Materi_Inti_Maritime_Economy_Sub-CPMK-4.docx` di folder induk. Jangan mengubah angka tanpa memverifikasi ulang ke sumbernya.
