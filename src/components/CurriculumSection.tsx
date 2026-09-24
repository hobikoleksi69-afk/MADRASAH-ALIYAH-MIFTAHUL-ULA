import React from 'react';
import { CURRICULUM_DATA, DAILY_SCHEDULE } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Clock, 
  GraduationCap,
  Globe2,
  Atom,
  BookMarked
} from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  return (
    <section id="kurikulum" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>Integrasi Ilmu Umum & Agama</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kurikulum Terpadu & Program Unggulan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Menyelaraskan <strong>Kurikulum Merdeka Kementerian Agama</strong> dengan kedalaman 
              <strong> Turots Kitab Kuning Salaf</strong> dan bimbingan <strong>Tahfidzul Qur'an Mutqin</strong>.
            </p>
          </div>
        </ScrollReveal>

        {/* GRID 1: 3 Peminatan Akademik Formal (MIPA, IPS, MAK) in 2-Grid Mobile Layout */}
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                  <Atom className="w-3.5 h-3.5 text-sky-600" />
                  <span>Pendidikan Menengah Atas</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Peminatan Jurusan Akademik Formal
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md text-justify sm:text-left hyphens-auto">
                Mempersiapkan santri melanjutkan ke Perguruan Tinggi Negeri (PTN), UIN, Ma'had Aly, maupun Universitas Timur Tengah.
              </p>
            </div>

            {/* 2-Grid on Mobile, 3-Grid on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {CURRICULUM_DATA.general.map((prog, idx) => {
                const isSpan = idx === 2;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group ${
                      isSpan ? 'col-span-2 lg:col-span-1' : 'col-span-1'
                    }`}
                  >
                    <div>
                      {/* Supporting Photo */}
                      <div className="relative h-28 xs:h-32 sm:h-40 md:h-48 overflow-hidden bg-sky-100">
                        <img
                          src={prog.imageUrl}
                          alt={prog.program}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent"></div>
                        <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-sky-950/85 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 rounded shadow-xs border border-sky-700/50">
                          Peminatan {idx === 0 ? 'MIPA' : idx === 1 ? 'IPS' : 'MAK'}
                        </span>
                      </div>

                      <div className="p-2.5 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
                        <h4 className="text-xs sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                          {prog.program}
                        </h4>
                        <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto line-clamp-3 sm:line-clamp-none">
                          {prog.desc}
                        </p>

                        <div className="pt-1 sm:pt-2">
                          <p className="text-[9px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider mb-1 sm:mb-2">
                            Mata Pelajaran Kunci:
                          </p>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {prog.subjects.map((sub, sIdx) => (
                              <span key={sIdx} className="text-[9px] sm:text-xs text-slate-700 bg-sky-50/80 px-1.5 sm:px-2 py-0.5 rounded border border-sky-200/70 inline-flex items-center gap-1 font-medium">
                                <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600 shrink-0" />
                                <span className="truncate">{sub}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 sm:p-4 md:p-6 pt-0 sm:pt-0 md:pt-0">
                      <div className="p-2 sm:p-3 bg-sky-50/80 rounded-lg sm:rounded-xl border border-sky-100 text-[10px] sm:text-xs text-sky-900 font-medium leading-tight sm:leading-snug text-justify hyphens-auto">
                        🎯 <strong>Target:</strong> Siap tembus PTN, Kedokteran, Teknik, UIN, Al-Azhar Kairo, dan Beasiswa Luar Negeri.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3 Academic Pillars Strip */}
            <div className="mt-6 sm:mt-8 bg-sky-50/70 rounded-2xl p-3.5 sm:p-6 md:p-8 border border-sky-100 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 text-left">
              <div className="flex items-start gap-3 sm:gap-4 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-sky-100/60 sm:border-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Atom className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Laboratorium Riset & CBT</h5>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto mt-0.5">Praktikum biologi, kimia, fisika, dan komputer CBT terintegrasi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-sky-100/60 sm:border-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Bilingual Active Skill</h5>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto mt-0.5">Pembiasaan percakapan harian Bahasa Arab dan Inggris di lingkungan santri.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-sky-100/60 sm:border-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">Bimbingan Masuk PTN</h5>
                  <p className="text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto mt-0.5">Tryout berkala SNBT, SPAN-PTKIN, dan beasiswa internasional ke Timur Tengah.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID 2: Kurikulum Diniyah & Turots Kitab Kuning (2-Grid Kanan-Kiri on Mobile & 4 on Desktop) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                  <BookMarked className="w-3.5 h-3.5 text-sky-600" />
                  <span>Khazanah Pesantren Salaf</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Kurikulum Diniyah & Kitab Kuning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md text-justify sm:text-left hyphens-auto">
                Kajian kitab turots bermetode bandongan dan sorogan bersama para ustadz dan masyayikh.
              </p>
            </div>

            {/* 2-Grid on Mobile, 4-Grid on Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
              {CURRICULUM_DATA.diniyah.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    {/* Supporting Photo */}
                    <div className="relative h-28 xs:h-32 sm:h-36 md:h-40 overflow-hidden bg-sky-100">
                      <img
                        src={item.imageUrl}
                        alt={item.field}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent"></div>
                      <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-sky-950/85 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded border border-sky-700/50 shadow-xs">
                        Kajian Turots
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-4 space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                        {item.field}
                      </h4>
                      <div>
                        <p className="text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase">Kitab Yang Dipelajari:</p>
                        <div className="flex flex-wrap gap-1 mt-1 sm:mt-1.5">
                          {item.books.map((b, bIdx) => (
                            <span key={bIdx} className="text-[9px] sm:text-xs bg-sky-50 text-sky-900 px-1.5 sm:px-2 py-0.5 rounded border border-sky-200 font-medium">
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 pt-0 sm:pt-0">
                    <p className="text-[10px] sm:text-xs text-slate-600 bg-slate-50 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-100 leading-snug sm:leading-relaxed text-justify hyphens-auto">
                      <strong className="text-slate-800">Target:</strong> {item.target}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      {/* GRID 3: Program Unggulan Tahfidz & Jadwal 24 Jam Santri (2-Column Bento Grid) */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Halaqah Tahfidzul Qur'an (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-300 bg-sky-950/80 px-3 py-1 rounded-full border border-sky-600/50">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Program Unggulan Madrasah</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                Halaqah Tahfidzul Qur'an 30 Juz Bersanad
              </h3>
              
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Metode bimbingan talaqqi intensif bersama pembina Al-Hafidz bersanad resmi. 
                Dilengkapi muraja'ah harian, evaluasi tahsin tajwid, dan wisuda akbar tahunan. 
                Santri berprestasi diberikan beasiswa bebas SPP dan fasilitas khusus asrama.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-sky-950/70 p-3.5 rounded-xl border border-sky-600/60 text-center">
                  <span className="text-amber-300 font-bold text-base block">Target 5 - 30 Juz</span>
                  <span className="text-[11px] text-sky-200">Bimbingan Terstruktur</span>
                </div>
                <div className="bg-sky-950/70 p-3.5 rounded-xl border border-sky-600/60 text-center">
                  <span className="text-amber-300 font-bold text-base block">Sanad Mutashil</span>
                  <span className="text-[11px] text-sky-200">Bersambung ke Rasulullah SAW</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-sky-950/60 rounded-xl border border-sky-700/60 text-xs text-sky-200">
              💡 <strong>Fasilitas Beasiswa Tahfidz:</strong> Pembebasan uang gedung dan SPP bagi santri yang hafal 5 juz ke atas saat mendaftar.
            </div>
          </div>

          {/* Right: Agenda Keseharian 24 Jam Santri (6 Cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-sky-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <h4 className="text-base font-bold text-slate-900">Agenda & Keseharian Santri (24 Jam)</h4>
                </div>
                <span className="text-[11px] text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  Senin - Sabtu
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Pembagian waktu seimbang antara ibadah sholat berjama'ah, sekolah formal, halaqah kitab, dan istirahat.
              </p>

              <div className="divide-y divide-sky-50 text-xs">
                {DAILY_SCHEDULE.map((sched, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between gap-3 hover:bg-sky-50/50 px-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0"></span>
                      <span className="font-semibold text-slate-800">{sched.activity}</span>
                    </div>
                    <span className="font-mono text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded text-[11px] border border-sky-100/80 shrink-0">
                      {sched.time} WIB
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-sky-50 text-[11px] text-slate-400 text-center">
              *Tersedia program pendalaman mandiri di malam hari dibimbing pembina asrama.
            </div>
          </div>

        </div>
      </ScrollReveal>

      </div>
    </section>
  );
};
