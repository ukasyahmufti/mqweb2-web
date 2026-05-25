import React, { useState } from 'react';
import { Send, PhoneCall, HelpCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    schoolOrigin: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, phone, schoolOrigin } = formData;
    if (!fullName.trim() || !phone.trim()) {
      setErrorMsg('Mohon isi nama lengkap dan nomor HP terlebih dahulu.');
      return;
    }

    setShowSuccess(true);

    const formattedMessage = `Assalamualaikum, saya *${fullName.trim()}* dari *${
      schoolOrigin.trim() || 'tidak disebutkan'
    }* ingin mendaftar ke program Mahad Al-Azhar. Nomor HP saya: ${phone.trim()}`;

    // Direct redirection via WhatsApp API link compiling
    setTimeout(() => {
      window.open(
        `https://wa.me/6281367816714?text=${encodeURIComponent(formattedMessage)}`,
        '_blank'
      );
      setShowSuccess(false);
      setFormData({ fullName: '', phone: '', schoolOrigin: '' });
    }, 1500);
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-b from-[#2c060b] via-[#410b13] to-[#2c060b] relative overflow-hidden text-center text-white">
      {/* Background radial overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
        <span className="font-serif text-lg text-gold-400 font-bold tracking-wide block mb-3">
          مركز القرآن ابن الجزري
        </span>
        <h3 className="font-serif text-3xl lg:text-[2.6rem] font-black leading-tight mb-4">
          AYO BERGABUNG DAN <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
            WUJUDKAN IMPIAN
          </span> <br />
          STUDI KE TIMUR TENGAH
        </h3>
        <p className="text-white/70 max-w-xl mx-auto text-sm lg:text-base mb-12 leading-relaxed font-sans">
          Silakan isi formulir di bawah ini untuk mendapatkan informasi konseling lebih lanjut terkait pendaftaran, atau langsung hubungi kantor perwakilan kami via WhatsApp.
        </p>

        {/* Dynamic Registration Form Card */}
        <div className="relative max-w-lg mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-left shadow-2xl mb-12">
          
          <AnimatePresence>
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-[#2c060b]/95 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center text-center p-8 z-20 border border-white/20"
              >
                <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400 flex items-center justify-center text-gold-400 mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold mb-2 text-white">Menghubungkan ke WhatsApp...</h4>
                <p className="text-white/60 text-xs max-w-xs">
                  Sistem sedang memproses formulir pendaftaran Anda & bersiap melayangkan pesan langsung ke Admin perwakilan Markaz Qur'an.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-[0.72rem] font-bold tracking-wider uppercase text-white/70">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap Anda sesuai KTP/Ijazah"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.72rem] font-bold tracking-wider uppercase text-white/70">
                Nomor HP / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+62 8xx xxxx xxxx"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.72rem] font-bold tracking-wider uppercase text-white/70">
                Asal Sekolah / Pesantren
              </label>
              <input
                type="text"
                name="schoolOrigin"
                value={formData.schoolOrigin}
                onChange={handleInputChange}
                placeholder="SMP/SMA/Pesantren asal Anda"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-white/30 font-sans text-sm focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-all duration-300"
              />
            </div>

            {errorMsg && (
              <p className="text-rose-400 text-xs font-semibold">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-maroon-950 font-extrabold text-base py-4 rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/35 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Kirim Pendaftaran via WhatsApp</span>
              <Send className="w-4 h-4 ml-1" />
            </button>
          </form>
        </div>

        {/* Alternative Hotlines */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/6281367816714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/15 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hotline Perwakilan Utama</span>
          </a>
          <a
            href="https://wa.me/6285727115909"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-gold-400/5 transition-all duration-300 hover:-translate-y-1"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Konsultasi Gratis Alternatif</span>
          </a>
        </div>

      </div>
    </section>
  );
}
