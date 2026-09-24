import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCHOOL_INFO, PPDB_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  ArrowRight, 
  FileText, 
  MessageCircle, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenPpdbModal: () => void;
  onOpenBrochureModal: () => void;
}

const MOTTO_LIST = [
  "Pendidikan Islam Modern Berkarakter Pesantren Salaf",
  "Mencetak Generasi Qur'ani, Cerdas & Berakhlak Mulia",
  "Sinergi Kurikulum Merdeka & Pendalaman Kitab Kuning",
  "Program Unggulan Tahfidzul Qur'an 30 Juz Bersanad",
];

export const Hero: React.FC<HeroProps> = ({ onOpenPpdbModal, onOpenBrochureModal }) => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [mottoIndex, setMottoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMottoIndex((prev) => (prev + 1) % MOTTO_LIST.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const videos = [desktopVideoRef.current, mobileVideoRef.current];
    videos.forEach((video) => {
      if (video) {
        video.muted = true;
        video.loop = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  const handleEnded = () => {
    [desktopVideoRef.current, mobileVideoRef.current].forEach((video) => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    });
  };

  return (
    <section 
      id="beranda" 
      className="relative min-h-[92vh] lg:min-h-screen pt-20 sm:pt-32 md:pt-36 pb-12 sm:pb-20 md:pb-24 overflow-hidden flex flex-col justify-between text-white bg-gradient-to-b from-[#092244] via-[#0d3464] to-[#071c38] sm:bg-none"
    >
      {/* Latar Belakang Biru Artistik & Glow Menarik Khusus Mobile */}
      <div className="sm:hidden absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Glow Biru Muda Logo Atas Kiri */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#81CBFA]/25 rounded-full blur-3xl" />
        {/* Glow Biru Royal Kanan Tengah */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-[#1b8eed]/25 rounded-full blur-3xl" />
        {/* Glow Biru Tua Bawah */}
        <div className="absolute bottom-16 left-1/3 w-72 h-72 bg-[#0c4a85]/35 rounded-full blur-3xl" />
        {/* Pola Halus Titik Geometris Islami */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#81CBFA_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. BACKGROUND VIDIO (KHUSUS DESKTOP & TABLET - TIDAK DI TAMPILAN MOBILE)   */}
      {/* ========================================================================= */}
      <div className="hidden sm:block absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={desktopVideoRef}
          src={SCHOOL_INFO.videoUrlDesktop || SCHOOL_INFO.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
          className="w-full h-full object-cover object-center transition-all duration-300"
        />
      </div>

      {/* ========================================================================= */}
      {/* 2. TRANSISI HALUS MENYATU ANTARA SECTION 1 DAN SECTION 2                 */}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 overflow-hidden leading-none">
        <div className="h-24 sm:h-44 md:h-56 w-full bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/85 via-[#f8fafc]/40 to-transparent" />
        <div className="h-2 w-full bg-[#f8fafc]" />
      </div>

      {/* ========================================================================= */}
      {/* 3. TAMPILAN KHUSUS MOBILE: GRID 2 KOLOM (KIRI TEKS & KANAN VIDIO 9:16)     */}
      {/* ========================================================================= */}
      <div className="block sm:hidden px-4 relative z-20 my-auto w-full space-y-3.5 pt-1">
        
        {/* Basmalah & Status Ribbon di Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-start"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0c2f56]/90 border border-[#81CBFA]/50 text-white text-xs backdrop-blur-md shadow-lg shadow-[#06182e]/50">
            <SchoolLogo className="w-4 h-4 shrink-0 drop-shadow" />
            <span className="font-arabic text-xs text-amber-300 font-bold">بِسْمِ اللَّهِ</span>
            <span className="text-[#81CBFA]/50 font-bold">•</span>
            <span className="font-semibold text-white flex items-center gap-1 text-[10px]">
              <Sparkles className="w-2.5 h-2.5 text-[#81CBFA]" />
              <span className="text-[#81CBFA] font-bold">PPDB {PPDB_INFO.academicYear} Buka</span>
            </span>
          </div>
        </motion.div>

        {/* GRID UTAMA MOBILE: Sisi Kiri Teks Halaman 1, Sisi Kanan Vidio 9:16 */}
        <div className="grid grid-cols-12 gap-2.5 items-center">
          
          {/* Kolom Kiri: Teks Halaman 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-7 space-y-2 text-left pr-0.5"
          >
            {/* Animated Rotating Motto Text Transition */}
            <div className="h-7 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={mottoIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-[9.5px] font-extrabold uppercase tracking-wide text-amber-300 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                >
                  {MOTTO_LIST[mottoIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <h1 className="text-base xs:text-lg font-black tracking-tight text-white leading-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
              Madrasah Aliyah <br />
              <span className="text-[#81CBFA] drop-shadow-[0_2px_10px_rgba(129,203,250,0.5)]">Miftahul 'Ula</span>
            </h1>

            <p className="text-[9px] text-sky-100/90 font-medium leading-tight drop-shadow">
              Mentaos, Nglawak, Kertosono, Kab. Nganjuk — Jatim
            </p>

            {/* Deskripsi Singkat Visi & Kurikulum Beraksen Biru */}
            <div className="pt-0.5">
              <p className="text-[9.5px] xs:text-[10px] text-sky-100 font-normal leading-relaxed bg-[#0d315b]/85 p-2 xs:p-2.5 rounded-xl border border-[#81CBFA]/35 backdrop-blur-md shadow-lg shadow-[#06182e]/40">
                Memadukan <strong className="font-bold text-[#81CBFA]">Kurikulum Merdeka</strong>, pendalaman <strong className="font-bold text-amber-300">Kitab Kuning Salaf</strong>, dan program unggulan <strong className="font-bold text-[#81CBFA]">Tahfidzul Qur'an 30 Juz</strong> mencetak santri cerdas & berakhlak mulia.
              </p>
            </div>
          </motion.div>

          {/* Kolom Kanan: Grid Vidio 9:16 Tunggal dengan Border Biru Menarik */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
            className="col-span-5 pl-0.5 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -3.5, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="w-full aspect-[9/16] max-h-[360px] rounded-2xl overflow-hidden border-2 border-[#81CBFA] shadow-[0_8px_25px_rgba(12,43,80,0.85)] ring-2 ring-[#81CBFA]/35 bg-[#061a33] relative group"
            >
              <video
                ref={mobileVideoRef}
                src={SCHOOL_INFO.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onEnded={handleEnded}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay gradien biru malam di bagian bawah kartu video */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#061a33]/95 via-[#061a33]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 text-[8.5px] font-bold text-sky-100 bg-[#0c2f56]/90 px-2.5 py-0.5 rounded-full border border-[#81CBFA]/50 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#81CBFA] animate-pulse shadow-[0_0_8px_#81CBFA]" />
                  Santri Miftahul 'Ula
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Keunggulan Utama di Mobile Berbalut Biru Elegan */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-1.5 pt-1"
        >
          <div className="flex items-center gap-1 text-[10px] text-white bg-[#0e3562]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#81CBFA]/35 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-[#81CBFA] shrink-0" />
            <span className="font-semibold">Akreditasi A</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-white bg-[#0e3562]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#81CBFA]/35 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-amber-300 shrink-0" />
            <span className="font-semibold">Beasiswa Tahfidz</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-white bg-[#0e3562]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#81CBFA]/35 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-[#81CBFA] shrink-0" />
            <span className="font-semibold">Asrama Putra & Putri</span>
          </div>
        </motion.div>

        {/* Tiga Tombol Aksi di Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="pt-1 flex flex-col gap-2"
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onOpenPpdbModal}
            className="cursor-pointer bg-gradient-to-r from-[#81CBFA] via-[#3fa6f5] to-[#1276d4] hover:from-[#9dd7fc] hover:to-[#0f67ba] text-slate-950 font-black px-4 py-2.5 rounded-xl shadow-lg shadow-[#1276d4]/40 border border-white/50 transition-all flex items-center justify-center gap-2 text-xs"
          >
            <span>Daftar Siswa Baru (PPDB Online)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
          </motion.button>

          <div className="grid grid-cols-2 gap-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBrochureModal}
              className="cursor-pointer bg-[#0e3562]/90 hover:bg-[#14447d] text-white font-semibold px-2.5 py-2.5 rounded-xl border border-[#81CBFA]/40 backdrop-blur-md transition-all flex items-center justify-center gap-1.5 text-[11px] shadow-md shadow-[#06182e]/40"
            >
              <FileText className="w-3.5 h-3.5 text-[#81CBFA] shrink-0" />
              <span>Unduh Brosur</span>
            </motion.button>

            <motion.a
              whileTap={{ scale: 0.96 }}
              href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent('Assalamu’alaikum Wr. Wb. Panitia PPDB MA Miftahul Ula Kertosono, saya ingin berkonsultasi mengenai pendaftaran siswa baru.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0b3834]/90 hover:bg-[#0f4842] text-emerald-200 hover:text-white font-semibold px-2.5 py-2.5 rounded-xl border border-emerald-400/40 backdrop-blur-md transition-all flex items-center justify-center gap-1.5 text-[11px] shadow-md shadow-[#06182e]/40 text-center"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 5. TAMPILAN KHUSUS TABLET & DESKTOP (TIDAK BERUBAH - FULL LAYOUT WIDE)   */}
      {/* ========================================================================= */}
      <div className="hidden sm:block max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 my-auto text-left w-full space-y-6 pt-4">
        
        {/* Basmalah & Ribbon */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-start"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/70 border border-[#81CBFA]/40 text-white text-sm backdrop-blur-md shadow-2xl">
            <SchoolLogo className="w-6 h-6 shrink-0 drop-shadow" />
            <span className="font-arabic text-lg text-amber-300 drop-shadow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
            <span className="text-white/40 font-bold">•</span>
            <span className="font-semibold text-white flex items-center gap-1.5 drop-shadow text-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#81CBFA]" />
              PPDB {PPDB_INFO.academicYear} Telah Dibuka
            </span>
          </div>
        </motion.div>

        {/* Tagline & Title with Animated Rotating Motto */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-2.5 max-w-4xl text-left"
        >
          <div className="h-7 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={mottoIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="text-sm md:text-base font-extrabold uppercase tracking-widest text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
              >
                {MOTTO_LIST[mottoIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Madrasah Aliyah <br />
            <span className="text-[#81CBFA] drop-shadow-[0_4px_20px_rgba(129,203,250,0.5)]">
              Miftahul 'Ula Kertosono
            </span>
          </h1>
          <p className="text-base text-white/95 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Mentaos, Nglawak, Kertosono, Kab. Nganjuk — Jawa Timur
          </p>
        </motion.div>

        {/* Deskripsi */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="max-w-3xl text-left"
        >
          <p className="text-sm md:text-base text-white font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] bg-black/65 p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl">
            Memadukan <strong className="font-bold text-[#81CBFA]">Kurikulum Merdeka Kemenag</strong>, pendalaman 
            <strong className="font-bold text-amber-300"> Kitab Kuning Salaf</strong>, dan program unggulan <strong className="font-bold text-[#81CBFA]">Tahfidzul Qur'an 30 Juz</strong> untuk 
            mencetak generasi santri cerdas, mandiri, berakhlak mulia, dan siap bersaing di era global.
          </p>
        </motion.div>

        {/* Keunggulan */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-wrap items-center justify-start gap-3 pt-1"
        >
          <div className="flex items-center gap-2 text-sm text-white bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/25 shadow-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold drop-shadow">Terakreditasi A BAN-SM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/25 shadow-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold drop-shadow">Beasiswa Tahfidz Qur'an</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white bg-black/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/25 shadow-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold drop-shadow">Asrama Putra & Putri</span>
          </div>
        </motion.div>

        {/* Tombol Aksi */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="pt-2 flex items-center justify-start gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenPpdbModal}
            className="cursor-pointer bg-gradient-to-r from-[#81CBFA] via-[#3fa6f5] to-[#1276d4] hover:from-[#9dd7fc] hover:to-[#0f67ba] text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-2xl hover:shadow-[#81CBFA]/40 transition-all flex items-center justify-center gap-2 text-sm group"
          >
            <span>Daftar Siswa Baru (PPDB Online)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBrochureModal}
            className="cursor-pointer bg-black/70 hover:bg-black/85 text-white font-semibold px-5 py-3.5 rounded-xl border border-[#81CBFA]/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-sm shadow-xl"
          >
            <FileText className="w-4 h-4 text-[#81CBFA]" />
            <span>Unduh Brosur & Biaya</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent('Assalamu’alaikum Wr. Wb. Panitia PPDB MA Miftahul Ula Kertosono, saya ingin berkonsultasi mengenai pendaftaran siswa baru.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/70 hover:bg-black/85 text-white font-medium px-5 py-3.5 rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-sm shadow-xl text-center"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 inline-block" />
            <span>WhatsApp Panitia</span>
          </motion.a>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 6. STATISTIK & METRIK DI BAGIAN BAWAH SECTION 1                           */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-4 sm:mt-12 mb-1 sm:mb-4">
        <div className="pt-4 sm:pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left">
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#092244]/80 backdrop-blur-md border border-[#81CBFA]/30 shadow-xl"
          >
            <div className="text-base sm:text-2xl font-extrabold text-[#81CBFA] drop-shadow">Terakreditasi A</div>
            <div className="text-[10px] sm:text-xs text-sky-100/90 mt-0.5 sm:mt-1 font-medium">BAN-SM & Kemenag RI</div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#092244]/80 backdrop-blur-md border border-[#81CBFA]/30 shadow-xl"
          >
            <div className="text-base sm:text-2xl font-extrabold text-white drop-shadow">500+</div>
            <div className="text-[10px] sm:text-xs text-sky-100/90 mt-0.5 sm:mt-1 font-medium">Santri Mukim & Non-Mukim</div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#092244]/80 backdrop-blur-md border border-[#81CBFA]/30 shadow-xl"
          >
            <div className="text-base sm:text-2xl font-extrabold text-amber-300 drop-shadow">35+ Tahun</div>
            <div className="text-[10px] sm:text-xs text-sky-100/90 mt-0.5 sm:mt-1 font-medium">Berdiri Sejak 1988</div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -3 }}
            className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#092244]/80 backdrop-blur-md border border-[#81CBFA]/30 shadow-xl"
          >
            <div className="text-base sm:text-2xl font-extrabold text-white drop-shadow">100%</div>
            <div className="text-[10px] sm:text-xs text-sky-100/90 mt-0.5 sm:mt-1 font-medium">Alumni Lolos PTN & Pesantren</div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
