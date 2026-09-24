import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PPDB_INFO, SCHOOL_INFO } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Printer, 
  BookOpen, 
  GraduationCap, 
  Sparkles,
  QrCode,
  ShieldCheck
} from 'lucide-react';

interface PpdbModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface StudentRegistration {
  regNumber: string;
  fullName: string;
  nisn: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  gender: 'Laki-laki' | 'Perempuan';
  previousSchool: string;
  phone: string;
  major: 'MIPA (Sains)' | 'IPS (Sosial)' | 'MAK (Keagamaan)';
  track: 'tahfidz' | 'prestasi' | 'reguler' | 'afirmasi';
  residence: 'Asrama Pondok Pesantren' | 'Laju / Non-Asrama';
  parentName: string;
  parentPhone: string;
  address: string;
  registeredAt: string;
  status: 'Menunggu Verifikasi Berkas' | 'Lolos Administrasi' | 'Terdaftar';
}

export const PpdbModal: React.FC<PpdbModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    nisn: '',
    nik: '',
    birthPlace: 'Nganjuk',
    birthDate: '',
    gender: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    previousSchool: '',
    phone: '',
    major: 'MAK (Keagamaan)' as 'MIPA (Sains)' | 'IPS (Sosial)' | 'MAK (Keagamaan)',
    track: 'reguler' as 'tahfidz' | 'prestasi' | 'reguler' | 'afirmasi',
    residence: 'Asrama Pondok Pesantren' as 'Asrama Pondok Pesantren' | 'Laju / Non-Asrama',
    parentName: '',
    parentPhone: '',
    address: '',
  });

  const [registeredData, setRegisteredData] = useState<StudentRegistration | null>(null);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const regNumber = `MAMU-2026-${randomNum}`;
      const now = new Date();
      const dateStr = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

      const newRegistration: StudentRegistration = {
        regNumber,
        fullName: formData.fullName,
        nisn: formData.nisn || '312049281',
        nik: formData.nik || '3518042918230001',
        birthPlace: formData.birthPlace,
        birthDate: formData.birthDate,
        gender: formData.gender,
        previousSchool: formData.previousSchool,
        phone: formData.phone,
        major: formData.major,
        track: formData.track,
        residence: formData.residence,
        parentName: formData.parentName,
        parentPhone: formData.parentPhone,
        address: formData.address,
        registeredAt: dateStr,
        status: 'Menunggu Verifikasi Berkas',
      };

      try {
        const stored = localStorage.getItem('mamu_registrations');
        const list: StudentRegistration[] = stored ? JSON.parse(stored) : [];
        list.push(newRegistration);
        localStorage.setItem('mamu_registrations', JSON.stringify(list));
      } catch {
        // ignore storage error
      }

      setRegisteredData(newRegistration);
      setStep(4);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#81CBFA', '#1b8eed', '#FFD200', '#0c2b50'],
        });
      } catch {
        // confetti fallback
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setStep(1);
    setRegisteredData(null);
    setFormData({
      fullName: '',
      nisn: '',
      nik: '',
      birthPlace: 'Nganjuk',
      birthDate: '',
      gender: 'Laki-laki',
      previousSchool: '',
      phone: '',
      major: 'MAK (Keagamaan)',
      track: 'reguler',
      residence: 'Asrama Pondok Pesantren',
      parentName: '',
      parentPhone: '',
      address: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Header with Light Blue / Sky Gradient */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <SchoolLogo className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-md" />
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                Formulir Pendaftaran Siswa Baru (PPDB)
              </h2>
              <p className="text-xs text-sky-200">
                MA Miftahul 'Ula Kertosono • Tahun Ajaran {PPDB_INFO.academicYear}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (if steps 1-3) */}
        {step <= 3 && (
          <div className="px-6 py-3 bg-sky-50/50 border-b border-sky-100 flex items-center justify-between text-xs text-slate-500 font-medium shrink-0">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-sky-800 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
              <span>Data Calon Siswa</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-sky-800 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
              <span>Peminatan & Jalur</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-sky-800 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
              <span>Data Wali & Alamat</span>
            </div>
          </div>
        )}

        {/* Modal Body Container */}
        <div className="p-6 overflow-y-auto flex-1">
          {step <= 3 ? (
            <form onSubmit={handleNext} className="space-y-4">
              
              {/* STEP 1: Data Calon Siswa */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 text-xs text-sky-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Silakan lengkapi identitas calon siswa sesuai data di Akta Kelahiran atau Kartu Keluarga.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Lengkap Calon Siswa <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Muhammad Ilham Pratama"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NISN (Nomor Induk Siswa Nasional) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: 0081293847"
                        value={formData.nisn}
                        onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        NIK (Nomor Induk Kependudukan)
                      </label>
                      <input
                        type="text"
                        placeholder="16 Digit NIK di KK"
                        value={formData.nik}
                        onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tempat Lahir
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Nganjuk"
                        value={formData.birthPlace}
                        onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Tanggal Lahir <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.birthDate}
                        onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Jenis Kelamin
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'Laki-laki' | 'Perempuan' })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      >
                        <option value="Laki-laki">Laki-laki (Santri Putra)</option>
                        <option value="Perempuan">Perempuan (Santri Putri)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp Calon Siswa <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Asal Sekolah (MTs / SMP) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: MTsN 1 Nganjuk / SMPN 1 Kertosono"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Pilihan Peminatan & Jalur */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pilihan Peminatan Akademik (Jurusan) <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { val: 'MAK (Keagamaan)', label: 'MAK (Keagamaan)', desc: 'Tafsir, Hadits, Fiqih, Bahasa Arab & Kitab Kuning' },
                        { val: 'MIPA (Sains)', label: 'MIPA (Sains)', desc: 'Matematika, Fisika, Biologi, Kimia & Riset' },
                        { val: 'IPS (Sosial)', label: 'IPS (Sosial)', desc: 'Ekonomi, Sosiologi, Geografi & Sejarah Islam' },
                      ].map((item) => (
                        <div
                          key={item.val}
                          onClick={() => setFormData({ ...formData, major: item.val as any })}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            formData.major === item.val
                              ? 'border-sky-600 bg-sky-50/80 shadow-xs ring-1 ring-sky-400'
                              : 'border-slate-200 bg-slate-50 hover:bg-sky-50/40'
                          }`}
                        >
                          <p className="text-xs font-bold text-slate-900">{item.label}</p>
                          <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Jalur Pendaftaran
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    >
                      <option value="reguler">Jalur Reguler</option>
                      <option value="tahfidz">Jalur Beasiswa Tahfidz Al-Qur'an (Min. 3 Juz)</option>
                      <option value="prestasi">Jalur Prestasi Akademik / Olahraga / Seni</option>
                      <option value="afirmasi">Jalur Afirmasi (Yatim / Dhuafa)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Status Tempat Tinggal Santri
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        onClick={() => setFormData({ ...formData, residence: 'Asrama Pondok Pesantren' })}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.residence === 'Asrama Pondok Pesantren'
                            ? 'border-sky-600 bg-sky-50 text-sky-950 font-semibold ring-1 ring-sky-400'
                            : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        <p className="text-xs font-bold">Mukim di Asrama Pesantren</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Tinggal di Pondok Miftahul 'Ula (Kamar, makan, & kajian diniyah 24 jam).</p>
                      </div>

                      <div
                        onClick={() => setFormData({ ...formData, residence: 'Laju / Non-Asrama' })}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          formData.residence === 'Laju / Non-Asrama'
                            ? 'border-sky-600 bg-sky-50 text-sky-950 font-semibold ring-1 ring-sky-400'
                            : 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        <p className="text-xs font-bold">Non-Mukim (Laju dari Rumah)</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Berangkat pagi pulang siang/sore untuk siswa sekitar Kertosono/Nganjuk.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Data Orang Tua / Wali */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nama Orang Tua / Wali Santri <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Ayah / Ibu / Wali"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nomor WhatsApp Orang Tua / Wali <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08xxxxxxxxxx (Untuk notifikasi hasil seleksi)"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alamat Lengkap Tempat Tinggal <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Dusun, RT/RW, Desa/Kelurahan, Kecamatan, Kabupaten, Provinsi"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-sky-50/40 border border-sky-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  <div className="p-3.5 bg-sky-50/40 rounded-xl border border-sky-100 text-[11px] text-slate-600 space-y-1">
                    <p className="font-bold text-slate-800">Pernyataan Kejujuran Data:</p>
                    <p>Saya menyatakan bahwa seluruh data yang diisikan dalam formulir ini adalah benar dan dapat dipertanggungjawabkan.</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="cursor-pointer px-4 py-2 text-xs font-bold text-slate-600 hover:bg-sky-50 rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  className="cursor-pointer px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Kirim Pendaftaran' : 'Lanjutkan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          ) : (
            /* STEP 4: Success & Printable Registration Card */
            registeredData && (
              <div className="space-y-6 animate-in zoom-in-95 duration-300">
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-sky-100 text-sky-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Pendaftaran Berhasil Disimpan!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Selamat, berkas formulir online calon siswa MA Miftahul 'Ula telah masuk ke sistem sekretariat PPDB.
                  </p>
                </div>

                {/* Printable Registration Card Element */}
                <div 
                  id="printable-registration-card"
                  className="bg-white border-2 border-sky-700 rounded-2xl p-6 sm:p-7 shadow-md relative overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="border-b-2 border-sky-700 pb-4 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <SchoolLogo className="w-12 h-12 shrink-0 drop-shadow-md" />
                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold uppercase text-slate-900">
                          {SCHOOL_INFO.fullName}
                        </h4>
                        <p className="text-[11px] text-slate-600">
                          Mentaos, Nglawak, Kertosono, Nganjuk 64351 • Telp: {SCHOOL_INFO.contact.phone}
                        </p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] font-bold text-sky-800 uppercase block">Kartu Bukti</span>
                      <span className="text-xs font-bold text-slate-900">PPDB {PPDB_INFO.academicYear}</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="space-y-2">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">NOMOR REGISTRASI RESMI</span>
                        <span className="text-base font-mono font-extrabold text-sky-800 tracking-wider">
                          {registeredData.regNumber}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">NAMA CALON SISWA</span>
                        <span className="font-bold text-slate-900 text-sm">{registeredData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">NISN / ASAL SEKOLAH</span>
                        <span>{registeredData.nisn} • {registeredData.previousSchool}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">STATUS ASRAMA</span>
                        <span className="font-medium text-slate-800">{registeredData.residence}</span>
                      </div>
                    </div>

                    <div className="space-y-2 sm:border-l sm:border-sky-100 sm:pl-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">PEMINATAN / JURUSAN</span>
                        <span className="font-bold text-sky-900">{registeredData.major}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">JALUR SELEKSI</span>
                        <span className="capitalize font-semibold text-slate-800">{registeredData.track}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">TANGGAL PENDAFTARAN</span>
                        <span>{registeredData.registeredAt}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block font-semibold">STATUS VERIFIKASI</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                          {registeredData.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Stamp / Barcode */}
                  <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-8 h-8 text-slate-700" />
                      <div>
                        <p className="font-mono text-[10px] text-slate-400">Verifikasi Digital Sistem</p>
                        <p className="font-semibold text-slate-800">Panitia PPDB MA Miftahul 'Ula</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="italic text-[10px]">Simpan kartu ini sebagai bukti verifikasi berkas.</p>
                    </div>
                  </div>
                </div>

                {/* Print and Next Steps Action */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="cursor-pointer w-full sm:flex-1 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak Kartu Pendaftaran (Print/PDF)</span>
                  </button>

                  <a
                    href={`https://wa.me/${SCHOOL_INFO.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Assalamu’alaikum Wr. Wb. Panitia PPDB MA Miftahul Ula, saya sudah mendaftar online dengan Nomor Registrasi: ${registeredData.regNumber} atas nama ${registeredData.fullName}. Mohon informasi tahapan verifikasi selanjutnya.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 px-4 bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-300 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <span>Konfirmasi ke WhatsApp Panitia</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={resetForm}
                    className="cursor-pointer text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    Daftarkan Siswa Lainnya
                  </button>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </div>
  );
};
