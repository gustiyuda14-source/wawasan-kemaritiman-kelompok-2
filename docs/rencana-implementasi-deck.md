# Rencana Implementasi: Deck Maritime Economy

Tanggal: 2026-09-01
Target: situs presentasi statis 18 slide, publish ke GitHub Pages.

## Keputusan yang sudah dikunci

| Aspek | Keputusan | Alasan |
|---|---|---|
| Stack | HTML + Tailwind play CDN + CSS kustom + JS vanilla | Tanpa build step, anggota kelompok non-teknis bisa ikut edit, GitHub Pages langsung jalan dari branch |
| Navigasi | Slide-by-slide, satu slide penuh layar | Presentasi kelas butuh kontrol per slide, bukan scroll bebas |
| Tema | Dark mode dikunci untuk seluruh halaman | Proyektor kelas terang, latar gelap mengurangi silau; tidak ada section yang membalik tema |
| Aksen | Satu warna: cyan-teal | Aturan satu aksen per halaman; emas akademik dibuang agar tidak berebut perhatian dengan cyan |
| Font | Crimson Pro (judul) + Atkinson Hyperlegible (isi) | Serif punya justifikasi akademik nyata; Atkinson dirancang untuk keterbacaan low-vision, aman untuk proyektor buruk |
| Motion | CSS transition + IntersectionObserver, tanpa GSAP | Deck ini tidak punya scroll-hijack, jadi library animasi berat tidak dibutuhkan |
| Konten | Dari `Materi_Inti_Maritime_Economy_Sub-CPMK-4.docx` yang sudah diverifikasi | Angka dan sitasi sudah dicek silang ke sumber primer |

## Struktur file

```
presentasi-maritime-economy/
  index.html              # shell + kerangka slide
  assets/
    css/styles.css        # token desain, layout slide, layer latar, motion
    js/content.js         # data 18 slide, satu objek per slide
    js/deck.js            # render, navigasi, chrome, keyboard/touch
  README.md               # cara edit konten dan cara deploy
```

Alasan pemisahan `content.js`: revisi materi menit terakhir cukup sentuh satu file, tidak perlu bongkar HTML. Anggota kelompok bisa ikut edit tanpa paham layout.

## Peta 18 slide

| No | Tipe | Isi | Pemegang |
|---|---|---|---|
| 1 | Pembuka | Judul, mata kuliah, 8 nama + subtopiknya | Bersama |
| 2 | Konsep | Definisi & Ruang Lingkup Maritime Economy | Anggota 1 |
| 3 | Bukti | Data PDB perikanan, kasus WPPNRI, sitasi | Anggota 1 |
| 4 | Konsep | Maritime Civilization | Anggota 2 |
| 5 | Bukti | Prasasti Kedukan Bukit, Sriwijaya, sitasi | Anggota 2 |
| 6 | Konsep | Human Resources Kemaritiman | Anggota 3 |
| 7 | Bukti | Survei ILO-BRIN, pelatihan KKP, sitasi | Anggota 3 |
| 8 | Konsep | Coastal Communities | Anggota 4 |
| 9 | Bukti | Data Bank Dunia, WPP 713/714/718, sitasi | Anggota 4 |
| 10 | Konsep | Fisheries & Aquaculture | Anggota 5 |
| 11 | Bukti | Produksi budidaya 2024, Wakatobi, sitasi | Anggota 5 |
| 12 | Konsep | Maritime Tourism | Anggota 6 |
| 13 | Bukti | Wisman 2024, Raja Ampat, sitasi | Anggota 6 |
| 14 | Konsep | Shipping, Logistics & Shipbuilding | Anggota 7 |
| 15 | Bukti | Tol Laut 2024, sitasi | Anggota 7 |
| 16 | Konsep | Blue Economy Indonesia | Anggota 8 |
| 17 | Bukti | Target PDB maritim 7,6% ke 15%, lima fase, sitasi | Anggota 8 |
| 18 | Penutup | Benang merah 8 subtopik, terima kasih | Bersama |

Pola dua slide per orang: slide **Konsep** membawa definisi dan poin kunci, slide **Bukti** membawa angka, contoh kasus Indonesia, dan sitasi.

## Batas konten per slide

Anti-pattern terbesar untuk deck akademik adalah slide kepadatan teks. Batas keras:

- Judul slide maksimal 6 kata.
- Poin kunci maksimal 4 butir, tiap butir maksimal 12 kata.
- Angka utama ditampilkan sebagai display stat besar, bukan dilebur ke paragraf.
- Sitasi maksimal 3 per slide bukti, ukuran kecil tapi tetap lolos kontras WCAG AA.
- Kalau satu slide melewati batas ini, materinya dipecah, bukan fontnya dikecilkan.

