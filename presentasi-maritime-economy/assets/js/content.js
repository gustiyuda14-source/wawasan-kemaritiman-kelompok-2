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
  { nama: 'Sityama Munawar Dewi', subtopik: 'Fisheries & Aquaculture' },
  { nama: 'Rini Mulia Sari', subtopik: 'Maritime Civilization' },
  { nama: 'Muh. Rafly Dwi Putra', subtopik: 'Maritime Tourism' },
  { nama: 'Nurul Maghfirah Miftahul Jannah', subtopik: 'Definisi & Ruang Lingkup' },
  { nama: 'Widi Darmadiatmika Tanaya', subtopik: 'Blue Economy Indonesia' },
  { nama: 'Made Adya Febriana Putri', subtopik: 'Human Resources Kemaritiman' },
  { nama: 'Gusti Putu Yuda Wirashana', subtopik: 'Shipping, Logistics & Shipbuilding' },
  { nama: 'Amanah Asri Estikawati', subtopik: 'Coastal Communities' },
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

  // 1. Nurul Maghfirah Miftahul Jannah
  {
    type: 'concept',
    visual: VISUALS.economy,
    index: 1,
    section: 'Definisi & Ruang Lingkup',
    presenter: 'Nurul Maghfirah Miftahul Jannah',
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
    presenter: 'Nurul Maghfirah Miftahul Jannah',
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

  // 3. Made Adya Febriana Putri
  {
    type: 'concept',
    visual: VISUALS.humanResources,
    index: 3,
    section: 'Human Resources Kemaritiman',
    presenter: 'Made Adya Febriana Putri',
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
    presenter: 'Made Adya Febriana Putri',
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

  // 4. Amanah Asri Estikawati
  // Sumber diperbarui ke jurnal <=10 tahun per rule dosen, lihat
  // materi-narasi-jurnal-buku/04-coastal-communities.md untuk narasi penuh.
  // Ferrol-Schulte dkk. (2015) dan Akhirman (2020) sengaja tidak dipakai,
  // lihat catatan pemakaian di file itu.
  {
    type: 'concept',
    visual: VISUALS.coastal,
    index: 4,
    section: 'Coastal Communities',
    presenter: 'Amanah Asri Estikawati',
    title: 'Ekonomi Masyarakat Pesisir',
    definition:
      'Komunitas yang kehidupan sosial-ekonominya terikat erat pada sumber daya pesisir dan laut — bukan cuma nelayan, tapi juga pembudidaya, pengolah hasil laut, pedagang, dan pelaku wisata. Kedekatan dengan laut tidak otomatis berarti sejahtera; akses ke modal, teknologi, pasar, dan infrastruktur yang menentukan.',
    keyPoints: [
      'Diversifikasi usaha tekan kerentanan, bukan andalkan satu mata pencaharian',
      'Wisata jadi alternatif, tapi rentan guncangan pasar dan lingkungan',
      'Pemberdayaan butuh pengetahuan dan keterampilan, bukan cuma bantuan',
      'Masyarakat mesti jadi subjek pembangunan, bukan cuma objek',
    ],
    citations: [
      { short: 'Suradja dkk. (2024)', text: 'Suradja dkk., Alternating Livelihoods and Coping with Shocks: An Examination of Coastal Tourism in Indonesia Amidst COVID-19, Marine Policy, 2024', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0308597X24003774' },
    ],
  },
  {
    type: 'evidence',
    visual: VISUALS.coastal,
    index: 4,
    section: 'Coastal Communities',
    presenter: 'Amanah Asri Estikawati',
    title: 'Subjek, Bukan Objek Pembangunan',
    stat: { value: '5 desa', label: 'Desa pesisir yang diteliti soal ketahanan lewat diversifikasi ke wisata bahari saat pandemi' },
    statNote: 'Di Pantai Semawang, Sanur, warga lokal berperan langsung dalam perencanaan dan pengelolaan wisata bahari, bukan cuma jadi penerima program.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Di Makassar, hubungan pemerintah-masyarakat pesisir sudah berjalan, tapi keterlibatan sektor swasta masih terbatas — rekomendasinya perkuat forum multipihak dan pelatihan warga. Di Tamanroya, Jeneponto, pemberdayaan lewat wisata bahari butuh partisipasi, peningkatan kapasitas, dan dukungan infrastruktur, bukan sekadar bantuan.',
    citations: [
      { text: 'Oktaviani & Suryasih, Partisipasi Masyarakat Lokal Dalam Pengelolaan Wisata Bahari Di Pantai Semawang, Jurnal Destinasi Pariwisata, 2018', url: 'https://ojs.unud.ac.id/index.php/destinasipar/article/download/46252/27955/' },
      { text: 'Ramadhani dkk., Strengthening Multi-Stakeholder Partnerships for Sustainable Coastal Tourism Management: A Case Study from Makassar, Indonesia, Indonesian Journal of Marine Tourism, 2025', url: 'https://journal.poltekparmakassar.ac.id/index.php/marine-tourism/article/view/648' },
      { text: 'Hamzah & Arifin, Building Coastal Community Economy Through Maritime Tourism in Tamanroya Village, Jeneponto Sub-District, Proceedings of IACS-IHCRGESND, 2024', url: 'https://www.ojs.literacyinstitute.org/index.php/iacseries/article/download/1533/497/4495' },
    ],
  },

  // 5. Sityama Munawar Dewi
  {
    type: 'concept',
    visual: VISUALS.fisheries,
    index: 5,
    section: 'Fisheries & Aquaculture',
    presenter: 'Sityama Munawar Dewi',
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
    presenter: 'Sityama Munawar Dewi',
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

  // 6. Muh. Rafly Dwi Putra
  // Sumber diperbarui ke jurnal <=10 tahun per rule dosen, lihat
  // materi-narasi-jurnal-buku/06-maritime-tourism.md untuk narasi penuh.
  {
    type: 'concept',
    visual: VISUALS.tourism,
    index: 6,
    section: 'Maritime Tourism',
    presenter: 'Muh. Rafly Dwi Putra',
    title: 'Wisata Bahari, Nilai yang Belum Utuh',
    definition:
      'Seluruh aktivitas rekreasi pada media laut dan pesisir yang nilainya terbentuk lewat rantai jasa: transportasi, akomodasi, pemandu, dan konservasi. Indikator kinerjanya masih dominan kunjungan dan belanja wisatawan, sementara emisi karbon, limbah laut, dan tekanan ekosistem jarang terukur.',
    keyPoints: [
      'Nilai wisata bahari lahir dari rantai jasa, bukan cuma pemandangan',
      'Emisi karbon dan limbah laut jarang masuk hitungan kinerja',
      'Konservasi adalah modal ekonomi, bukan sekadar biaya tambahan',
      'Kebocoran nilai ekonomi ke luar daerah jarang diukur',
    ],
    citations: [
      { short: 'Rasjid (2026)', text: 'Rasjid, R. D. A., Marine Tourism and Cruise Development in Indonesia: Perspective of Sustainable Environmental Accounting, Indonesia Journal of Marine Tourism, 2026', url: 'https://journal.poltekparmakassar.ac.id/index.php/marine-tourism/article/view/1615' },
    ],
  },
  {
    type: 'evidence',
    visual: VISUALS.tourism,
    index: 6,
    section: 'Maritime Tourism',
    presenter: 'Muh. Rafly Dwi Putra',
    title: 'Modal Sosial di Balik Mandeh',
    stat: { value: '2 juta', label: 'Wisatawan per tahun ke Kawasan Wisata Bahari Terpadu Mandeh, Sumatra Barat, sejak 2016' },
    statNote:
      'Transformasi dari desa pesisir terisolasi jadi destinasi wisata bahari terjadi dalam kurang dari 10 tahun.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Akses darat baru dibuka 2015-2018 lewat jalan sepanjang 41,08 km. Sekitar 100 perahu nelayan tradisional dikonversi jadi kapal wisata, dan pendapatan nelayan naik jadi Rp2-3 juta per hari saat musim liburan.',
    citations: [
      { text: 'Syafrini dkk., Innovation in Developing Isolated Coastal Villages into Sustainable Marine Tourism Villages in West Sumatra, Indonesia, Frontiers in Sociology, 2026', url: 'https://doi.org/10.3389/fsoc.2026.1754562' },
      { text: 'Rasjid, Marine Tourism and Cruise Development in Indonesia, Indonesia Journal of Marine Tourism, 2026', url: 'https://journal.poltekparmakassar.ac.id/index.php/marine-tourism/article/view/1615' },
    ],
  },

  // 7. Gusti Putu Yuda Wirashana
  // Sumber diperbarui ke jurnal <=10 tahun per rule dosen, lihat
  // materi-narasi-jurnal-buku/07-shipping-logistics-shipbuilding.md untuk narasi
  // penuh. Subtopik shipbuilding belum punya sumber jurnal pengganti, lihat
  // catatan pemakaian di file itu.
  {
    type: 'concept',
    visual: VISUALS.shipping,
    index: 7,
    section: 'Shipping, Logistics & Shipbuilding',
    presenter: 'Gusti Putu Yuda Wirashana',
    title: 'Urat Nadi Ekonomi Kepulauan',
    definition:
      'Pelayaran menghubungkan pulau dan pasar, logistik mengelola arus barang, galangan kapal merawat armada. Digitalisasi pelabuhan mempercepat proses, tapi kepercayaan pengguna terhadap sistemnya masih jadi hambatan adopsi yang lebih besar dari soal fitur.',
    keyPoints: [
      'INAPORTNET pangkas waktu pelabuhan dari 1-3 hari jadi 30 menit',
      'Indeks Kinerja Logistik Indonesia kalah dari Vietnam, Thailand, Malaysia',
      'Kepercayaan pengguna, bukan fitur, jadi hambatan adopsi sistem digital',
      'Galangan kapal menopang kemandirian armada dan tenaga terampil',
    ],
    citations: [
      { short: 'Iman dkk. (2022)', text: 'Iman, Amanda & Angela, Digital Transformation for Maritime Logistics Capabilities Improvement: Cases in Indonesia, Marine Economics and Management, 2022', url: 'https://doi.org/10.1108/MAEM-01-2022-0002' },
    ],
  },
  {
    type: 'evidence',
    visual: VISUALS.shipping,
    index: 7,
    section: 'Shipping, Logistics & Shipbuilding',
    presenter: 'Gusti Putu Yuda Wirashana',
    title: 'Tol Laut, Efisiensi di Bawah 30%',
    stat: { value: '<30%', label: 'Efisiensi program Tol Laut setelah delapan tahun berjalan' },
    statNote:
      'Rute alternatif yang diusulkan untuk jalur T-3 memangkas jarak 51.148 mil laut dan menghemat 2 jam 18 menit per perjalanan.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Integrasi pelayaran perintis dan Tol Laut masih lemah: utilisasi muatan balik cuma 31-33%, kapal subsidi banyak berlayar kosong di jalur pulang. Disparitas harga antarwilayah lebih banyak disebabkan premi asuransi tinggi ketimbang jarak tempuh.',
    citations: [
      { text: 'Djunarsjah dkk., Optimization of Marine Activities Based on Spatial Regional Planning and Geographical Approaches: A Case Study of Tol Laut Program in Indonesia, Indonesian Journal of Geography, 2025', url: 'https://doi.org/10.22146/ijg.95684' },
      { text: 'Berlianto dkk., Integrasi Pelayaran Perintis (Pioneer Shipping) dan Tol Laut untuk Mengoptimalkan Return Cargo di Indonesia, OPTIMAL: Jurnal Ekonomi dan Manajemen, 2025', url: 'https://doi.org/10.55606/optimal.v5i2.6465' },
      { text: 'Iman, Amanda & Angela, Digital Transformation for Maritime Logistics Capabilities Improvement: Cases in Indonesia, Marine Economics and Management, 2022', url: 'https://doi.org/10.1108/MAEM-01-2022-0002' },
    ],
  },

  // 8. Widi Darmadiatmika Tanaya
  // Sumber diperbarui ke jurnal/buku <=10 tahun per rule dosen, lihat
  // materi-narasi-jurnal-buku/08-blue-economy-indonesia.md untuk narasi penuh.
  // Hamid dkk. (2026) sengaja tidak dipakai di sini: belum ketemu URL/DOI
  // terverifikasi, lihat catatan pemakaian di file itu.
  {
    type: 'concept',
    visual: VISUALS.blueEconomy,
    index: 8,
    section: 'Blue Economy Indonesia',
    presenter: 'Widi Darmadiatmika Tanaya',
    title: 'Arah Ekonomi Biru Indonesia',
    definition:
      'Model ekonomi yang memakai kekayaan maritim untuk kesejahteraan masyarakat tanpa mengorbankan keseimbangan ekosistem laut, dibangun di atas prinsip efisiensi sumber daya, nihil limbah, inklusi sosial, dan produksi melingkar.',
    keyPoints: [
      'Prinsipnya: efisiensi sumber daya, nihil limbah, inklusi sosial',
      'Sistem produksi melingkar menyeimbangkan produksi dan regenerasi laut',
      'Digitalisasi dan budidaya berkelanjutan mendorong sektor perikanan',
      'Wisata bahari butuh daya tarik, akses, dan harga terjangkau',
    ],
    citations: [
      BUKU.bab7,
      { short: 'Widodo dkk. (2023)', text: 'Widodo dkk., Konsep Blue Economy Dalam Pengembangan Wilayah Pesisir dan Wisata Bahari di Indonesia, Jurnal Kewarganegaraan, 2023', url: 'https://journal.upy.ac.id/index.php/pkn/article/download/5548/3272/15440' },
    ],
  },
  {
    type: 'evidence',
    visual: VISUALS.blueEconomy,
    index: 8,
    section: 'Blue Economy Indonesia',
    presenter: 'Widi Darmadiatmika Tanaya',
    title: 'Diversifikasi yang Menaikkan Pendapatan',
    stat: { value: '20-30%', label: 'Kenaikan pendapatan nelayan lewat diversifikasi usaha ala blue economy' },
    statNote: 'Diversifikasi mencakup budidaya, ekowisata, dan bioenergi dari rumput laut.',
    caseTitle: 'Praktik di Indonesia',
    caseBody:
      'Strategi blue economy perikanan memadukan IoT, budidaya berkelanjutan, pengelolaan berbasis komunitas, dan pemantauan stok ikan berbasis satelit — mengurangi eksploitasi berlebih sekaligus menaikkan kesadaran konservasi di masyarakat pesisir.',
    citations: [
      { text: 'Nusantara dkk., Konseptual, Strategi, dan Implementasi Blue Economy dalam Pengelolaan Perikanan Laut dan Air Tawar, JELAWAT: Jurnal Ekonomi Laut dan Air Tawar, 2025', url: 'https://ejournal.utmj.ac.id/jelawat/article/view/916' },
      { text: 'Widodo dkk., Konsep Blue Economy Dalam Pengembangan Wilayah Pesisir dan Wisata Bahari di Indonesia, Jurnal Kewarganegaraan, 2023', url: 'https://journal.upy.ac.id/index.php/pkn/article/download/5548/3272/15440' },
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
