import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO, FACILITIES } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Target, 
  History, 
  Award, 
  Compass, 
  Layers,
  Sparkles,
  CheckCircle2,
  Quote,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Copy,
  Check,
  Lightbulb,
  Zap,
  ArrowRight,
  HeartHandshake,
  Flame,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Users
} from 'lucide-react';

interface VisionPillar {
  id: number;
  keyword: string;
  badgeLabel: string;
  icon: React.ElementType;
  glowColor: string;
  textColor: string;
  borderColor: string;
  bgActive: string;
  desc: string;
  practicalAction: string;
}

const VISION_PILLARS: VisionPillar[] = [
  {
    id: 1,
    keyword: "Unggul dalam Prestasi",
    badgeLabel: "Unggul Prestasi",
    icon: Award,
    glowColor: "from-amber-400 to-amber-500",
    textColor: "text-amber-300",
    borderColor: "border-amber-400/50",
    bgActive: "bg-amber-400/20 text-amber-200 border-amber-400/60 shadow-amber-400/20",
    desc: "Mencetak santri berprestasi gemilang pada Kompetisi Sains Madrasah (KSM), Riset Santri Nasional (MYRES), dan seleksi PTN/PTKIN.",
    practicalAction: "Bimbingan intensif olimpiade & kelas persiapan masuk kampus favorit."
  },
  {
    id: 2,
    keyword: "Teguh dalam Iman dan Taqwa",
    badgeLabel: "Iman & Taqwa",
    icon: Sparkles,
    glowColor: "from-emerald-400 to-teal-500",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-400/50",
    bgActive: "bg-emerald-400/20 text-emerald-200 border-emerald-400/60 shadow-emerald-400/20",
    desc: "Pembentukan karakter spiritual kokoh berhaluan Ahlussunnah wal Jama'ah an-Nahdliyyah, shalat berjamaah, dan tahfidz mutqin.",
    practicalAction: "Rutinitas shalat berjamaah tepat waktu, dhuha, tahajjud, dan adab santri."
  },
  {
    id: 3,
    keyword: "Tafaqquh Fiddin",
    badgeLabel: "Tafaqquh Fiddin",
    icon: BookOpen,
    glowColor: "from-sky-400 to-cyan-500",
    textColor: "text-sky-300",
    borderColor: "border-sky-400/50",
    bgActive: "bg-sky-400/20 text-sky-200 border-sky-400/60 shadow-sky-400/20",
    desc: "Kedalaman penguasaan gramatika bahasa Arab (Nahwu-Sharaf) dan literatur turots kitab kuning salaf bermadzhab Syafi'i.",
    practicalAction: "Kajian rutin sorogan, bandongan & bahtsul masail diniyah."
  },
  {
    id: 4,
    keyword: "Berdaya Saing Tinggi di Era Global",
    badgeLabel: "Daya Saing Global",
    icon: Zap,
    glowColor: "from-purple-400 to-indigo-500",
    textColor: "text-purple-300",
    borderColor: "border-purple-400/50",
    bgActive: "bg-purple-400/20 text-purple-200 border-purple-400/60 shadow-purple-400/20",
    desc: "Kecakapan dwibahasa aktif (Arab-Inggris), literasi komputasi digital, kepemimpinan modern, serta adaptif terhadap kemajuan zaman.",
    practicalAction: "Laboratorium CBT modern, English & Arabic Club, dan public speaking."
  }
];

interface PancaJiwaItem {
  num: number;
  title: string;
  arabic: string;
  tagline: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  glowBadge: string;
  bgActive: string;
}

