import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { comparisonData } from '../data';

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-[#2c060b] relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-400 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-200 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Perbandingan
          </span>
          <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight mb-4">
            Markaz Qur'an <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
              vs Mediator Lain
            </span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full mx-auto" />
        </div>

        {/* Side by side columns layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Markaz Qur'an Elite credentials - Amber Frosted Glass card */}
          <div className="bg-gradient-to-b from-amber-500/10 via-[#2c060b]/50 to-[#410b13]/80 backdrop-blur-xl border-b md:border-b-0 md:border-r border-white/10 p-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-4 rounded-2xl mb-8 shadow-inner shadow-black/10">
              <div className="w-10 h-10 rounded-full bg-[#2c060b] flex items-center justify-center text-xl flex-shrink-0">
                🕌
              </div>
              <strong className="text-maroon-950 text-base font-extrabold tracking-wide">
                Markaz Qur'an
              </strong>
            </div>

            <ul className="space-y-5">
              {comparisonData.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white/90 font-sans text-sm font-semibold">
                  <div className="w-6 h-6 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#6effc0]" />
                  </div>
                  <span>{item.feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standard competitors - Neutral Frosted Glass card */}
          <div className="bg-white/[0.02] backdrop-blur-md p-8">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                ❓
              </div>
              <strong className="text-white/80 text-lg font-bold font-sans">
                Mediator Lain
              </strong>
            </div>

            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Tidak terdaftar Resmi di Kemenkumham</span>
              </li>
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Belum memiliki Rekomendasi Kemenag RI</span>
              </li>
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Estimasi biaya tinggi & kurang transparan</span>
              </li>
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Siswa wajib mengurus pemberkasan & legalisir sendiri</span>
              </li>
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Peserta berangkat tanpa kepastian kuota</span>
              </li>
              <li className="flex items-center gap-4 text-white/45 font-sans text-sm">
                <div className="w-6 h-6 rounded-full bg-rose-950/30 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-rose-400" />
                </div>
                <span>Tanpa dampingan pengawalan terbang s.d Kairo</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
