import React from 'react';
import { SCHOOL_INFO, PPDB_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ArrowUp,
  GraduationCap
} from 'lucide-react';

interface FooterProps {
  onOpenPpdbModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPpdbModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sky-950 text-sky-100 pt-16 pb-20 md:pb-12 border-t border-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-900/80">
          
          {/* Col 1-5: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <SchoolLogo className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-md" />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  MA Miftahul 'Ula
                </h3>
                <p className="text-xs text-sky-300 font-medium">
                  {SCHOOL_INFO.foundation}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sky-200/80 leading-relaxed max-w-md">
              Lembaga pendidikan Islam swasta terkemuka di Nglawak Kertosono Nganjuk. 
              Mengintegrasikan kurikulum formal Kementerian Agama Republik Indonesia dengan khazanah 
              kitab kuning kepesantrenan dan program unggulan tahfidzul Qur'an.
            </p>

            <div className="pt-2 text-xs text-sky-300 space-y-1 font-mono">
              <p>NSM: <span className="text-white">{SCHOOL_INFO.nsm}</span></p>
              <p>NPSN: <span className="text-white">{SCHOOL_INFO.npsn}</span></p>
              <p>Status: <span className="text-sky-400 font-sans font-bold">Terakreditasi A BAN-SM</span></p>
            </div>
          </div>

          {/* Col 6-8: Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-200/80">
              <li>
                <a href="#profil" className="hover:text-sky-300 transition-colors">Profil & Sejarah Sekolah</a>
              </li>
              <li>
                <a href="#visi-misi" className="hover:text-sky-300 transition-colors">Visi, Misi & Karakter Santri</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-sky-300 transition-colors">Kurikulum Umum & Keagamaan</a>
              </li>
              <li>
                <a href="#guru" className="hover:text-sky-300 transition-colors">Dewan Guru & Tenaga Pendidik</a>
              </li>
              <li>
                <a href="#ppdb" className="hover:text-sky-300 transition-colors">Info Pendaftaran PPDB {PPDB_INFO.academicYear}</a>
              </li>
              <li>
                <a href="#ekstrakurikuler" className="hover:text-sky-300 transition-colors">Ekstrakurikuler & Prestasi</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-sky-300 transition-colors">Galeri Foto & Dokumentasi</a>
              </li>
              <li>
                <a href="#berita" className="hover:text-sky-300 transition-colors">Warta & Pengumuman Sekolah</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-sky-300 transition-colors">Kontak & Peta Lokasi</a>
              </li>
            </ul>
          </div>

          {/* Col 9-12: Contact & External Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kontak & Alamat Kampus
            </h4>
            
            <div className="space-y-2.5 text-xs text-sky-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Telepon: <strong className="text-white">{SCHOOL_INFO.contact.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: {SCHOOL_INFO.contact.email}</span>
              </div>
            </div>

            {/* Quick Spreadsheet Action Links */}
            <div className="pt-3 flex flex-wrap gap-2">
              <a
                href={SCHOOL_INFO.socialMedia.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-900/80 hover:bg-sky-800 text-sky-100 rounded-lg text-xs font-medium border border-sky-700 transition-colors"
              >
                <span>Buka di Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={SCHOOL_INFO.socialMedia.kemenagData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-900/80 hover:bg-sky-800 text-sky-100 rounded-lg text-xs font-medium border border-sky-700 transition-colors"
              >
                <span>Cek Data Resmi</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={onOpenPpdbModal}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold rounded-lg text-xs transition-colors shadow-xs"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Daftar Siswa Baru</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300">
          <p>
            © {new Date().getFullYear()} MA Miftahul 'Ula Nglawak Kertosono. Seluruh Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="cursor-pointer flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-semibold"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