const PANCA_JIWA_ITEMS: PancaJiwaItem[] = [
  {
    num: 1,
    title: "Keikhlasan",
    arabic: "Al-Ikhlas",
    tagline: "Niat Tulus Lillahi Ta'ala",
    desc: "Menuntut ilmu semata-mata karena Allah Ta'ala dan pengabdian bagi umat.",
    icon: Sparkles,
    color: "from-amber-400 to-amber-500",
    borderColor: "border-amber-400/60",
    glowBadge: "bg-amber-400 text-slate-950 shadow-amber-400/40",
    bgActive: "bg-gradient-to-r from-amber-950/50 via-sky-950/70 to-slate-900/90",
  },
  {
    num: 2,
    title: "Kesederhanaan",
    arabic: "Al-Basaathah",
    tagline: "Bersahaja & Penuh Syukur",
    desc: "Bersahaja, berjiwa besar, menjauhi sifat konsumtif, dan penuh rasa syukur.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-400/60",
    glowBadge: "bg-emerald-400 text-slate-950 shadow-emerald-400/40",
    bgActive: "bg-gradient-to-r from-emerald-950/50 via-sky-950/70 to-slate-900/90",
  },
  {
    num: 3,
    title: "Kemandirian",
    arabic: "Al-I'timad 'Alan Nafs",
    tagline: "Disiplin & Tangguh",
    desc: "Mampu mengatur diri, disiplin waktu ibadah, dan tangguh memecahkan masalah.",
    icon: Flame,
    color: "from-[#81CBFA] to-blue-500",
    borderColor: "border-[#81CBFA]/70",
    glowBadge: "bg-[#81CBFA] text-slate-950 shadow-sky-400/40",
    bgActive: "bg-gradient-to-r from-sky-950/80 via-sky-900/50 to-slate-900/90",
  },
  {
    num: 4,
    title: "Ukhuwah Islamiyah",
    arabic: "Al-Ukhuwwah",
    tagline: "Persaudaraan Kokoh",
    desc: "Tali persaudaraan santri yang kokoh, saling menghormati, dan tolong-menolong.",
    icon: HeartHandshake,
    color: "from-pink-400 to-rose-500",
    borderColor: "border-pink-400/60",
    glowBadge: "bg-pink-400 text-slate-950 shadow-pink-400/40",
    bgActive: "bg-gradient-to-r from-pink-950/50 via-sky-950/70 to-slate-900/90",
  },
  {
    num: 5,
    title: "Kebebasan Berpikir Positif",
    arabic: "Hurriyatut Tafkir",
    tagline: "Berwawasan Luas & Kritis",
    desc: "Berwawasan luas, terbuka terhadap ilmu pengetahuan modern, dan kritis berakhlak.",
    icon: Lightbulb,
    color: "from-purple-400 to-indigo-500",
    borderColor: "border-purple-400/60",
    glowBadge: "bg-purple-400 text-slate-950 shadow-purple-400/40",
    bgActive: "bg-gradient-to-r from-purple-950/50 via-sky-950/70 to-slate-900/90",
  },
];

