import React, { useState } from 'react';
import { EXTRACURRICULARS, ACHIEVEMENTS } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';
import { 
  Trophy, 
  Flame, 
  Calendar, 
  Award, 
  Users,
  Compass, 
  Music, 
  Palette, 
  Laptop, 
  Languages, 
  Shield
} from 'lucide-react';

export const AchievementsAndEkskul: React.FC = () => {
  const [ekskulCategory, setEkskulCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Keagamaan', 'Kepanduan & Relawan', 'Olahraga & Seni', 'Sains & Teknologi'];

  const filteredEkskul = ekskulCategory === 'Semua' 
    ? EXTRACURRICULARS 
    : EXTRACURRICULARS.filter(e => e.category === ekskulCategory);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music': return <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Compass': return <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Palette': return <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Laptop': return <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Languages': return <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Shield': return <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default: return <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  return (
    <section id="ekstrakurikuler" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
              <Trophy className="w-3.5 h-3.5 text-sky-600" />
              <span>Potensi & Rekam Jejak Santri</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Prestasi & Pengembangan Ekstrakurikuler
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-center hyphens-auto">
              Menempa kepribadian mandiri, kepemimpinan aswaja, ketangkasan raga, 
              dan kecakapan teknologi informasi santri MA Miftahul 'Ula Kertosono.
            </p>
          </div>
        </ScrollReveal>

        {/* GRID 1: Prestasi & Rekam Jejak Santri (2-Grid Mobile, 3-Grid Desktop) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div id="prestasi">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                  <Trophy className="w-3.5 h-3.5 text-sky-600" />
                  <span>Hall of Fame & Penghargaan</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Prestasi Gemilang Santri Terkini
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md text-justify sm:text-left hyphens-auto">
                Bukti dedikasi santri dan ustadz pembimbing dalam berbagai ajang kompetisi sains, keagamaan, dan seni.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Supporting Photo */}
                    <div className="relative h-28 xs:h-32 sm:h-40 md:h-48 overflow-hidden bg-sky-100">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent"></div>
                      <span className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-amber-400 text-slate-950 text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded shadow-xs">
                        {item.badge}
                      </span>
                      <span className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 bg-sky-950/85 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 rounded border border-sky-700/50">
                        {item.year}
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-4 md:p-6 space-y-1.5 sm:space-y-3">
                      <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs font-semibold text-sky-700">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-sky-600 shrink-0" />
                        <span className="truncate">Tingkat {item.category}</span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-xs sm:text-base leading-snug group-hover:text-sky-700 transition-colors line-clamp-2">
                        {item.title}
                      </h4>

                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto line-clamp-3 sm:line-clamp-none">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 md:p-6 pt-0 sm:pt-0 md:pt-0">
                    <div className="p-2 sm:p-3 bg-sky-50 rounded-lg sm:rounded-xl border border-sky-100 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-[10px] sm:text-xs">
                      <span className="text-slate-500 font-medium">Santri Peraih:</span>
                      <span className="font-bold text-sky-900 truncate">{item.recipient}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement Quote Strip */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm sm:text-lg font-bold text-white">Mendukung Penuh Potensi Setiap Santri</h4>
                <p className="text-[10px] sm:text-xs text-sky-100 text-justify sm:text-left hyphens-auto leading-relaxed">
                  MA Miftahul 'Ula memberikan beasiswa apresiasi dan pendampingan intensif untuk setiap santri yang berkompetisi di tingkat daerah hingga internasional.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-sky-950/80 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-sky-300 border border-sky-600/50">
                  Beasiswa Prestasi Aktif
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID 2: Pilihan Ekstrakurikuler & Minat Bakat (2-Grid Mobile, 3-Grid Desktop) */}
        <ScrollReveal direction="up" delay={0.15}>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                  <Flame className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kegiatan Sore & Akhir Pekan</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Pilihan Ekstrakurikuler Santri
                </h3>
              </div>
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setEkskulCategory(cat)}
                    className={`cursor-pointer px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-lg transition-colors ${
                      ekskulCategory === cat
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-sky-50 text-slate-600 hover:bg-sky-100 border border-sky-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
              {filteredEkskul.map((ekskul) => (
                <div
                  key={ekskul.id}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Supporting Photo */}
                    <div className="relative h-28 xs:h-32 sm:h-40 md:h-44 overflow-hidden bg-sky-100">
                      <img
                        src={ekskul.imageUrl}
                        alt={ekskul.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent"></div>
                      <span className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-sky-900/90 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded border border-sky-700/50 shadow-xs">
                        {ekskul.category}
                      </span>
                    </div>

                    <div className="p-2.5 sm:p-4 md:p-6 space-y-1.5 sm:space-y-3">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                          {getCategoryIcon(ekskul.iconName)}
                        </div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-base leading-snug group-hover:text-sky-700 transition-colors line-clamp-1 sm:line-clamp-2">
                          {ekskul.name}
                        </h4>
                      </div>

                      <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 leading-snug sm:leading-relaxed text-justify hyphens-auto line-clamp-3 sm:line-clamp-none">
                        {ekskul.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 md:p-6 pt-0 sm:pt-0 md:pt-0 space-y-1 sm:space-y-2 border-t border-sky-50 text-[10px] sm:text-xs text-slate-500">
                    <div className="flex items-center justify-between pt-1.5 sm:pt-2">
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0" />
                        <span className="hidden xs:inline">Jadwal:</span>
                      </span>
                      <span className="font-semibold text-slate-800 truncate">{ekskul.schedule}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0" />
                        <span className="hidden xs:inline">Pembina:</span>
                      </span>
                      <span className="font-medium text-slate-700 truncate">{ekskul.mentor}</span>
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
