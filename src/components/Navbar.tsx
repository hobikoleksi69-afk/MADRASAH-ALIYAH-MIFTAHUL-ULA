import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO, PPDB_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  BookOpen, 
  GraduationCap, 
  ExternalLink,
  ChevronRight,
  FileCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenPpdbModal: () => void;
  onOpenCheckStatusModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPpdbModal, onOpenCheckStatusModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Profil & Sejarah', href: '#profil' },
    { name: 'Visi & Misi', href: '#visi-misi' },
    { name: 'Kurikulum', href: '#kurikulum' },
    { name: 'Dewan Guru', href: '#guru' },
    { name: 'Ekstrakurikuler', href: '#ekstrakurikuler' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Berita', href: '#berita' },
    { name: 'Kontak & Peta', href: '#kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Notification & Quick Access Bar - Sky/Navy Blue Theme */}
      <div className="bg-sky-950 text-sky-100 text-xs py-2 px-4 border-b border-sky-900/70 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Mentaos, Nglawak, Kertosono, Nganjuk 64351</span>
            </div>
            <span className="text-sky-800">|</span>
            <a 
              href={`tel:${SCHOOL_INFO.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold">{SCHOOL_INFO.contact.phone}</span>
            </a>
            <span className="text-sky-800">|</span>
            <span className="text-sky-300 font-medium">Akreditasi A BAN-SM / Kemenag</span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-1.5 text-sky-300">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>PPDB {PPDB_INFO.academicYear} Telah Dibuka</span>
            </div>
            <span className="text-sky-800">|</span>
            <button
              onClick={onOpenCheckStatusModal}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-sky-200"
            >
              <FileCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Cek Status PPDB</span>
            </button>
            <span className="text-sky-800">|</span>
            <a 
              href={SCHOOL_INFO.socialMedia.googleMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <span>Buka di Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-sky-800">|</span>
            <a 
              href={SCHOOL_INFO.socialMedia.kemenagData} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <span>Data Kemenag</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100 py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & School Identity */}
          <a href="#beranda" className="flex items-center gap-3 group text-left">
            <SchoolLogo className="w-11 h-11 sm:w-12 sm:h-12 group-hover:scale-105 transition-transform" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                  MA Miftahul 'Ula
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-sky-50 text-sky-700 border border-sky-200/80 rounded-md">
                  MAM
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium truncate max-w-[200px] sm:max-w-none">
                Nglawak, Kertosono, Nganjuk Jawa Timur
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-sky-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action PPDB Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenCheckStatusModal}
              className="cursor-pointer text-xs font-semibold text-sky-800 hover:text-sky-950 bg-sky-50 hover:bg-sky-100 px-3 py-2 rounded-lg border border-sky-200 transition-colors"
            >
              Cek Status
            </button>
            <button
              onClick={onOpenPpdbModal}
              className="cursor-pointer bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 group"
            >
              <span>Daftar PPDB</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenPpdbModal}
              className="sm:hidden cursor-pointer bg-sky-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm"
            >
              Daftar PPDB
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider px-3 mb-1">
            Menu Madrasah
          </div>
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-800 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-sky-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPpdbModal();
              }}
              className="w-full text-center bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-2.5 px-4 rounded-xl shadow text-sm transition-colors cursor-pointer"
            >
              Formulir Pendaftaran PPDB Online
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckStatusModal();
              }}
              className="w-full text-center border border-sky-200 text-sky-800 bg-sky-50/70 font-semibold py-2 px-4 rounded-xl text-sm hover:bg-sky-100 transition-colors cursor-pointer"
            >
              Cek Status Pendaftaran Siswa
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{SCHOOL_INFO.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{SCHOOL_INFO.address.fullAddress}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
