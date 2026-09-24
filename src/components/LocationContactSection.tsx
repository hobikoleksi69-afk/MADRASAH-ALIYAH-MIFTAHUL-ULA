import React, { useState } from 'react';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Share2,
  Navigation
} from 'lucide-react';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Informasi PPDB Siswa Baru',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-sky-50/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Lokasi & Kontak Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi & Kunjungi MA Miftahul 'Ula
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Terletak strategis di Dusun Mentaos, Desa Nglawak, Kertosono, Nganjuk. 
            Kami siap melayani informasi akademik, pendaftaran santri baru, dan silaturahmi.
          </p>
        </div>

        {/* Top 3 Action Cards (Referencing spreadsheet links) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {/* Card 1: Buka di Maps */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Petunjuk Arah & Google Maps
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {SCHOOL_INFO.address.fullAddress}. Akses mudah 8 menit dari Stasiun Kertosono dan Gerbang Tol Bandar.
              </p>
            </div>
            <a
              href={SCHOOL_INFO.socialMedia.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors"
            >
              <span>Buka di Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Cek Data Resmi Kemenag */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Data Resmi Lembaga Kemenag
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                NSM: <strong>{SCHOOL_INFO.nsm}</strong> | NPSN: <strong>{SCHOOL_INFO.npsn}</strong>. 
                Terdaftar resmi di Pangkalan Data EMIS Kementerian Agama RI.
              </p>
            </div>
            <a
              href={SCHOOL_INFO.socialMedia.kemenagData}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors"
            >
              <span>Cek Data Resmi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Cari Info / Sosmed */}
          <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Kanal Sosial Media & Siaran
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ikuti liputan kegiatan dakwah, kajian kitab kuning santri, dan pengumuman madrasah di kanal resmi kami.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={SCHOOL_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-xl text-xs font-semibold border border-sky-100 transition-colors"
              >
                Instagram
              </a>
              <a
                href={SCHOOL_INFO.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-xl text-xs font-semibold border border-sky-100 transition-colors"
              >
                YouTube
              </a>
              <a
                href={SCHOOL_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-2.5 bg-sky-50 hover:bg-sky-100 text-sky-800 rounded-xl text-xs font-semibold border border-sky-100 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Map & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Map & Contact Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-xs">
              <div className="p-5 border-b border-sky-50 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Peta Lokasi Madrasah</h3>
                  <p className="text-xs text-slate-500">Mentaos, Nglawak, Kertosono, Kab. Nganjuk</p>
                </div>
                <a
                  href={SCHOOL_INFO.socialMedia.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                >
                  <span>Buka Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="h-80 w-full relative bg-sky-50">
                <iframe
                  title="Peta Lokasi MA Miftahul Ula Nglawak Kertosono"
                  src="https://maps.google.com/maps?q=Nglawak,%20Kertosono,%20Nganjuk&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Address Strip */}
              <div className="p-5 bg-sky-50/50 border-t border-sky-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Alamat Kampus:</strong>
                    <span>{SCHOOL_INFO.address.fullAddress}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Jam Operasional Kantor:</strong>
                    <span>{SCHOOL_INFO.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Numbers in Sky Blue Navy */}
            <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-800 flex items-center justify-center text-amber-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-sky-200">Layanan Telepon Kantor:</p>
                  <p className="text-lg font-bold tracking-wider">{SCHOOL_INFO.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${SCHOOL_INFO.contact.phone}`}
                  className="flex-1 sm:flex-none text-center bg-white text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs hover:bg-sky-50 transition-colors"
                >
                  Panggil Kantor
                </a>
                <a
                  href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent('Assalamu’alaikum Wr. Wb. Saya ingin menanyakan informasi seputar MA Miftahul Ula Kertosono.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-xs">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Kirim Pesan / Pertanyaan</h3>
              <p className="text-xs text-slate-500 mt-1">
                Ajukan pertanyaan seputar PPDB, kurikulum, atau sarana asrama santri. Tim sekretariat akan merespon secepatnya.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-200 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-sky-600 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Pesan Anda Telah Terkirim!</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Terima kasih, Bapak/Ibu <strong>{formData.name}</strong>. Tim panitia MA Miftahul 'Ula Kertosono akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: 'Informasi PPDB Siswa Baru', message: '' });
                    }}
                    className="cursor-pointer text-xs font-bold text-sky-700 hover:underline"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Ridwan / Ibu Fatimah"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp / Telepon Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Topik Pertanyaan
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  >
                    <option>Informasi PPDB Siswa Baru</option>
                    <option>Program Beasiswa Tahfidz 30 Juz</option>
                    <option>Pendaftaran Asrama Santri Mukim</option>
                    <option>Peminatan Jurusan MIPA / IPS / MAK</option>
                    <option>Konsultasi Santri Pindahan</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pesan / Pertanyaan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan Anda secara jelas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pertanyaan Sekarang</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Frequently Asked Questions (FAQ) Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
              <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
              <span>Tanya Jawab Seputar Madrasah</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan (FAQ)</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Jawaban cepat atas pertanyaan yang sering diajukan oleh calon wali santri dan peserta didik baru.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-sky-100 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="cursor-pointer w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-sky-50/30 hover:bg-sky-50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-sky-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed bg-sky-50/30 border-t border-sky-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
