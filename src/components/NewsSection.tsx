import React, { useState } from 'react';
import { NEWS_LIST, NewsItem } from '../data/schoolData';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Check
} from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['Semua', 'Pengumuman', 'Prestasi', 'Kegiatan', 'PPDB', 'Akademik'];

  const filteredNews = NEWS_LIST.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="berita" className="py-16 sm:py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
            <Newspaper className="w-3.5 h-3.5 text-sky-600" />
            <span>Kabar & Informasi Terkini</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Warta & Pengumuman Madrasah
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Ikuti perkembangan agenda, pengumuman resmi, prestasi, dan kegiatan edukatif 
            keluarga besar MA Miftahul 'Ula Nglawak Kertosono.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-sky-50 text-slate-600 hover:bg-sky-100 border border-sky-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-sky-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari warta / pengumuman..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-sky-50/50 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-12 bg-sky-50 rounded-2xl border border-sky-100">
            <p className="text-slate-500 text-xs sm:text-sm">Tidak ada berita atau pengumuman yang sesuai kata kunci pencarian.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-sky-100">
                    <img
                      src={news.imageUrl}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-sky-900/90 text-sky-200 text-[11px] font-semibold px-2.5 py-0.5 rounded">
                      {news.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-sky-600" />
                        {news.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-600" />
                        {news.readTime}
                      </span>
                    </div>

                    <h3 
                      onClick={() => setReadingArticle(news)}
                      className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {news.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setReadingArticle(news)}
                    className="cursor-pointer text-xs font-bold text-sky-700 hover:text-sky-950 flex items-center gap-1 group/btn transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Article Reader Modal */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-sky-100 max-h-[90vh] flex flex-col">
              
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-sky-100 flex items-center justify-between bg-sky-50/70">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded">
                    {readingArticle.category}
                  </span>
                  <span className="text-slate-300">|</span>
                  <span className="text-xs text-slate-500 font-medium">Warta Madrasah</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-100 transition-colors cursor-pointer"
                    title="Bagikan Tautan"
                  >
                    {copied ? <Check className="w-4 h-4 text-sky-600" /> : <Share2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-100 transition-colors cursor-pointer"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body Scrollable */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {readingArticle.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-600" />
                      Oleh: {readingArticle.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {readingArticle.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      {readingArticle.readTime}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden max-h-72 w-full bg-slate-100">
                  <img
                    src={readingArticle.imageUrl}
                    alt={readingArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  {readingArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-900 space-y-1">
                  <p className="font-bold">Sekretariat MA Miftahul 'Ula Nglawak Kertosono</p>
                  <p>Mentaos, Nglawak, Kec. Kertosono, Kab. Nganjuk 64351 | Telp: 0358-552243</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-sky-100 bg-sky-50/50 flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="cursor-pointer px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-sky-100 rounded-xl transition-colors"
                >
                  Tutup Artikel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
