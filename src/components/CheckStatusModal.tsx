import React, { useState } from 'react';
import { StudentRegistration } from './PpdbModal';
import { SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  X, 
  Search, 
  FileCheck
} from 'lucide-react';

interface CheckStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

const PRESEEDED_RECORDS: StudentRegistration[] = [
  {
    regNumber: 'MAMU-2026-1088',
    fullName: 'Ahmad Faiz Mubarok',
    nisn: '0089123841',
    nik: '3518041203080001',
    birthPlace: 'Nganjuk',
    birthDate: '2010-04-12',
    gender: 'Laki-laki',
    previousSchool: 'MTsN 1 Nganjuk',
    phone: '081234567890',
    major: 'MAK (Keagamaan)',
    track: 'tahfidz',
    residence: 'Asrama Pondok Pesantren',
    parentName: 'H. Abdul Ghofur',
    parentPhone: '081398765432',
    address: 'Kertosono, Nganjuk',
    registeredAt: '15 Januari 2026',
    status: 'Lolos Administrasi',
  },
  {
    regNumber: 'MAMU-2026-2140',
    fullName: 'Siti Sarah Azzahra',
    nisn: '0087654321',
    nik: '3518045502090002',
    birthPlace: 'Kediri',
    birthDate: '2010-08-25',
    gender: 'Perempuan',
    previousSchool: 'SMP Plus Ar-Rahmah',
    phone: '085712349999',
    major: 'MIPA (Sains)',
    track: 'prestasi',
    residence: 'Asrama Pondok Pesantren',
    parentName: 'Bambang Sutrisno',
    parentPhone: '085712348888',
    address: 'Tarokan, Kediri',
    registeredAt: '22 Januari 2026',
    status: 'Menunggu Verifikasi Berkas',
  },
];

export const CheckStatusModal: React.FC<CheckStatusModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<StudentRegistration | null>(null);
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const clean = query.trim().toLowerCase();
    
    let found: StudentRegistration | undefined;
    try {
      const stored = localStorage.getItem('mamu_registrations');
      if (stored) {
        const list: StudentRegistration[] = JSON.parse(stored);
        found = list.find(
          r => r.regNumber.toLowerCase() === clean || 
               r.nisn.toLowerCase() === clean || 
               r.fullName.toLowerCase().includes(clean)
        );
      }
    } catch {
      // ignore
    }

    if (!found) {
      found = PRESEEDED_RECORDS.find(
        r => r.regNumber.toLowerCase() === clean || 
             r.nisn.toLowerCase() === clean || 
             r.fullName.toLowerCase().includes(clean)
      );
    }

    setResult(found || null);
    setSearched(true);
  };

  const handleSampleClick = (sampleQuery: string) => {
    setQuery(sampleQuery);
    const found = PRESEEDED_RECORDS.find(r => r.regNumber === sampleQuery);
    setResult(found || null);
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SchoolLogo className="w-9 h-9 drop-shadow-md" />
            <div>
              <h3 className="font-bold text-base">Cek Status Pendaftaran PPDB</h3>
              <p className="text-xs text-sky-200">MA Miftahul 'Ula Nglawak Kertosono</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <form onSubmit={handleSearch} className="space-y-3">
            <label className="block text-xs font-bold text-slate-700">
              Masukkan Nomor Registrasi / NISN / Nama Siswa:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                placeholder="Contoh: MAMU-2026-1088 atau NISN..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
              />
              <button
                type="submit"
                className="cursor-pointer px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Cari</span>
              </button>
            </div>

            {/* Quick Demo Sample Badges */}
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <span>Coba contoh:</span>
              <button
                type="button"
                onClick={() => handleSampleClick('MAMU-2026-1088')}
                className="cursor-pointer font-mono font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 px-2 py-0.5 rounded border border-sky-200 transition-colors"
              >
                MAMU-2026-1088
              </button>
              <button
                type="button"
                onClick={() => handleSampleClick('MAMU-2026-2140')}
                className="cursor-pointer font-mono font-medium text-sky-800 bg-sky-50 hover:bg-sky-100 px-2 py-0.5 rounded border border-sky-200 transition-colors"
              >
                MAMU-2026-2140
              </button>
            </div>
          </form>

          {/* Search Result Box */}
          {searched && (
            result ? (
              <div className="bg-sky-50/50 rounded-2xl p-5 border border-sky-100 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-sky-100 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">No. Registrasi</span>
                    <span className="text-sm font-extrabold font-mono text-sky-900">{result.regNumber}</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                    result.status === 'Lolos Administrasi' 
                      ? 'bg-sky-100 text-sky-900 border-sky-300' 
                      : 'bg-amber-100 text-amber-900 border-amber-300'
                  }`}>
                    {result.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between py-1 border-b border-sky-100/50">
                    <span className="text-slate-500">Nama Siswa:</span>
                    <span className="font-bold text-slate-900">{result.fullName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-100/50">
                    <span className="text-slate-500">Peminatan:</span>
                    <span className="font-semibold text-sky-800">{result.major}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-100/50">
                    <span className="text-slate-500">Jalur Pendaftaran:</span>
                    <span className="capitalize font-medium">{result.track}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-100/50">
                    <span className="text-slate-500">Status Tempat Tinggal:</span>
                    <span className="font-medium">{result.residence}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Tanggal Daftar:</span>
                    <span>{result.registeredAt}</span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="p-3 bg-white rounded-xl border border-sky-100 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-800">Tahapan Selanjutnya:</p>
                  <p>
                    Harap membawa berkas fisik (fotokopi SKL/Ijazah, KK, Akta Kelahiran, dan pas foto 3x4) 
                    ke sekretariat PPDB MA Miftahul 'Ula Kertosono untuk verifikasi dokumen.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-5 text-center bg-sky-50/50 rounded-2xl border border-sky-100 space-y-3">
                <p className="text-xs text-slate-600">
                  Data dengan kata kunci <strong>"{query}"</strong> tidak ditemukan dalam pangkalan data PPDB.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenRegister();
                  }}
                  className="cursor-pointer text-xs font-bold text-sky-700 hover:underline"
                >
                  Belum mendaftar? Klik di sini untuk mengisi formulir online
                </button>
              </div>
            )
          )}

          {/* Help Contact */}
          <div className="pt-2 text-center text-xs text-slate-500">
            Ada kendala verifikasi? Hubungi Panitia di <a href={`tel:${SCHOOL_INFO.contact.phone}`} className="text-sky-700 font-bold">{SCHOOL_INFO.contact.phone}</a>
          </div>
        </div>

      </div>
    </div>
  );
};
