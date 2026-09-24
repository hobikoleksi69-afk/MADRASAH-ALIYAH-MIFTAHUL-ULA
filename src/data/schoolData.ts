export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'Pengumuman' | 'Prestasi' | 'Kegiatan' | 'PPDB' | 'Akademik';
  date: string;
  author: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
  featured?: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Nasional' | 'Provinsi' | 'Kabupaten';
  year: string;
  recipient: string;
  description: string;
  badge: string;
  imageUrl: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Ibadah' | 'Akademik' | 'Asrama' | 'Olahraga' | 'Penunjang';
  description: string;
  capacity: string;
  imageUrl: string;
}

export interface ExtracurricularItem {
  id: string;
  name: string;
  category: 'Keagamaan' | 'Kepanduan & Relawan' | 'Olahraga & Seni' | 'Sains & Teknologi';
  schedule: string;
  mentor: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Akademik' | 'Pesantren' | 'Prestasi' | 'Kegiatan' | 'Fasilitas';
  date: string;
  caption: string;
  imageUrl: string;
}

export interface TeacherItem {
  id: string;
  name: string;
  role: string;
  category: 'Pimpinan & Pengasuh' | 'Guru Agama & Kitab Salaf' | 'Guru MIPA & Sains' | 'Guru Bahasa & Sosial' | 'Tenaga Kependidikan';
  subject: string;
  education: string;
  experience: string;
  certifications: string[];
  photoUrl: string;
  bio: string;
  schedule?: string;
}

export const SCHOOL_INFO = {
  name: "MA Miftahul 'Ula",
  fullName: "Madrasah Aliyah Miftahul 'Ula",
  logoUrl: "/logo-mam.svg",
  videoUrl: "https://res.cloudinary.com/jytehhvl/video/upload/v1790244111/animasikan_tanpa_suara_20260924165723.mp4",
  videoUrlDesktop: "https://res.cloudinary.com/jytehhvl/video/upload/v1790220634/wwwwww.mp4",
  status: "Swasta",
  accreditation: "Terakreditasi A (Unggul)",
  foundation: "Yayasan Pondok Pesantren Miftahul 'Ula Nglawak",
  establishedYear: "1988",
  nsm: "131235180024",
  npsn: "20584129",
  address: {
    village: "Mentaos",
    subDistrict: "Nglawak",
    district: "Kecamatan Kertosono",
    regency: "Kabupaten Nganjuk",
    province: "Jawa Timur",
    postalCode: "64351",
    fullAddress: "Mentaos, Nglawak, Kec. Kertosono, Kab. Nganjuk, Jawa Timur 64351",
  },
  contact: {
    phone: "0358-552243",
    whatsapp: "+6281234552243",
    whatsappFormatted: "0812-3455-2243",
    email: "info@mamiftahulula.sch.id",
    ppdbEmail: "ppdb@mamiftahulula.sch.id",
    officeHours: "Senin - Sabtu: 07.30 - 15.00 WIB",
  },
  socialMedia: {
    instagram: "https://instagram.com/ma_miftahulula_kertosono",
    facebook: "https://facebook.com/mamiftahululanglawak",
    youtube: "https://youtube.com/@mamiftahululatv",
    googleMaps: "https://maps.google.com/?q=MA+Miftahul+Ula+Nglawak+Kertosono+Nganjuk",
    kemenagData: "https://emis.kemenag.go.id",
  },
  headmaster: {
    name: "Drs. H. M. Zainuddin, M.Pd.I",
    title: "Kepala Madrasah Aliyah Miftahul 'Ula",
    speech: "Selamat datang di website resmi MA Miftahul 'Ula Nglawak Kertosono. Kami berikhtiar mendidik tunas bangsa yang tidak hanya cakap dalam ilmu pengetahuan dan teknologi umum, melainkan teguh memegang akhlakul karimah, mahir mengkaji khazanah kitab turots Islam, serta menjadi generasi pembelajar mandiri yang bermanfaat bagi agama, nusa, dan bangsa.",
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  },
  vision: "Terwujudnya Lulusan Madrasah yang Unggul dalam Prestasi, Teguh dalam Iman dan Taqwa, Berakhlakul Karimah, Tafaqquh Fiddin, serta Berdaya Saing Tinggi di Era Global.",
  missions: [
    "Menyelenggarakan pendidikan terpadu antara Kurikulum Nasional Kemenag dan Kurikulum Diniyah Kepesantrenan.",
    "Membina generasi penghafal Al-Qur'an (Tahfidz) yang mutqin dan berjiwa qur'ani.",
    "Mengembangkan kemampuan sains, literasi riset, teknologi informasi, dan komunikasi bilingual (Arab-Inggris).",
    "Menanamkan nilai-nilai luhur kepesantrenan: keikhlasan, kesederhanaan, ukhuwah islamiyah, dan kemandirian.",
    "Mencetak lulusan yang mampu melanjutkan studi ke perguruan tinggi terkemuka dalam dan luar negeri serta berjiwa wirausaha.",
  ],
  motto: "Berilmu, Beramal, Berakhlakul Karimah",
};