export const ProfileSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<number | null>(null);
  const [copiedVision, setCopiedVision] = useState<boolean>(false);
  const [activeJiwa, setActiveJiwa] = useState<number>(0);
  const [isAutoPlayJiwa, setIsAutoPlayJiwa] = useState<boolean>(true);

  // Auto-cycle Panca Jiwa showcase on mobile/desktop
  useEffect(() => {
    if (!isAutoPlayJiwa) return;
    const interval = setInterval(() => {
      setActiveJiwa((prev) => (prev + 1) % PANCA_JIWA_ITEMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlayJiwa]);

  const handleCopyVision = () => {
    navigator.clipboard.writeText(SCHOOL_INFO.vision);
    setCopiedVision(true);
    setTimeout(() => setCopiedVision(false), 2000);
  };

  const activePillar = VISION_PILLARS.find((p) => p.id === activePillarId);

  return (
    <section id="profil" className="py-16 sm:py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100/90 px-3.5 py-1.5 rounded-full border border-sky-200">
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Mengenal Lembaga Kami</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Profil & Kelembagaan MA Miftahul 'Ula
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Berakar kuat pada tradisi keilmuan pesantren salaf Ahlussunnah wal Jama'ah an-Nahdliyyah 
              dan berkembang dinamis menjawab tuntutan ilmu pengetahuan modern di Kertosono, Nganjuk.
            </p>
          </div>
        </ScrollReveal>

        {/* GRID 1: Identitas & Legalitas Resmi Lembaga (6-Column Grid) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Identitas & Legalitas Madrasah</span>
              </h3>
              <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-md">
                Kementerian Agama RI
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Nama Lembaga</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{SCHOOL_INFO.fullName}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Status Madrasah</p>
                <p className="text-xs sm:text-sm font-bold text-sky-700 mt-1">{SCHOOL_INFO.status} (Swasta)</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Akreditasi</p>
                <p className="text-xs sm:text-sm font-bold text-amber-600 mt-1">{SCHOOL_INFO.accreditation}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Nomor Statistik (NSM)</p>
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-900 mt-1">{SCHOOL_INFO.nsm}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">NPSN Kemendikbud</p>
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-900 mt-1">{SCHOOL_INFO.npsn}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-sky-100 shadow-xs hover:border-sky-300 transition-colors">
                <p className="text-[11px] text-slate-400 font-semibold uppercase">Tahun Berdiri</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 mt-1">Tahun {SCHOOL_INFO.establishedYear}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID 2: Sejarah Perjalanan & Panca Jiwa Santri (2-Column Bento Grid) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left Bento: Sejarah Berdiri (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pengabdian Sejak Tahun 1988</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Mencetak Kader Ulama dan Cendekiawan Muslim dari Nglawak Kertosono
                </h3>
                
                <p className="text-justify leading-relaxed hyphens-auto">
                  Madrasah Aliyah (MA) Miftahul 'Ula berlokasi di Dusun Mentaos, Desa Nglawak, Kecamatan Kertosono, Kabupaten Nganjuk. 
                  Lembaga ini didirikan sebagai respon atas kebutuhan umat terhadap lembaga pendidikan tingkat menengah atas 
                  yang mampu mengintegrasikan kurikulum formal Kementerian Agama dengan kedalaman kajian kitab kuning khas pesantren salaf.
                </p>
                <p className="text-justify leading-relaxed hyphens-auto">
                  Bernaung di bawah <strong>Yayasan Pondok Pesantren Miftahul 'Ula</strong>, madrasah ini didirikan oleh para Masyayikh 
                  dan sesepuh ulama Kertosono dengan cita-cita mulia: mencetak generasi muslim yang teguh dalam aqidah, fasih membaca dan mengamalkan Al-Qur'an, 
                  santun dalam bermuamalah, serta berdaya saing dalam bidang sains empiris, teknologi informasi, dan bahasa asing.
                </p>
              </div>

              {/* Supporting Historical Photo Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="relative rounded-2xl overflow-hidden h-32 sm:h-40 border border-sky-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80" 
                    alt="Masjid Kampus Pesantren Miftahul Ula"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-semibold text-white bg-sky-950/80 px-2 py-0.5 rounded backdrop-blur-xs">
                    Masjid & Pesantren
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden h-32 sm:h-40 border border-sky-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                    alt="Aktivitas Belajar Santri Miftahul Ula"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] sm:text-xs font-semibold text-white bg-sky-950/80 px-2 py-0.5 rounded backdrop-blur-xs">
                    Pembelajaran Aktif
                  </span>
                </div>
              </div>
            </div>

            {/* Right Bento: Panca Jiwa Santri (5 Cols) with Mobile Animation & Interactive Controls */}
            <div className="lg:col-span-5 relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-950 to-slate-900 p-5 sm:p-7 rounded-3xl text-white shadow-2xl flex flex-col justify-between border border-sky-600/50">
              {/* Background Glow */}
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header & Karakter Santri Badge */}
                <div className="border-b border-sky-800/80 pb-3 mb-3.5">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-sky-900/90 px-3 py-1 rounded-lg border border-sky-700/80 shadow-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                      </span>
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>Karakter Santri</span>
                    </div>

                    {/* Auto-play status & toggle */}
                    <div className="flex items-center gap-1.5 text-[10px] text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-800">
                      <span className="hidden xs:inline">Rotasi Otomatis:</span>
                      <button
                        onClick={() => setIsAutoPlayJiwa(!isAutoPlayJiwa)}
                        className="cursor-pointer inline-flex items-center gap-1 text-sky-200 hover:text-white"
                        title={isAutoPlayJiwa ? 'Jeda rotasi otomatis' : 'Mulai rotasi otomatis'}
                      >
                        {isAutoPlayJiwa ? (
                          <>
                            <Pause className="w-2.5 h-2.5 text-amber-400" />
                            <span className="text-amber-300 font-semibold">Aktif</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-2.5 h-2.5 text-sky-300" />
                            <span>Jeda</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Panca Jiwa MA Miftahul 'Ula
                  </h4>
                  <p className="text-xs text-sky-200/80 mt-1">
                    Lima pilar etika dan pembentukan watak santri sehari-hari.
                  </p>

                  {/* Mobile Interactive Step Navigation Pills */}
                  <div className="mt-3 flex items-center justify-between gap-1.5 pt-2 border-t border-sky-800/40">
                    <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
                      {PANCA_JIWA_ITEMS.map((item, idx) => {
                        const isActive = activeJiwa === idx;
                        return (
                          <button
                            key={item.num}
                            onClick={() => {
                              setActiveJiwa(idx);
                              setIsAutoPlayJiwa(false);
                            }}
                            className={`cursor-pointer px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1 shrink-0 ${
                              isActive
                                ? 'bg-[#81CBFA] text-slate-950 shadow-md shadow-sky-400/30 scale-105'
                                : 'bg-sky-950/70 hover:bg-sky-900 text-sky-200 border border-sky-800/60'
                            }`}
                          >
                            <span>{item.num}</span>
                            {isActive && (
                              <span className="text-[10px] hidden sm:inline font-semibold">
                                {item.title}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Step Navigation Prev / Next Buttons */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          setActiveJiwa((prev) => (prev - 1 + PANCA_JIWA_ITEMS.length) % PANCA_JIWA_ITEMS.length);
                          setIsAutoPlayJiwa(false);
                        }}
                        className="cursor-pointer w-7 h-7 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-800 flex items-center justify-center text-sky-300 hover:text-white transition-colors"
                        title="Pilar sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setActiveJiwa((prev) => (prev + 1) % PANCA_JIWA_ITEMS.length);
                          setIsAutoPlayJiwa(false);
                        }}
                        className="cursor-pointer w-7 h-7 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-800 flex items-center justify-center text-sky-300 hover:text-white transition-colors"
                        title="Pilar selanjutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Animated Timer Progress Bar */}
                  {isAutoPlayJiwa && (
                    <div className="w-full bg-sky-950/80 h-1 rounded-full overflow-hidden mt-2">
                      <motion.div
                        key={activeJiwa}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.5, ease: 'linear' }}
                        className="h-full bg-gradient-to-r from-[#81CBFA] to-amber-300 rounded-full"
                      />
                    </div>
                  )}
                </div>

                {/* Mobile Featured Spotlight Card */}
                <div className="mb-3.5">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const current = PANCA_JIWA_ITEMS[activeJiwa];
                      const Icon = current.icon;
                      return (
                        <motion.div
                          key={current.num}
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.3 }}
                          className={`p-3.5 sm:p-4 rounded-2xl border ${current.borderColor} ${current.bgActive} shadow-lg backdrop-blur-sm relative overflow-hidden`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              <span className={`w-7 h-7 rounded-xl ${current.glowBadge} font-extrabold flex items-center justify-center text-xs shadow-md shrink-0`}>
                                {current.num}
                              </span>
                              <div>
                                <h5 className="font-extrabold text-white text-sm sm:text-base leading-snug flex items-center gap-1.5 flex-wrap">
                                  <span>{current.title}</span>
                                  <span className="text-xs text-amber-300 font-serif font-normal">
                                    ({current.arabic})
                                  </span>
                                </h5>
                                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-200">
                                  {current.tagline}
                                </span>
                              </div>
                            </div>

                            <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                              <Icon className="w-4 h-4 text-sky-200" />
                            </div>
                          </div>

                          <p className="mt-2 text-xs sm:text-sm text-sky-50 leading-relaxed text-justify hyphens-auto font-medium">
                            {current.desc}
                          </p>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>

                {/* Interactive Compact List of all 5 Panca Jiwa */}
                <div className="space-y-2 text-xs">
                  {PANCA_JIWA_ITEMS.map((item, idx) => {
                    const isActive = activeJiwa === idx;
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.num}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setActiveJiwa(idx);
                          setIsAutoPlayJiwa(false);
                        }}
                        className={`cursor-pointer p-2 sm:p-2.5 rounded-xl border transition-all duration-200 flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-sky-950/80 border-[#81CBFA]/70 shadow-md ring-1 ring-[#81CBFA]/40'
                            : 'bg-sky-950/40 hover:bg-sky-950/70 border-sky-800/50 text-slate-300 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md font-bold flex items-center justify-center shrink-0 text-[11px] mt-0.5 transition-colors ${
                            isActive
                              ? `${item.glowBadge}`
                              : 'bg-sky-900 text-sky-200'
                          }`}
                        >
                          {item.num}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <strong className={`block text-xs truncate ${isActive ? 'text-white font-bold' : 'text-slate-200'}`}>
                              {item.title} <span className="text-[11px] font-normal text-sky-300">({item.arabic})</span>
                            </strong>
                            {isActive && (
                              <Icon className="w-3 h-3 text-[#81CBFA] shrink-0" />
                            )}
                          </div>
                          {!isActive && (
                            <p className="text-sky-200/70 text-[11px] truncate mt-0.5">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Motto Footer */}
              <div className="pt-3.5 mt-3 border-t border-sky-800/80 flex items-center justify-between text-xs text-sky-300 relative z-10 flex-wrap gap-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span>Motto: <strong className="text-white">{SCHOOL_INFO.motto}</strong></span>
                </span>
                <span className="text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                  Nglawak Kertosono
                </span>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* GRID 2.5: Lambang Resmi & Makna Filosofis (Bento Grid) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-gradient-to-r from-sky-900 via-sky-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-sky-700/60 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Logo Display Left */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-sky-400/20 backdrop-blur-xs">
                <SchoolLogo className="w-36 h-36 sm:w-44 sm:h-44 drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
                <div className="mt-4 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300 bg-sky-900/80 px-3 py-1 rounded-full border border-sky-600/40">
                    Emblem Resmi
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-white mt-2">
                    Madrasah Aliyah Miftahul 'Ula
                  </h4>
                  <p className="text-xs text-sky-200">
                    Singkatan Almamater: <strong className="text-amber-300">MAM</strong>
                  </p>
                </div>
              </div>

              {/* Philosophy Explanation Right */}
              <div className="lg:col-span-8 space-y-4">
                <div className="border-b border-sky-800/80 pb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Filosofi & Makna Simbolik Lambang</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Makna Elemen Logo MA Miftahul 'Ula
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-200/80">
                    Setiap guratan bentuk dan warna pada lambang madrasah mencerminkan visi luhur pendidikan Islam terpadu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-sky-950/60 p-3 rounded-xl border border-sky-800/70 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-sky-300">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      <span>Perisai Segi Lima Berwarna Biru</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Melambangkan rukun Islam, ideologi Pancasila, ketenangan jiwa santri, dan keikhlasan dalam berilmu.
                    </p>
                  </div>

                  <div className="bg-sky-950/60 p-3 rounded-xl border border-sky-800/70 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-sky-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>Menara & Bulan Sabit</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Menjulang tinggi melambangkan cita-cita luhur tauhid dan ketaatan ibadah menuju ridha Allah SWT.
                    </p>
                  </div>

                  <div className="bg-sky-950/60 p-3 rounded-xl border border-sky-800/70 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-sky-300">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      <span>Kubah Putih & Kitab Terbuka</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Naungan Ahlussunnah wal Jama'ah serta Al-Qur'an dan Kitab Kuning salaf sebagai sumber rujukan kehidupan.
                    </p>
                  </div>

                  <div className="bg-sky-950/60 p-3 rounded-xl border border-sky-800/70 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-sky-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>Bola Dunia & Tatakan Emas "MAM"</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                      Wawasan global berdaya saing internasional dengan landasan adab mulia dan kebanggaan keluarga besar almamater MAM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID 3: Sambutan Kepala Madrasah (Executive Feature Grid Card) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-sky-100">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Foto Kepala Madrasah */}
              <div className="md:col-span-4 text-center">
                <div className="relative mx-auto w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-md bg-sky-100 border-4 border-sky-100">
                  <img
                    src={SCHOOL_INFO.headmaster.photoUrl}
                    alt={SCHOOL_INFO.headmaster.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-center text-white">
                    <span className="text-[11px] font-semibold bg-sky-900/90 px-2.5 py-0.5 rounded">
                      Kepala Madrasah
                    </span>
                  </div>
                </div>
                <h4 className="mt-4 font-bold text-slate-900 text-sm sm:text-base">
                  {SCHOOL_INFO.headmaster.name}
                </h4>
                <p className="text-xs text-sky-700 font-medium">{SCHOOL_INFO.headmaster.title}</p>
              </div>

              {/* Pesan Sambutan */}
              <div className="md:col-span-8 space-y-4 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
                <div className="font-arabic text-xl sm:text-2xl text-sky-900 font-semibold tracking-wide">
                  السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ
                </div>
                <p className="text-justify leading-relaxed hyphens-auto italic text-slate-700 border-l-4 border-sky-500 pl-4 py-1.5 font-serif text-sm sm:text-base bg-sky-50/50 rounded-r-xl">
                  "{SCHOOL_INFO.headmaster.speech}"
                </p>
                <p className="text-justify leading-relaxed hyphens-auto">
                  Pendidikan di era kini menuntut perpaduan yang seimbang antara <em>moral competence</em> (akhlak terpuji) 
                  dan <em>intellectual competence</em> (kecerdasan akal). Kami di MA Miftahul 'Ula berkomitmen penuh menyediakan 
                  ekosistem pendidikan yang kondusif, di mana santri dibimbing oleh guru dan ustadz yang kompeten, bersanad keilmuan jelas, 
                  serta penuh ketulusan mendampingi tumbuh kembang santri.
                </p>
                <p className="text-justify leading-relaxed hyphens-auto">
                  Kami menyambut gembira seluruh calon peserta didik dan para orang tua/wali santri yang mempercayakan amanah pendidikan 
                  putra-putrinya di madrasah kami. Mari bersama mencetak generasi emas pejuang Islam dan pembangun bangsa.
                </p>
                <div className="pt-2 font-semibold text-slate-900 text-sm sm:text-base">
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* GRID 4: Visi & 5 Pilar Misi Strategis (Split Bento Grid with Interactive Vision Effects) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div id="visi-misi" className="relative overflow-hidden bg-gradient-to-br from-[#071f3b] via-[#0c2f56] to-[#041224] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-sky-500/30">
            {/* Ambient Animated Glowing Radial Flares */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Visi Column (6 Cols) */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Header Badge with Live Pinging Beacon Effect */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#81CBFA] bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-400/40 shadow-sm backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#81CBFA] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#81CBFA]"></span>
                    </span>
                    <Target className="w-3.5 h-3.5 text-[#81CBFA]" />
                    <span>Visi Utama Madrasah</span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopyVision}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-[11px] font-semibold text-sky-200/80 hover:text-white bg-sky-900/60 hover:bg-sky-800/80 px-2.5 py-1 rounded-lg border border-sky-700/60 transition-all"
                    title="Salin teks visi madrasah"
                  >
                    {copiedVision ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-sky-300" />
                        <span>Salin Visi</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Main Heading with Radiant Gradient Accent */}
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
                    Mewujudkan Insan Kamil <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81CBFA] via-sky-200 to-amber-300">Berilmu, Beriman,</span> & Berdaya Saing
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-[#81CBFA] via-sky-400 to-amber-400 rounded-full mt-2.5" />
                </div>

                {/* Interactive Glassmorphism Vision Quotation Box with Live Word Highlighter */}
                <div className={`relative p-5 sm:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                  activePillarId 
                    ? 'bg-sky-950/80 border-[#81CBFA]/60 shadow-[0_0_25px_rgba(129,203,250,0.25)]' 
                    : 'bg-sky-950/60 border-sky-700/60 shadow-lg'
                }`}>
                  {/* Decorative Watermark Quote */}
                  <Quote className="absolute top-3 right-3 w-12 h-12 text-sky-400/10 -rotate-12 pointer-events-none" />

                  <p className="text-sm sm:text-base font-serif italic text-sky-100 leading-relaxed relative z-10">
                    "Terwujudnya Lulusan Madrasah yang{' '}
                    <span 
                      onClick={() => setActivePillarId(activePillarId === 1 ? null : 1)}
                      className={`cursor-pointer transition-all duration-200 rounded px-1.5 py-0.5 font-sans font-semibold inline-block my-0.5 ${
                        activePillarId === 1
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/50 scale-105 not-italic'
                          : 'hover:bg-amber-400/20 hover:text-amber-200 border-b border-dashed border-amber-400/60'
                      }`}
                    >
                      Unggul dalam Prestasi
                    </span>
                    ,{' '}
                    <span 
                      onClick={() => setActivePillarId(activePillarId === 2 ? null : 2)}
                      className={`cursor-pointer transition-all duration-200 rounded px-1.5 py-0.5 font-sans font-semibold inline-block my-0.5 ${
                        activePillarId === 2
                          ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-400/50 scale-105 not-italic'
                          : 'hover:bg-emerald-400/20 hover:text-emerald-200 border-b border-dashed border-emerald-400/60'
                      }`}
                    >
                      Teguh dalam Iman dan Taqwa
                    </span>
                    , Berakhlakul Karimah,{' '}
                    <span 
                      onClick={() => setActivePillarId(activePillarId === 3 ? null : 3)}
                      className={`cursor-pointer transition-all duration-200 rounded px-1.5 py-0.5 font-sans font-semibold inline-block my-0.5 ${
                        activePillarId === 3
                          ? 'bg-[#81CBFA] text-slate-950 shadow-md shadow-sky-400/50 scale-105 not-italic'
                          : 'hover:bg-sky-400/20 hover:text-sky-200 border-b border-dashed border-sky-400/60'
                      }`}
                    >
                      Tafaqquh Fiddin
                    </span>
                    , serta{' '}
                    <span 
                      onClick={() => setActivePillarId(activePillarId === 4 ? null : 4)}
                      className={`cursor-pointer transition-all duration-200 rounded px-1.5 py-0.5 font-sans font-semibold inline-block my-0.5 ${
                        activePillarId === 4
                          ? 'bg-purple-400 text-slate-950 shadow-md shadow-purple-400/50 scale-105 not-italic'
                          : 'hover:bg-purple-400/20 hover:text-purple-200 border-b border-dashed border-purple-400/60'
                      }`}
                    >
                      Berdaya Saing Tinggi di Era Global
                    </span>
                    ."
                  </p>
                </div>

                {/* 4 Interactive Vision Pillar Chips */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[11px] text-sky-200/90 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>Sentuh salah satu pilar untuk mengeksplorasi maknanya:</span>
                    </span>
                    {activePillarId && (
                      <button
                        onClick={() => setActivePillarId(null)}
                        className="text-[10px] text-sky-300 hover:text-white underline cursor-pointer"
                      >
                        Tutup Sorotan
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {VISION_PILLARS.map((pillar) => {
                      const Icon = pillar.icon;
                      const isSelected = activePillarId === pillar.id;
                      return (
                        <button
                          key={pillar.id}
                          onClick={() => setActivePillarId(isSelected ? null : pillar.id)}
                          className={`cursor-pointer p-2.5 rounded-xl border text-left transition-all duration-200 relative overflow-hidden group ${
                            isSelected
                              ? `${pillar.bgActive} ring-2 ring-[#81CBFA]/40 shadow-lg scale-[1.02]`
                              : 'bg-sky-950/50 hover:bg-sky-950/80 border-sky-800/60 text-slate-300 hover:border-sky-500/60'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-white/20 text-white' : 'bg-sky-900/60 text-sky-300'
                            }`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="font-bold text-xs leading-tight truncate">
                              {pillar.badgeLabel}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animated Dropdown Panel for Active Vision Pillar */}
                <AnimatePresence mode="wait">
                  {activePillar && (
                    <motion.div
                      key={activePillar.id}
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-sky-950/90 rounded-2xl p-4 border border-[#81CBFA]/40 space-y-2 backdrop-blur-md shadow-xl overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <activePillar.icon className={`w-4 h-4 ${activePillar.textColor}`} />
                          <h4 className={`text-xs font-bold ${activePillar.textColor}`}>
                            Pilar {activePillar.id}: {activePillar.keyword}
                          </h4>
                        </div>
                        <span className="text-[10px] text-sky-300 bg-sky-900 px-2 py-0.5 rounded-full border border-sky-700">
                          Makna Filosofis
                        </span>
                      </div>
                      <p className="text-xs text-sky-100 leading-relaxed">
                        {activePillar.desc}
                      </p>
                      <div className="pt-2 border-t border-sky-800/60 flex items-start gap-2 text-[11px] text-amber-200">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span>
                          <strong>Wujud Nyata:</strong> {activePillar.practicalAction}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Accreditation & Quality Status */}
                <div className="flex items-center justify-between pt-2 border-t border-sky-800/60 text-xs text-sky-200">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
                    <span>Status Mutu: <strong className="text-white">Terakreditasi A BAN-SM (Unggul)</strong></span>
                  </div>
                  <span className="text-[10px] text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    Nilai 94 (A)
                  </span>
                </div>

              </div>

              {/* 5 Pilar Misi Column (6 Cols) */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-200 bg-sky-950/70 px-3 py-1 rounded-full border border-sky-600/50">
                  <Compass className="w-3.5 h-3.5 text-sky-400" />
                  <span>5 Pilar Misi Strategis</span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Rencana Tindak Nyata Pendidikan Berkelanjutan
                  </h3>
                  <p className="text-xs text-sky-200/80 mt-1">
                    Langkah operasional mewujudkan insan santri yang berakhlak mulia dan berwawasan masa depan.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {SCHOOL_INFO.missions.map((mission, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-start gap-3 bg-sky-950/40 p-3 sm:p-3.5 rounded-xl border border-sky-800/50 hover:bg-sky-950/80 hover:border-[#81CBFA]/50 transition-all duration-200"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#81CBFA] text-slate-950 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-sky-50 leading-relaxed group-hover:text-white transition-colors">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Additional Mission Guarantee Footer */}
                <div className="p-3 bg-sky-950/30 rounded-xl border border-sky-800/40 flex items-center justify-between text-[11px] text-sky-300">
                  <span>Pedoman Rencana Induk Pengembangan Madrasah (RIPM)</span>
                  <span className="font-semibold text-amber-300">2024 - 2029</span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* GRID 5: Sarana & Fasilitas Kampus Terpadu (2-Column Compact Grid Kanan-Kiri) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                  <Layers className="w-3.5 h-3.5 text-sky-600" />
                  <span>Infrastruktur Pembelajaran</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Sarana & Prasarana Kampus Terpadu
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                Mendukung kenyamanan ibadah, riset sains, pendalaman kitab salaf, serta aktivitas asrama santri secara terpadu.
              </p>
            </div>

            {/* 2-Column Grid Kanan-Kiri on Mobile & Desktop */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6">
              {FACILITIES.map((fac) => (
                <div 
                  key={fac.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative h-28 xs:h-32 sm:h-40 md:h-48 w-full overflow-hidden bg-sky-100">
                      <img 
                        src={fac.imageUrl} 
                        alt={fac.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-sky-950/85 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded sm:rounded-md border border-sky-700/50 shadow-xs">
                        {fac.category}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-2.5 sm:p-4 md:p-5 space-y-1.5 sm:space-y-2">
                      <h4 className="font-bold text-slate-900 group-hover:text-sky-700 transition-colors text-xs sm:text-sm md:text-base leading-snug line-clamp-2">
                        {fac.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto line-clamp-3 sm:line-clamp-none">
                        {fac.description}
                      </p>
                    </div>
                  </div>

                  {/* Capacity Footer */}
                  <div className="p-2.5 sm:p-4 md:p-5 pt-0 sm:pt-0 md:pt-0">
                    <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[10px] sm:text-xs">
                      <span className="text-slate-500 text-[10px] sm:text-[11px] flex items-center gap-1 font-medium">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0" />
                        <span className="hidden xs:inline">Kapasitas:</span>
                      </span>
                      <span className="text-sky-800 font-bold text-[10px] sm:text-xs bg-sky-50 px-1.5 sm:px-2 py-0.5 rounded border border-sky-200/60 truncate">
                        {fac.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