## Fase pengerjaan

### Fase 1: Fondasi dan token
Buat `index.html` dan `styles.css` dengan variabel CSS: palet, skala tipografi, skala spasi, satu skala radius, skala z-index. Muat font. Kunci tema gelap di root. Belum ada konten, hanya satu slide kosong yang tampil penuh layar dengan `min-height: 100dvh`.

**Cek:** slide kosong mengisi viewport penuh di desktop dan HP, tanpa scroll horizontal, tanpa lompatan tinggi saat bar alamat Safari iOS muncul.

### Fase 2: Sistem latar
Empat lapis, semuanya `pointer-events: none` dan di belakang konten:
1. Gradien dasar deep navy ke teal gelap.
2. Aurora: dua radial gradient yang bergeser pelan, animasi `transform` saja.
3. Grid halus bergaya peta navigasi, opacity rendah.
4. Kanvas partikel: titik-titik bioluminesen, `requestAnimationFrame`, berhenti saat tab tidak aktif.

Gelombang SVG animasi hanya di slide pembuka dan penutup, tidak di slide isi, supaya tidak mengganggu baca.

**Cek:** kontras teks putih di atas latar tetap lolos WCAG AA di semua titik animasi, bukan cuma di frame pertama. `prefers-reduced-motion: reduce` mematikan aurora dan partikel, latar jadi statis.

### Fase 3: Data konten
Tulis `content.js`: array 18 objek. Skema per objek: `type`, `title`, `presenter`, `definition`, `keyPoints[]`, `stat{value,label}`, `caseStudy`, `citations[]`. Isi diambil dari dokumen materi yang sudah diverifikasi, dipangkas ke batas kata di atas.

**Cek:** jumlah objek tepat 18; tidak ada karakter em-dash atau en-dash di seluruh string; tiap slide bukti punya minimal 2 sitasi.

### Fase 4: Render slide
`deck.js` merender tiap tipe slide ke template berbeda. Tiga template: pembuka, konsep, bukti, penutup. Layout konten rata kiri dengan grid asimetris, bukan hero tengah, supaya tidak terbaca sebagai landing page.

**Cek:** ke-18 slide render tanpa error konsol; tidak ada teks yang terpotong di 1280x720 (resolusi proyektor umum).

### Fase 5: Navigasi dan chrome
Panah kiri/kanan, spasi untuk maju, klik tombol di pojok, swipe di layar sentuh. Hash URL per slide (`#/7`) supaya bisa lompat dan refresh tidak mengembalikan ke slide 1. Chrome: progress bar tipis, nomor slide, judul subtopik aktif, nama presenter.

**Cek:** refresh di slide 12 tetap di slide 12; panah di slide 1 dan 18 tidak membuat state rusak; fokus keyboard terlihat jelas.

### Fase 6: Responsif, aksesibilitas, cetak
Breakpoint: 375, 768, 1024, 1440. Di bawah 768px layout jadi satu kolom penuh. Tambah aturan `@media print` supaya bisa diekspor ke PDF sebagai cadangan kalau internet kampus mati saat presentasi.

**Cek:** ekspor PDF menghasilkan 18 halaman terbaca; navigasi keyboard penuh tanpa mouse; kontras semua teks lolos AA.

### Fase 7: QA
Jalankan detektor mekanis Impeccable pada file yang berubah. Screenshot desktop dan mobile sekali batch, perbaiki semua temuan sekaligus. Baca ulang tiap string yang tampil untuk kalimat rusak atau salah ketik.

### Fase 8: Deploy
`git init`, commit, push ke repositori GitHub baru, aktifkan Pages dari branch `main`. Tulis README berisi cara ganti isi slide dan cara ganti nama anggota.

## Yang sengaja tidak dibuat

- Tidak ada mode presenter dengan catatan terpisah. Tambahkan kalau saat latihan memang terasa kurang.
- Tidak ada animasi transisi antar slide yang rumit. Fade dan geser halus cukup; transisi meriah mengganggu pemahaman materi akademik.
- Tidak ada tes otomatis. Konten statis, satu putaran QA manual lebih murah daripada memasang framework tes.
- Tidak ada dukungan mode terang. Tema dikunci gelap sesuai keputusan di atas.

## Keputusan yang masih terbuka

1. **Nama 8 anggota**: dibutuhkan untuk slide 1 dan label presenter di tiap slide.
2. **Foto**: deck ini bisa berdiri tanpa foto karena latar yang menanggung beban visual. Kalau ingin ada foto laut Indonesia asli, sumbernya harus jelas lisensinya karena ini tugas akademik. Pilihan: pakai tanpa foto, atau sediakan foto berlisensi bebas.
3. **Nama repositori GitHub**: menentukan URL akhir.