export const PPDB_INFO = {
  academicYear: "2026/2027",
  isOpen: true,
  currentPhase: "Gelombang 1 (Jalur Prestasi & Minat Bakat)",
  phases: [
    {
      name: "Gelombang 1 (Prestasi & Beasiswa Tahfidz)",
      period: "1 Januari - 31 Maret 2026",
      status: "Sedang Berlangsung",
      benefits: "Bebas Biaya Pendaftaran, Potongan DPP 50%, Prioritas Pemilihan Asrama Unggulan",
    },
    {
      name: "Gelombang 2 (Reguler & Pindahan)",
      period: "1 April - 30 Juni 2026",
      status: "Segera Dibuka",
      benefits: "Fasilitas Perlengkapan Santri Lengkap, Akses Program Bilingual & Ekstrakurikuler",
    },
    {
      name: "Gelombang 3 (Jalur Kuota Khusus)",
      period: "1 Juli - 15 Juli 2026",
      status: "Tentatif (Jika Kuota Tersisa)",
      benefits: "Penempatan kelas peminatan sesuai tes observasi baca kitab & akademik",
    },
  ],
  tracks: [
    {
      id: "tahfidz",
      title: "Jalur Beasiswa Tahfidz Al-Qur'an",
      desc: "Khusus siswa/siswi penghafal Al-Qur'an minimal 3 Juz mutqin dengan sertifikat / syahadah.",
      reward: "Beasiswa SPP & Pembebasan Biaya Pengembangan Institusi (DPP)",
      quota: "30 Santri",
    },
    {
      id: "prestasi",
      title: "Jalur Prestasi Akademik & Non-Akademik",
      desc: "Untuk peraih juara 1-3 tingkat Kab/Provinsi/Nasional di bidang Sains, KSM, MTQ, Olahraga, atau Seni.",
      reward: "Bebas Tes Akademik + Potongan Biaya Masuk 50%",
      quota: "40 Santri",
    },
    {
      id: "reguler",
      title: "Jalur Reguler (Mukim Asrama / Laju Non-Asrama)",
      desc: "Terbuka bagi seluruh lulusan MTs/SMP sederajat yang bertekad kuat mendalami ilmu agama dan umum.",
      reward: "Fasilitas Pembinaan Berkelanjutan & Ekstrakurikuler",
      quota: "150 Santri",
    },
    {
      id: "afirmasi",
      title: "Jalur Afirmasi Yatim & Dhuafa",
      desc: "Program peduli santri berpotensi dari kalangan yatim/piatu dan keluarga kurang mampu.",
      reward: "Subsidi Pendidikan Penuh / Keringanan SPP & Seragam",
      quota: "20 Santri",
    },
  ],
  requirements: [
    "Mengisi formulir pendaftaran (online di website atau langsung di sekretariat)",
    "Fotokopi Ijazah / Surat Keterangan Lulus (SKL) MTs/SMP yang telah dilegalisir (3 lembar)",
    "Fotokopi Akta Kelahiran dan Kartu Keluarga (KK) (3 lembar)",
    "Fotokopi KTP kedua orang tua/wali (2 lembar)",
    "Pas foto terbaru 3x4 berwarna berbusana rapi & berpeci/berjilbab (4 lembar)",
    "Fotokopi piagam/sertifikat kejuaraan atau syahadah tahfidz (jika memilih jalur prestasi/tahfidz)",
    "Surat Keterangan Berkelakuan Baik dari madrasah/sekolah asal",
  ],
  fees: [
    { item: "Infaq Pendaftaran (Gelombang 1)", cost: "Gratis (Rp 0)", note: "Promo awal tahun ajaran baru" },
    { item: "Uang Seragam Lengkap (5 Stel)", cost: "Rp 850.000", note: "Termasuk jas madrasah, seragam batik, pramuka, olahraga, & atribut" },
    { item: "Buku Paket & Modul Diniyah Turots", cost: "Rp 450.000", note: "Untuk 1 tahun pelajaran" },
    { item: "Dana Pengembangan Pendidikan (DPP)", cost: "Rp 1.500.000", note: "Dapat diangsur 3x selama 1 tahun" },
    { item: "SPP Pendidikan Bulanan (Madrasah)", cost: "Rp 150.000 / bulan", note: "Terjangkau dan berkualitas tinggi" },
    { item: "Syahriyah Pondok & Makan 3x Sehari (Santri Mukim)", cost: "Rp 650.000 / bulan", note: "Khusus santri yang bermukim di asrama pondok pesantren" },
  ],
};

