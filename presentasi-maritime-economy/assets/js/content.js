/**
 * Data konten deck. Satu objek per slide, urut 1 sampai 18.
 * Revisi materi cukup dilakukan di file ini, tidak perlu menyentuh layout.
 *
 * Batas yang harus dijaga (lihat docs/rencana-implementasi-deck.md):
 *   title      : maksimal 6 kata
 *   keyPoints  : maksimal 4 butir, tiap butir maksimal 12 kata
 *   citations  : slide bukti wajib 2-3; slide konsep opsional 1-2 (rujukan
 *                konsep/definisi ke buku sumber, lihat objek BUKU di bawah)
 * Kalau materi melewati batas, pecah slidenya. Jangan kecilkan fontnya.
 *
 * Sumber utama konsep & definisi: Widjaja S. & Kadarusman (eds.), Industri
 * dan Ekonomi Maritim, Seri Buku Besar Maritim Indonesia 5, Amafrad Press,
 * 2019 (Bab III-VII). Data statistik terkini tetap dari sumber resmi
 * per subtopik (KKP/BPS/Bappenas dsb.) karena buku ini memakai data 2007-2018.
 */

const ANGGOTA = [
  { nama: 'Sityama Munawar Dewi', subtopik: 'Definisi & Ruang Lingkup' },
  { nama: 'Rini Mulia Sari', subtopik: 'Maritime Civilization' },
  { nama: 'Muh. Rafly Dwi Putra', subtopik: 'Human Resources Kemaritiman' },
  { nama: 'Nurul Maghfirah Miftahul Jannah', subtopik: 'Coastal Communities' },
  { nama: 'Widi Darmadiatmika Tanaya', subtopik: 'Fisheries & Aquaculture' },
  { nama: 'Made Adya Febriana Putri', subtopik: 'Maritime Tourism' },
  { nama: 'Gusti Putu Yuda Wirashana', subtopik: 'Shipping, Logistics & Shipbuilding' },
  { nama: 'Amanah Asri Estikawati', subtopik: 'Blue Economy Indonesia' },
];

// Ilustrasi editorial buatan khusus untuk tiap subtopik. Digunakan sebagai
// kolase pada slide konsep dan bukti, bukan sebagai foto latar penuh layar.
const VISUALS = {
  economy: {
    src: 'assets/img/sections/maritime-economy-collage.png',
    alt: 'Kolase kepulauan, kapal antarpulau, nelayan, dan ekosistem laut',
  },
  civilization: {
    src: 'assets/img/sections/maritime-civilization-collage.png',
    alt: 'Kolase kapal layar Nusantara, pelabuhan historis, peta laut, dan prasasti',
  },
  humanResources: {
    src: 'assets/img/sections/maritime-human-resources-collage.png',
    alt: 'Kolase pelatihan navigasi, keselamatan kapal, dan kerja pelabuhan',
  },
  coastal: {
    src: 'assets/img/sections/coastal-communities-collage.png',
    alt: 'Kolase kampung pesisir, nelayan, mangrove, dan pulau kecil',
  },
  fisheries: {
    src: 'assets/img/sections/fisheries-aquaculture-collage.png',
    alt: 'Kolase budidaya rumput laut, tambak, rantai dingin, dan ikan',
  },
  tourism: {
    src: 'assets/img/sections/maritime-tourism-collage.png',
    alt: 'Kolase penyelam, terumbu karang, pulau karst, dan perahu wisata',
  },
  shipping: {
    src: 'assets/img/sections/shipping-logistics-collage.png',
    alt: 'Kolase kapal kargo, pelabuhan, galangan kapal, dan konektivitas antarpulau',
  },
  blueEconomy: {
    src: 'assets/img/sections/blue-economy-collage.png',
    alt: 'Kolase rehabilitasi mangrove, budidaya laut, terumbu karang, dan energi pesisir',
  },
};

