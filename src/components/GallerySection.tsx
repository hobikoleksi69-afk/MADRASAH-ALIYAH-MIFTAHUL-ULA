import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';
import { ScrollReveal } from './ScrollReveal';
import { 
  Camera, 
  X, 
  Maximize2, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Tag
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Semua', 'Kegiatan', 'Pesantren', 'Akademik', 'Prestasi', 'Fasilitas'];

  const filteredItems = selectedCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  const handleNext = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[prevIndex]);
  };

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-sky-50/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
              <Camera className="w-3.5 h-3.5 text-sky-600" />
              <span>Dokumentasi Visual</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Galeri Foto & Dokumentasi Kegiatan
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-center hyphens-auto">
              Merekam jejak kebersamaan, khazanah keilmuan, dan aktivitas santri MA Miftahul 'Ula Nglawak Kertosono.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filters with Light Blue Active States */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                    : 'bg-white text-slate-600 hover:bg-sky-50 border border-sky-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid (2-Grid Mobile, 4-Grid Desktop) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-sky-100/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 xs:h-36 sm:h-48 md:h-52 overflow-hidden bg-sky-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-sky-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 bg-sky-950/85 backdrop-blur-xs text-[#81CBFA] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded sm:rounded-md border border-sky-700/50 shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-4 space-y-1 sm:space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 text-justify hyphens-auto leading-snug">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-2.5 sm:p-4 pt-0 sm:pt-0">
                  <div className="pt-2 sm:pt-3 border-t border-sky-50 flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-sky-900">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="cursor-pointer absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handleNext}
                className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handlePrev}
                className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Berikutnya"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div className="max-h-[60vh] sm:max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  className="max-h-[60vh] sm:max-h-[65vh] w-auto object-contain"
                />
              </div>

              {/* Details footer */}
              <div className="p-4 sm:p-6 bg-slate-900 text-white space-y-1.5 sm:space-y-2 border-t border-slate-800">
                <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[#81CBFA] font-semibold">
                    <Tag className="w-3.5 h-3.5" />
                    {lightboxItem.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {lightboxItem.date}
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-white">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 text-justify hyphens-auto leading-relaxed">
                  {lightboxItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
