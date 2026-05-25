import { motion } from 'motion/react';
import { programsData } from '../data';

export default function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-[#2c060b] to-[#410b13] relative overflow-hidden">
      {/* Visual Ambient Light Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="text-left">
            <span className="text-gold-400 font-sans text-xs font-bold tracking-widest uppercase mb-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
              Jenjang Pendidikan
            </span>
            <h3 className="font-serif text-3xl lg:text-4.5xl font-extrabold text-white leading-tight">
              3 Jenjang <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-100 to-gold-400">
                Program Al-Azhar
              </span>
            </h3>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full md:mb-4" />
        </div>

        {/* Programs Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {programsData.map((prog, idx) => (
            <motion.div
              key={prog.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-heavy rounded-3xl p-8 relative overflow-hidden group hover:bg-white/[0.04] transition-all duration-300"
            >
              {/* Dynamic top-edge gold shine line on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-500 to-gold-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              {/* Huge faded backdrop number */}
              <div className="font-serif text-7xl font-black text-gold-400/[0.08] absolute top-6 right-6 select-none pointer-events-none group-hover:text-gold-400/[0.12] transition-colors duration-300 leading-none">
                {prog.num}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/25 flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:bg-gold-400/20 transition-colors">
                {prog.icon}
              </div>

              {/* Title */}
              <h4 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                {prog.title}
              </h4>

              {/* Description */}
              <p className="text-white/65 font-sans text-sm leading-relaxed mb-6">
                {prog.description}
              </p>

              {/* Badge */}
              <span className="inline-block bg-emerald-950/40 border border-[#22603f]/45 text-[#6effc0] font-sans text-xs font-semibold tracking-wider px-3.5 py-1.5 rounded-full mt-auto">
                {prog.ageBadge}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