// Sitasi bab buku sumber utama: Widjaja S. & Kadarusman (eds.), Industri dan
// Ekonomi Maritim, Seri Buku Besar Maritim Indonesia 5, Amafrad Press, 2019.
const BUKU_URL = 'https://perpustakaan.kkp.go.id/knowledgerepository/index.php?p=show_detail&id=1073918';
// `short` tampil di slide konsep (ringkas, cukup 1 baris walau digabung 2
// sitasi). `text` sitasi akademik penuh, tampil sebagai title tooltip pada
// link dan dipakai apa adanya di slide bukti.
const BUKU = {
  bab3: {
    short: 'Hirawan dkk. (2019), Bab III',
    text: 'Hirawan, Teto & Manoppo, Ekonomi Maritim (Bab III), Seri Buku Besar Maritim Indonesia 5, 2019',
    url: BUKU_URL,
  },
  bab4: {
    short: 'Hirawan dkk. (2019), Bab IV',
    text: 'Hirawan, Teto & Manoppo, Klasifikasi Sektor Ekonomi Maritim (Bab IV), Seri Buku Besar Maritim Indonesia 5, 2019',
    url: BUKU_URL,
  },
  bab5: {
    short: 'Hirawan dkk. (2019), Bab V',
    text: 'Hirawan, Teto & Manoppo, Sektor Kelautan dan Perikanan (Bab V), Seri Buku Besar Maritim Indonesia 5, 2019',
    url: BUKU_URL,
  },
  bab6: {
    short: 'Widjaja (2019), Bab VI',
    text: 'Widjaja, Desain Pengembangan Ekonomi Berbasis Sentra Perikanan Rakyat (Bab VI), Seri Buku Besar Maritim Indonesia 5, 2019',
    url: BUKU_URL,
  },
  bab7: {
    short: 'Hirawan dkk. (2019), Bab VII',
    text: 'Hirawan, Teto & Manoppo, Masa Depan Ekonomi Maritim Indonesia (Bab VII), Seri Buku Besar Maritim Indonesia 5, 2019',
    url: BUKU_URL,
  },
};

