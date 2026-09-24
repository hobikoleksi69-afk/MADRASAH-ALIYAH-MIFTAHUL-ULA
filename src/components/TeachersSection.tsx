import React, { useState, useMemo } from 'react';
import { TEACHERS_DATA, TeacherItem, SCHOOL_INFO } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Search, 
  Award, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  X, 
  Sparkles, 
  HeartHandshake, 
  MessageCircle,
  ShieldCheck,
  Briefcase,
  Layers
} from 'lucide-react';

const CATEGORIES = [
  'Semua Pengajar',
  'Pimpinan & Pengasuh',
  'Guru Agama & Kitab Salaf',
  'Guru MIPA & Sains',
  'Guru Bahasa & Sosial',
  'Tenaga Kependidikan'
] as const;

export const TeachersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Pengajar');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTeacher, setActiveTeacher] = useState<TeacherItem | null>(null);

  // Filtered teachers list based on category & search
  const filteredTeachers = useMemo(() => {
    return TEACHERS_DATA.filter((teacher) => {
      const matchCategory = 
        selectedCategory === 'Semua Pengajar' || teacher.category === selectedCategory;
      const matchSearch = 
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="guru" className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-sky-100">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100/90 px-3.5 py-1.5 rounded-full border border-sky-200">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>Cendekiawan & Pendidik Berkarakter</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Profil Dewan Guru & Tenaga Pendidik
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-center hyphens-auto">
              Dibimbing langsung oleh para asatidz, ulama bersanad, sarjana dan magister lulusan perguruan tinggi terkemuka, 
              serta praktisi berpengalaman yang mendidik santri dengan keikhlasan hati dan teladan mulia.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlight Metrics Cards */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-gradient-to-br from-[#0c2f56] to-[#06182e] p-4 sm:p-5 rounded-2xl text-white shadow-lg border border-sky-600/30 flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-[#81CBFA]">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-[#81CBFA]">45+</div>
                <div className="text-[11px] sm:text-xs text-slate-200 font-medium">Guru & Asatidz Pengampu</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0c2f56] to-[#06182e] p-4 sm:p-5 rounded-2xl text-white shadow-lg border border-sky-600/30 flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-amber-300">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-amber-300">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-200 font-medium">Lulusan S1 & S2 Terakreditasi</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0c2f56] to-[#06182e] p-4 sm:p-5 rounded-2xl text-white shadow-lg border border-sky-600/30 flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-emerald-400">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-emerald-400">12+</div>
                <div className="text-[11px] sm:text-xs text-slate-200 font-medium">Hafidz 30 Juz Bersanad</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0c2f56] to-[#06182e] p-4 sm:p-5 rounded-2xl text-white shadow-lg border border-sky-600/30 flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0 text-sky-300">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-sky-200">88%+</div>
                <div className="text-[11px] sm:text-xs text-slate-200 font-medium">Sertifikasi Pendidik Kemenag</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs and Real-time Search Box */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Horizontal Filter Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#0c2f56] text-white shadow-md shadow-sky-950/20 border border-[#81CBFA]/40'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/80'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama guru atau mapel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500 text-slate-800 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Teachers Cards Grid */}
        {filteredTeachers.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-700 font-bold text-base">Tidak ada data pendidik yang cocok</p>
            <p className="text-slate-500 text-xs mt-1">Silakan coba kata kunci pencarian atau kategori lain.</p>
            <button
              onClick={() => {
                setSelectedCategory('Semua Pengajar');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 text-xs bg-sky-700 hover:bg-sky-800 text-white rounded-lg font-medium cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {filteredTeachers.map((teacher) => (
              <motion.div
                key={teacher.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl border border-sky-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#81CBFA]"
              >
                {/* Image and Badges */}
                <div>
                  <div className="relative h-36 xs:h-44 sm:h-52 md:h-60 overflow-hidden bg-slate-900">
                    <img
                      src={teacher.photoUrl}
                      alt={teacher.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    
                    {/* Category Ribbon */}
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3">
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-sky-900/90 text-[#81CBFA] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-full border border-sky-400/30 backdrop-blur-xs shadow-xs">
                        {teacher.category}
                      </span>
                    </div>

                    {/* Teacher Experience */}
                    <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-white text-[9px] sm:text-[11px]">
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
                        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {teacher.experience}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-2.5 sm:p-4 md:p-5 space-y-1.5 sm:space-y-3">
                    <div>
                      <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-snug group-hover:text-sky-800 transition-colors line-clamp-2">
                        {teacher.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-sky-700 font-semibold mt-0.5 sm:mt-1 line-clamp-1">
                        {teacher.role}
                      </p>
                    </div>

                    <div className="pt-1.5 sm:pt-2 border-t border-slate-100 space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-slate-600">
                      <div className="flex items-start gap-1 sm:gap-1.5">
                        <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 sm:line-clamp-2">{teacher.subject}</span>
                      </div>
                      <div className="flex items-start gap-1 sm:gap-1.5">
                        <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-[9px] sm:text-[11px] text-slate-500 line-clamp-1">{teacher.education}</span>
                      </div>
                    </div>

                    {/* Certifications preview tags */}
                    <div className="flex flex-wrap gap-1 pt-0.5 sm:pt-1">
                      {teacher.certifications.slice(0, 2).map((cert, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200/60 font-medium truncate max-w-full"
                        >
                          {cert}
                        </span>
                      ))}
                      {teacher.certifications.length > 2 && (
                        <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                          +{teacher.certifications.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-2.5 sm:p-4 md:p-5 pt-0 sm:pt-0 md:pt-0">
                  <button
                    onClick={() => setActiveTeacher(teacher)}
                    className="w-full cursor-pointer py-1.5 sm:py-2 px-1.5 sm:px-3 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-[#0c2f56] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0c2f56] text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 group-hover:bg-[#0c2f56] group-hover:text-white group-hover:border-[#0c2f56]"
                  >
                    <span className="truncate">Profil & Jadwal</span>
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Panca Keteladanan Pendidik Banner (Islamic Bento Card) */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-gradient-to-r from-[#0c2f56] via-[#092244] to-[#06182e] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-sky-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-600/40">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Kode Etik & Khidmah</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  Panca Karakter Pendidik MA Miftahul 'Ula
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify sm:text-left hyphens-auto">
                  Meneladani sunnah Rasulullah SAW dan masyayikh salafus sholih, mendidik dengan sentuhan hati, ilmu yang mendalam, serta keteladanan akhlak.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                <div className="bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>1. Al-Ikhlas</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug text-justify hyphens-auto">Niat tulus mendidik tunas bangsa semata karena Allah SWT.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>2. Uswah Hasanah</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug text-justify hyphens-auto">Menjadi teladan nyata dalam ibadah, disiplin, tutur kata & adab.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>3. Mahabbah</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug text-justify hyphens-auto">Mencintai para santri layaknya anak kandung dengan kasih sayang.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>4. Al-Kafa'ah</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug text-justify hyphens-auto">Penguasaan materi ilmu yang kokoh, mutqin, dan adaptif teknologi.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-white/10 space-y-1">
                  <div className="text-amber-300 font-bold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>5. Ash-Shabr</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 leading-snug text-justify hyphens-auto">Kesabaran tanpa batas dalam membimbing watak & potensi tiap santri.</p>
                </div>

                <div className="bg-sky-500/20 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-[#81CBFA]/40 space-y-1 flex flex-col justify-center items-start">
                  <div className="text-[#81CBFA] font-bold text-xs">Konsultasi Wali Santri</div>
                  <p className="text-[10px] text-sky-100 leading-snug">Jadwal tatap muka terbuka dengan guru & pengasuh.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Modal Detail Guru & Tenaga Pendidik */}
      <AnimatePresence>
        {activeTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-sky-200 relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveTeacher(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Banner with Teacher Photo */}
              <div className="relative h-56 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src={activeTeacher.photoUrl}
                  alt={activeTeacher.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-600/90 text-white px-2.5 py-0.5 rounded-full border border-sky-300/40">
                    {activeTeacher.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white drop-shadow">
                    {activeTeacher.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-300 font-semibold drop-shadow">
                    {activeTeacher.role}
                  </p>
                </div>
              </div>

              {/* Modal Body Info */}
              <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
                {/* Bio / Kutipan */}
                <div className="bg-sky-50/70 p-4 rounded-2xl border border-sky-100 text-xs sm:text-sm text-slate-700 italic font-serif leading-relaxed text-justify hyphens-auto">
                  "{activeTeacher.bio}"
                </div>

                {/* Grid Informasi Detail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-sky-700" />
                      <span>Riwayat Pendidikan</span>
                    </div>
                    <p className="font-bold text-slate-900">{activeTeacher.education}</p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-amber-700" />
                      <span>Masa Pengabdian</span>
                    </div>
                    <p className="font-bold text-slate-900">{activeTeacher.experience}</p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Bidang Studi / Mata Pelajaran</span>
                    </div>
                    <p className="font-bold text-slate-900">{activeTeacher.subject}</p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-700" />
                      <span>Jadwal Tatap Muka / Halaqah</span>
                    </div>
                    <p className="font-bold text-slate-900">{activeTeacher.schedule || 'Senin - Sabtu Jam Kerja Madrasah'}</p>
                  </div>
                </div>

                {/* Sertifikasi & Keahlian */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-sky-600" />
                    <span>Sertifikasi Kompetensi & Sanad Keilmuan</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeTeacher.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 text-xs font-semibold"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 text-center sm:text-left">
                  Ingin berkonsultasi mengenai perkembangan santri dengan guru ini?
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Assalamu’alaikum Wr. Wb. Panitia / Humas MA Miftahul Ula Kertosono, saya ingin berkonsultasi mengenai pembelajaran bersama ${activeTeacher.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Hubungi via Humas</span>
                  </a>
                  <button
                    onClick={() => setActiveTeacher(null)}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