export const CURRICULUM_DATA = {
  general: [
    {
      program: "Peminatan MIPA (Matematika & Ilmu Pengetahuan Alam)",
      desc: "Fokus pada penguasaan sains empiris, matematika lanjut, riset ilmiah madrasah, dan persiapan menuju Fakultas Kedokteran, Teknik, Farmasi, serta Sains Terapan.",
      subjects: ["Fisika Terapan & Praktikum", "Kimia Analitik Laboratorium", "Biologi Sel & Lingkungan", "Matematika Peminatan", "Informatika & Robotik"],
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    },
    {
      program: "Peminatan IPS (Ilmu Pengetahuan Sosial & Humaniora)",
      desc: "Membentuk pemikiran kritis terhadap dinamika sosial kemasyarakatan, ekonomi syariah, hubungan internasional, sejarah peradaban Islam, dan hukum tata negara.",
      subjects: ["Ekonomi Syariah & Akuntansi", "Sosiologi Kemasyarakatan", "Geografi Regional & Lingkungan", "Sejarah Peradaban Islam & Dunia"],
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    {
      program: "Peminatan MAK (Madrasah Aliyah Keagamaan)",
      desc: "Spesialisasi penguasaan bahasa Arab komprehensif, hukum Islam mendalam, tafsir hadits, dan ushul fiqih guna mencetak kader ulama, da'i, dan akademisi Islam.",
      subjects: ["Tafsir & Ulumul Qur'an", "Hadits & Mustholah Hadits", "Fiqih & Ushul Fiqih", "Ilmu Kalam & Akhlak Tasawuf", "Bahasa Arab Tingkat Lanjut"],
      imageUrl: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80",
    },
  ],
  diniyah: [
    {
      field: "Ilmu Alat (Gramatika Bahasa Arab)",
      books: ["Matan Al-Jurumiyah", "Nadhom Al-Imrithi", "Alfiyah Ibnu Malik", "Al-Amtsilah At-Tashrifiyah"],
      target: "Mampu membaca, memahami, serta mengi'rob kitab kuning gundul dengan tepat dan lancar.",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      field: "Fiqih & Muamalah Kontemporer",
      books: ["Safinatun Najah", "Fathul Qorib Al-Mujib", "Fathul Mu'in (Tingkat Lanjutan)"],
      target: "Memahami tata cara ibadah sesuai madzhab Syafi'i dan etika bermuamalah syar'i di tengah masyarakat modern.",
      imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
    },
    {
      field: "Hadits & Pendidikan Akhlaq",
      books: ["Arbain An-Nawawiyyah", "Bulughul Maram", "Ta'limul Muta'allim", "Adabud Dunya wad Din"],
      target: "Menghayati teladan Nabi Muhammad SAW serta menjunjung tinggi adab santri terhadap orang tua, guru, dan sesama.",
      imageUrl: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
    },
    {
      field: "Tahfidzul Qur'an Intensif",
      books: ["Mushaf Rasm Utsmani", "Matan Al-Jazariyah (Tajwid)", "Tuhfatul Athfal"],
      target: "Bimbingan talaqqi, ziyadah hafalan baru, serta muraja'ah terjadwal dengan target 5 - 30 Juz bersanad.",
      imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    id: "ipnu-ippnu",
    name: "Pimpinan Komisariat IPNU - IPPNU",
    category: "Keagamaan",
    schedule: "Setiap Kamis Sore & Agenda Berkala",
    mentor: "Ustadz M. Fauzan & Ustadzah Nur Laila",
    description: "Wadah kaderisasi kepemimpinan santri, keaswajaan (Ahlussunnah wal Jama'ah an-Nahdliyyah), retorika, dan bakti sosial kemasyarakatan.",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hadrah",
    name: "Seni Hadrah & Banjari Miftahul Qulub",
    category: "Olahraga & Seni",
    schedule: "Senin & Rabu Malam",
    mentor: "Kang Ridwan Asy-Syafi'i",
    description: "Pelatihan seni musik islami, vokal merdu, pukulan terbang banjari, pembacaan Maulid Simthudduror, Diba', dan shalawat kontemporer.",
    iconName: "Music",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tahfidz-club",
    name: "Halaqah Tahfidz & Tilawatil Qur'an",
    category: "Keagamaan",
    schedule: "Setiap Hari Bakda Shubuh & Maghrib",
    mentor: "Ustadz H. Ahmad Shodiq, Al-Hafidz",
    description: "Halaqah intensif setoran hafalan, fashohah, makharijul huruf, kaidah tajwid, dan bimbingan seni tilawah suara merdu.",
    iconName: "BookOpen",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pramuka",
    name: "Gerakan Pramuka Gudep MA Miftahul 'Ula",
    category: "Kepanduan & Relawan",
    schedule: "Jumat Siang",
    mentor: "Kak Bambang Prasetyo & Kak Siti Aminah",
    description: "Pelatihan kedisiplinan, tali-temali pioneering, pertolongan pertama, penjelajahan alam, dan kepemimpinan generasi muda madrasah.",
    iconName: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pagar-nusa",
    name: "Pencak Silat Pagar Nusa (GASMI)",
    category: "Olahraga & Seni",
    schedule: "Minggu Pagi & Selasa Sore",
    mentor: "Pendekar Agus Slamet",
    description: "Bela diri tradisional pencak silat nahdliyin untuk melatih ketahanan fisik, ketangkasan, mental ksatria, dan membela kebenaran.",
    iconName: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kaligrafi",
    name: "Khat & Seni Kaligrafi Islam",
    category: "Olahraga & Seni",
    schedule: "Sabtu Siang",
    mentor: "Ustadz Aris Munandar, S.Pd",
    description: "Mempelajari kaidah penulisan khat Naskhi, Tsuluts, Riq'ah, Diwani, dan karya lukis kaligrafi kanvas bernilai seni tinggi.",
    iconName: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "multimedia",
    name: "Santri IT & Multimedia Kreatif",
    category: "Sains & Teknologi",
    schedule: "Kamis Siang",
    mentor: "Ahmad Rifai, S.Kom",
    description: "Praktik fotografi madrasah, videografi kegiatan santri, desain grafis, editing konten dakwah positif, dan dasar pemrograman komputer.",
    iconName: "Laptop",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bilingual-speech",
    name: "Bilingual Debate & Speech (Arab - Inggris)",
    category: "Sains & Teknologi",
    schedule: "Selasa Sore",
    mentor: "Miss Anisa Rahma & Ustadz Fariduddin",
    description: "Latihan pidato (muhadharah), debat ilmiah, khitobah 3 bahasa, penulisan esai, dan pembiasaan percakapan harian santri.",
    iconName: "Languages",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "olahraga",
    name: "Futsal & Bola Voli Santri Club",
    category: "Olahraga & Seni",
    schedule: "Jumat Pagi & Sore",
    mentor: "Coach Wahyu Hidayat",
    description: "Pengembangan kebugaran jasmani, taktik beregu pertandingan futsal dan voli, serta persiapan turnamen porseni antar-madrasah.",
    iconName: "Trophy",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Juara 1 Musabaqah Tilawatil Qur'an (MTQ) Tingkat Kabupaten Nganjuk",
    category: "Kabupaten",
    year: "2025",
    recipient: "M. Farhan Al-Ghifari (Kelas XI MAK)",
    description: "Meraih nilai tertinggi pada cabang tilawah remaja putra mengalahkan puluhan perwakilan sekolah se-Kabupaten Nganjuk.",
    badge: "Emas MTQ Remaja",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ach-2",
    title: "Juara 2 Musabaqah Hifdzil Qur'an (MHQ) 10 Juz Tingkat Jawa Timur",
    category: "Provinsi",
    year: "2025",
    recipient: "Nurul Aini (Kelas XII MIPA)",
    description: "Prestasi gemilang hafalan mutqin pada ajang perlombaan santri pondok pesantren se-Jawa Timur.",
    badge: "Perak MHQ Prov.",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ach-3",
    title: "Medali Perunggu Kompetisi Sains Madrasah (KSM) Bidang Biologi Terintegrasi",
    category: "Provinsi",
    year: "2024",
    recipient: "Ahmad Dwi Kurniawan (Kelas XI MIPA)",
    description: "Membuktikan keunggulan integrasi sains biologi modern dengan kajian ayat-ayat kauniyah Al-Qur'an.",
    badge: "Medali KSM Jatim",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ach-4",
    title: "Juara 1 Festival Seni Hadrah Kontemporer Porseni Madrasah",
    category: "Kabupaten",
    year: "2024",
    recipient: "Tim Hadrah Miftahul Qulub",
    description: "Harmonisasi vokal sholawat dan ketukan rebana terbang memukau dewan juri dan seluruh hadirin.",
    badge: "Juara 1 Hadrah",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ach-5",
    title: "Juara Umum Kejuaraan Pencak Silat Pagar Nusa Pelajar Jawa Timur",
    category: "Provinsi",
    year: "2025",
    recipient: "Kontingen Silat MA Miftahul 'Ula",
    description: "Membawa pulang 3 medali emas dan 2 perak pada nomor tanding beregu dan jurus seni tunggal.",
    badge: "Juara Umum Silat",
    imageUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ach-6",
    title: "Lolos Seleksi Masuk PTN & Beasiswa Al-Azhar Cairo Mesir",
    category: "Nasional",
    year: "2025",
    recipient: "Muhammad Zaidan & Siti Fadhilah",
    description: "Alumni angkatan 2025 sukses menembus seleksi beasiswa Kemenag RI untuk studi sarjana Ushuluddin di Kairo.",
    badge: "Beasiswa Al-Azhar",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: "news-ppdb-2026",
    slug: "pendaftaran-ppdb-2026-2027-telah-dibuka",
    title: "Pendaftaran Siswa Baru (PPDB) MA Miftahul 'Ula 2026/2027 Resmi Dibuka",
    category: "PPDB",
    date: "12 Januari 2026",
    author: "Panitia PPDB",
    readTime: "3 menit",
    featured: true,
    summary: "MA Miftahul 'Ula membuka penerimaan peserta didik baru untuk Program MIPA, IPS, dan Keagamaan MAK. Tersedia beasiswa penuh bagi santri penghafal Al-Qur'an.",
    content: [
      "Madrasah Aliyah Miftahul 'Ula Nglawak Kertosono secara resmi membuka pendaftaran Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027.",
      "Tahun ini, MA Miftahul 'Ula membuka tiga peminatan utama yaitu Matematika dan Ilmu Pengetahuan Alam (MIPA), Ilmu Pengetahuan Sosial (IPS), serta Madrasah Aliyah Keagamaan (MAK).",
      "Bagi calon santri yang memiliki hafalan Al-Qur'an minimal 3 Juz mutqin, pihak madrasah menyediakan beasiswa pembebasan SPP dan bantuan seragam secara penuh melalui seleksi jalur tahfidz.",
      "Pendaftaran dapat dilakukan secara online melalui website resmi ini atau langsung datang ke sekretariat panitia di Mentaos, Nglawak, Kertosono, Nganjuk setiap hari kerja pukul 07.30 - 15.00 WIB.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "news-hari-santri",
    slug: "gebyar-hari-santri-nasional-dan-pawai-taaruf",
    title: "Semarak Gebyar Peringatan Hari Santri Nasional di Kampus MA Miftahul 'Ula",
    category: "Kegiatan",
    date: "23 Oktober 2025",
    author: "Humas Madrasah",
    readTime: "4 menit",
    featured: true,
    summary: "Ratusan santri dan dewan guru mengenakan busana sarung dan kemeja putih memperingati Hari Santri Nasional dengan apel akbar, istighosah, dan pawai ta'aruf keliling desa Nglawak.",
    content: [
      "Peringatan Hari Santri Nasional di lingkungan Pondok Pesantren dan MA Miftahul 'Ula berlangsung penuh khidmat dan semarak.",
      "Rangkaian acara diawali dengan Apel Akbar Hari Santri di lapangan utama, dilanjutkan dengan pembacaan Resolusi Jihad NU dan ikrar santri Indonesia.",
      "Kepala Madrasah, Drs. H. M. Zainuddin, M.Pd.I dalam amanatnya menekankan pentingnya santri modern untuk terus mengawal kedaulatan moral bangsa sekaligus tangkas dalam menguasai teknologi masa depan.",
      "Acara ditutup dengan santunan anak yatim dan festival hadrah antar-komisariat kelas.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "news-ksm-jatim",
    slug: "santri-ma-miftahul-ula-raih-medali-ksm-jawa-timur",
    title: "Santri MA Miftahul 'Ula Ukir Prestasi Gemilang di KSM Tingkat Jawa Timur",
    category: "Prestasi",
    date: "18 September 2025",
    author: "Tim Riset & Sains",
    readTime: "3 menit",
    summary: "Delegasi siswa MA Miftahul 'Ula sukses membawa pulang medali pada ajang Kompetisi Sains Madrasah (KSM) Bidang Biologi Terintegrasi se-Jawa Timur.",
    content: [
      "Kebanggaan kembali ditorehkan oleh santri MA Miftahul 'Ula Nglawak Kertosono. Pada kompetisi bergengsi KSM Kemenag tingkat Provinsi Jawa Timur, wakil madrasah meraih medali berkat penguasaan konsep biologi yang diintegrasikan dengan pemahaman ayat Al-Qur'an.",
      "Pencapaian ini menjadi bukti komitmen madrasah dalam memadukan keunggulan sains akademik umum dan pemahaman nilai spiritual agama.",
      "Pihak yayasan dan madrasah memberikan apresiasi berupa beasiswa pembinaan serta pembimbingan intensif menuju ajang kompetisi nasional.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "news-kajian-kitab",
    slug: "program-khataman-kitab-kuning-dan-pasaran-ramadhan",
    title: "Program Pasaran & Khataman Kitab Kuning Menyambut Bulan Suci Ramadhan",
    category: "Akademik",
    date: "28 Februari 2026",
    author: "Bagian Kurikulum Diniyah",
    readTime: "2 menit",
    summary: "Menyongsong bulan Ramadhan, MA Miftahul 'Ula menggelar kajian kilatan kitab turots karya ulama salaf yang diikuti seluruh santri dan masyarakat sekitar.",
    content: [
      "Tradisi mengaji kitab kuning kilatan (pasaran) kembali digelar di Aula Pesantren Miftahul 'Ula Nglawak Kertosono.",
      "Kitab-kitab yang dikaji meliputi bidang Fiqih, Hadits Nabawi, serta Akhlaq Tasawuf dipandu oleh jajaran Asatidz dan Masyayikh pesantren.",
      "Kegiatan ini terbuka juga bagi santri kalong (warga luar yang ingin mengaji) sebagai wujud pengabdian syiar ilmu madrasah bagi warga sekitar Kertosono dan Nganjuk.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "news-kalender-akademik",
    slug: "jadwal-penilaian-akhir-semester-dan-libur-madrasah",
    title: "Pengumuman Jadwal Penilaian Sumatif Akhir Tahun & Kalender Akademik",
    category: "Pengumuman",
    date: "15 Mei 2026",
    author: "Waka Kurikulum",
    readTime: "2 menit",
    summary: "Pemberitahuan resmi mengenai jadwal pelaksanaan ujian akhir semester berbasis CBT serta tata tertib bagi peserta didik.",
    content: [
      "Diberitahukan kepada seluruh wali santri dan peserta didik kelas X, XI, dan XII MA Miftahul 'Ula mengenai agenda Penilaian Sumatif Akhir Tahun Pelajaran 2025/2026.",
      "Ujian akan dilaksanakan dengan sistem Computer-Based Test (CBT) di laboratorium komputer madrasah dan tes lisan membaca kitab kuning.",
      "Seluruh santri diharapkan mempersiapkan diri sebaik mungkin dan menyelesaikan seluruh penugasan akademik tepat waktu.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "fac-1",
    title: "Masjid Jami' Pesantren Miftahul 'Ula",
    category: "Ibadah",
    description: "Pusat kegiatan sholat berjamaah 5 waktu, dzikir bersama, sholat dhuha, halaqah tahfidz, dan pengajian umum masyarakat sekitar Kertosono.",
    capacity: "Kapasitas 1.200 Jamaah",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fac-2",
    title: "Laboratorium Komputer & CBT Center",
    category: "Akademik",
    description: "Ruang ber-AC dilengkapi 50 unit komputer modern dengan jaringan gigabit LAN & internet fiber optic untuk ujian CBT, riset, dan pemrograman santri.",
    capacity: "50 Unit Komputer Modern",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fac-3",
    title: "Laboratorium IPA & Sains Terpadu",
    category: "Akademik",
    description: "Fasilitas praktikum Fisika, Kimia, dan Biologi dengan mikroskop digital, alat peraga sains, bahan reagen lengkap, dan perlengkapan safety standar Kemenag.",
    capacity: "40 Siswa / Sesi Praktikum",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fac-4",
    title: "Asrama Santri Putra & Putri Representatif",
    category: "Asrama",
    description: "Kamar tidur santri yang bersih, tertata, dengan pengawasan pembina asrama 24 jam, fasilitas sanitasi higienis, dan lingkungan asri religius.",
    capacity: "Kapasitas 500+ Santri Mukim",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fac-5",
    title: "Perpustakaan Madrasah & Turots Kitab Kuning",
    category: "Penunjang",
    description: "Koleksi ribuan judul kitab kuning klasik, buku referensi pelajaran kurikulum nasional, ensiklopedia, jurnal ilmiah, dan area baca santai santri.",
    capacity: "5.000+ Judul Buku & Kitab",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fac-6",
    title: "Lapangan Olahraga Terpadu (Futsal, Voli, Silat)",
    category: "Olahraga",
    description: "Area outdoor multifungsi untuk senam pagi, pertandingan futsal santri, latihan bela diri Pagar Nusa, dan apel upacara bendera.",
    capacity: "Area Terbuka Hijau Luas",
    imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Upacara Peringatan Hari Santri Nasional",
    category: "Kegiatan",
    date: "22 Oktober 2025",
    caption: "Santri MA Miftahul 'Ula berbaris rapi dengan busana putih sarung dalam upacara bendera memperingati Hari Santri di lapangan madrasah.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-2",
    title: "Halaqah Pagi Setoran Hafalan Al-Qur'an",
    category: "Pesantren",
    date: "14 November 2025",
    caption: "Suasana syahdu santri melantunkan ayat-ayat suci Al-Qur'an secara talaqqi bersama Ustadz pembina tahfidz di serambi masjid.",
    imageUrl: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-3",
    title: "Praktikum Sains di Laboratorium Terpadu",
    category: "Akademik",
    date: "05 Desember 2025",
    caption: "Siswa peminatan MIPA melakukan pengamatan struktur sel mikrobiologi menggunakan mikroskop binokuler dengan antusias.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-4",
    title: "Grup Rebana Hadrah Miftahul Qulub",
    category: "Kegiatan",
    date: "12 Januari 2026",
    caption: "Latihan rutin grup banjari santri dalam rangka persiapan festival maulid nabi antar-pondok pesantren se-Jawa Timur.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-5",
    title: "Kajian Kitab Kuning Bersama Asatidz",
    category: "Pesantren",
    date: "20 Januari 2026",
    caption: "Santri dengan tekun mencatat makna gandul pegon Jawa pada lembaran kitab Fathul Qorib Al-Mujib.",
    imageUrl: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-6",
    title: "Penyerahan Trophy Juara Pencak Silat",
    category: "Prestasi",
    date: "10 Februari 2026",
    caption: "Kebanggaan delegasi santri pesilat Pagar Nusa MA Miftahul 'Ula membawa pulang piala kejuaraan tingkat Jawa Timur.",
    imageUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-7",
    title: "Suasana Perpustakaan & Sudut Baca Literasi",
    category: "Fasilitas",
    date: "18 Februari 2026",
    caption: "Santri memanfaatkan waktu istirahat untuk membaca buku ilmiah dan memperdalam wawasan di perpustakaan ber-AC.",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "gal-8",
    title: "Simulasi Asesmen Berbasis Komputer (CBT)",
    category: "Akademik",
    date: "02 Maret 2026",
    caption: "Pelaksanaan simulasi asesmen madrasah secara tertib di ruang laboratorium komputer yang modern dan berkecepatan tinggi.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
  },
];

export const FAQS = [
  {
    q: "Apakah siswa MA Miftahul 'Ula wajib bertempat tinggal di asrama (mondok)?",
    a: "MA Miftahul 'Ula menyediakan dua opsi: santri mukim (tinggal di asrama Pondok Pesantren Miftahul 'Ula) dan santri non-mukim (laju dari rumah). Namun bagi peserta program beasiswa tahfidz dan peminatan MAK sangat disarankan mukim agar pembinaan ibadah dan hafalan Al-Qur'an optimal.",
  },
  {
    q: "Bagaimana cara mendaftar secara online di website ini?",
    a: "Cukup klik tombol 'Daftar PPDB Online' di bagian atas halaman, isi formulir 3 langkah dengan identitas lengkap Anda, lalu unduh atau simpan Bukti Nomor Pendaftaran resmi. Panitia akan memverifikasi dan menghubungi Anda via WhatsApp.",
  },
  {
    q: "Apakah ada program beasiswa bagi calon siswa yang kurang mampu?",
    a: "Ya, kami memiliki Jalur Afirmasi bagi yatim/piatu serta dhuafa, serta Jalur Beasiswa Tahfidz bagi santri yang hafal minimal 3 juz Al-Qur'an mutqin berupa pembebasan SPP bulanan dan keringanan biaya DPP.",
  },
  {
    q: "Kurikulum apa yang digunakan di MA Miftahul 'Ula?",
    a: "Kami memadukan Kurikulum Merdeka Kemenag RI (dengan pilihan peminatan MIPA, IPS, dan Keagamaan MAK) serta Kurikulum Diniyah Kepesantrenan Salafiyah (kajian kitab kuning, tajwid, tahfidz, dan bahasa Arab/Inggris aktif).",
  },
  {
    q: "Dimana lokasi tepat madrasah ini dan bagaimana rutenya?",
    a: "Madrasah beralamat di Dusun Mentaos, Desa Nglawak, Kecamatan Kertosono, Kabupaten Nganjuk, Jawa Timur (Kode Pos 64351). Berjarak sekitar 7-10 menit dari Stasiun Kertosono dan Exit Tol Bandar Kedungmulyo / Kertosono.",
  },
];

export const DAILY_SCHEDULE = [
  { time: "04.00 - 05.00", activity: "Bangun Pagi, Qiyamul Lail & Sholat Shubuh Berjamaah" },
  { time: "05.00 - 06.30", activity: "Halaqah Tahfidz & Pengajian Kitab Kuning Pagi" },
  { time: "06.30 - 07.15", activity: "Makan Pagi, Mandi, & Persiapan Menuju Kelas Madrasah" },
  { time: "07.15 - 07.30", activity: "Apel Pagi, Sholat Dhuha Berjamaah & Doa Awal Belajar" },
  { time: "07.30 - 13.30", activity: "Kegiatan Belajar Mengajar (KBM) Kurikulum Formal & Sholat Dzuhur" },
  { time: "13.30 - 15.00", activity: "Istirahat Siang & Makan Siang Santri" },
  { time: "15.00 - 16.30", activity: "Sholat Ashar Berjamaah & Kegiatan Ekstrakurikuler / Olahraga" },
  { time: "16.30 - 17.30", activity: "Mandi Sore & Persiapan Mengaji Maghrib" },
  { time: "17.45 - 19.30", activity: "Sholat Maghrib, Wirid Ratib, & Kajian Kitab Turots" },
  { time: "19.30 - 20.30", activity: "Sholat Isya' Berjamaah & Makan Malam Santri" },
  { time: "20.30 - 21.45", activity: "Belajar Mandiri / Muthala'ah Pelajaran Madrasah" },
  { time: "22.00 - 04.00", activity: "Istirahat Tidur Malam di Asrama" },
];

export const TEACHERS_DATA: TeacherItem[] = [
  {
    id: "guru-1",
    name: "Drs. H. M. Zainuddin, M.Pd.I",
    role: "Kepala Madrasah & Pengampu Fiqih/Ushul Fiqih",
    category: "Pimpinan & Pengasuh",
    subject: "Fiqih, Ushul Fiqih & Kepemimpinan Islam",
    education: "S2 Magister Pendidikan Islam — UIN Maulana Malik Ibrahim",
    experience: "26 Tahun Pengabdian di MA Miftahul 'Ula",
    certifications: ["Pendidik Profesional Kemenag", "Asesor BAN-SM", "Pengurus Lembaga Pendidikan Ma'arif NU"],
    photoUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    bio: "Berkomitmen penuh mengawal mutu pendidikan madrasah yang unggul dalam integrasi ilmu agama dan sains modern dengan menjunjung tinggi adab dan akhlakul karimah.",
    schedule: "Senin - Kamis: 08.00 - 12.00 WIB",
  },
  {
    id: "guru-2",
    name: "K.H. Ahmad Shiddiq Al-Hafidz, Lc., M.Ag.",
    role: "Pengasuh Pondok & Pembina Tahfidz 30 Juz Bersanad",
    category: "Pimpinan & Pengasuh",
    subject: "Tahfidzul Qur'an, Ulumul Qur'an & Tafsir",
    education: "S1 Syari'ah Islamiyah Al-Azhar University Kairo & S2 UIN Sunan Ampel",
    experience: "19 Tahun Membina Santri & Huffadh",
    certifications: ["Sanad Al-Qur'an Riwayah Hafs 'an 'Ashim", "Dewan Hakim MTQ Tingkat Jawa Timur", "Penguji Mutqin Nasional"],
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Membimbing para santri menghafal kalamullah dengan kaidah tajwid mutqin, pemahaman makna mendalam, serta pengamalan nilai akhlak Qur'ani dalam bermasyarakat.",
    schedule: "Setiap Hari (Ba'da Shubuh & Ba'da Maghrib)",
  },
  {
    id: "guru-3",
    name: "Ustadzah Hj. Siti Munawwaroh, S.Ag., Al-Hafidzah",
    role: "Pengasuh Asrama Putri & Pembina Tahfidz Putri",
    category: "Guru Agama & Kitab Salaf",
    subject: "Tahfidz Putri, Tajwid Jazariyyah & Akhlak Lil Banat",
    education: "S1 Ilmu Al-Qur'an dan Tafsir — Institut Ilmu Al-Qur'an (IIQ) Jakarta",
    experience: "15 Tahun Pengabdian di Pesantren Putri",
    certifications: ["Sanad Tahfidz 30 Juz Muttashil", "Trainer Metode Menghafal Al-Qur'an Cepat", "Sertifikasi Pembina Tahfidz Kemenag"],
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Membina kepribadian santriwati yang santun, teguh menjaga kehormatan diri, mandiri, serta cinta terhadap mushaf dan sunnah Baginda Nabi SAW.",
    schedule: "Selasa, Kamis & Sabtu: 05.30 - 07.00 WIB",
  },
  {
    id: "guru-4",
    name: "Muhammad Ihsan Fauzi, M.Pd.",
    role: "Waka Kurikulum & Guru Matematika Peminatan",
    category: "Guru MIPA & Sains",
    subject: "Matematika Wajib & Peminatan MIPA",
    education: "S2 Pendidikan Matematika — Universitas Negeri Malang (UM)",
    experience: "11 Tahun Pengabdian",
    certifications: ["Guru Penggerak Angkatan 4", "Instruktur Kurikulum Merdeka Kemenag", "Juara Guru Inovatif Jatim 2024"],
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Menghadirkan pembelajaran matematika yang kontekstual, menyenangkan, dan logis, sehingga santri tidak lagi takut matematika melainkan terampil berpikir komputasional.",
    schedule: "Senin, Rabu, Jumat: 08.00 - 14.00 WIB",
  },
  {
    id: "guru-5",
    name: "Ustadz M. Fathur Rozi, S.Pd.I",
    role: "Waka Kesiswaan & Guru Bahasa Arab/Nahwu Sharaf",
    category: "Guru Agama & Kitab Salaf",
    subject: "Bahasa Arab, Nahwu (Jurumiyyah & Imrithi), Balaghah",
    education: "S1 Pendidikan Bahasa Arab UIN Sunan Ampel & Alumnus Ponpes Salafiyah",
    experience: "14 Tahun Pengabdian",
    certifications: ["Sertifikasi Guru Profesional", "Pembina Pramuka Kwarda Jatim", "Pelatih Debat Bahasa Arab Nasional"],
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Menanamkan kedisiplinan dan kepemimpinan santri melalui pembinaan karakter yang humanis, serta memudahkan pemahaman kaidah bahasa Arab melalui metode praktis.",
    schedule: "Senin - Sabtu: 07.30 - 15.00 WIB",
  },
  {
    id: "guru-6",
    name: "Dra. Titik Rahayu, M.Si.",
    role: "Guru Kimia & Pembina Olimpiade Sains Madrasah (KSM)",
    category: "Guru MIPA & Sains",
    subject: "Kimia & Praktikum Sains Terapan",
    education: "S2 Magister Kimia — Universitas Airlangga (UNAIR) Surabaya",
    experience: "22 Tahun Mengajar",
    certifications: ["Guru Kimia Tersertifikasi", "Pelatih Nasional KSM Bidang Kimia", "Kepala Laboratorium IPA Terakreditasi"],
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Menggugah rasa ingin tahu santri melalui eksperimen laboratorium nyata yang membuktikan kebesaran Allah SWT dalam ciptaan hukum-hukum alam semesta.",
    schedule: "Selasa, Kamis: 07.30 - 13.30 WIB",
  },
  {
    id: "guru-7",
    name: "Ir. Bambang Trihatmojo, S.Kom., M.T.",
    role: "Guru Informatika & Koordinator CBT Digital Madrasah",
    category: "Guru MIPA & Sains",
    subject: "Informatika, Pemrograman Web & Desain Grafis",
    education: "S2 Magister Teknik Informatika — Institut Teknologi Sepuluh Nopember (ITS)",
    experience: "9 Tahun Mengajar & Praktisi IT",
    certifications: ["Google Certified Educator Level 2", "MikroTik Certified Network Associate (MTCNA)", "Lead CBT Operator Kemenag"],
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Membekali santri madrasah dengan literasi digital yang kokoh, keahlian coding, dan etika berinternet demi menjawab tantangan era kecerdasan buatan.",
    schedule: "Senin, Selasa, Jumat: 08.00 - 13.00 WIB",
  },
  {
    id: "guru-8",
    name: "Dr. Hj. Nurul Hidayati, M.Pd.",
    role: "Guru Biologi & Pembina Riset Madrasah (MYRES)",
    category: "Guru MIPA & Sains",
    subject: "Biologi, Lingkungan Hidup & Metodologi Penelitian Santri",
    education: "S3 Pendidikan Sains — Universitas Negeri Surabaya (UNESA)",
    experience: "16 Tahun Pengabdian",
    certifications: ["Reviewer Jurnal Nasional SINTA", "Pembimbing Juara 1 MYRES Kemenag", "Asesor Karya Tulis Ilmiah"],
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Mendorong tradisi meneliti dan menulis ilmiah di kalangan santri dengan mengaitkan temuan sains modern dengan ayat-ayat kauniyah Al-Qur'an.",
    schedule: "Rabu & Kamis: 08.00 - 14.00 WIB",
  },
  {
    id: "guru-9",
    name: "Ustadz Ahmad Farid Ash-Shofiy, S.Hum.",
    role: "Pengampu Kajian Kitab Kuning Fathul Qorib & Fiqih Salaf",
    category: "Guru Agama & Kitab Salaf",
    subject: "Fiqih Syafi'iyyah, Fathul Qorib, Fathul Mu'in & Tarikh Islam",
    education: "S1 Sastra Arab UIN Maliki Malang & Alumnus Ponpes Al-Falah Ploso Kediri",
    experience: "13 Tahun Mengkaji & Mengajar Kitab Kuning",
    certifications: ["Syahadah Sanad Fiqih Madzhab Syafi'i", "Juara 1 Musabaqah Qira'atil Kutub (MQK) Jatim", "Dewan Bahtsul Masail"],
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Menjaga transmisi sanad keilmuan para ulama salafush sholih melalui metode sorogan dan bandongan klasik yang melatih ketelitian membaca teks gundul.",
    schedule: "Senin - Sabtu: Ba'da Isya' & Jam KBM Madrasah",
  },
  {
    id: "guru-10",
    name: "Fatimah Zahra, M.Ed.",
    role: "Guru Bahasa Inggris & Koordinator English Club / TOEFL Prep",
    category: "Guru Bahasa & Sosial",
    subject: "Bahasa Inggris Wajib, Public Speaking & Academic Writing",
    education: "Master of Education (TESOL) — Monash University Australia",
    experience: "8 Tahun Mengajar Bahasa Asing",
    certifications: ["TOEFL ITP Score 640+", "Trainer Cambridge English Curriculum", "Juri Lomba Pidato Bahasa Inggris"],
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Membuka jendela dunia bagi santri madrasah agar fasih berkomunikasi global, percaya diri berpidato internasional, dan berani bersaing meraih beasiswa luar negeri.",
    schedule: "Selasa, Rabu, Jumat: 08.00 - 13.00 WIB",
  },
  {
    id: "guru-11",
    name: "Ustadz Khoirul Anam, S.Sos.I",
    role: "Guru Sejarah Kebudayaan Islam & Pembina Kepanduan / PMR",
    category: "Guru Bahasa & Sosial",
    subject: "SKI, Sosiologi, & Pendidikan Kewarganegaraan",
    education: "S1 Komunikasi dan Penyiaran Islam — UIN Sunan Kalijaga Yogyakarta",
    experience: "10 Tahun Pengabdian",
    certifications: ["Pelatih Pramuka Mahir Tingkat Lanjutan (KML)", "Sertifikasi Guru Kemenag", "Instruktur Relawan PMI"],
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    bio: "Menginspirasi santri dengan teladan kepemimpinan para khalifah dan pahlawan Islam guna menumbuhkan jiwa nasionalisme berlandaskan nilai-nilai kebangsaan.",
    schedule: "Senin, Kamis, Sabtu: 07.30 - 14.30 WIB",
  },
  {
    id: "guru-12",
    name: "Drs. H. Mukhlisin, M.M.",
    role: "Kepala Tata Usaha & Urusan Sarana Prasarana",
    category: "Tenaga Kependidikan",
    subject: "Manajemen Administrasi Madrasah, Akreditasi & Layanan Santri",
    education: "S2 Magister Manajemen Pendidikan — Universitas Islam Kadiri",
    experience: "24 Tahun Pengabdian di MA Miftahul 'Ula",
    certifications: ["Sertifikasi Kepala Tenaga Administrasi Madrasah (KTAM)", "Sertifikasi Pengelolaan Aset Kemenag", "Petugas Layanan Informasi Publik"],
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Memastikan pelayanan administrasi santri, legalitas raport, ijazah, beasiswa, dan kenyamanan fasilitas belajar berjalan prima, tertib, cepat, dan transparan.",
    schedule: "Senin - Sabtu: 07.30 - 15.00 WIB",
  },
];