const SLIDES = [
  {
    type: 'cover',
    eyebrow: 'Sub-CPMK-4 . Maritime Insight',
    title: 'Maritime Economy',
    subtitle:
      'Ekonomi kelautan Indonesia: dari peradaban bahari sampai peta jalan ekonomi biru 2045.',
    course: 'Wawasan Kemaritiman . Magister Manajemen',
    faculty: 'Fakultas Ekonomi dan Bisnis, Universitas Halu Oleo',
    group: 'Kelompok 2',
    members: ANGGOTA,
  },

  // 1. Sityama Munawar Dewi
  {
    type: 'concept',
    visual: VISUALS.economy,
    index: 1,
    section: 'Definisi & Ruang Lingkup',
    presenter: 'Sityama Munawar Dewi',
    title: 'Apa itu Maritime Economy',
    definition:
      'Seluruh aktivitas ekonomi yang terjadi di kawasan perairan maupun di luar kawasan perairan, yang memanfaatkan sumber daya alam dan lingkungan yang berasal dari perairan, termasuk wilayah pesisir dan pulau-pulau kecil.',
    keyPoints: [
      'Diklasifikasikan ke dalam 11 subsektor, dari perikanan sampai jasa maritim',
      'Kawasan perairan mencakup laut teritorial, perairan kepulauan, hingga ZEE',
      'Nilai terbentuk sepanjang rantai pasok, dari produksi hingga pemasaran',
      'UU No. 6/1996 dan UU No. 27/2007 jadi dasar hukum ruang kelautan',
    ],
    citations: [BUKU.bab3, BUKU.bab4],
  },
  {
    type: 'evidence',
    visual: VISUALS.economy,
    index: 1,
    section: 'Definisi & Ruang Lingkup',
    presenter: 'Sityama Munawar Dewi',
    title: 'Skala dan Praktiknya',
    stat: { value: '2,59%', label: 'Kontribusi PDB perikanan, triwulan IV 2024' },
    statNote:
      'Angka ini indikator subsektor perikanan, bukan ukuran keseluruhan ekonomi maritim.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Pengelolaan WPPNRI menghubungkan tata ruang laut, pengaturan penangkapan ikan, pelabuhan perikanan, dan rantai nilai hasil laut dalam satu kerangka.',
    citations: [
      { text: 'UU No. 32 Tahun 2014 tentang Kelautan', url: 'https://peraturan.bpk.go.id/Details/38710/uu-no-32tahun-2014' },
      { text: 'UNCLOS, United Nations, 1982', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/UNCLOS-TOC.htm' },
      { text: 'KKP, Laporan Kinerja Pusdatin TW I 2025', url: 'https://www.kkp.go.id/storage/AkuntabilitasKinerja/3116/document-akuntabilitas-kinerja-68623a069e8b8LKJ%20Pusdatin%20TW%20I%202025.pdf' },
    ],
  },

  // 2. Rini Mulia Sari
  {
    type: 'concept',
    visual: VISUALS.civilization,
    index: 2,
    section: 'Maritime Civilization',
    presenter: 'Rini Mulia Sari',
    title: 'Peradaban yang Lahir dari Laut',
    definition:
      'Pola kehidupan masyarakat yang membangun pengetahuan, teknologi, institusi, dan identitasnya melalui laut. Secara ekonomi, peradaban ini tumbuh ketika pelayaran dan penguasaan jalur laut menciptakan pertukaran.',
    keyPoints: [
      'Laut menghubungkan antarpulau sekaligus jalur perdagangan internasional',
      'Navigasi dan pembuatan kapal menentukan daya saing ekonomi',
      'Pelabuhan menjadi simpul perdagangan dan pertukaran budaya',
      'Warisan maritim menopang konektivitas dan industri kapal modern',
    ],
  },
  {
    type: 'evidence',
    visual: VISUALS.civilization,
    index: 2,
    section: 'Maritime Civilization',
    presenter: 'Rini Mulia Sari',
    title: 'Jejak Sriwijaya',
    stat: { value: '682 M', label: 'Prasasti Kedukan Bukit, bukti awal aktivitas bahari Sriwijaya' },
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Sriwijaya tumbuh sebagai kekuatan maritim lewat jaringan perdagangan di sekitar Selat Malaka. Pelabuhannya berfungsi sebagai entrepot bagi komoditas pedalaman dan perdagangan lintas kawasan.',
    citations: [
      { text: 'Direktorat Pelindungan Kebudayaan, Damar dalam Jaringan Perdagangan Masa Kerajaan Sriwijaya, 2017', url: 'https://kebudayaan.kemdikbud.go.id/dpk/damar-dalam-jaringan-perdagangan-masa-kerajaan-sriwijaya/' },
      { text: 'Direktorat Pelindungan Kebudayaan, Cakrawala Mandala Dwipantara, 2017', url: 'https://kebudayaan.kemdikbud.go.id/dpk/cakrawala-ma%E1%B9%87%E1%B8%8Dala-dwipantara-wawasan-kemaritiman-kerajaan-singhasari/' },
      { text: 'Direktorat Pelindungan Kebudayaan, Mataram Kuna: Agraris atau Maritim, 2017', url: 'https://kebudayaan.kemdikbud.go.id/dpk/mataram-kuna-agraris-atau-maritim/' },
    ],
  },

  // 3. Muh. Rafly Dwi Putra
  {
    type: 'concept',
    visual: VISUALS.humanResources,
    index: 3,
    section: 'Human Resources Kemaritiman',
    presenter: 'Muh. Rafly Dwi Putra',
    title: 'Manusia di Balik Sektor Maritim',
    definition:
      'Mencakup nelayan, pembudidaya, awak kapal, pekerja pelabuhan, pengolah hasil laut, sampai tenaga industri perkapalan. Kualitas SDM menentukan produktivitas, keselamatan kerja, dan nilai tambah sektor.',
    keyPoints: [
      'Kebijakan nasional menyasar SDM kelautan yang profesional, beretika, berdedikasi',
      'Kompetensi teknis perlu disertai sertifikasi keselamatan dan mutu',
      'Pendidikan vokasi dan literasi keuangan memperkuat usaha pesisir',
      'Pekerjaan layak menuntut kontrak kerja dan perlindungan awak kapal',
    ],
    citations: [BUKU.bab3],
  },
  {
    type: 'evidence',
    visual: VISUALS.humanResources,
    index: 3,
    section: 'Human Resources Kemaritiman',
    presenter: 'Muh. Rafly Dwi Putra',
    title: 'Kondisi Kerja dan Pelatihan',
    stat: { value: '3.396', label: 'Pekerja kapal perikanan disurvei ILO-BRIN di 18 pelabuhan' },
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Pelatihan KKP diikuti 39.057 peserta sepanjang 2024. Pendidikan vokasi dan sertifikasi diarahkan memperbesar akses anak nelayan dan pembudidaya ke dunia usaha dan industri.',
    citations: [
      { text: 'ILO dan BRIN, Memahami Kondisi Kerja Pekerja Kapal Penangkap Ikan di Indonesia, 2025', url: 'https://www.ilo.org/id/publications/memahami-kondisi-kerja-pekerja-kapal-penangkap-ikan-di-indonesia-bukti-dari' },
      { text: 'ILO, Stocktaking Study: Indonesia Seafaring, 2023', url: 'https://www.ilo.org/publications/stocktaking-study-development-sectoral-skills-strategy-indonesia-seafaring' },
      { text: 'KKP, Pendidikan Tinggi Vokasi Tingkatkan Kompetensi SDM Perikanan, 2025', url: 'https://kkp.go.id/news/news-detail/kkp-maksimalkan-pendidikan-tinggi-vokasi-tingkatkan-kompetensi-sdm-perikanan-z6PZ.html' },
    ],
  },

  // 4. Nurul Maghfirah Miftahul Jannah
  {
    type: 'concept',
    visual: VISUALS.coastal,
    index: 4,
    section: 'Coastal Communities',
    presenter: 'Nurul Maghfirah Miftahul Jannah',
    title: 'Ekonomi Masyarakat Pesisir',
    definition:
      'Komunitas yang kehidupan sosial dan ekonominya terikat erat pada sumber daya pesisir dan laut. Mata pencahariannya meliputi penangkapan ikan, budidaya, pengolahan, garam, wisata, dan jasa transportasi lokal.',
    keyPoints: [
      'Ekonomi pesisir didominasi usaha mikro-kecil yang rentan musim',
      'Kebijakan nasional menyasar prasarana bagi nelayan dan pembudidaya',
      'Kerusakan mangrove dan pencemaran langsung memotong pendapatan',
      'Tata kelola perlu menjamin partisipasi dan keadilan akses',
    ],
    citations: [BUKU.bab3],
  },
  {
    type: 'evidence',
    visual: VISUALS.coastal,
    index: 4,
    section: 'Coastal Communities',
    presenter: 'Nurul Maghfirah Miftahul Jannah',
    title: 'Ketergantungan dan Kerentanan',
    stat: { value: '7 juta', label: 'Pekerjaan yang ditopang sektor perikanan, senilai US$26,9 miliar per tahun' },
    statNote: 'Sektor ini juga memasok sekitar 50% kebutuhan protein hewani nasional.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Di WPP 713, 714, dan 718, ketergantungan tinggi pada perikanan berpadu dengan kapasitas adaptasi terbatas. Masyarakat pesisir di sana paling rentan terhadap perubahan iklim.',
    citations: [
      { text: 'Kaczan, D. dkk., Hot Water Rising, World Bank, 2023', url: 'https://doi.org/10.1596/40564' },
      { text: 'UU No. 27 Tahun 2007 jo. UU No. 1 Tahun 2014', url: 'https://peraturan.bpk.go.id/Details/39911/uu-no-27-tahun-2007' },
      { text: 'KKP, Ekonomi Biru Butuh UMKM yang Melek Keuangan', url: 'https://www.kkp.go.id/djpdskp/ekonomi-biru-butuh-umkm-yang-melek-keuangan-GM8L/detail.html' },
    ],
  },

  // 5. Widi Darmadiatmika Tanaya
  {
    type: 'concept',
    visual: VISUALS.fisheries,
    index: 5,
    section: 'Fisheries & Aquaculture',
    presenter: 'Widi Darmadiatmika Tanaya',
    title: 'Perikanan Tangkap dan Budidaya',
    definition:
      'Perikanan tangkap menangkap ikan di laut dan perairan umum. Budidaya (akuakultur) mengembangbiakkan organisme air meniru habitat aslinya. Keduanya menopang pangan, kerja, dan ekspor.',
    keyPoints: [
      'Perikanan tangkap harus berbasis stok ikan dan pengawasan',
      'Budidaya perlu menjaga kualitas air, pakan, dan limbah',
      'Hilirisasi lewat rantai dingin menaikkan nilai tambah',
      'Moratorium izin dan penenggelaman kapal menekan IUU fishing',
    ],
    citations: [BUKU.bab4, BUKU.bab5],
  },
  {
    type: 'evidence',
    visual: VISUALS.fisheries,
    index: 5,
    section: 'Fisheries & Aquaculture',
    presenter: 'Widi Darmadiatmika Tanaya',
    title: 'Produksi dan Diversifikasi',
    stat: { value: '6,37 juta ton', label: 'Produksi ikan budidaya 2024, naik 13,64% dari tahun sebelumnya' },
    statNote: 'Produksi rumput laut pada periode yang sama mencapai 10,80 juta ton.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Model budidaya rumput laut di Wakatobi seluas 50 hektare menghasilkan nilai produksi Rp1,09 miliar. Ini menunjukkan peluang diversifikasi ekonomi pesisir di luar perikanan tangkap.',
    citations: [
      { text: 'KKP, Produksi Perikanan Budi Daya Naik 13,6% di 2024', url: 'https://kkp.go.id/news/news-detail/menteri-trenggono-berhasil-tingkatkan-produksi-perikanan-budi-daya-136-di-2024-vQq0.html' },
      { text: 'BPS, Volume dan Nilai Produksi Perikanan Tangkap 2024', url: 'https://www.bps.go.id/id/statistics-table/3/U2k4d1MwcFZjRGhSVVRKaWRHRm5Temw1VURJeFp6MDkjMw%3D%3D/volume-produksi-dan-nilai-produksi-perikanan-tangkap-menurut-provinsi-dan-jenis-penangkapan--2024.html' },
      { text: 'KKP, Kelautan dan Perikanan dalam Angka 2024', url: 'https://perpustakaan.kkp.go.id/knowledgerepository/index.php?id=1074693&p=show_detail' },
    ],
  },

  // 6. Made Adya Febriana Putri
  {
    type: 'concept',
    visual: VISUALS.tourism,
    index: 6,
    section: 'Maritime Tourism',
    presenter: 'Made Adya Febriana Putri',
    title: 'Wisata Bahari sebagai Nilai',
    definition:
      'Seluruh kegiatan rekreasi pada media kelautan atau bahari: pantai, pulau-pulau sekitarnya, serta kawasan lautan di permukaan maupun dasarnya. Nilainya datang dari jasa wisata, akomodasi, pemandu, dan konservasi.',
    keyPoints: [
      'Daya tariknya terumbu karang, mangrove, pantai, dan budaya pesisir',
      'Konservasi adalah modal ekonomi, bukan sekadar biaya',
      'Pengelolaan perlu zonasi dan batas daya dukung kunjungan',
      'Tanpa kendali kapasitas, wisata bahari berisiko overtourism',
    ],
    citations: [BUKU.bab4],
  },
  {
    type: 'evidence',
    visual: VISUALS.tourism,
    index: 6,
    section: 'Maritime Tourism',
    presenter: 'Made Adya Febriana Putri',
    title: 'Konservasi yang Membayar Balik',
    stat: { value: '48,29%', label: 'Tutupan karang hidup Raja Ampat 2024, naik dari 42,44% pada 2021' },
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Raja Ampat menghubungkan wisata selam dengan konservasi, disertai pembatasan aktivitas di Wayag. Secara nasional, 2024 mencatat 13,90 juta wisatawan mancanegara dan 1,02 miliar perjalanan wisatawan domestik.',
    citations: [
      { text: 'KKP, Wisata Bahari Raja Ampat Makin Mendunia, 2025', url: 'https://www.kkp.go.id/news/news-detail/kkp-berhasil-lindungi-populasi-pari-hiu-wisata-bahari-raja-ampat-makin-mendunia.html' },
      { text: 'Kementerian Pariwisata, SISPARNAS, data 2024', url: 'https://sisparnas.kemenparekraf.go.id/p/54266' },
      { text: 'Permen KP No. 26 Tahun 2024 tentang Kawasan Konservasi untuk Pariwisata Alam Perairan', url: 'https://jdih.kkp.go.id/Homedev/DetailPeraturan/6702' },
    ],
  },

  // 7. Gusti Putu Yuda Wirashana
  {
    type: 'concept',
    visual: VISUALS.shipping,
    index: 7,
    section: 'Shipping, Logistics & Shipbuilding',
    presenter: 'Gusti Putu Yuda Wirashana',
    title: 'Urat Nadi Ekonomi Kepulauan',
    definition:
      'Pelayaran menghubungkan pulau dan pasar, logistik mengelola arus barang, galangan kapal merawat armada. Ketiganya menentukan biaya distribusi dan daya saing kepulauan.',
    keyPoints: [
      'Pelabuhan adalah simpul integrasi laut-darat dalam rantai pasok',
      'Asas cabotage mewajibkan kapal domestik pada ekspor komoditas primer',
      'Program Tol Laut menekan disparitas harga kawasan Barat-Timur',
      'Galangan kapal menopang kemandirian armada dan tenaga terampil',
    ],
    citations: [BUKU.bab4],
  },
  {
    type: 'evidence',
    visual: VISUALS.shipping,
    index: 7,
    section: 'Shipping, Logistics & Shipbuilding',
    presenter: 'Gusti Putu Yuda Wirashana',
    title: 'Capaian Tol Laut 2024',
    stat: { value: '37 rute', label: 'Rute subsidi Tol Laut sampai 2024, dari target 25 rute' },
    statNote:
      'Pada tahun yang sama tercatat 7 pelabuhan utama memenuhi standar, dengan rute pelayaran saling terhubung 27%.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Program Tol Laut melayani wilayah terpencil lewat trayek tetap bersubsidi, untuk memperbaiki distribusi barang dan menekan kesenjangan harga antarwilayah.',
    citations: [
      { text: 'Kementerian Perhubungan, Laporan Kinerja Tahun 2024', url: 'https://ppid.dephub.go.id/fileupload/informasi-berkala/20250516132623.LKIP_Kemenhub_2024.pdf' },
      { text: 'UU No. 17 Tahun 2008 tentang Pelayaran', url: 'https://jdih.dephub.go.id/peraturan/detail?data=BIRXgzynMVj5Zo007DzuIi4KFw5WlEP8T4vQiLgyoCig8gi0Lz6n1We4jpLh4uJ4Z04uR56wikGnt4ZA1yWRpD5m49dA1sp8fcU49Y1ZSKk4dd7jmBrboqU2gKryjKzZoTo11Z6C3xK0RY4FMGACPCn5f5' },
      { text: 'BPS, Statistik Transportasi Laut 2024', url: 'https://www.bps.go.id/id/publication/2025/12/01/fdc6de7c2b34aa9b109edcad/statistik-transportasi-laut-2024.html' },
    ],
  },

  // 8. Amanah Asri Estikawati
  {
    type: 'concept',
    visual: VISUALS.blueEconomy,
    index: 8,
    section: 'Blue Economy Indonesia',
    presenter: 'Amanah Asri Estikawati',
    title: 'Arah Ekonomi Biru Indonesia',
    definition:
      'Pendekatan pembangunan yang menaikkan kesejahteraan dari sumber daya laut tanpa mengurangi kesehatan dan daya pulih ekosistemnya. Fokusnya keseimbangan manfaat ekonomi, sosial, dan lingkungan.',
    keyPoints: [
      'Prinsipnya: pemanfaatan berkelanjutan, bernilai tambah, inklusif, inovatif',
      'Prioritasnya perikanan berkelanjutan, konservasi, wisata bahari, energi laut',
      'Keberhasilan diukur lewat PDB maritim dan kawasan konservasi',
      'Tantangannya perubahan iklim, IUU fishing, dan pencemaran plastik',
    ],
    citations: [BUKU.bab7, BUKU.bab3],
  },
  {
    type: 'evidence',
    visual: VISUALS.blueEconomy,
    index: 8,
    section: 'Blue Economy Indonesia',
    presenter: 'Amanah Asri Estikawati',
    title: 'Target 2045',
    stat: { value: '15%', label: 'Target kontribusi PDB maritim pada 2045, dari 7,6% kondisi awal' },
    statNote: 'Kontribusi lapangan kerja maritim ditargetkan naik menjadi 12%.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Peta Jalan Ekonomi Biru membagi implementasi 2023 sampai 2045 ke dalam lima fase: konsolidasi ekosistem, sumber pertumbuhan baru, diversifikasi, peningkatan daya saing, dan ekonomi biru berkelanjutan.',
    citations: [
      { text: 'Bappenas, Peta Jalan Ekonomi Biru Indonesia Edisi 2, 2024', url: 'https://www.bappenas.go.id/index.php/unit-kerja/0405' },
      { text: 'Wuwung, McIlgorm & Voyer, Sustainable ocean development policies in Indonesia, 2024', url: 'https://doi.org/10.3389/fmars.2024.1401332' },
      { text: 'UU No. 32 Tahun 2014 tentang Kelautan', url: 'https://peraturan.bpk.go.id/Details/38710/uu-no-32tahun-2014' },
    ],
  },

  {
    type: 'closing',
    title: 'Benang Merahnya',
    lead:
      'Ekonomi maritim bukan delapan sektor yang berdiri sendiri. Semuanya bertumpu pada satu ekosistem yang sama.',
    threads: [
      { label: 'Sejarah memberi fondasi', body: 'Peradaban bahari membentuk jaringan dagang yang jadi cikal bakal konektivitas hari ini.' },
      { label: 'Manusia jadi penentu', body: 'SDM dan masyarakat pesisir menentukan apakah potensi laut berubah jadi kesejahteraan.' },
      { label: 'Ekosistem adalah modal', body: 'Perikanan, wisata, dan pelayaran sama-sama runtuh kalau ekosistemnya rusak.' },
      { label: 'Keberlanjutan bukan pilihan', body: 'Target 15% PDB maritim 2045 hanya masuk akal kalau daya pulih laut ikut dijaga.' },
    ],
    closingNote: 'Terima kasih. Kelompok 2, Maritime Insight.',
  },
];

window.DECK_CONTENT = SLIDES;
