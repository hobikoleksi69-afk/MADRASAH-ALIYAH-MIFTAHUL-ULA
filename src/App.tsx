import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSection } from './components/ProfileSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TeachersSection } from './components/TeachersSection';
import { PpdbSection } from './components/PpdbSection';
import { AchievementsAndEkskul } from './components/AchievementsAndEkskul';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { PpdbModal } from './components/PpdbModal';
import { CheckStatusModal } from './components/CheckStatusModal';
import { BrochureModal } from './components/BrochureModal';
import { ScrollProgressAndTop } from './components/ScrollProgressAndTop';
import { SCHOOL_INFO } from './data/schoolData';
import { MessageCircle, Phone, GraduationCap } from 'lucide-react';

export default function App() {
  const [isPpdbModalOpen, setIsPpdbModalOpen] = useState(false);
  const [isCheckStatusModalOpen, setIsCheckStatusModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 selection:bg-sky-500 selection:text-white">
      {/* Scroll Progress Bar & Floating Top Button */}
      <ScrollProgressAndTop />

      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenPpdbModal={() => setIsPpdbModalOpen(true)}
        onOpenCheckStatusModal={() => setIsCheckStatusModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner with Islamic Arch Theme, Supporting Photos & CTAs */}
        <Hero
          onOpenPpdbModal={() => setIsPpdbModalOpen(true)}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        />

        {/* Profil & Sejarah Madrasah, Visi-Misi, & Sarana Prasarana */}
        <ProfileSection />

        {/* Kurikulum Umum + Keagamaan (Tahfidz / Diniyah & Kitab Kuning) */}
        <CurriculumSection />

        {/* Profil Dewan Guru, Asatidz & Tenaga Pendidik */}
        <TeachersSection />

        {/* Info PPDB / Pendaftaran Siswa Baru, Jalur & Biaya Pendidikan */}
        <PpdbSection
          onOpenPpdbModal={() => setIsPpdbModalOpen(true)}
          onOpenCheckStatusModal={() => setIsCheckStatusModalOpen(true)}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        />

        {/* Ekstrakurikuler & Prestasi Santri */}
        <AchievementsAndEkskul />

        {/* Galeri Foto & Kegiatan Madrasah */}
        <GallerySection />

        {/* Berita & Pengumuman Sekolah */}
        <NewsSection />

        {/* Kontak Resmi & Peta Lokasi (Nglawak Kertosono Nganjuk) */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPpdbModal={() => setIsPpdbModalOpen(true)} />

      {/* Modals */}
      <PpdbModal
        isOpen={isPpdbModalOpen}
        onClose={() => setIsPpdbModalOpen(false)}
      />

      <CheckStatusModal
        isOpen={isCheckStatusModalOpen}
        onClose={() => setIsCheckStatusModalOpen(false)}
        onOpenRegister={() => setIsPpdbModalOpen(true)}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        onOpenRegister={() => setIsPpdbModalOpen(true)}
      />

      {/* Desktop Floating Quick WhatsApp Button */}
      <aside aria-label="Konsultasi WhatsApp" className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent('Assalamu’alaikum Wr. Wb. Panitia PPDB MA Miftahul Ula Kertosono, saya ingin berkonsultasi mengenai pendaftaran siswa baru.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group border border-emerald-400/40"
          title="Chat WhatsApp Panitia PPDB"
        >
          <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
          <span className="font-bold text-xs">
            Chat WhatsApp PPDB
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Bar for Maximum Usability on Phones */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-100 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${SCHOOL_INFO.contact.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-1 text-slate-600 hover:text-sky-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
          <span className="text-[10px] font-semibold">Telepon</span>
        </a>

        <a
          href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent('Assalamu’alaikum Wr. Wb. Panitia PPDB MA Miftahul Ula Kertosono, saya ingin berkonsultasi mengenai pendaftaran siswa baru.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1 text-slate-600 hover:text-emerald-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <button
          onClick={() => setIsPpdbModalOpen(true)}
          className="flex-[2] bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold py-2 px-3 rounded-xl shadow text-xs flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Daftar PPDB</span>
        </button>
      </div>
    </div>
  );
}
