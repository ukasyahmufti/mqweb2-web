import React from 'react';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import mosqueHeroBg from '../assets/images/mosque_hero_bg_1779687297798.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const textFloatVariants = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-b from-[#2c060b] via-[#410b13] to-[#2c060b] overflow-hidden pt-28 pb-16 px-6 lg:px-12"
    >
      {/* Grand Mosque Background and Overlay for Seamless, Elegant Transition */}
      <div className="absolute inset-0 z-0">
        <img
          src={mosqueHeroBg}
          alt="Mosque Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top opacity-[0.24] pointer-events-none mix-blend-screen scale-105"
        />
        {/* Elegant Linear Mask for a Seamless Fade into the Maroon Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c060b]/30 via-[#410b13]/80 to-[#2c060b] z-10" />
      </div>

      {/* Decorative Arabic Word Backdrop */}
      <div className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-arabic text-[clamp(12rem,22vw,28rem)] text-gold-400/[0.03] select-none pointer-events-none direction-rtl z-0">
        القرآن
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Opened badge */}
          <motion.div variants={itemVariants} className="inline-flex self-start">
            <span className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              DIBUKA: Pemberangkatan 2026/2027
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-white font-serif text-[clamp(2.5rem,5.5vw,4.2rem)] font-extrabold leading-[1.05] tracking-tight mb-4"
          >
            BELAJAR KE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400 italic">
              AL-AZHAR CAIRO?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-serif italic text-gold-400/90 text-xl lg:text-2xl font-medium tracking-wide mb-5"
          >
            DI MARKAZ QUR'AN — InsyaAllah bisa
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/70 font-sans text-base lg:text-lg leading-relaxed max-w-xl mb-6"
          >
            Program Studi Timur Tengah terpercaya. Kami adalah mediator resmi terdaftar Kemenkumham & Kemenag RI yang telah memberangkatkan ratusan pelajar ke Mahad Al-Azhar Kairo Mesir.
          </motion.p>

          <motion.div variants={itemVariants} className="inline-flex self-start">
            <span className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 text-[#6effc0] text-xs lg:text-sm font-semibold px-4 py-2 rounded-lg mb-8">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              Pendidikan GRATIS di Al-Azhar Kairo
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#register"
              onClick={(e) => handleScrollTo(e, '#register')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/35 hover:-translate-y-1 transition-all duration-300"
            >
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, '#about')}
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-gold-400 bg-white/5 hover:bg-gold-400/10 text-white hover:text-gold-400 font-bold text-base px-7 py-3.5 rounded-full backdrop-blur-md transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </a>
          </motion.div>

          {/* Real-time stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
          >
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-extrabold text-gold-400">500+</div>
              <div className="text-[0.63rem] font-semibold text-white/55 uppercase tracking-widest mt-1">Alumni ke Mesir</div>
            </div>
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-extrabold text-gold-400">10+</div>
              <div className="text-[0.63rem] font-semibold text-white/55 uppercase tracking-widest mt-1">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="font-serif text-3xl lg:text-4xl font-extrabold text-gold-400">100%</div>
              <div className="text-[0.63rem] font-semibold text-white/55 uppercase tracking-widest mt-1">Jaminan Berangkat</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column Interactive Visual Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Floating Card */}
          <motion.div
            variants={textFloatVariants}
            animate="animate"
            className="absolute top-4 -right-4 z-25 glass-card-heavy px-5 py-4 text-center shadow-2xl min-w-[140px]"
          >
            <div className="font-serif text-xl font-bold text-gold-400">GRATIS</div>
            <div className="text-[0.6rem] font-bold text-white/60 uppercase tracking-widest mt-1">Biaya Sekolah</div>
          </motion.div>

          {/* Main Rounded Image wrapped beautifully */}
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 group">
            <img
              src="https://studitimurtengah.com/wp-content/uploads/2024/10/Untitled-design-11-1536x1536__1_-removebg-preview.webp"
              alt="Mahad Al-Azhar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay to isolate card footer badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c060b] via-transparent to-transparent opacity-90 z-10" />

            {/* Subtle light reflect effect */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Custom Interactive Badge Inside Card */}
            <div className="absolute bottom-6 left-6 right-6 z-30 bg-[#2c060b]/85 hover:bg-[#2c060b]/100 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center gap-4 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-xl flex-shrink-0 shadow-inner">
                🕌
              </div>
              <div>
                <strong className="block text-white text-base font-bold">Mahad Bu'uts Al-Islamiyyah</strong>
                <span className="text-[0.75rem] text-gold-400/80 font-medium">Al-Azhar Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
