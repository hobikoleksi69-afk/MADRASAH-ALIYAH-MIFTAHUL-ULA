import React from 'react';
import { SCHOOL_INFO, PPDB_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  X, 
  Printer, 
  BookOpen, 
  Award,
  Calendar
} from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-200 bg-sky-950 px-2.5 py-0.5 rounded border border-sky-700">
              Brosur Digital Resmi
            </span>
            <span className="text-xs text-sky-200">PPDB {PPDB_INFO.academicYear}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="cursor-pointer px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Unduh PDF</span>
            </button>
            <button
              onClick={onClose}
              className="cursor-pointer p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-sky-800 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800">
          
          {/* Header of Brochure */}
          <div className="border-b-2 border-sky-700 pb-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <SchoolLogo className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 drop-shadow-md" />
              <div>
                <p className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
                  YAYASAN PONDOK PESANTREN MIFTAHUL 'ULA
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {SCHOOL_INFO.fullName}
                </h2>
                <p className="text-xs text-slate-600">
                  {SCHOOL_INFO.address.fullAddress} • Telp: {SCHOOL_INFO.contact.phone}
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right shrink-0 bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
              <span className="text-xs font-bold text-sky-900 block">STATUS AKREDITASI</span>
              <span className="text-sm font-extrabold text-amber-600">TERAKREDITASI A</span>
              <span className="text-[10px] text-slate-500 block">BAN-SM / KEMENAG</span>
            </div>
          </div>

          {/* Visi Singkat & Karakter */}
          <div className="bg-gradient-to-r from-sky-900 to-sky-950 text-white rounded-2xl p-5 text-xs sm:text-sm space-y-2">
            <p className="font-arabic text-base text-amber-300">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <p className="italic leading-relaxed font-serif text-sky-100">
              "{SCHOOL_INFO.vision}"
            </p>
            <div className="pt-2 border-t border-sky-800 text-[11px] text-sky-200 flex flex-wrap gap-3">
              <span>✓ Kurikulum Merdeka Kemenag</span>
              <span>✓ Turots Kitab Kuning Salaf</span>
              <span>✓ Tahfidz 30 Juz Bersanad</span>
              <span>✓ Asrama Putra & Putri</span>
            </div>
          </div>

          {/* Pilihan Peminatan */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Program Peminatan Akademik & Diniyah</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-1">1. MAK (Keagamaan)</h4>
                <p className="text-slate-600">Spesialisasi Tafsir, Hadits, Fiqih Ushul Fiqih, Nahwu-Shorof, dan Bahasa Arab aktif persiapan kader ulama.</p>
              </div>
              <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-1">2. MIPA (Sains)</h4>
                <p className="text-slate-600">Penguasaan Matematika Lanjut, Fisika, Biologi, Kimia, Robotik & Riset Ilmiah persiapan Fakultas Sains / PTN.</p>
              </div>
              <div className="p-3.5 bg-sky-50/50 rounded-xl border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-1">3. IPS (Sosial Humaniora)</h4>
                <p className="text-slate-600">Ekonomi Syariah, Sosiologi, Geografi, Sejarah Peradaban Islam untuk calon profesional mandiri.</p>
              </div>
            </div>
          </div>

          {/* Rincian Biaya Pendidikan */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>Tabel Rincian Biaya Pendidikan {PPDB_INFO.academicYear}</span>
            </h3>
            <div className="overflow-x-auto border border-sky-100 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-sky-50 text-slate-700 font-bold border-b border-sky-100">
                  <tr>
                    <th className="py-2.5 px-3">Komponen Biaya</th>
                    <th className="py-2.5 px-3">Nominal</th>
                    <th className="py-2.5 px-3">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-50 text-slate-600">
                  {PPDB_INFO.fees.map((f, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/50">
                      <td className="py-2 px-3 font-medium text-slate-900">{f.item}</td>
                      <td className="py-2 px-3 font-bold text-sky-700">{f.cost}</td>
                      <td className="py-2 px-3 text-[11px]">{f.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Kontak & Cara Mendaftar */}
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-sky-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm">Pendaftaran Online Dibuka Sekarang!</p>
              <p className="mt-0.5">Kunjungi portal website madrasah atau hubungi panitia PPDB.</p>
              <p className="mt-1 font-mono text-[11px]">Telepon: {SCHOOL_INFO.contact.phone} • WA: {SCHOOL_INFO.contact.whatsappFormatted}</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="cursor-pointer px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow transition-colors shrink-0"
            >
              Isi Formulir Online
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-sky-50/50 border-t border-sky-100 flex items-center justify-between text-xs text-slate-500">
          <span>Dicetak dari Portal Resmi MA Miftahul 'Ula Kertosono</span>
          <button
            onClick={onClose}
            className="cursor-pointer font-bold text-slate-700 hover:text-slate-950"
          >
            Tutup Brosur
          </button>
        </div>

      </div>
    </div>
  );
};
