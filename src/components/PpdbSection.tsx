import React from 'react';
import { PPDB_INFO } from '../data/schoolData';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  BadgeCheck,
  CreditCard
} from 'lucide-react';

interface PpdbSectionProps {
  onOpenPpdbModal: () => void;
  onOpenCheckStatusModal: () => void;
  onOpenBrochureModal: () => void;
}

export const PpdbSection: React.FC<PpdbSectionProps> = ({
  onOpenPpdbModal,
  onOpenCheckStatusModal,
  onOpenBrochureModal,
}) => {
  return (
    <section id="ppdb" className="py-16 sm:py-24 bg-sky-50/50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3.5 py-1.5 rounded-full border border-sky-200">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
            <span>Penerimaan Peserta Didik Baru</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            PPDB MA Miftahul 'Ula Tahun Ajaran {PPDB_INFO.academicYear}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Bergabunglah bersama keluarga besar MA Miftahul 'Ula Nglawak Kertosono. 
            Tersedia kuota santri mukim berasrama maupun laju dengan beasiswa prestasi & tahfidz Al-Qur'an.
          </p>
        </div>

        {/* GRID 1: Gelombang & Jadwal Pendaftaran (3-Column Grid) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Tahapan Pendaftaran</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Gelombang Seleksi Calon Santri
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Pendaftaran gelombang awal berkesempatan memperoleh diskon infak gedung dan prioritas kamar asrama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PPDB_INFO.phases.map((phase, idx) => {
              const isCurrent = phase.status.includes('Sedang');
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-400/30'
                      : 'bg-white/80 border-sky-100 opacity-90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${
                        isCurrent ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        Tahap {idx + 1}
                      </span>
                      <span className={`text-xs font-semibold ${isCurrent ? 'text-sky-700 font-bold' : 'text-slate-500'}`}>
                        {phase.status}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {phase.name}
                    </h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{phase.period}</span>
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                      <strong className="text-sky-900 block mb-0.5">Keuntungan:</strong>
                      {phase.benefits}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-sky-50">
                    {isCurrent ? (
                      <button
                        onClick={onOpenPpdbModal}
                        className="cursor-pointer w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <span>Daftar Gelombang Ini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="text-center text-xs text-slate-400 font-medium py-1.5">
                        Pendaftaran Mendatang
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GRID 2: 4 Pilihan Jalur Seleksi Masuk (4-Column Grid) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-md mb-2">
                <Award className="w-3.5 h-3.5 text-sky-600" />
                <span>Peluang & Kualifikasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Pilihan Jalur Masuk Seleksi Santri
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Pilih jalur yang paling sesuai dengan portofolio, minat, dan prestasi calon santri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PPDB_INFO.tracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-sky-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Kuota: {track.quota}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                    {track.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sky-50">
                  <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-100 text-[11px] text-sky-900">
                    <span className="font-bold block">Apresiasi Khusus:</span>
                    <span>{track.reward}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GRID 3: Dokumen Syarat & 4 Langkah Alur Pendaftaran (2-Column Bento Grid) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Persyaratan Berkas Fisik (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-sky-800">
                <FileCheck className="w-5 h-5 text-sky-600" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Persyaratan Dokumen Berkas
                </h4>
              </div>
              <p className="text-xs text-slate-500">
                Diserahkan saat verifikasi berkas langsung di madrasah atau saat santri masuk asrama:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PPDB_INFO.requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 Langkah Alur Pendaftaran (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sky-800">
                <BadgeCheck className="w-5 h-5 text-sky-600" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Alur 4 Langkah Pendaftaran Santri Baru
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-100">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs mb-2">1</div>
                  <h5 className="text-xs font-bold text-slate-900">Formulir Online</h5>
                  <p className="text-xs text-slate-600 mt-1">Klik 'Daftar PPDB', masukkan identitas dan dapatkan Bukti Registrasi.</p>
                </div>

                <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-100">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs mb-2">2</div>
                  <h5 className="text-xs font-bold text-slate-900">Verifikasi & Tes</h5>
                  <p className="text-xs text-slate-600 mt-1">Verifikasi berkas, tes baca Al-Qur'an, dan wawancara minat santri.</p>
                </div>

                <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-100">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs mb-2">3</div>
                  <h5 className="text-xs font-bold text-slate-900">Pengumuman Kelulusan</h5>
                  <p className="text-xs text-slate-600 mt-1">Cek hasil status seleksi online lewat portal website ini.</p>
                </div>

                <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-100">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs mb-2">4</div>
                  <h5 className="text-xs font-bold text-slate-900">Daftar Ulang & Matsama</h5>
                  <p className="text-xs text-slate-600 mt-1">Pengambilan seragam, penempatan asrama, dan masa ta'aruf madrasah.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* GRID 4: Transparansi Biaya & Estimasi Pembiayaan (2-Column Grid) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Table (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-sky-800">
                <CreditCard className="w-5 h-5 text-sky-600" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Tabel Rincian Biaya Pendidikan ({PPDB_INFO.academicYear})
                </h4>
              </div>
              <p className="text-xs text-slate-500">
                Biaya transparan, terjangkau, dan dapat diangsur sesuai kesepakatan wali santri.
              </p>

              <div className="overflow-x-auto border border-sky-100 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-sky-50 text-slate-800 font-bold border-b border-sky-100">
                    <tr>
                      <th className="py-3 px-4">Komponen Pembiayaan</th>
                      <th className="py-3 px-4">Nominal</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-50 text-slate-600">
                    {PPDB_INFO.fees.map((f, fIdx) => (
                      <tr key={fIdx} className="hover:bg-sky-50/50">
                        <td className="py-3 px-4 font-medium text-slate-900">{f.item}</td>
                        <td className="py-3 px-4 font-bold text-sky-700">{f.cost}</td>
                        <td className="py-3 px-4 text-xs text-slate-500 hidden sm:table-cell">{f.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Beasiswa & Kemudahan Pembiayaan (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 bg-sky-50 rounded-2xl border border-sky-200 text-xs text-sky-950 space-y-3">
                <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Kebijakan Beasiswa & Keringanan</span>
                </div>
                <p className="leading-relaxed">
                  Bagi santri berprestasi tingkat kabupaten/provinsi/nasional, penghafal Al-Qur'an 3 Juz mutqin, 
                  maupun santri dari keluarga prasejahtera (jalur afirmasi / yatim dhuafa), 
                  madrasah menyediakan subsidi keringanan hingga <strong>pembebasan biaya 100%</strong>.
                </p>
                <div className="pt-2 border-t border-sky-200 text-sky-800 text-[11px] space-y-1">
                  <p>✓ Dapat dicicil 3 kali pembayaran</p>
                  <p>✓ Tanpa bunga dan tanpa biaya tersembunyi</p>
                  <p>✓ Konsultasi langsung dengan Panitia Keuangan</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-sky-100 text-xs text-slate-600">
                <p className="font-bold text-slate-900 mb-1">Butuh Rekomendasi atau Konsultasi?</p>
                <p>Silakan hubungi sekretariat PPDB di kantor madrasah atau hubungi narahubung panitia melalui WhatsApp.</p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Banner Bar in Light Blue Tone */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">Siap Bergabung dengan MA Miftahul 'Ula?</h4>
            <p className="text-xs sm:text-sm text-sky-100">
              Isi formulir online sekarang dalam 3 menit atau hubungi panitia untuk informasi lebih lanjut.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenPpdbModal}
              className="cursor-pointer bg-white hover:bg-sky-50 text-sky-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm transition-colors shadow"
            >
              Isi Formulir Online
            </button>
            <button
              onClick={onOpenCheckStatusModal}
              className="cursor-pointer bg-sky-800 hover:bg-sky-900 text-white font-semibold px-4 py-3 rounded-xl text-xs sm:text-sm border border-sky-400/40 transition-colors"
            >
              Cek Status Berkas
            </button>
            <button
              onClick={onOpenBrochureModal}
              className="cursor-pointer bg-sky-950/80 hover:bg-black text-sky-200 font-semibold px-4 py-3 rounded-xl text-xs sm:text-sm border border-sky-700 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-sky-300" />
              <span>Unduh Brosur</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
